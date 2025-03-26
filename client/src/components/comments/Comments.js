import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./Comments.scss";
import { AuthContext } from "../../context/AuthContext";

const Comments = () => {
  const { currentUser } = useContext(AuthContext);
  //temp
  const comments = [
    {
      id: 1,
      name: "John Doe",
      uid: 2,
      pfp: "https://cdn.prod.website-files.com/62bdc93e9cccfb43e155104c/654f6d06e4b0eb4c69157847_Funny%2520PFP%2520for%2520Tiktok%252040.png",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
    },
    {
      id: 2,
      name: "Don Joe",
      uid: 3,
      pfp: "https://preview.redd.it/bcyq3rjk2w071.png?width=1080&crop=smart&auto=webp&s=f1393965fbc7cf1c46af84678b83624d4ccdbdf7",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
    },
  ];
  return (
    <>
      <div className="comments">
        <div className="write">
          <img src={currentUser.pfp} alt="user-profile-pic" />
          <input
            type="text"
            name="comment"
            id="comment"
            placeholder="Express your opinion"
          />
          <button>Send</button>
        </div>
        {comments.map((comment) => (
          <div className="comment" key={comment.id}>
            <img src={comment.pfp} alt="" />
            <div className="commentBody">
              <div className="commentHeader">
                <Link
                  to={`/profile/${comment.uid}`}
                  style={{
                    textDecoration: "none",
                    fontWeight: "bold",
                    color: "inherit",
                  }}
                >
                  {comment.name}
                </Link>
                <span>1 hour ago</span>
              </div>
              <span>{comment.desc}</span>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Comments;
