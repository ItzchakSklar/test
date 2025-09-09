import { Link, Route, Routes } from "react-router-dom";
import Postes from "./postes.tsx";
import SendPost from "./SendPost.tsx";
import Post from "./post.tsx"

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
        <Route path="/" element={<Postes />} />
        <Route path="/SendPost" element={<SendPost />} />
        <Route path="/Post/:id" element={<Post />} />
      </Routes>
    </>
  );
}
