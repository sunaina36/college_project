const userData = require('../modals/userdata');
const Email = require('./Email');
const otp = require('../controller/otp');
let otherUser;
let yourAccount;
let transferamt;
let userExist;
let searchUser = async function(req,res){
    if(req.user.balance-req.body.transferAmount>=0){
       await userData.User.findOne({accountNumber:req.body.accountNumber}).then((user)=>{
                    if(user){
                        otherUser = user;
                        // console.log(user);
                        yourAccount=req.user;
                        transferamt=req.body.transferAmount;
                        var OTP = otp.generateOTP();
                    otp.getGeneratedotp(OTP);
                    Email.send(
                        req.user.firstName,
                        req.user.email,
                        OTP
                      );
                      res.redirect('/transactionOtp');
                    }
                    else{
                        console.log('account dont exist')
                        req.flash("error", "Account Does Not exist");
                        res.redirect('/dashboard');
                    }
                    
                })
    }
    else{
        console.log('insufficient balance');
        req.flash("error","Insufficient Balance");
        res.redirect('/dashboard');
    }
}
// let searchUser = async function(account,your,transferAmount){
//    await userData.User.findOne({accountNumber:account}).then((user)=>{
//         if(user){
//             otherUser = user;
//             console.log(user);
//             yourAccount=your;
//             transferamt=transferAmount;
//             userExist= true;
//             var OTP = otp.generateOTP();
//         otp.getGeneratedotp(OTP);
//         Email.send(
//             yourAccount.firstName,
//             yourAccount.email,
//             OTP
//           );
//         }
//         else{
//             console.log('account dont exist')
//             req.flash("Nouser", "Account Not exit");
//         }
        
//     })
// }

let transfferMoney = async function(){
   let transferDoneby = {name:yourAccount.firstName+yourAccount.secondName,account:yourAccount.accountNumber,transferDate: new Date(),amount:transferamt,status:"credited"};
   let transferDoneOn ={name:otherUser.firstName+otherUser.secondName,account:otherUser.accountNumber,transferDate: new Date(),amount:transferamt,status:"debited"};
   await userData.User.findOneAndUpdate({accountNumber:otherUser.accountNumber},{'$inc':{'balance':transferamt},'$push':{'transaction':transferDoneby}});
    await userData.User.findOneAndUpdate({accountNumber:yourAccount.accountNumber},{'$inc':{'balance':-transferamt},'$push':{'transaction':transferDoneOn}});
    Email.sendtransferDetail(otherUser,transferDoneby);
    Email.sendtransferDetail(yourAccount,transferDoneOn);
}
module.exports ={searchUser,transfferMoney};