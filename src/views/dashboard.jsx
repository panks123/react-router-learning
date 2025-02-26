import { Link } from "react-router-dom";

export default function DashBoard() {
  return (
    <div className="dashboard">
      DashBoard
      <div>
        <Link to={"/about"}>Go to About Page</Link>
      </div>
      <div>
        <Link to={"/profile/general"}>Go to Profile Page</Link>
      </div>
    </div>
  );
}
