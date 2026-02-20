const mongoose = require ("mongoose");



const connectDB =async() => {
   await mongoose.connect("mongodb+srv://jwala:Moderated2024@ramya.piokhso.mongodb.net/");

};

connectDB()
.then(()=>
{
console.log("database connection established");
})
.catch(err =>
{
    console.error("databse cannot be established")
}
);