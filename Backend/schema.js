const mongoose = require('mongoose') 


const userSchemaValue = new mongoose.Schema({
    firstName:{
        type:String,
        required:true,
    },
    lastName:{
        type:String,
        required:true,
    },
    dateOfBirth:{
        type:String,
        required:true,
    },
    gender:{
        type:String,
        required:true,
    },
    PhoneNumber:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true,
    },
    confirmpassword:{
        type:String,
        required:true,
    },
    userImage:{
        type:String,
        required:true,
    },
    userSignature:{
        type:String,
        required:true,
    },
    userCapture:{
        type:String,
        required:true,
    }


})

const userData = mongoose.model('userData', userSchemaValue)

module.exports = userData;