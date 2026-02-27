const express = require('express');
const authRouter = express.Router();
const {validateSignUpData}=require("../utils/validation");
const bcrypt = require("bcrypt");
const User = require('../models/user.js');


authRouter.post("/signup", async (req,res) =>
{
      try{
            //validate the data
            validateSignUpData(req);
const{ firstName,lastName,email, password} = req.body;
            //encrypt the password
  const passwordHash = await bcrypt.hash(password, 10);
  console.log(passwordHash);

 // console.log(req.body);
     //creating a new instance of the User model
     const user = new User({
       firstName,
        lastName,

        email,
        password:passwordHash,
     });

  
        const data= await user.save();
        
        res.send("user added successfully");

        }
     catch(err)
     {
      console.log(err.message)
        res.status(400).send( err.message);
     }
   

}); 




authRouter.post("/login", async (req,res) =>
{
      try{
           const{ email, password} = req.body;

           const user= await User.findOne({email:email});

           if(!user)
{
throw new Error ("email id is not present in DB");
}    


 const isPasswordValid =await user.validatePassword(password);
     
if(isPasswordValid)
{
   //create a JWT token
   const token = await user.getJWT();
   // console.log(token);

   //add the token to cookie and send the response back to the user
   res.cookie("token", token,
      {
         expire: new Date(Date.now() + 8 * 3600000),
      }
   );
   res.send("login successful");
}
else
{
   throw new Error("password is not valid");
}
  
      }
        
     catch(err)
     {
      console.log(err.message)
        res.status(400).send( err.message);
     }
   

});





module.exports = authRouter;