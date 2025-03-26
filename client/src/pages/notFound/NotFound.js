import React from "react";
import "./NotFound.scss";

import ConstructionRoundedIcon from "@mui/icons-material/ConstructionRounded";

const NotFound = () => {
  return (
    <div className={`notfoundbody`}>
      <div className="notfoundcard">
        <ConstructionRoundedIcon
          style={{ fontSize: "10vw", color: "#0085d7" }}
        />
        <div className="notfoundtext">
          <span className="notfoundheader">
            Sorry! can't<span> Greet :(</span>
          </span>
          <span className="notfoundbodyText">
            This page is under development.
          </span>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
