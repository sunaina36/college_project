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
    to: us.email,
    subject: "Thank You For choosing Pay4U",
    text:`welcome ${us.firstName},
    Thank you for choosing Pay4U Bank for 
    banking needs.

    Your Account number is 
    
    Login with your registered Email or Phone to access your account.

    Enjoy instant Banking anytime with Pay4U banking website.
    
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

let sendtransferDetail = function(us){
  var mailOption = {
    from: "jaishankar.a1603@gmail.com",
    to: us.email,
    subject: "Thank You For choosing Pay4U",
    text:`welcome ${us.firstName}
    Thank you for banking with Pay4U Bank.
    
    Your account number ***5319 is debited by INR 650.00 on 13-05-2023 02:02:29 PM IST on account of outward fund transfer.

    For clarification please contact Pay4U Customer Care  +91-9999999999,  or email jaishankar.a1603@gmail.com

    Regards,

    Pay4U Team
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


// name:
// email: 
// Subject: 
// Message: 





module.exports={send,sendUserDetail,sendtransferDetail};
// console.log(signup_page);
// button.onclick=function(){
//     send();
// }


