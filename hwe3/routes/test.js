const express = require('express');
const multer = require('multer');
const fs = require('fs');
const path = require('path');
const sharp = require('sharp');
const router = express.Router();


const storage = multer.diskStorage({
    destination: './public/uploads/',
    filename:function(req, file, cb){
        const {name} = req.body;
      
        cb(null, name + '-' + Date.now() + path.extname(file.originalname) );
        
    }
   
})

const upload = multer({ 
    storage: storage,
    dest: path.join(__dirname,'../public/uploads')
 });
 

router.post('/',upload.single('load'), async (req,res)=>{
    const { filename: image } = req.file;
    await sharp(req.file.path)
    
    
    .jpeg({ quality: 100 })
    .toFile(
        path.resolve(req.file.destination,'./orig', image)
    )
    await sharp(req.file.path)
       .resize(200, 200)
    .jpeg({ quality: 90 })
    .greyscale()
    .toFile(
        path.resolve(req.file.destination,'./resized', image)
    )
    await sharp(req.file.path)
   
    .toFormat('jpeg')
    .toFile(
        path.resolve(req.file.destination,'./format', image)
    )
    fs.unlinkSync(req.file.path)
    console.log(req.file);
    res.json({status:'ok'})
   
   
});


module.exports = router;
