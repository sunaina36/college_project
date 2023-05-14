const express= require('express');
const server = express();
// const hbs = require('hbs');
// const ejs = require('ejs');
require('./dbcon/databaseConnection');
// const userData = require("../src/modals/userdata");
const routes = require('./routes/main');
const passport=require('passport')
const flash = require('connect-flash');;
const session = require('express-session');

const path = require('path');
const port= process.env.PORT;
const passportInitialization=require('../src/controller/loginAuth');
passportInitialization.initialize(passport);
server.use(express.json());
server.use(express.urlencoded({extended:false}));
server.use(flash());
server.use(session({
    secret:'secret',
    resave: false,
    saveUninitialized:false,
    // cookie: { secure: false }
    // store:new MongoStore({mongooseConnection:mongoose.connection})
}));
server.use(passport.initialize());
server.use(passport.session());


server.use('/static',express.static(path.join(__dirname,'../public')));

server.use('',routes.route);

// template engine
server.set('view engine','ejs');
server.set('views','view');

server.listen(port||5550,()=>{
    console.log('server started');
})