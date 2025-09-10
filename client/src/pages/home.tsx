import { Link, Route, Routes } from "react-router-dom";
import Postes from "./postes.tsx";
import SendPost from "./SendPost.tsx";
import Post from "./post.tsx"
import UpdatePost from "./updatePost.tsx";
import Login from "./Login.tsx"
import Signup from "./SingUp.tsx";

export default function Home() {
  return (
    <>
      <header>
        <div id="logo-place">
        <img src="../../public/image.png" alt="" className="logo" />
        </div>
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
          <Link className="home-link" to="/login">
            Login
          </Link>
          <Link className="home-link" to="/singup">
            Sing up
          </Link>
        </div>
      </header>
      <Routes>
        <Route path="/" element={<Postes />} key="postes"/>
        <Route path="/SendPost" element={<SendPost />} key="add-post"/>
        <Route path="/Post/:id" element={<Post />} key="post"/>
        <Route path="/update/:id" element={<UpdatePost />} key="update"/>
        <Route path="/login" element={<Login />} key="login"/>
        <Route path="/singup" element={<Signup />} key="sing-up"/>
      </Routes>
    </>
  );
}
