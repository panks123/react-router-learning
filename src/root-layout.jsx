import { Outlet, useMatch } from "react-router-dom";

export default function RootLayout() {
  const matchedRoute = useMatch(window.location.pathname);

  console.log("Matched Route::::", {matchedRoute})
  return (
    <div className="root-layout">
      <header>Header</header>
      <section>Left Panel</section>
      <main>
        <Outlet />
      </main>
    </div>
  );
}
