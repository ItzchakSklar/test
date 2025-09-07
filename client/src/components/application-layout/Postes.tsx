import { db } from "../../mock/DB.tsx";
import Post from "./Post.tsx";

export default function Postes() {
  return (
    <div className="postes-body">
        <h2>Postes</h2>
      <div className="postes">{db.map((p) => Post(p))}</div>
  </div>
  );
}
