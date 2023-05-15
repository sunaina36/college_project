const userData = require('../modals/userdata');
const Email = require('./Email');
const otp = require('../controller/otp');
let otherUser;
let yourAccount;
let transferamt;
let userExist;
let searchUser = async function(account,your,transferAmount){
   await userData.User.findOne({accountNumber:account}).then((user)=>{
        if(user){
            otherUser = user;
            console.log(user);
            yourAccount=your;
            transferamt=transferAmount;
            userExist= true;
            var OTP = otp.generateOTP();
        otp.getGeneratedotp(OTP);
        Email.send(
            yourAccount.firstName,
            yourAccount.email,
            OTP
          );
        }
        else{
            userExist=false;
        }
        
    })
    console.log('aaaa');
    return userExist;
}

let transfferMoney = async function(){
   await userData.User.findOneAndUpdate({accountNumber:otherUser.accountNumber},{'$inc':{'balance':transferamt},'$push':{'transaction':{name:yourAccount.firstName+yourAccount.secondName,account:yourAccount.accountNumber,transferDate: new Date(),amount:transferamt,status:"credited",}}});
    await userData.User.findOneAndUpdate({accountNumber:yourAccount.accountNumber},{'$inc':{'balance':-transferamt},'$push':{'transaction':{name:otherUser.firstName+otherUser.secondName,account:otherUser.accountNumber,transferDate: new Date(),amount:transferamt,status:"debited",}}});
    // Email.sendtransferDetail(otherUser);
    // Email.sendtransferDetail(yourAccount);
}
module.exports ={searchUser,transfferMoney};