const express = require('express');// this require is using experss in node modules

const app = express();
 //handling incoming request //this function is request handler
// app.use((req,res) =>
// {
// res.send("hello from server");
// });
//  app.use("/hello/2",(req,res) =>
// {
// res.send("hello hello from server66");
// });

//  app.use("/hello",(req,res) =>
// {
// res.send("hello hello from serverrr");
// });

//  app.use("/user",(req,res) =>
// {
  
// res.send("hahahaha");
// });

// //this will only handle get call to /user
//  app.get("/user",(req,res) =>
// {
// res.send({firstname: "ramya", lastname : "shree"});
// });

//  app.post("/user",(req,res) =>
// {
//     //saving data to DB
// res.send("data saved successfully in Db");
// });

//  app.delete("/user",(req,res) =>
// {
// res.send("successfully deleted");
// });
// //this will match all the http methods to the API call to /test
//  app.use("/test",(req,res) =>
// {
// res.send("hello hello from serve99");
// //console.log("handling routes");
// });



//  app.use("/hiii",(req,res) =>
// {
// res.send("hello from server8");
// });


//  app.use("/",(req,res) =>
// {
// res.send("hello hello from server66");
// });

app.use("/user", (req,res, next)=>
{
    console.log("handling the route user");
   
    next();
   //  res.send("response1");
},
(req,res,next)=>
{
    console.log("handling the route user 2");
   // res.send("response2");
}
(req,res,next)=>
{
    console.log("handling the route user 3");
   // res.send("response3");
}
(req,res,next)=>
{
    console.log("handling the route user 4");
   // res.send("response4");
}
(req,res,next)=>
{
    console.log("handling the route user 5");
    res.send("response5");
}

);


app.listen(4444 , ()=>
{
    console.log("server is running and running on port 4444")
}); //lisytening