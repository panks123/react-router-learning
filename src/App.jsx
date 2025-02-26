/* eslint-disable react/prop-types */
import { RouterProvider, createBrowserRouter, useRouteError } from "react-router-dom";
import DashBoard from "./views/dashboard";
import RootLayout from "./root-layout";
import About from "./views/about";
import ProfilePage from "./views/profile/general";
import ProfileSecurity from "./views/profile/security";
import ProfilePageLayout from "./views/profile/profile-page-layout";
const ErrorBoundary = ({caughtIn}) => {
  const error = useRouteError();
  console.log("Error:::", error);
  return (
    <div>
      <p>Error caught in {caughtIn}</p>
      <p className="error-text">Error: {error.message}</p>
    </div>
  )
}
const routesConfig = [
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorBoundary caughtIn={"Rootlayout"}/>,
    children: [
      {
        path: "",
        element: <DashBoard />,
        index: true,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "profile",
        element: <ProfilePageLayout />,
        errorElement: <ErrorBoundary caughtIn={"ProfilePageLayout"}/>,
        children: [
          { path: "general", element: <ProfilePage />, 
            errorElement: <ErrorBoundary caughtIn={"Profile Page (General)"} />
          },
          { path: "security", element: <ProfileSecurity /> },
        ],
      },
    ],
  },
];
const router = createBrowserRouter(routesConfig);
function App() {

  return <RouterProvider router={router} />;
}

export default App
