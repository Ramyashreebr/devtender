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
        const data= await user.save();
        
        res.send("user added successfully");
        console.log(data);

        }
     catch(err)
     {
      console.log(err.message)
        res.status(400).send("Error sending the user", err.message);
     }
   

});

// //get user by email
// app.get("/user", async(req,res)=>
// {
//     const userEmail=req.body.email;
//     //req.body.email=it is reading email
//     //find ==it finds  and send back
//    //whenevr we use async we need to write await also
//     //whenever performing db operation use  async await
//     try{
//       console.log(userEmail);
//    const user= await User.find({ });
//  res.send(user);
//     }
//     catch(err)
//     {
//       res.status(400).send("something went wrong");
//     }


// });



//Feed API -GET/fedd - get all the users from the database
app.get("/feed",async (req,res)=>
{         
   const userEmail=req.body.email;

      try{
         //const users = await User.find({});
                  const users = await User.findOne({email: userEmail});

         res.send(users);
      }
      catch(err)
      {
         res.status(400).send("something went wrong");
      }
});
// to delete one user we need user id first
app.delete("/user", async (req,res)=>
{
    const userId=  req.body.userId;
    try{
       const user= await User.findByIdAndDelete({_id:userId});//shorthand
     // const user= await User.findByIdAndDelete(userId);//shorthand
      res.send("user deleted successfully");
    }
      catch(err)
      {
         res.status(400).send("something went wrong");
      }
});

//update data of the user
app.patch(
   "/user/:userId", async (req,res)=>
{
      const userId=req.params?.userId;

   const data=req.body;//it finds id and if we give firstname that is data
   console.log(data);

  const ALLOWED_UPDATES =
  [
   "userId",
   "photoUrl",
   "about",
   "gender",
   "age",
   "skills"
  ];

//   {
//    "userId":"6734684y3983946",
//    "email":"ramya@com",
//    "gender":"female",
//    "skills":["acting", "dramma"],
//    "xyz":"bbfhsj"
//   }
  const isUpdateAllowed = Object.keys(data).every((k)=>
  ALLOWED_UPDATES.includes(k));
  if(!isUpdateAllowed){
   res.status(400).send("update not allowed");
  }
   if(data?.skills.length >10)
   {
      throw new Error("skills cannot be more than 10");
   }
  
  
 try
   {
           await User.findByIdAndUpdate({_id:userId}, data);
           res.send("user updated successfully")
   }
    catch(err)
      {
         res.status(400).send("something went wrong");
      }
})
//using email we are upadting one field
app.patch("/userEmail", async (req,res)=>
{
      const userEmail=req.body.email;

   const data=req.body;//it finds id and if we give firstname that is data
   console.log(data);
   try
   {
          const updatedUser= await User.findOneAndUpdate({email:userEmail}, data);
           console.log(updatedUser);
                      res.send("email updated successfully")
   }
    catch(err)
      {
         res.status(400).send("something went wrong");
      }
})


app.post("/userr", async (req,res)=>
{
          const user = new User(req.body);
          console.log(user);

   try
   {
           await user.save();
           res.send("user added successfully")
   }
    catch(err)
      {
         res.status(400).send("something went wrong");
      }
})



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




