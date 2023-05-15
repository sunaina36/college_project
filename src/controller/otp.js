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
    // console.log(generatedotp);
}
let userTypedOTP = function(userOTP){
    
    if(userOTP===generatedotp){
        console.log('right');
         return true;
    }
    else{
        console.log('wrong');
        return false;
    }
}


module.exports={generateOTP,userTypedOTP,getGeneratedotp};
