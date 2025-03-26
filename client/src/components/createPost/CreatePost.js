import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import "./CreatePost.scss";

import ImageRoundedIcon from "@mui/icons-material/ImageRounded";

const CreatePost = () => {
  const { currentUser } = useContext(AuthContext);
  return (
    <div className="create">
      <div className="upper">
        <img src={currentUser.pfp} alt="" />
        <input
          type="text"
          placeholder={`What's on your mind ${currentUser.name}?`}
        />
      </div>
      <div className="lower">
        <div className="attach">
          <ImageRoundedIcon />
          <span>Attatch Image</span>
        </div>
        <button>Post</button>
      </div>
    </div>
  );
};

export default CreatePost;
