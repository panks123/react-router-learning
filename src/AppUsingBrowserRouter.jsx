/* eslint-disable react/prop-types */
import { BrowserRouter as Router, Routes, Route, useRouteError } from "react-router-dom";
import DashBoard from "./views/dashboard";
import RootLayout from "./root-layout";
import About from "./views/about";
import ProfilePage from "./views/profile/general";
import ProfileSecurity from "./views/profile/security";
import ProfilePageLayout from "./views/profile/profile-page-layout";

const ErrorBoundary = ({ caughtIn }) => {
    const error = useRouteError();
    console.log("Error:::", error);
    return (
        <div>
            <p>Error caught in {caughtIn}</p>
            <p className="error-text">Error: {error.message}</p>
        </div>
    );
};

function AppUsingBrowserRouter() {
    return (
        <Router>
                <Routes>
                    <Route path="/" element={<RootLayout />} errorElement={<ErrorBoundary caughtIn={"RootLayout"} />} > { /* errorElement is not catching the error when used with BrowserRouter like this - Need RCA and Fix*/}
                        <Route path="" element={<DashBoard />} />
                        <Route path="about" element={<About />} />
                        <Route path="profile" element={<ProfilePageLayout />}>
                            <Route path="general" element={<ProfilePage />} errorElement={<ErrorBoundary caughtIn={"RootLayout"} />}  />
                            <Route path="security" element={<ProfileSecurity />} />
                        </Route>
                    </Route>
                </Routes>
        </Router>
    );
}

export default AppUsingBrowserRouter;