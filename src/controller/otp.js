const users = require('./users');
let generateOTP = function(){
    var digits = '0123456789';
    let OTP = '';
    for (let i = 0; i < 6; i++ ) {
        OTP += digits[Math.floor(Math.random() * 10)];
    }
    return OTP;
}
var generatedotp;
let getGeneratedotp=function(OTP){
    generatedotp=OTP
}
var OTPStatus;
let userTypedOTP = async function(req,res){
    var userOTP = req.body.otp;
    if(userOTP===generatedotp){
        console.log('right');
         await users.saveUserDetail();
         res.redirect('/login');
    }
    else{
        console.log('wrong');
    }
}


module.exports={generateOTP,userTypedOTP,getGeneratedotp};
