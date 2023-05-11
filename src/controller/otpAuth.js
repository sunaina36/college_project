// const userData=require('../modals/userdata');
const otp = require('./otp');
const Email = require('./Email');
const users = require('./users');



let usersD = function(req,res){
  
  users.user.firstName=req.body.firstName,
  users.user.DOB=req.body.dateOfBirth,
  users.user.phoneNumber=req.body.phoneNumber,
  users.user.email=req.body.email,
  users.user.aadharNumber=req.body.aadharNumber,
  users.user.panNumber=req.body.panNumber
  console.log(users.user);
  var OTP=otp.generateOTP();
  otp.getGeneratedotp(OTP);
  Email(users.user.firstName,users.user.email,OTP);
  res.redirect('/otp');
  
}

module.exports=usersD;

// try{
//   let userDetails = new userData({
//     firstName:req.body.firstName,
//   DOB:req.body.dateOfBirth,
//   phoneNumber:req.body.phoneNumber,
//   email:req.body.email,
//   aadharNumber:req.body.aadharNumber,
//   panNumber:req.body.panNumber
//   });
//   console.log(userDetails);
//   userDetails.save();
//   res.redirect('/login');
// }catch(error){
//   console.log(error);
// }