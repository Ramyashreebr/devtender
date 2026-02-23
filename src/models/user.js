const mongoose = require("mongoose");

//syntax
const userSchema = new mongoose.Schema({ 
    firstName: {
    type: String,
    required:true,
    minlength:4,
    maxlength:50
},
    lastName:{
        type: String
    },
    email:{
        type:String,
        lowercase:true,
        required:true,
        unique:true,
        trim:true
    },
    password: {
        type:String,
        required:true,
    },
    age:{
        type:Number,
        min:18
    },
    gender:{
        type: String,
        validate(value)
{
    if(!["male","female", "other"].includes(value))
        {
        throw new Error("Gender data is not valid");
    }// for existing data or updata data it wont work only for new data insert it works
}    },
    photoUrl:{
        type:String,
    },
    about:{
        type:String,
        default:"this is the default of the user",
    },
    skills:{
        type:[String],
    },
},
    {
        timestamps: true,
    }
);

//syntax
const User = mongoose.model("User",userSchema );

module.exports = User;