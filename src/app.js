const express = require('express');// this require is using experss in node modules
const app = express();
const connectDB = require("./config/database.js");
const User = require('./models/user.js');

 app.use(express.json());


app.post("/signup", async (req,res) =>
{
     // console.log(req.body);
  


    //creating a new instance of the User model
     const user = new User(req.body);

     try{
         await user.save();
        res.send("user added successfully");
        }
     catch(err)
     {
        res.status(400).send("Error sending the user", err.message);
     }
   

});






connectDB()
.then(()=>
{
 console.log("database connection established");
 app.listen(4444 , ()=>
 {
    console.log("server is running and running on port 4444")
  }); //lisytening

})
.catch(err =>
{
    console.error("database cannot be established")
}
);







// app.get("/user", (req,res,next)=>
// {
//     console.log("handling the roiute user 1");
//     res.send("1st route handler");
// });

// app.get("/user", (req,res,next)=>
// {
//     console.log("handling the roiute user 2");
//     next();
// });


//handle Auth Middleware for all GET, POST,  ....request
// app.use("/admin", adminAuth);

// app.post("/user/login",(req,res)=>
// {
//     res.send("user logged in successfully");
// })

// app.post("/user/data",userAuth,(req,res)=>
// {
//     res.send("user logged in successfully");
// })
// app.get("/admin/getAllData", (req,res)=>
// {
 
    
//  res.send("All data sent ");
//   } );

  
//   app.get("/user",userAuth, (req,res)=>
// {
 
//     res.send("user data sent ");
//   } );


// app.get("/admin/deleteAllData", (req,res)=>
// {
//     res.send("All data delete ");
// });




