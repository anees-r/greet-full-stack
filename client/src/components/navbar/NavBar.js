import React from "react";
import "./NavBar.scss";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import DarkModeRoundedIcon from "@mui/icons-material/DarkModeRounded";
import LightModeRoundedIcon from "@mui/icons-material/LightModeRounded";
import MailRoundedIcon from "@mui/icons-material/MailRounded";
// import PersonRoundedIcon from "@mui/icons-material/PersonRounded";
import NotificationsRoundedIcon from "@mui/icons-material/NotificationsRounded";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { ThemeContext } from "../../context/ThemeContext";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { currentUser } = useContext(AuthContext);
  const { mode, toggleMode } = useContext(ThemeContext);
  return (
    <div className="navbar">
      <Link to="/" style={{ textDecoration: "none" }}>
        <span>Greet :)</span>
      </Link>
      <div className="middle">
        <input type="text" name="search" id="search" placeholder="search" />
        <button>
          <Link
            to="/notfound"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <SearchRoundedIcon style={{ cursor: "pointer" }} />
          </Link>
        </button>
      </div>
      <div className="right">
        <div onClick={toggleMode} style={{ cursor: "pointer" }}>
          {mode === "light" ? (
            <DarkModeRoundedIcon style={{ cursor: "pointer" }} />
          ) : (
            <LightModeRoundedIcon style={{ cursor: "pointer" }} />
          )}
        </div>
        <Link
          to="/notfound"
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <NotificationsRoundedIcon style={{ cursor: "pointer" }} />
        </Link>
        <Link
          to="/notfound"
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <MailRoundedIcon style={{ cursor: "pointer" }} />
        </Link>
        <Link
          to={`/profile/${currentUser.id}`}
          style={{ textDecoration: "none" }}
        >
          <img
            src={currentUser.pfp}
            alt="user-profile-icon"
            style={{ cursor: "pointer" }}
          />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
