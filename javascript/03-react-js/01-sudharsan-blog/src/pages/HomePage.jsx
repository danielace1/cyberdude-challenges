import blogposts from "../blogposts.json";

const HomePage = () => {
  const blogpost = blogposts.map((post) => {
    return (
      <div
        className="bg-white text-darkBlue mt-10 w-full p-5 rounded border-dashed border-2 border-darkBlue"
        key={post.id}
      >
        <div className="grid sm:flex sm:space-x-8 ">
          <img
            src={post.image}
            alt={post.title}
            className="rounded w-full h-40 sm:w-60 sm:h-60"
          />
          <div className="flex flex-col  justify-center relative">
            <h1 className="font-semibold text-xl sm:text-2xl mt-2 sm:mt-0">
              {post.title}
            </h1>
            <span className="absolute w-40 h-1 top-8 xl:top-20 left-0 rounded bg-cyan"></span>
            {/* Fix this */}
            <p className="mt-5">{post.desc}</p>
          </div>
        </div>
      </div>
    );
  });

  return (
    <div className="bg-backGround text-white px-10 sm:px-24 py-10 min-h-screen relative">
      <div className="relative">
        <h1 className="font-semibold text-xl sm:text-2xl">Latest Blogs!</h1>
        <span className="absolute w-32 sm:w-40 h-1 top-8 rounded bg-cyan"></span>
      </div>

      {blogpost}
    </div>
  );
};

export default HomePage;
