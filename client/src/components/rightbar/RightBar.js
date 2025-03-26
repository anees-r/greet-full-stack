import React from "react";
import "./RightBar.scss";
import { Link } from "react-router-dom";

import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

const RightBar = () => {
  const { currentUser } = useContext(AuthContext);

  return (
    <div className="rightbar">
      {/*  */}

      <div className="container">
        <span>Friend Requests</span>
        <div className="user">
          <div className="userInfo">
            <img src={currentUser.pfp} alt="user-profile-icon" />
            <Link
              to={`/profile/${currentUser.id}`}
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <span>{currentUser.name}</span>
            </Link>
          </div>
          <div className="buttons">
            <button>Accept</button>
            <button>Reject</button>
          </div>
        </div>
        <div className="user">
          <div className="userInfo">
            <img src={currentUser.pfp} alt="user-profile-icon" />
            <Link
              to={`/profile/${currentUser.id}`}
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <span>{currentUser.name}</span>
            </Link>
          </div>
          <div className="buttons">
            <button>Accept</button>
            <button>Reject</button>
          </div>
        </div>
      </div>

      {/*  */}

      <div className="container">
        <span>Recent Activities</span>
        <div className="user">
          <div className="userInfo">
            <img src={currentUser.pfp} alt="user-profile-icon" />
            <p>
              <Link
                to={`/profile/${currentUser.id}`}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <span>{currentUser.name}</span> Changed profile picture.
              </Link>
            </p>
          </div>
          <span>1 minute ago</span>
        </div>
        <div className="user">
          <div className="userInfo">
            <img src={currentUser.pfp} alt="user-profile-icon" />
            <p>
              <Link
                to={`/profile/${currentUser.id}`}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <span>{currentUser.name}</span> Changed profile picture.
              </Link>
            </p>
          </div>
          <span>1 minute ago</span>
        </div>
        <div className="user">
          <div className="userInfo">
            <img src={currentUser.pfp} alt="user-profile-icon" />
            <p>
              <Link
                to={`/profile/${currentUser.id}`}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <span>{currentUser.name}</span> Changed profile picture.
              </Link>
            </p>
          </div>
          <span>1 minute ago</span>
        </div>
        <div className="user">
          <div className="userInfo">
            <img src={currentUser.pfp} alt="user-profile-icon" />
            <p>
              <Link
                to={`/profile/${currentUser.id}`}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <span>{currentUser.name}</span> Changed profile picture.
              </Link>
            </p>
          </div>
          <span>1 minute ago</span>
        </div>
      </div>

      {/*  */}

      <div className="container">
        <span>Online Friends</span>
        <div className="user">
          <div className="userInfo">
            <img src={currentUser.pfp} alt="user-profile-icon" />
            <div className="online" />
            <Link
              to={`/profile/${currentUser.id}`}
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <span>{currentUser.name}</span>
            </Link>
          </div>
        </div>
        <div className="user">
          <div className="userInfo">
            <img src={currentUser.pfp} alt="user-profile-icon" />
            <div className="online" />
            <Link
              to={`/profile/${currentUser.id}`}
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <span>{currentUser.name}</span>
            </Link>
          </div>
        </div>
        <div className="user">
          <div className="userInfo">
            <img src={currentUser.pfp} alt="user-profile-icon" />
            <div className="online" />
            <Link
              to={`/profile/${currentUser.id}`}
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <span>{currentUser.name}</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightBar;
