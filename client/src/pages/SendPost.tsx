import { useState } from "react";
import { useNavigate } from "react-router";
import {
  Box,
  Button,
  TextField,
  Typography,
  Paper,
} from "@mui/material";
import type { Post } from "../types/Post.tsx"
import { hendelANewPost } from "../components/application-layout/Post.components.tsx"

export default function SendPost() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({} as Post)
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    // console.log(formData);
    
    if (!formData.img || !formData.description || !formData.nameRaised) {
      setError("All fields are required.");
      return;
    }


    await hendelANewPost({ ...formData });


    navigate("/");
  };

  return (
    <Paper elevation={3} sx={{ p: 4, width: 400, mx: "auto" ,margin:20}}>
      <Typography variant="h5" mb={2}>
        New post
      </Typography>
      <Box component="form" onSubmit={handleSubmit}>
        <TextField
          label="Enter url to img"
          name="img"
          fullWidth
          margin="normal"
          value={formData.img}
          onChange={handleChange}
        />
        <TextField
          label="Enter your description"
          name="description"
          type="description"
          fullWidth
          margin="normal"
          value={formData.description}
          onChange={handleChange}
        />
        <TextField
          label="Enter your name"
          name="nameRaised"
          type="nameRaised"
          fullWidth
          margin="normal"
          value={formData.nameRaised}
          onChange={handleChange}
        />
        {error && <Typography color="error">{error}</Typography>}
        <Button type="submit" variant="contained" fullWidth sx={{ mt: 2 }}>
          Send
        </Button>
      </Box>
    </Paper>
  );
}
