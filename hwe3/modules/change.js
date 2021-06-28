const express = require('express');
const sharp = require('sharp');
const fs = require('fs');
const path = require('path');


const change = async (file)=>{
    const { filename: image } = file;
    console.log('file',file);
    await sharp(file.path)
    
    
    .jpeg({ quality: 100 })
    .toFile(
        path.resolve(file.destination,'./orig', image)
    )
    await sharp(file.path)
       .resize(200, 200)
    .jpeg({ quality: 90 })
    .greyscale()
    .toFile(
        path.resolve(file.destination,'./resized', image)
    )
    await sharp(file.path)
   
    .toFormat('jpeg')
    .toFile(
        path.resolve(file.destination,'./format', image)
    )
    fs.unlinkSync(file.path)
}


module.exports = change;