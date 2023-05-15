// const otp = require('./otp');
const Email = require('./Email');
const userData = require('../modals/userdata');
let user={};

let saveUserDetail = async function(){
    try{

        
       await userData.Account.findOneAndUpdate(
          {id:'autoval'},
          {'$inc':{'seq':1}},
          {new:true}
        ).then(async (us)=>{
          console.log(us);
        let AccountNumber;
        let debitNumber;
        let cvvNumber;
        let issue;
        let expiry;
          if(us==null){
            const newval = new userData.Account({id:'autoval',accountNumber:12345678,debitCardNumber:1234567891234567,seq:1});
           await newval.save();
            AccountNumber=(newval.accountNumber+newval.seq);
            debitNumber=(newval.debitCardNumber+newval.seq);
            cvvNumber = newval.seq;
            issue = new Date();
            expiry = new Date().setFullYear(new Date().getFullYear() + 10);
            console.log(AccountNumber);
            console.log(expiry);
          }
          else{
            AccountNumber=(us.accountNumber+us.seq);
            debitNumber=(us.debitCardNumber+us.seq);
            cvvNumber = us.seq;
            issue = new Date();
            expiry = new Date().setFullYear(new Date().getFullYear() + 10);
            console.log(AccountNumber);
            console.log(expiry);
          }


          let userDetails = new userData.User({
            firstName:user.firstName,
            secondName:user.secondName,
            DOB:user.DOB,
            gender:user.gender,
            phoneNumber:user.phoneNumber,
            email:user.email,
            aadharNumber:user.aadharNumber,
            panNumber:user.panNumber,
            password:user.password,
            accountNumber:AccountNumber,
            debitCardNumber:debitNumber,
            CVV:cvvNumber,
            issueDate: issue,
            expiryDate:expiry,
            });
            console.log(userDetails);
            console.log(userDetails);
            Email.sendUserDetail(userDetails)
            await userDetails.save();
        });
        // let basic;
        // userData.Account.findOne({id:'autoval'}).then((us)=>{
        //   console.log(us);
        //   if(us){
            
        //     // basic=us;
        //   }
        // });
        // console.log(basic);

        // let AccountNumber=(basic.accountNumber+basic.seq);
        // let debitNumber=(basic.debitCardNumber+basic.seq);
        // let cvvNumber = basic.seq;
        // let issue = new Date();
        // let expiry = new Date().setFullYear(new Date().getFullYear() + 10);

        
        // res.redirect('/login');
      }catch(error){
        console.log(error);
      }
}

    



module.exports={user,saveUserDetail};