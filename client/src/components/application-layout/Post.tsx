import type { Post } from "../../types/Post.tsx";

export default function Post(post: Post) {
  return (
    <div className="card">
      <img src={post.img} className="img-post" />
      <p>{post.description}</p>
      <p>likes: {post.likes}</p>
      <p>Raised by {}</p>
    </div>
  );
}
