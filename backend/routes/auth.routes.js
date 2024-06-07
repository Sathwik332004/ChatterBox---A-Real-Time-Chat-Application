import express from "express";
import {
  login,
  logout,
  signup,
  forgot,
  reset,
} from "../controllers/auth.controller.js";

const router = express.Router();

//Call Controllers to handle the requests

router.post("/signup", signup);

router.post("/login", login);

router.post("/logout", logout);

router.post("/forgot", forgot);

router.post("/reset/:token", reset);

//export the router

export default router;
