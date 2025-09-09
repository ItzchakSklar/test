import PostC from "../components/application-layout/Post.components.tsx";
import {useParams} from "react-router-dom";
import { useState,useEffect } from "react"
import {getPost} from "../api/post.api.tsx"
import type {Post} from "../types/Post.tsx"

export default async function Postf() {
    const  id = useParams();
     console.log(id.id);
    const { post, setPost } = useState({} as Post)
    useEffect(() => {
        getPost(id.id as string).then((data) => {
            setPost(data);
        });
      }, [post]);
  return (
    <>
      {PostC(post)}
    </>
  );
}
