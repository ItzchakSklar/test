import PostC from "../components/application-layout/Post.components.tsx";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getPost } from "../api/post.api.tsx";
import type { Post } from "../types/Post.tsx";

// geting from api post-data by id from params and save them in post >  return post
export default function Postf() {
  const id = useParams();
  const [post, setPost] = useState<Post | null>(null);
  useEffect(() => {
    if (post == null)
      getPost(id.id as string).then((data) => {
        // console.log("post = ", data);
        setPost(data);
      });
  }, [post]);
  return (
  <div className="post-comp">
    {post && PostC(post)}
    </div>
  )
}
