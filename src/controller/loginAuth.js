const LocalStrategy= require('passport-local').Strategy
const userData = require('../modals/userdata');
function initialize(passport){
    const authenticateUsers = async (email,password,done)=>{
       await userData.User.findOne({email:email}).then((user)=>{

        
        if(user==null){
            return done(null,false,{message:'No User Found With That Email'});
        }
        try{
            if(user.password===password){
                return done(null, user);
            }
            else{
                return done(null, false,{message:'Password Incorrect'})
            }
        }catch(e){
            console.log(e);
            return done(e);
        }
    })
    }
    passport.use(new LocalStrategy({usernameField:'email'},authenticateUsers))
    passport.serializeUser((user,done)=>done(null,user.id))
    passport.deserializeUser(async (id,done)=>{
       await userData.User.findOne({_id:id}).then((user)=>{

        
        return done(null,user)
    })
    })
}

function isAuth(req,res,done){
    if(req.user){
        return done()
    }
    return res.redirect('/login');
}

module.exports = {initialize,isAuth};