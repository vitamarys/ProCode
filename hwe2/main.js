const express = require('express');
const path = require('path');

const mainRoure = require('./routes/main.js')



const server  = express();

server.set('views', path.join(__dirname,'views'));
server.set('view engine', 'ejs')
server.use(express.static(path.join(__dirname,'public')));

server.get('/', mainRoure)

server.listen(8000);