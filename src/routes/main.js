const express=require('express');
const fs = require('fs');
const Email = require('../controller/Email');
const UserData = require('../modals/userdata');
const userS = require('../controller/users');
const otpAuth = require('../controller/otpAuth');
const transactionToUser = require('../controller/transactionToUser');
const forgetpass= require('../controller/forgetPass');
const otp = require('../controller/otp');
const path = require('path');
// const flash = require('connect-flash');
const passport = require('passport');
const loginAuth=require('../controller/loginAuth');
// const imageFileToBase64 = require('../controller/ImageFileToBase64');
// const convertToBase64 = require('../controller/ImageFileToBase64');
// const uploadImage = require('../controller/multer');
const upload = require('../controller/multer');
const sharp = require('sharp');
const { error } = require('console');
const { runInNewContext } = require('vm');
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
    res.render('otp',{wrongOTP:req.flash('wrongOtp')});
})
// .get('/dashboard',(req,res)=>{
//     res.render('dashboard.ejs');
// })
.get('/dashboard',loginAuth.isAuth,(req,res)=>{
    res.render('dashboard.ejs',{users:req.user,error:req.flash('error')});
})
// .get('/test',loginAuth.isAuth,(req,res)=>{
//     req.session.test?req.session.test++:req.session.test=1;
//     res.send(req.session.test.toString()+" "+req.user.firstName);
// })
.get('/transactionOtp',(req,res)=>{
    res.render('transactionOtp',{wrongTransactionOtp:req.flash('wrongTransactionOtp')});
})
.get('/forgetpas',(req,res)=>{
    res.render('forgetPass',{wrongEmail:req.flash('wrongEmail')});
})
.get('/resetPass',(req,res)=>{
    res.render('resetPass',{error:req.flash('error')});
})
.get('/forgetPassOtp',(req,res)=>{
    res.render('forgetPassOtp',{wrongforgetOtp:req.flash('wrongforgetOtp')});
})
.post('/signup',otpAuth)
.post('/otp', async(req,res)=>{
    let userOTP = req.body.otp;
    console.log(otp.userTypedOTP(userOTP))
    if(otp.userTypedOTP(userOTP)){
        await userS.saveUserDetail();
         res.redirect('/login');
    }
    else{
        req.flash("wrongOtp", "Wrong OTP");
        res.redirect('/otp')
    }
    
         
})
.post('/transactionOtp',async (req,res)=>{
    let userOTP = req.body.otp;
    if(otp.userTypedOTP(userOTP)){
       await transactionToUser.transfferMoney();
       res.redirect('/dashboard');
    }
    else{
        req.flash('wrongTransactionOtp',"Wrong OTP");
        res.redirect('/transactionOtp');
    }
})
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
// .post('/upload',(req,res)=>{
//     // let base64 = convertToBase64(req.body.profileImage);
//     // console.log(base64);
//     // if(req.user.userImage.ContentType){
//     //     fs.unlinkSync(req.user.userImage.data.toString('utf-8'));
//     //     console.log(req.user.userImage.ContentType);
//     //     uploadImage(req,res,async(err)=>{
//     //         if(err){
//     //             console.log(err);
//     //         }
//     //         else{
//     //             console.log(req.file.path);
//     //             // imageFileToBase64(req.file.path);
//     //            await UserData.User.findOneAndUpdate({email:req.user.email},{userImage:{
//     //             data:fs.readFileSync(path.join(__dirname,'../../public/images/userImages/',req.file.filename)),
//     //                 ContentType: "image/png"
//     //             }},{new:true});
//     //         }
//     //         res.redirect('/dashboard');
//     //     })
//     // }else{
//         // console.log(req.user.userImage.ContentType);
//         // console.log(req.user.userImage.data.hex());
//         upload(req,res,async(err)=>{
//             if(err){
//                 console.log(err);
//             }
//             else{
//                 console.log(req.file.path);
//                 // imageFileToBase64(req.file.path);

//             }
//             res.redirect('/dashboard');
//         })
//     }
    
// )

.post('/upload',upload.single('profileImage'),async(req,res)=>{
    fs.access('./public/images/userImages',(error)=>{
        if(error){
            fs.mkdirSync("./public/images/userImages");
        }
    });
    const {buffer,originalname}=req.file;
    const ref = Date.now()+originalname;
    await sharp(buffer)
    .jpeg({quality:10})
    .resize(500, 500, {
        kernel: sharp.kernel.nearest,
        fit: 'cover',
        position: 'right top',
        background: { r: 255, g: 255, b: 255, alpha: 0.5 }
      })
    .toFile("./public/images/userImages/"+ref);
    await UserData.User.findOneAndUpdate({email:req.user.email},{userImage:{
        data:fs.readFileSync(path.join(__dirname,'../../public/images/userImages/',ref)),
        ContentType: "image/png"
    }},{new:true});
    // const link = `http://localhost:5550/static/images/userImages/${ref}`;
    // console.log(link);
    res.redirect('/dashboard');
})
.post('/moneyTransfer',transactionToUser.searchUser)
.post('/forgetPassOtp',forgetpass.forgetpassotp)
.post('/resetPass',forgetpass.resetpass)
.post('/forgetpas',forgetpass.forget)

module.exports={route};