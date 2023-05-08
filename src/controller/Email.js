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
    subject: "Sending Email using Node.js",
    text: `hello ${name} 
    your OTP is ${OTP}`
  };
    transporter.sendMail(mailOption, function(error, info){
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
        }
});
}
module.exports={send};
// console.log(signup_page);
// button.onclick=function(){
//     send();
// }


