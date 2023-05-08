const express= require('express');
const hbs = require('hbs');
require('./dbcon/databaseConnection');
const routes = require('./routes/main');
// const bodyParser=require('body-parser');
const path = require('path');
const port= process.env.PORT;
const server = express();
server.use(express.json());
server.use(express.urlencoded({extended:false}));
server.use('',routes.route);
server.use('/static',express.static(path.join(__dirname,'../public')));
// template engine

server.set('view engine','hbs');
server.set('views','view');

server.listen(port||5550,()=>{
    console.log('server started');
})