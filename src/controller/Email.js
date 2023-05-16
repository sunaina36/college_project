const nodemailer = require("nodemailer");
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "pay4u.onlinebank@gmail.com",
    pass: "jdsuxvpzgtlicuru",
  },
});


let send=function(name,email,OTP){

  var mailOption = {
    from: "pay4u.onlinebank@gmail.com",
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
    from: "pay4u.onlinebank@gmail.com",
    to: us.email,
    subject: "Thank You For choosing Pay4U",
    text:`welcome ${us.firstName},
Thank you for choosing Pay4U Bank for 
banking needs.

Your Account number is ${us.accountNumber}
    
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

let sendtransferDetail = function(us,details){
  var mailOption = {
    from: "pay4u.onlinebank@gmail.com",
    to: us.email,
    subject: "Thank You For choosing Pay4U",
    text:`Dear ${us.firstName}
Thank you for banking with Pay4U Bank.
    
Your account number ${us.accountNumber} is ${details.status} by INR ${details.amount} on ${details.transferDate.getDate()}/${('0'+(details.transferDate.getMonth()+1)).substr(-2)}/${details.transferDate.getFullYear()}  ${('0'+(details.transferDate.getHours())).substr(-2)}:${('0'+(details.transferDate.getMinutes())).substr(-2)}:${('0'+(details.transferDate.getHours())).substr(-2)}.

For clarification please contact Pay4U Customer Care  +91-9999999999,  or email pay4u.onlinebank@gmail.com

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

let contactForm=function(usEmail,usName,usSub,usMessage){

  var mailOption = {
    from: "pay4u.onlinebank@gmail.com",
    to: "pay4u.onlinebank@gmail.com",
    subject: usSub,
    text:`name: ${usName}
email: ${usEmail} 
Subject: ${usSub}
Message: ${usMessage}
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





module.exports={send,sendUserDetail,sendtransferDetail,contactForm};
// console.log(signup_page);
// button.onclick=function(){
//     send();
// }


