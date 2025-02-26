import { useState } from "react";
import { Link } from "react-router-dom";

export default function ProfilePage() {
  const [count, setCount] = useState(0);
  const handleClick = () => {
    setCount(prev => prev + 1);
  }

  if(count > 4) throw new Error("Invalid count")
  return (
    <div className="profile-security">
      <div>
        Profile Page
        <button onClick={handleClick}>Count:  {count}</button>
      </div>
      <div>
        <Link to={"/profile/security"}>Go to Profile security page</Link>
      </div>
    </div>
  );
}
