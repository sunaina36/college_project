const mongoose=require('mongoose');
const {Schema} = mongoose;

const userData = new Schema({
    firstName:{
        type:String,
        required:true
    },
    secondName:{
        type:String,
        required:true
    },
    DOB:{
        type:Date,
        required:true
    },
    gender:{
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
    password:{
        type:String,
        required:true
    },
    accountNumber:{
        type:Number,
        required:true,
        unique:true
    },
    debitCardNumber:{
        type:Number,
        required:true,
        unique:true
    },
    CVV:{
        type:Number,
        required:true,
    },
    issueDate:{
        type:Date,
        required:true
    },
    expiryDate:{
        type:Date,
        required:true
    }
    
});

const User = mongoose.model('User',userData);


const basicAccout=new Schema({
    id:String,
    accountNumber:Number,
    debitCardNumber:Number,
    seq:Number
});
const Account = mongoose.model('Account',basicAccout);
module.exports={User,Account};