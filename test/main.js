const express = require('express');
const axios = require('axios');

const server = express();
const mainRoure = require('./routs/rout.js')
server.use('/', mainRoure)

server.listen(8000);

