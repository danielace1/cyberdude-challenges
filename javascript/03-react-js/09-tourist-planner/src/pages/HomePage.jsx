import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="grid grid-cols-2 items-center bg-blue-100 min-h-screen px-20 py-10">
      <div className="-mt-44">
        <h1 className="text-blue-500 text-5xl mb-3 font-bold tracking-normal">
          TRIP PLANNER
        </h1>
        <p className="text-gray-500 text-lg">
          Your go-to destination for seamless travel planning, making every trip
          extraordinary. Explore endless possibilities, plan your adventures,
          and make unforgettable memories with ease.
        </p>
        <Link to="/maketripplan">
          <button className="mt-10 bg-blue-500 px-10 py-3 text-white font-semibold rounded text-lg hover:cursor-pointer hover:bg-blue-600">
            Plan Your Trip
          </button>
        </Link>
      </div>
      <div className="-mt-36">
        <img
          src="https://cdni.iconscout.com/illustration/premium/thumb/international-travel-planning-4919782-4094447.png"
          alt="make my trip planner"
          className="ml-20 w-full"
        />
      </div>
    </div>
  );
};

export default HomePage;
