const express=require('express');
const User = require('../modals/userdata');
const otpAuth = require('../controller/otpAuth');
const otp = require('../controller/otp');
const path = require('path');
const flash = require('connect-flash');
const passport = require('passport');
const loginAuth=require('../controller/loginAuth');
const route=express.Router();
// passportInitialization(passport);
let loginUser={};
route
.get('/',(req,res)=>{
    res.render('index');
})
.get('/index',(req,res)=>{
    res.render('index');
})
.get('/signup',(req,res)=>{
    res.render('signup',{ message:req.flash('message')});
})
.get('/login',(req,res)=>{
    res.render('login',{messages:req.flash('error')});
})
.get('/otp',(req,res)=>{
    res.render('otp');
})
// .get('/dashboard',(req,res)=>{
//     res.render('dashboard.ejs');
// })
.get('/dashboard',loginAuth.isAuth,(req,res)=>{
    res.render('dashboard.ejs',{users:req.user});
})
.get('/test',loginAuth.isAuth,(req,res)=>{
    req.session.test?req.session.test++:req.session.test=1;
    res.send(req.session.test.toString()+" "+req.user.firstName);
})
.post('/signup',otpAuth)
.post('/otp',otp.userTypedOTP)
.post('/login',passport.authenticate('local',{
    successRedirect:'/dashboard',
    failureRedirect:'/login',
    failureFlash:true
}),function(req,res){})
.post('/logout',(req,res)=>{
    req.logout(function(err){
        if(err){
            return next(err);
        }
        res.redirect('/login');
    });
})



module.exports={route};