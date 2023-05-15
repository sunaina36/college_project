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
                        req.flash("error", "Account Not exist");
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
   await userData.User.findOneAndUpdate({accountNumber:otherUser.accountNumber},{'$inc':{'balance':transferamt},'$push':{'transaction':{name:yourAccount.firstName+yourAccount.secondName,account:yourAccount.accountNumber,transferDate: new Date(),amount:transferamt,status:"credited",}}});
    await userData.User.findOneAndUpdate({accountNumber:yourAccount.accountNumber},{'$inc':{'balance':-transferamt},'$push':{'transaction':{name:otherUser.firstName+otherUser.secondName,account:otherUser.accountNumber,transferDate: new Date(),amount:transferamt,status:"debited",}}});
    // Email.sendtransferDetail(otherUser);
    // Email.sendtransferDetail(yourAccount);
}
module.exports ={searchUser,transfferMoney};