import { getAllPost } from "../../api/post.tsx"
import { useEffect,useState } from "react";
import Postf from "./Post.tsx";
import type { Post } from "../../types/Post.tsx";


export default function Postes() {
  const [postes,setPostes] = useState([] as Post[])
  useEffect(() => {
    getAllPost().then((data) => {
      if (data.length > 0) {
        setPostes(data);
      }
    });
  }, []);
  return (
    <div className="postes-body">
        <h2>Postes</h2>
      <div className="postes">{postes.map((p) => Postf(p))}</div>
  </div>
  );
}
