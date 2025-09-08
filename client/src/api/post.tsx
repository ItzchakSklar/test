import type { Post } from "../types/Post.tsx";

const PORT = 3004 

export async function getAllPost():Promise<Post[]>{
    try {
    const res = await fetch(`http://localhost:${PORT}/post/all`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const postes = await res.json();
    console.log("Server response:", postes);
    return postes;
  } catch (err) {
    console.error("Error add post:", err);
    return [];
  }
}

export async function addPost(post: Post):Promise<string>{
  console.log("posting ",post);
  
  try {
    const res = await fetch(`http://localhost:${PORT}/post/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(post),
    });
    const message = await res.text();
    console.log("Server response:", message);

    return message;
  } catch (err) {
    console.error("Error add post:", err);
    return `Error add post:, ${err}`;
  }
}


export async function deletePost(id:string){
  console.log("posting ",id);
  
  try {
    const res = await fetch(`http://localhost:${PORT}/post/delete/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const message = await res.text();
    console.log("Server response:", message);

    return message;
  } catch (err) {
    console.error("Error add post:", err);
    return `Error add post:, ${err}`;
  }
}
