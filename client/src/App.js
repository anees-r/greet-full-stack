import "./App.css";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import { BrowserRouter, Routes, Route, Outlet, Navigate } from "react-router";
import Home from "./pages/home/Home";
import Profile from "./pages/profile/Profile";
import Navbar from "./components/navbar/NavBar";
import RightBar from "./components/rightbar/RightBar";
import LeftBar from "./components/leftbar/LeftBar";
import "./bg-main.scss";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";
import { ThemeContext } from "./context/ThemeContext";
import NotFound from "./pages/notFound/NotFound";

function App() {
  const { currentUser } = useContext(AuthContext);
  const { mode } = useContext(ThemeContext);

  const Layout = () => {
    return (
      <div className={`theme-${mode}`}>
        <Navbar />
        <div
          style={{ display: "flex", paddingTop: "10px" }}
          className="bg-main"
        >
          <LeftBar />
          <div style={{ flex: "6" }}>
            <Outlet />
          </div>
          <RightBar />
        </div>
      </div>
    );
  };

  const ProtectedRoute = ({ children }) => {
    if (!currentUser) {
      return <Navigate to="/login" />;
    }
    return children;
  };
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            exact
            path="/"
            element={
              <ProtectedRoute>
                <Layout />
              </ProtectedRoute>
            }
          >
            {/* Now these routes are children that will be rendered in place of outlet based on path */}
            <Route exact path="" element={<Home />} />
            <Route exact path="profile/:d" element={<Profile />} />
          </Route>
          <Route
            exact
            path="/login"
            element={
              <div className={`theme-${mode}`}>
                <Login />
              </div>
            }
          />
          <Route
            exact
            path="/register"
            element={
              <div className={`theme-${mode}`}>
                <Register />
              </div>
            }
          />
          <Route
            exact
            path="/notfound"
            element={
              <div className={`theme-${mode}`}>
                <NotFound />
              </div>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
