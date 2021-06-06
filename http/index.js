  
const http = require('http');
const fs = require("fs");
const axios = require('axios');



http.createServer((req,res)=>{
   // 2 лвл
    // const stream = fs.createReadStream(__dirname + '/img.jpg');
    // stream.pipe(res);

    ///3 лвл
    axios.get('https://i.pinimg.com/originals/4b/ba/6f/4bba6f4d487a8029817f63ff9101911d.jpg', {responseType: "stream"} )  
    .then(res => {  
    
        res.data.pipe(fs.createWriteStream("todays_picture.jpg"));  
    })  
        .catch(error => {  
        console.log(error);  
    });
    const stream = fs.createReadStream(__dirname + '/todays_picture.jpg');
    stream.pipe(res);
    
}).listen(8000)