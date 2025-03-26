import "./post.scss";
import { useState } from "react";
import { Link } from "react-router-dom";

import MoreHorizRoundedIcon from "@mui/icons-material/MoreHorizRounded";
import FavoriteBorderRoundedIcon from "@mui/icons-material/FavoriteBorderRounded";
import FavoriteRoundedIcon from "@mui/icons-material/FavoriteRounded";
import CommentRoundedIcon from "@mui/icons-material/CommentRounded";
import SendRoundedIcon from "@mui/icons-material/SendRounded";
import Comments from "../comments/Comments";

const Post = (props) => {
  const [isLiked, setIsLiked] = useState(false);
  const [openComments, setOpenComments] = useState(false);

  return (
    <div className="post">
      <div className="container">
        <div className="user">
          <div className="userInfo">
            <img src={props.post.pfp} alt="" />
            <div className="userDetail">
              <Link
                to={`/profile/${props.post.uid}`}
                style={{
                  textDecoration: "none",
                  fontWeight: "bold",
                  color: "inherit",
                }}
              >
                {props.post.name}
              </Link>
              <span>Few seconds ago</span>
            </div>
          </div>
          <Link
            to="/notfound"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <MoreHorizRoundedIcon style={{ cursor: "pointer" }} />
          </Link>
        </div>

        {/*  */}

        <div className="content">
          <span>{props.post.desc}</span>
          <img src={props.post.img} alt="" />
        </div>

        {/*  */}

        <div className="interactions">
          <div className="interaction">
            {isLiked ? (
              <FavoriteRoundedIcon
                style={{ cursor: "pointer", color: "#0085d7" }}
                onClick={() => setIsLiked(!isLiked)}
              />
            ) : (
              <FavoriteBorderRoundedIcon
                style={{ cursor: "pointer" }}
                onClick={() => setIsLiked(!isLiked)}
              />
            )}
            12 Likes
          </div>
          <div
            className="interaction"
            onClick={() => setOpenComments(!openComments)}
            style={{ cursor: "pointer" }}
          >
            <CommentRoundedIcon />8 Comments
          </div>
          <Link
            to="/notfound"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <div className="interaction">
              <SendRoundedIcon style={{ cursor: "pointer" }} />
              Share
            </div>
          </Link>
        </div>
        {openComments && <Comments />}
      </div>
    </div>
  );
};

export default Post;
