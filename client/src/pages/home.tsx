import { Link, Route, Routes } from "react-router-dom";
import Postes from "./postes.tsx";
import SendPost from "./SendPost.tsx";
import Post from "./post.tsx"
import UpdatePost from "./updatePost.tsx";

export default function Home() {
  return (
    <>
      <header>
        <img src="../../public/image.png" alt="" className="logo" />
        <div id="titel">
          <h1>Linkodkod</h1>
          <h4>להשאר מחוברים גם אחרי מבחנים צה"ליים</h4>
        </div>
        <div id="links">
          <Link className="home-link" to="/">
            Home
          </Link>
          <Link className="home-link" to="/SendPost">
            Post
          </Link>
        </div>
      </header>
      <Routes>
        <Route path="/" element={<Postes />} key="postes"/>
        <Route path="/SendPost" element={<SendPost />} key="add-post"/>
        <Route path="/Post/:id" element={<Post />} key="post"/>
        <Route path="/update/:id" element={<UpdatePost />} key="update"/>
      </Routes>
    </>
  );
}
