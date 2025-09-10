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


// this is page ho hndele Send Post 
export default function SendPost() {
  // to navigate back to home after click on send  
  const navigate = useNavigate();
  const [formData, setFormData] = useState({} as Post)
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // after clicing on submit
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    
    // check if missing data from form
    if (!formData.img || !formData.description || !formData.nameRaised) {
      setError("All fields are required.");
      return;
    }
    
    // this is my function "hendel A New Post" in components
    await hendelANewPost({ ...formData });

    // back to home
    navigate("/");
  };

  return (
    // form card
    <div className="comp">
    <Paper elevation={3} sx={{ p: 4, width: 400, mx: "auto", mt: 8 }}>
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
    </div>
  );
}
