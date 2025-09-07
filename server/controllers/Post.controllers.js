import {
  addNewPostServices,
} from "../services/Post.services.js";

// add post
export async function addNewPost(req, res) {
  try {
    const { img,description,likes,nameRaised,time} = req.body;
    if (!img || !description || !likes || !nameRaised || !time) {
      res.status(400).send("Invalid input");
    }
    const id = await addNewPostServices(img,description,likes,nameRaised,time);
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

// not used
export async function ChackIfUserExist(req, res) {
  try {
    const result = await ChackIfuserExistServices(req.body.name);
    console.log("sendin chack user: ", result);
    res.send(result);
  } catch (error) {
    res.status(500).send(false);
  }
}

// not used
export async function getUser(req, res) {
  const username = req.params.username;
  const user = await getUserServices(username);
  console.log("sending data user: ", user);
  res.json(user);
}
