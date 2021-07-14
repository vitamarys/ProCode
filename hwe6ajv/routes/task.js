const express = require('express');
const multer = require('multer');
const axios = require('axios');
const Ajv = require('ajv');
const addFormats = require("ajv-formats");

const router = express.Router();
const upload = multer();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/', upload.none(), (req, res) => {
  const { body } = req;
  console.log({ body });

  const ajv = new Ajv();
  addFormats(ajv);

  const schema = {
    type: 'object',
    properties: {
      body: { 
        type: 'object',
        properties: {
          inpId: { type: 'string', minLength: 1, maxLength: 120},
          inpFirstName: { type: 'string' },
          inpLastName: { type: 'string' },
          inpEmail: { type: 'string', format: "email" },
          inpGender: { type: 'string', pattern: "alien", pattern: "male", pattern: "female", },
          inpIpAdress: { type: 'string', format: "ipv4" }
        },
        additionalProperties: false
      }
    }
  };

  const validate = ajv.compile(schema);
  const valid = validate({ body });
  if (!valid) {
    console.log(validate.errors);
    res.json({ status: 'invalid data', payload: { error: validate.errors } });
    return;
  };

  res.json({ status: 'ok' });
});

module.exports = router;

