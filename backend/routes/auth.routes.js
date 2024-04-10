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

router.get("/signup",signup);

router.get("/login",login);

router.get("/logout",logout);

export default router;