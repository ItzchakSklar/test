import { Link, Route, Routes } from "react-router-dom";
import Postes from "../components/application-layout/Postes.tsx" ;


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
        </div>
      </header>
      <Routes>
        <Route path="/" element={<Postes />}/>
      </Routes>
    </>
  );
}
