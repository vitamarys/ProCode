const express = require('express');
const multer = require('multer');
const fs = require('fs');
const path = require('path');
const router = express.Router();
const change = require('../modules/change.js')


const storage = multer.diskStorage({
    destination: './public/uploads/',
    filename:(req, file, cb)=>{
        const {name} = req.body;
      
        cb(null, name + '-' + Date.now() + path.extname(file.originalname) );
        
    }
   
})



const upload = multer({ 
    storage: storage,
    dest: path.join(__dirname,'../public/uploads')
 });
 

router.post('/',upload.single('load'), async (req,res)=>{
    console.log(req.file);
    res.json({status:'ok'})
    await change(req.file);

   
});


module.exports = router;