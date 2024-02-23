import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between bg-blue-500 px-10 py-3">
      <div className="flex items-center">
        <img
          src="https://play-lh.googleusercontent.com/19I7zjhAAAud9AztLiIxD1MYVdHusoeaW2-7Fx2FUJvcVZBbUBcGKjBBVPsHkFBLWMs=w600-h300-pc0xffffff-pd"
          alt="make my trip"
          className="w-32"
        />
        <h1 className="font-Courgette text-white font-semibold text-3xl -ml-5">
          Make my Trip
        </h1>
      </div>

      <ul className="flex items-center text-white font-semibold text-lg space-x-10">
        <li
          className="hover:cursor-pointer  relative before:content-[''] before:absolute before:block before:w-full before:h-[3px] before:rounded 
              before:-bottom-5 before:left-0 before:bg-white
              before:hover:scale-x-100 before:scale-x-0 before:origin-top-left
              before:transition before:ease-in-out before:duration-300"
        >
          <Link to="/">Home</Link>
        </li>
        <li
          className="hover:cursor-pointer  relative before:content-[''] before:absolute before:block before:w-full before:h-[3px] before:rounded 
              before:-bottom-5 before:left-0 before:bg-white
              before:hover:scale-x-100 before:scale-x-0 before:origin-top-left
              before:transition before:ease-in-out before:duration-300"
        >
          <Link to="/maketripplan">Make a Trip Plan</Link>
        </li>
        <li
          className="hover:cursor-pointer  relative before:content-[''] before:absolute before:block before:w-full before:h-[3px] before:rounded 
              before:-bottom-5 before:left-0 before:bg-white
              before:hover:scale-x-100 before:scale-x-0 before:origin-top-left
              before:transition before:ease-in-out before:duration-300"
        >
          <Link to="/viewtripplan">View My Trip</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
