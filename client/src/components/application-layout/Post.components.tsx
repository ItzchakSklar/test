import type { Post } from "../../types/Post.tsx";
import { addPost,deletePost,updatePostApi} from "../../api/post.api.tsx"
import { Link } from "react-router-dom";

export default function Post(post: Post){ 
  return ( 
    <div className="card">
      <Link className="post-link" to={`/Post/${post._id}`} id={post._id}>
      <img src={"http://localhost:3004/public/"+post.img} className="img-post" />
      <p>{post.description}</p>
      <p>likes: {post.likes}</p>
      <p>Raised by: {post.nameRaised}</p>
      <p>in: {post.time}</p>
      </Link>
      <button className="post-button" onClick={() => deletePost(post._id)}>delete</button>
      <Link className="post-button" to={`/update/${post._id}`}>
            Update
      </Link>
    </div>
    
  )
}

export async function hendelANewPost(post:Post){
  post.likes = 0;
  post.time = new Date().toString();
  await addPost(post)
}

export async function hendelAUpdatePost(newPost:Post,post:Post){
  if (newPost.description != post.description){
    await updatePostApi(post._id,"description",newPost.description)
  }
  if (newPost.img != post.img){
    await updatePostApi(post._id,"img",newPost.img)
  }
  if (newPost.nameRaised != post.nameRaised){
    await updatePostApi(post._id,"nameRaised",newPost.nameRaised)
  }
  if (newPost.time != post.time){
    await updatePostApi(post._id,"time",newPost.time)
  }  
}
