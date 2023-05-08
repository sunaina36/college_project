const mongoose=require('mongoose');
const {Schema} = mongoose;

const userData = new Schema({
    firstName:{
        type:String,
        required:true
    },
    lastName:{
        type:String,
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
    },
    DOB:{
        type:Date,
        required:true
    }
});

const User = mongoose.model('User',userData);

module.exports=User;