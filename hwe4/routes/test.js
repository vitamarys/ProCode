const express = require('express');
const multer = require('multer');
const fs = require('fs');
const path = require('path');
const router = express.Router();
// const change = require('../modules/change.js')

const url =`https://swapi.dev/api/planets/${id}`
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
 

// router.post('/',upload.single('load'), async (req,res)=>{
//     console.log(req.file);
//     console.log(req.body.name);
//     const id   = req.body.name
//     res.json({status:'ok'})
//     // await change(req.file);

   
// });
router.get('/', async(req,res)=>{
    const id   = await req.body.name;
    const sw = await axios.get(url);
    res.send(sw.data);
});

module.exports = router;