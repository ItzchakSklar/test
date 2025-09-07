import { Router } from "express";
import { addNewPost } from "../controllers/Post.controllers.js";

const router = Router();


router.post("/register",addNewPost)

export default router;