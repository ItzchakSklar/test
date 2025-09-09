import type { Post } from "../../types/Post.tsx";
import { addPost,deletePost} from "../../api/post.api.tsx"
import { Link } from "react-router-dom";

export default function Post(post: Post){ 
  return ( 
    <div className="card">
      <Link className="post-link" to={`/Post/${post._id}`}>
      <img src={"http://localhost:3004/public/"+post.img} className="img-post" />
      <p>{post.description}</p>
      <p>likes: {post.likes}</p>
      <p>Raised by: {post.nameRaised}</p>
      <p>in: {post.time}</p>
      </Link>
      <button className="delete-post" onClick={() => deletePost(post._id)}>delete</button>
    </div>
    
  )
}

export async function hendelANewPost(post:Post){
  post.likes = 0;
  post.time = new Date().toString();
  await addPost(post)
}

