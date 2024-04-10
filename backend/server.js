import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

import authRoutes from  "./routes/auth.routes.js";
import messageRoutes from  "./routes/message.routes.js";
import userRoutes from  "./routes/user.routes.js";

import connectToMongoDB from "./db/connectToMongoDB.js";

const app=express();
const PORT=process.env.PORT || 5000;

dotenv.config();

app.use(express.json()); //to parse the incoming requests with JSON payloads(from req.body)
app.use(cookieParser());

app.use("/api/auth",authRoutes)
app.use("/api/messages",messageRoutes)
app.use("/api/users",userRoutes)


//Routes
/*app.get("/api/auth/signup",(req,res)=>{
    res.send("Signup Route");
})

app.get("/api/auth/login",(req,res)=>{
    res.send("login Route");
})

app.get("/api/auth/logout",(req,res)=>{
    res.send("logout Route");
})*/


app.listen(PORT,()=>{
    connectToMongoDB();
    console.log('Server Running on port',PORT);
});

