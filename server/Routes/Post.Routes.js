import { Router } from "express";
import { addNewPost,getAllPost,deletePost,updatePost,getPost } from "../controllers/Post.controllers.js";

const router = Router();

// post post
router.post("/register",addNewPost)

// get all post
router.get("/all",getAllPost)

// delete post by id
router.delete("/delete/:id",deletePost)

// update post by id
router.put("/put/:id",updatePost)

// get one post by id 
router.get("/post/:id",getPost)


export default router;