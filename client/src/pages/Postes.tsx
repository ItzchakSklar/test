import { getAllPost } from "../api/post.api.tsx"
import { useEffect,useState } from "react";
import Postf from "../components/application-layout/Post.components.tsx";
import type { Post } from "../types/Post.tsx";

// geting from api postes and save them in postes > return compones from post 
export default function Postes() {
  const [postes,setPostes] = useState([] as Post[])
  useEffect(() => {
    getAllPost().then((data) => {
      if (data.length != postes.length) {
        console.log(data);
        setPostes(data);
      }
    });
  }, [postes]);
  return (
    <div className="postes-body">
        <h2>Postes</h2>
        {postes.length == 0 &&(
          <p>loding you can wait</p>
        )}
      <div className="postes">{postes.map((p) => Postf(p))}</div>
  </div>
  );
}