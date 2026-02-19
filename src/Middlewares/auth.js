const adminAuth =(req,res, next)=>
{
    console.log("admin auth is getting checked");
       const token ="xyz";
    const isAuthorizedToken= token==="xyz";
       if(!isAuthorizedToken)
    {
        res.status(401).send("unauthorized request");    
    }
    else
        {
          next();   }};

// module.exports = {adminAuth};

const userAuth =(req,res, next)=>
{
    console.log("user auth is getting checked");
       const token ="xyz";
    const isAuthorizedToken= token==="xyz";
       if(!isAuthorizedToken)
    {
        res.status(401).send("unauthorized request");    
    }
    else
        {
          next();  
         }};
module.exports = { adminAuth, userAuth };
         
//module.exports = {userAuth};