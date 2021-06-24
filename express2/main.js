const express = require('express');

const path = require('path')

const server  = express();



const mainRoure = require('./routes/main.js')
const testRoure = require('./routes/test.js')




server.set('views', path.join(__dirname,'views'));
server.set('view engine', 'ejs');
server.use(express.static(path.join(__dirname,'public')));

server.use('/', mainRoure)
server.use('/test', testRoure)

server.listen(8000);
