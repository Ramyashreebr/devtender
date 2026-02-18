const express = require('express');// this require is using experss in node modules

const app = express();
 //handling incoming request //this function is request handler
// app.use((req,res) =>
// {
// res.send("hello from server");
// });

 app.use("/test",(req,res) =>
{
res.send("hello from server2");
});



 app.use("/hello",(req,res) =>
{
res.send("hello from server8");
});


app.listen(4444 , ()=>
{
    console.log("server is running and running on port 4444")
}); //lisytening