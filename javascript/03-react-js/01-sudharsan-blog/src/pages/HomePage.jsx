import { Link } from "react-router-dom";
import blogposts from "../data/blogposts.json";

const HomePage = () => {
  const blogpost = blogposts.map((post) => {
    return (
      <Link to={`/blog/${post.id}`} key={post.id}>
        <div className="bg-white text-darkBlue mt-10 w-full p-5 rounded border-dashed border-2 border-darkBlue">
          <div className="grid sm:flex sm:space-x-8">
            <img
              src={post.image}
              alt={post.title}
              className="rounded w-full h-40 sm:w-96 sm:h-60"
            />
            <div className="flex flex-col justify-center">
              <h1
                className="font-semibold text-xl sm:text-2xl mt-2 sm:mt-0 
              relative before:content-[''] before:absolute before:block before:w-1/2 before:h-[3px] before:rounded 
              before:-bottom-1 before:left-0 before:bg-cyan
              before:hover:scale-x-100 before:scale-x-0 before:origin-top-left
              before:transition before:ease-in-out before:duration-300"
              >
                {post.title}
              </h1>
              <p className="mt-5">{post.desc}</p>
              <div className="grid sm:flex mt-5 sm:mt-8 justify-between items-center">
                <span className="text-gray-500">Author: Sudharsan</span>
                <span className="text-gray-500">{post.postedOn}</span>
              </div>
            </div>
          </div>
        </div>
      </Link>
    );
  });

  return (
    <div className="bg-backGround text-white px-10 sm:px-24 py-10 min-h-screen">
      <div className="relative">
        <h1 className="font-semibold text-xl sm:text-2xl">Latest Blogs!</h1>
        <span className="absolute w-32 sm:w-40 h-1 top-8 rounded bg-cyan"></span>
      </div>

      {blogpost}
    </div>
  );
};

export default HomePage;
