import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

const Blog = () => {
  const { id } = useParams();
  const [post, setPost] = useState([]);
  useEffect(() => {
    const postId = async () => {
      const singlePost = await fetch(`https://dummyjson.com/posts/${id}`);
      const jsonFormat = await singlePost.json();
      setPost(jsonFormat);
      console.log(jsonFormat);
    };
    postId();
  }, [id]);

  return (
    <div className="flex justify-center items-center mt-28">
      <div className="w-[850px] gap-y-3 flex flex-col justify-center items-center">
        <h2 className="text-4xl font-semibold tracking-wide">{post.title}</h2>
        <p className="max-w-2xl">{post.body}</p>
        <div className="flex items-center space-x-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 48 48"
          >
            <g
              fill="none"
              stroke="currentColor"
              strokeLinejoin="round"
              strokeWidth={4}
            >
              <path d="M27.6 18.6v-7.2A5.4 5.4 0 0 0 22.2 6L15 22.2V42h20.916a3.6 3.6 0 0 0 3.6-3.06L42 22.74a3.6 3.6 0 0 0-3.6-4.14z" />
              <path
                fill="currentColor"
                d="M15 22h-4.806C8.085 21.963 6.283 23.71 6 25.8v12.6a4.158 4.158 0 0 0 4.194 3.6H15z"
              />
            </g>
          </svg>
          <span>{post.reactions}</span>
        </div>
        <div className="pb-3">
          {post.tags?.length > 0 && (
            <span className="flex space-x-3 mt-5">
              {post.tags.map((tag, index) => (
                <div
                  key={`tag-${index}`}
                  className="bg-gray-400 rounded-full px-3 py-1 text-sm bg-opacity-30"
                >
                  {tag}
                </div>
              ))}
            </span>
          )}
        </div>
        <button className="mt-5">
          <Link className="bg-gray-400 rounded px-5 py-2" to={"/home"}>
            Back to Blogs
          </Link>
        </button>
      </div>
    </div>
  );
};

export default Blog;
