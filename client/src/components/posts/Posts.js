import Post from "../post/post";
import "./Posts.scss";

const Posts = () => {
  const posts = [
    {
      id: 1,
      name: "John Doe",
      uid: 2,
      pfp: "https://cdn.prod.website-files.com/62bdc93e9cccfb43e155104c/654f6d06e4b0eb4c69157847_Funny%2520PFP%2520for%2520Tiktok%252040.png",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus dolore ut illum incidunt asperiores dolores eaque beatae suscipit aperiam, quia quod pariatur, magnam expedita dolorem reiciendis.",
      img: "https://i.ytimg.com/vi/Drh_fAV4XNM/maxresdefault.jpg",
    },
    {
      id: 2,
      name: "Don Joe",
      uid: 3,
      pfp: "https://preview.redd.it/bcyq3rjk2w071.png?width=1080&crop=smart&auto=webp&s=f1393965fbc7cf1c46af84678b83624d4ccdbdf7",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus dolore ut illum incidunt asperiores dolores eaque beatae suscipit aperiam, quia quod pariatur, magnam expedita dolorem reiciendis.",
    },
  ];
  return (
    <>
      <div className="posts">
        {posts.map((post) => (
          <Post post={post} key={post.id} />
        ))}
      </div>
    </>
  );
};

export default Posts;
