const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');


const server = express();

mongoose.connect(
    'mongodb+srv://tinderfake:tinderfake@cluster-tinder-y8rem.mongodb.net/tinderfake?retryWrites=true&w=majority', {
    useNewUrlParser: true
})

server.use(express.json());

server.use(routes);

server.listen(3333);