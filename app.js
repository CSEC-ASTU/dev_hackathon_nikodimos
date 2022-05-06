const express=require("express");
const app=express();
const mongoose=require("mongoose");
const dotenv=require("dotenv");

//Import Routers
const authRoute=require("./routes/auth")

dotenv.config();

mongoose.connect(process.env.DB_CONNECT,()=>{console.log("Connected to db")})

//Middlewares
app.use(express.json());
//Middlewares
app.use('/user',authRoute);

// app.get("/user", (res,req)=>{console.log("redirected")})
app.listen(3000, ()=> console.log("listening on port 3000"))