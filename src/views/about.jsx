import { Link } from "react-router-dom";

export default function About() {
  return (
    <div className="about">
      About Us
      <div>
        <Link to={"/"}>Go to Home Page</Link>
      </div>
    </div>
  );
}
