import { Outlet } from "react-router-dom";

export default function ProfilePageLayout() {
  return (
    <div className="profile-page-layout">
      Profile Page Layout
      <Outlet />
    </div>
  );
}
