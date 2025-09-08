import { Router } from "express";
import { addNewPost,getAllPost,deletePost } from "../controllers/Post.controllers.js";

const router = Router();

// post post
router.post("/register",addNewPost)

// get all post
router.get("/all",getAllPost)

// delete post by id
router.delete("/delete/:id",deletePost)

export default router;