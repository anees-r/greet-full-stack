import React from "react";
import "./LeftBar.scss";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

// import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import PeopleAltRoundedIcon from "@mui/icons-material/PeopleAltRounded";
import GroupsRoundedIcon from "@mui/icons-material/GroupsRounded";
import StoreRoundedIcon from "@mui/icons-material/StoreRounded";
import OndemandVideoRoundedIcon from "@mui/icons-material/OndemandVideoRounded";
import AlarmRoundedIcon from "@mui/icons-material/AlarmRounded";

import CalendarMonthRoundedIcon from "@mui/icons-material/CalendarMonthRounded";
import SportsEsportsRoundedIcon from "@mui/icons-material/SportsEsportsRounded";
import CollectionsRoundedIcon from "@mui/icons-material/CollectionsRounded";
import VideoCameraBackRoundedIcon from "@mui/icons-material/VideoCameraBackRounded";
import EmailRoundedIcon from "@mui/icons-material/EmailRounded";

import SavingsRoundedIcon from "@mui/icons-material/SavingsRounded";
// import LocalLibraryRoundedIcon from "@mui/icons-material/LocalLibraryRounded";
import SchoolRoundedIcon from "@mui/icons-material/SchoolRounded";
import { Link } from "react-router-dom";

const LeftBar = () => {
  const { currentUser } = useContext(AuthContext);
  return (
    <div className="leftbar">
      <div className="container">
        <div className="menu">
          <Link
            to={`/profile/${currentUser.id}`}
            style={{ textDecoration: "none" }}
          >
            <div className="item">
              <img src={currentUser.pfp} alt="user-profile-icon" />
              <span>{currentUser.name}</span>
            </div>
          </Link>
          <Link
            to="/notfound"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <div className="item">
              <PeopleAltRoundedIcon />
              <span>Friends</span>
            </div>
          </Link>
          <Link
            to="/notfound"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <div className="item">
              <GroupsRoundedIcon />
              <span>Groups</span>
            </div>
          </Link>
          <Link
            to="/notfound"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <div className="item">
              <StoreRoundedIcon />
              <span>Marketplace</span>
            </div>
          </Link>
          <Link
            to="/notfound"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <div className="item">
              <OndemandVideoRoundedIcon />
              <span>Watch</span>
            </div>
          </Link>
          <Link
            to="/notfound"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <div className="item">
              <AlarmRoundedIcon />
              <span>Memories</span>
            </div>
          </Link>
        </div>

        <hr />

        <span>Your shortcuts</span>

        <div className="menu">
          <Link
            to="/notfound"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <div className="item">
              <CalendarMonthRoundedIcon />
              <span>Events</span>
            </div>
          </Link>
          <Link
            to="/notfound"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <div className="item">
              <SportsEsportsRoundedIcon />
              <span>Gaming</span>
            </div>
          </Link>
          <Link
            to="/notfound"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <div className="item">
              <CollectionsRoundedIcon />
              <span>Gallery</span>
            </div>
          </Link>
          <Link
            to="/notfound"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <div className="item">
              <VideoCameraBackRoundedIcon />
              <span>Videos</span>
            </div>
          </Link>
          <Link
            to="/notfound"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <div className="item">
              <EmailRoundedIcon />
              <span>Messages</span>
            </div>
          </Link>
        </div>

        <hr />

        <span>Others</span>

        <div className="menu">
          <Link
            to="/notfound"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <div className="item">
              <SavingsRoundedIcon />
              <span>Fundraiser</span>
            </div>
          </Link>

          <Link
            to="/notfound"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <div className="item">
              <SchoolRoundedIcon />
              <span>Courses</span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LeftBar;
