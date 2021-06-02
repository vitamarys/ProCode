const http = require('http');
const fs = require("fs");
const axios = require('axios');
const url = 'https://api.unsplash.com/search/photos?query=minimal █';
http.createServer((req,res)=>{
    //запрос от браузера
    console.log(req.headers);
    //отправка файла на запрос
  
    console.log(`Запрошенный адрес: ${req.url}`);
    const filePath = req.url.substr(1);
    fs.readFile(filePath, function(error, data){
              
        if(error){
                  
            res.statusCode = 404;
            res.end("Resourse not found!");
        }   
        else{
            res.end(data);
        }
    });

    
}).listen(8000)

