const mongoose = require("mongoose");

//syntax
const userSchema = new mongoose.Schema({ 
    firstName: {
    type: String
},
    lastName:{
        type: String
    },
    email:{
        type:String
    },
    password: {
        type:String
    },
    age:{
        type:Number
    },
    gender:{
        type: String
    }
});

//syntax
const User = mongoose.model("User",userSchema );

module.exports = User;