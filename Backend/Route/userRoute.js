import express from "express";
import { Login, Logout, Register } from "../Controllers/user.js";

const router = express();

//posing data from frntend tobknd
router.route("/register").post(Register);
router.route("/login").post(Login);
router.route("/logout").get(Logout);

export default router;
