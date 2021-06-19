const express = require('express');
const fs = require('fs');
const server = express();


server.use(express.urlencoded({extended: false}))

server.get('/',(req,res)=>{
  const form =  `
<div  style="width: 300px;">
    <form action="/send" method="POST" style="width: 100%;">
        <input type="text" name="send">

        <button type="submit">click me</button>
    </form>
</div>`;

res.send(form)
});

server.post('/send',(req,res)=>{
  
  
    res.send('ok')
    console.log(req.body);
    const data  = req.body.send
    console.log( data.send );
    fs.appendFile('result.txt', data , err => {
        if (err) {
          console.error(err)
          return
        }
        
      })
    
})



server.listen(8000);