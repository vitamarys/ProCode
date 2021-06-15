 
const path = require('path');
const  server = express();

server.get('/',(req, res)=>{
    res.send('hello')
})
server.get('/2',(req, res)=>{
    res.send('hello2')
})
server.get('/3',(req, res)=>{
    res.send(`<div style="background-color: red">qweqweqweqwqe</div>`)
})
server.get('/g',(req,res)=>{
    const filepath = path.join(__dirname, 'public/1.jpg');
    res.sendFile(filepath);
})

server.get('/blog/:id',(req,res)=>{
    const id = Number(req.params.id);

    const articles = [
        {id: 1, text:'asdasdasasd'},
        {id: 2, text:'asdasdasasd2'},
        {id: 3, text:'asdasdasasd3'}
        
    ]

    const needArt = articles.find(val => val.id === id);
    res.send(needArt.text);
})

server.listen(8000);