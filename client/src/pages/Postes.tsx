import { getAllPost } from "../api/post.tsx"
import { useEffect,useState } from "react";
import Postf from "../components/application-layout/Post.components.tsx";
import type { Post } from "../types/Post.tsx";


export default function Postes() {
  const [postes,setPostes] = useState([] as Post[])
  useEffect(() => {
    getAllPost().then((data) => {
      if (data.length != postes.length) {
        setPostes(data);
      }
    });
  }, [postes]);
  return (
    <div className="postes-body">
        <h2>Postes</h2>
        {postes.length == 0 &&(
          <p>loding you can awate</p>
        )}
      <div className="postes">{postes.map((p) => Postf(p))}</div>
  </div>
  );
}