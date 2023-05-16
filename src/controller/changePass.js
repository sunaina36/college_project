const userData = require('../modals/userdata')
let changepass = async function(req,res){
    if(req.user.password===req.body.oldPassword){
        if(req.body.newPassword===req.body.confirmPassword){
            await userData.User.findOneAndUpdate({email:req.user.email},{password:req.body.newPassword,},{new:true});
            console.log(req.user.email);
            console.log(req.body.newPassword);
            res.redirect('/login');
        }
        else{
            req.flash('change',"Password don't match with Confirm Password");
            res.redirect('/dashboard');
        }
    }
    else{
        req.flash('change','Current Password is wrong');
        res.redirect('/dashboard');
    }
}
module.exports=changepass;