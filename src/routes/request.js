const express = require("express");
  const requestRouter= express.Router();
   const {userAuth} = require("../Middlewares/auth.js")
  

requestRouter.post("/sendConnectionRequest", userAuth,async (req,res)=>
{
   const user = req.user;
  console.log("send a connection request");
   res.send(user.firstName + "sent the request ");

});
  
  module.exports= requestRouter;
