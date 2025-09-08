import {
  addNewPostServices,
  getAllPostServices,
  deletePostServices
} from "../services/Post.services.js";

// add post
export async function addNewPost(req, res) {
  console.log("server get: ",req.method,"the post", req.body);
  try {
    const { img, description, nameRaised, likes , time } = req.body;
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
  console.log("server get: ",req.method);
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
  console.log("server get: ",req.method, req.params.id);
  try {
    let id = 0
    try {
      id = req.params.id;
      if (!id){ console.log("id missing")
      return res.send("you dont send id");
      }
    } catch (err) {
      console.log(err);
      return res.send("you dont send id");
    }
    // deletePostServices return true or false
    const seccses = await deletePostServices(id);
    if (seccses){
      console.log("sending delete",id);
      return res.status(200).send("seccses delete post with id:",id);
    } else {
      console.log("faile delete post with id:",id);
      return res.status(500).send(`faile delete post with id: ${id}`);
    }
  } catch (err) {
    console.error("Error delete:", err);
    res.status(500).send('santhing going rong with the server pleas call 052...');
  }
}
