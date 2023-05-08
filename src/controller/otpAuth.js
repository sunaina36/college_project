const email = require("./Email");
const User = require('../modals/userdata');
const path = require('path');
const user={};
// const Users=require('./user');
var OTP;
function generateOtp() {
  let digit = "0123456789";
  let OTP = "";
  for (let i = 0; i < 6; i++) {
    OTP += digit[Math.floor(Math.random() * 10)];
  }
  return OTP;
}
var userOtp;
let userTypeOtp = (req, res) => {
     userOtp = req.body.otp;
    checkotp();
};
// let jai = (req,res)=>{
  
// }

let authen = function (name, userEmail) {
  OTP = generateOtp();
  email.send(name, userEmail,OTP);
};

let usersD=(req,res)=>{

    user.firstName=req.body.firstName;
    user.lastName=req.body.lastName;
    user.phoneNumber=req.body.phoneNumber;
    user.email=req.body.email;
    user.aadharNumber=req.body.aadharNumber;
    user.panNumber=req.body.panNumber;
    user.DOB=req.body.dateOfBirth;
    authen(user.firstName,user.email);
    res.sendFile(path.join(__dirname,'../../public/html/otp.html'))
}
function checkotp(){
  if(userOtp==OTP){
      // Users.userDetail();
      try{
      
        const userdata= new User({
            firstName:user.firstName,
            lastName:user.lastName,
            phoneNumber:user.phoneNumber,
            email:user.email,
            aadharNumber:user.aadharNumber,
            panNumber:user.panNumber,
            DOB:user.DOB
        });
        userdata.save();
      
    }catch(error){
        console.log(error);
    }
  }
  else{
      console.log("wrong");
  }
}

module.exports = { userTypeOtp,usersD };
