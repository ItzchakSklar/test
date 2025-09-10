import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { useParams } from "react-router-dom";
import { getPost } from "../api/post.api.tsx";
import { Box, Button, TextField, Typography, Paper } from "@mui/material";
import type { Post } from "../types/Post.tsx";
import { hendelAUpdatePost } from "../components/application-layout/Post.components.tsx";

export default function updatePost() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({} as Post);
  const [error, setError] = useState("");
  const id = useParams();
  const [post, setPost] = useState<Post | null>(null);
  useEffect(() => {
    if (post == null)
      getPost(id.id as string).then((data) => {
        console.log("post = ", data);
        setPost(data);
      });
  }, [post]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    // console.log(formData);
    if (post != null) {
      await hendelAUpdatePost({ ...formData }, post);
    }
    navigate("/");
  };

  return (
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
