const UserData = require('../modals/userdata');
const otp = require('./otp');
const Email = require('./Email');

let forgetuser;
let forget = async (req,res)=>{
   await UserData.User.findOne({email:req.body.email}).then( (user)=>{
        if(user){
            forgetuser= user;
            var OTP = otp.generateOTP();
             otp.getGeneratedotp(OTP);
            Email.send(user.firstName,user.email,OTP);
            res.redirect('/forgetPassOtp');
        }
        else if(!user){
            req.flash('wrongEmail',"Email Not found");
            res.redirect('/forgetpas');
        }
    })
}

let forgetpassotp=(req,res)=>{
    let userOTP = req.body.otp;
    if(otp.userTypedOTP(userOTP)){
    //    await transactionToUser.transfferMoney();

       res.redirect('/resetPass');
    }
    else{
        req.flash('wrongforgetOtp',"Wrong OTP");
        res.redirect('/forgetPassOtp');
    }
}

let resetpass =async (req,res)=>{
    let Password = req.body.password;
    let confirmpassword = req.body.confirmpassword;
    if(Password===confirmpassword){
        await UserData.User.findOneAndUpdate({email:forgetuser.email},{password:Password},{new:true});
        res.redirect('/login');
    }
    else{
        req.flash('error',"Password and Confirm Password don't match");
        res.redirect('/resetPass');
    }
}


module.exports = {forget,forgetpassotp,resetpass};