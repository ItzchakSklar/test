import {
  addNewPostServices,
  getAllPostServices,
  deletePostServices,
  updatePostServices,
  getPostServices,
} from "../services/Post.services.js";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

const JWT_SECRET = process.env.JWT_SECRET || "dfghjkgfd";

// add post
export async function addNewPost(req, res) {
  console.log("server get: ", req.method, "the post", req.body);
  try {
    const { img, description, nameRaised, likes, time } = req.body;
    if (!img || !description || !nameRaised || !likes || !time) {
      res.status(400).send("Invalid input 1");
    }
    const id = await addNewPostServices(
      img,
      description,
      nameRaised,
      likes,
      time
    );
    if (id != -1) {
      res.status(200).send(`post added succefuly`);
    } else {
      res.status(500).send(`Failed to add post to database`);
    }
  } catch (err) {
    console.error("Error adding post:", err);
    res.status(500).send("Server error");
  }
}

// Given nathing  , return all postes ;  if not return []
export async function getAllPost(req, res) {
  console.log("server get: ", req.method);
  try {
    const Postes = await getAllPostServices();
    if (Postes != []) {
      console.log("sending ", Postes);
      res.status(200).json(Postes);
    } else {
      console.log("faile sending Postes");
      res.status(500).json([]);
    }
  } catch (err) {
    console.error("Error get postes:", err);
    res.status(500).json([]);
  }
}

// delete Post by id
export async function deletePost(req, res) {
  console.log("server get: ", req.method, req.params.id);
  try {
    let id = 0;
    try {
      id = req.params.id;
      if (!id) {
        console.log("id missing");
        return res.send("you dont send id");
      }
    } catch (err) {
      console.log(err);
      return res.send("you dont send id");
    }
    // deletePostServices return true or false
    const seccses = await deletePostServices(id);
    if (seccses) {
      console.log("sending delete", id);
      return res.status(200).send("seccses delete post with id:", id);
    } else {
      console.log("faile delete post with id:", id);
      return res.status(500).send(`faile delete post with id: ${id}`);
    }
  } catch (err) {
    console.error("Error delete:", err);
    res
      .status(500)
      .send("santhing going rong with the server pleas call 052...");
  }
}

// update Post by id
export async function updatePost(req, res) {
  console.log(
    "server get: ",
    req.method,
    "the post",
    req.params.id,
    "value",
    req.body
  );
  try {
    const { key, newValue } = req.body;
    if (!key || !newValue) {
      res.status(400).send("Invalid input to put");
    }
    const result = await updatePostServices(req.params.id, key, newValue);
    if (result) {
      res.status(200).send(`post update succefuly`);
    } else {
      res.status(500).send(`Failed to update post in database`);
    }
  } catch (err) {
    console.error("Error update post:", err);
    res.status(500).send("Server error");
  }
}

// get Post by id
export async function getPost(req, res) {
  console.log("server get: ", req.method, "the post id", req.params.id);
  try {
    const id = req.params.id;
    if (!id) {
      console.log("sending -1 error server");
      res.status(400).json({ _id: -1 });
    }
    const result = await getPostServices(id);
    if (result) {
      res.status(200).json(result);
    } else {
      res.status(500).json({ _id: -1 });
    }
  } catch (err) {
    console.error("Error get post:", err);
    res.status(500).json({ _id: -1 });
  }
}

// This controller check token.    i tike inspiration from here https://www.reddit.com/r/node/comments/kf46lc/jwt_flow_in_websites_how_to_ensure_access_token/
export async function isAuthorized(req, res, next) {
  const authToken = req.headers["authorization"]; // replace ‘Bearer ‘ if needed

  // invalid token - synchronous
  try {
    const decoded = jwt.verify(authToken, JWT_SECRET);
    if (decoded && decoded.whatever) next();
  } catch (err) {
    // err
    res.jsom({ succses: false, msg: "no token" });
  }
}
