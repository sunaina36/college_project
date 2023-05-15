const nodemailer = require("nodemailer");
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "jaishankar.a1603@gmail.com",
    pass: "uvrvghdptgfytbxi",
  },
});


let send=function(name,email,OTP){

  var mailOption = {
    from: "jaishankar.a1603@gmail.com",
    to: email,
    subject: "PayForU One Time Password(OTP)",
    text: `hello ${name},

Greetings from PayForU!

your OTP to Signup in PayForU is: ${OTP}
    
Please DO NOT SHARE This with anyone
    
Regards,
    
PayForU Team
`
  };
    transporter.sendMail(mailOption, function(error, info){
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
        }
});
}

let sendUserDetail= function(us){
  var mailOption = {
    from: "jaishankar.a1603@gmail.com",
    to: email,
    subject: "PayForU One Time Password(OTP)", 
  };
  transporter.sendMail(mailOption, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
});
}
module.exports={send,sendUserDetail};
// console.log(signup_page);
// button.onclick=function(){
//     send();
// }


