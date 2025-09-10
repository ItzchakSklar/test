import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { useParams } from "react-router-dom";
import { getPost } from "../api/post.api.tsx";
import { Box, Button, TextField, Typography, Paper } from "@mui/material";
import type { Post } from "../types/Post.tsx";
import { hendelAUpdatePost } from "../components/application-layout/Post.components.tsx";


// a page show form update Post
export default function updatePost() {

  // to navigate to home after post
  const navigate = useNavigate();
  // to hold new data to cheng
  const [formData, setFormData] = useState({} as Post);
  // if there is error show them 
  const [error, setError] = useState("");
  // get id post you wont to chenge by params
  const id = useParams();
  // to hold post
  const [post, setPost] = useState<Post | null>(null);

  // loding post by id
  useEffect(() => {
    // check if post alredy loded
    if (post == null)
      getPost(id.id as string).then((data) => {
        console.log("post = ", data);
        setPost(data);
      });
  }, [post]);

  // avery chenge if form will by here
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // on click on send
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    
    // I'm not checking here whether all fields are filled in, because the update 
    // can also update just one and my function "hendelAUpdatePost" handles that.

    if (post != null) {
      await hendelAUpdatePost({ ...formData }, post);
    }

    // navigate to home
    navigate("/");
  };

  return (
    // udate post form
    <div className="comp">
    <Paper elevation={3} sx={{ p: 4, width: 400, mx: "auto", mt: 8 }}>
      <Typography variant="h5" mb={2}>
        update
      </Typography>
      <Box component="form" onSubmit={handleSubmit}>
        <TextField
          label={post && post.img}
          name="img"
          fullWidth
          margin="normal"
          value={formData.img}
          onChange={handleChange}
        />
        <TextField
          label={post && post.description}
          name="description"
          type="description"
          fullWidth
          margin="normal"
          value={formData.description}
          onChange={handleChange}
        />
        <TextField
          label={post && post.nameRaised}
          name="nameRaised"
          type="nameRaised"
          fullWidth
          margin="normal"
          value={formData.nameRaised}
          onChange={handleChange}
        />
        <TextField
          label={post && post.time}
          name="time1"
          // I called it time1 because if I call it time it doesn't let me enter text.
          type="time1"
          fullWidth
          margin="normal"
          value={formData.time}
          onChange={handleChange}
        />
        {error && <Typography color="error">{error}</Typography>}
        <Button type="submit" variant="contained" fullWidth sx={{ mt: 2 }}>
          Update
        </Button>
      </Box>
    </Paper>
    </div>
  );
}
