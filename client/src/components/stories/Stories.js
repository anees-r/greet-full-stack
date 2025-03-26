import { useContext } from "react";
import "./Stories.scss";
import { AuthContext } from "../../context/AuthContext";

const Stories = () => {
  const { currentUser } = useContext(AuthContext);
  //temp
  const stories = [
    {
      id: 1,
      name: "John Doe",
      img: "https://images.pexels.com/photos/3094799/pexels-photo-3094799.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    },
    {
      id: 2,
      name: "John Doe",
      img: "https://images.pexels.com/photos/3094799/pexels-photo-3094799.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    },
    {
      id: 3,
      name: "John Doe",
      img: "https://images.pexels.com/photos/3094799/pexels-photo-3094799.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    },
    {
      id: 4,
      name: "John Doe",
      img: "https://images.pexels.com/photos/3094799/pexels-photo-3094799.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    },
  ];
  return (
    <>
      <div className="stories">
        <div className="story">
          <div className="gradient" />
          <button>+</button>
          <img src={currentUser.pfp} alt="" />
          <span>{currentUser.name}</span>
        </div>
        {stories.map((story) => (
          <div className="story" key={story.id}>
            <div className="gradient" />
            <img src={story.img} alt="" />
            <span>{story.name}</span>
          </div>
        ))}
      </div>
    </>
  );
};

export default Stories;
