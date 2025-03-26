import React from "react";
import Stories from "../../components/stories/Stories";
import Posts from "../../components/posts/Posts";
import "./Home.scss";
import CreatePost from "../../components/createPost/CreatePost";

const Home = () => {
  return (
    <>
      <div className="home">
        <Stories />
        <CreatePost />
        <Posts />
      </div>
    </>
  );
};

export default Home;
