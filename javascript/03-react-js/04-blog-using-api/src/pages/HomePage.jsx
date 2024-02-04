import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const allPosts = await fetch("https://dummyjson.com/posts");
      const jsonFormat = await allPosts.json();

      setPosts(jsonFormat.posts);
      console.log(jsonFormat);
    };
    fetchPosts();
  }, []);

  const blogPosts = posts.map((post) => {
    return (
      <div key={post.id}>
        <div>
          <Link to={`/blog/${post.id}`} className="">
            <div className="border border-gray-400 rounded p-3">
              <div className="mt-5 sm:flex lg:space-x-10 p-5 sm:p-0">
                <div className="">
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/6348/6348450.png"
                    alt="blog"
                    className="w-28 sm:w-56"
                  />
                </div>
                <div>
                  <h2 className="text-2xl font-semibold tracking-wide">
                    {post.title}
                  </h2>
                  <p className="text-md my-3">{post.body}</p>
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
                    <span className="flex space-x-3 mt-5">
                      {post.tags.map((tag) => (
                        <div
                          key={`tags-${tag}`}
                          className="bg-gray-400 rounded-full px-3 py-1 text-sm bg-opacity-30"
                        >
                          {tag}
                        </div>
                      ))}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>
    );
  });

  return (
    <div className="bg-gray-300 min-h-screen p-5 lg:px-28 py-10">
      <div className="space-y-5">{blogPosts}</div>
    </div>
  );
};

export default HomePage;
