const express = require('express');
const multer = require('multer');
const fs = require('fs')
const path = require('path')
const router = express.Router();


const storage = multer.diskStorage({
    destination: './public/uploads/',
    filename:function(req, file, cb){
        const {name} = req.body;
      
        cb(null, name + '-' + Date.now());
    }
})

const upload = multer({ 
    storage: storage,
    dest: path.join(__dirname,'../public/uploads')
 });
 

router.post('/',upload.single('load'),(req,res)=>{
   
    console.log(req.file);
    res.json({status:'ok'})
   
});

module.exports = router;
