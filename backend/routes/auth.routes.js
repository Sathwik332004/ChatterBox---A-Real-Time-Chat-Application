import express from "express";
import { login, logout, signup } from "../controllers/auth.controller.js";

const router=express.Router();

/*
router.get("/login",(req,res)=>{
    res.send("Login Route");
});
router.get("/logout",(req,res)=>{
    res.send("Logout Route");
});
router.get("/signup",(req,res)=>{
    res.send("Signup Route");
});
*/

//Call Controllers to handle the requests 

router.post("/signup",signup);

router.post("/login",login);

router.post("/logout",logout);

export default router;