const express=require('express');
const User = require('../modals/userdata');
const otpAuth = require('../controller/otpAuth');
const otp = require('../controller/otp');
const path = require('path');
const route=express.Router();
route
.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'../../public/html/index.html'));
})
.get('/index',(req,res)=>{
    res.sendFile(path.join(__dirname,'../../public/html/index.html'));
})
.get('/signup',(req,res)=>{
    res.sendFile(path.join(__dirname,'../../public/html/signup.html'));
})
.get('/login',(req,res)=>{
    res.sendFile(path.join(__dirname,'../../public/html/login.html'));
})
.get('/otp',(req,res)=>{
    res.sendFile(path.join(__dirname,'../../public/html/otp.html'));
})
.post('/signup',otpAuth)
.post('/otp',otp.userTypedOTP)

module.exports={route};