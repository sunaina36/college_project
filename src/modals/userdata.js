const mongoose=require('mongoose');
const {Schema} = mongoose;

const userData = new Schema({
    firstName:{
        type:String,
        required:true
    },
    DOB:{
        type:Date,
        required:true
    },
    phoneNumber:{
        type:Number,
        required:true,
        unique:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    aadharNumber:{
        type:String,
        required:true,
        unique:true
    },
    panNumber:{
        type:String,
        required:true,
        unique:true
    }
    
});

const User = mongoose.model('User',userData);

module.exports=User;