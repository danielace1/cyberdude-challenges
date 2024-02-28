import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 items-center bg-blue-100 min-h-screen px-10 sm:px-20 py-5 sm:py-10">
      <div className="sm:-mt-44">
        <h1 className="text-blue-500 text-4xl lg:text-5xl mb-3 font-bold tracking-normal">
          TRIP PLANNER
        </h1>
        <p className="text-gray-500 lg:text-lg">
          Your go-to destination for seamless travel planning, making every trip
          extraordinary. Explore endless possibilities, plan your adventures,
          and make unforgettable memories with ease.
        </p>
        <Link to="/maketripplan">
          <button className="mt-5 sm:mt-10 bg-blue-500 px-6 sm:px-10  py-2 sm:py-3 text-white font-semibold rounded sm:text-lg hover:cursor-pointer hover:bg-blue-600">
            Plan Your Trip
          </button>
        </Link>
      </div>
      <div className="sm:-mt-36">
        <img
          src="https://cdni.iconscout.com/illustration/premium/thumb/international-travel-planning-4919782-4094447.png"
          alt="make my trip planner"
          className="md:ml-10 lg:ml-20 w-full"
        />
      </div>
    </div>
  );
};

export default HomePage;
