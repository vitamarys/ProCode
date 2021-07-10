const express = require('express');
const axios = require('axios');
const router = express.Router();


const url ='https://swapi.dev/api/planets/9'

router.get('/', async(req,res)=>{
    const sw = await axios.get(url);
    res.send(sw.data);
});

module.exports = router;
