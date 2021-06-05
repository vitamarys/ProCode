const http = require('http');
const fs = require("fs");
const axios = require('axios');
const url = 'https://static.wikia.nocookie.net/shararam-smeshi/images/6/6e/%D0%A4%D0%BE%D0%BD_%C2%AB%D0%A4%D0%BB%D0%B0%D0%BC%D0%B8%D0%BD%D0%B3%D0%BE%C2%BB.png/revision/latest/scale-to-width-down/700?cb=20190308202249&path-prefix=ru';



http.createServer((req,res)=>{
    
    const stream = fs.createReadStream(__dirname + '/img.jpg');
    stream.pipe(res);
   
    
}).listen(8000)

