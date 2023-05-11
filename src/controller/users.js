// const otp = require('./otp');
const userData = require('../modals/userdata');
let user={};

let saveUserDetail = async function(){
    try{
        let userDetails = new userData({
          firstName:user.firstName,
        DOB:user.DOB,
        phoneNumber:user.phoneNumber,
        email:user.email,
        aadharNumber:user.aadharNumber,
        panNumber:user.panNumber
        });
        console.log(userDetails);
        await userDetails.save();
        // res.redirect('/login');
      }catch(error){
        console.log(error);
      }
}

    



module.exports={user,saveUserDetail};