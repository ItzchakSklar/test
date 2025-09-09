import { Router } from "express";
import { SingUp,login } from "../controllers/User.controllers.js";

const router = Router();

// sing up
router.post("/register",SingUp)

// login
router.post("/login",login)
export default router;