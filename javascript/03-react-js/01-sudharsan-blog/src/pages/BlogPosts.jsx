import { useParams } from "react-router-dom";
import blogposts from "../data/blogposts.json";
import { Link } from "react-router-dom";

const BlogPostPage = () => {
  const { id } = useParams();
  const post = blogposts.find((post) => post.id === id);

  return (
    <div className="bg-backGround min-h-screen px-10 sm:px-24 py-10 ">
      <div className="bg-white text-darkBlue mt-10 w-full p-5 rounded border-dashed border-2 border-darkBlue">
        <div className="grid sm:flex sm:space-x-8">
          <img
            src={post.image}
            alt={post.title}
            className="rounded w-full h-40 sm:w-96 sm:h-60"
          />
          <div className="flex flex-col  justify-center">
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
      <div className="bg-white text-darkBlue mt-10 w-full p-5 sm:p-10 space-y-5 divide-y-2 divide-cyan rounded shadow-lg">
        <div>
          <h1 className="text-xl font-semibold text-darkBlue">
            {post.heading1}
          </h1>
          <p className="mt-3">{post.desc1}</p>
        </div>
        <div className="py-3">
          <h1 className="text-xl font-semibold text-darkBlue">
            {post.heading2}
          </h1>
          <p className="mt-3">{post.desc2}</p>
        </div>
        <div className="py-3">
          <h1 className="text-xl font-semibold text-darkBlue">
            {post.heading3}
          </h1>
          <p className="mt-3">{post.desc3}</p>
        </div>
        <div className="py-3">
          <h1 className="text-xl font-semibold text-darkBlue">
            {post.heading4}
          </h1>
          <p className="mt-3">{post.desc4}</p>
        </div>
      </div>
      <Link to="/" className="flex justify-center">
        {" "}
        <button className="text-white font-semibold mt-5 bg-cyan px-7 py-2 rounded hover:bg-teal-500">
          Back to Blogs
        </button>
      </Link>
    </div>
  );
};

export default BlogPostPage;
