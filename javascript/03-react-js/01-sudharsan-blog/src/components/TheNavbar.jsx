import { Link } from "react-router-dom";

const TheNavbar = () => {
  return (
    <div className="bg-darkBlue text-white sm:flex items-center sm:justify-between sm:px-16 py-2">
      <div className="flex items-center">
        <div>
          <Link to="/">
            <img
              src="/images/s-logo.png"
              alt="s-logo"
              className="w-28 sm:w-32 relative"
            />
          </Link>
        </div>
        <h4 className="font-semibold text-2xl absolute left-[85px] sm:left-[163px] top-12 sm:top-14">
          {/* Logo */}
          udharsan&apos;s Blog
        </h4>
      </div>
      <ul className="flex items-center justify-start px-10 sm:px-0 mt-3 space-x-10 text-md sm:text-lg">
        <li className="hover:cursor-pointer hover:text-cyan hover:transition transition">
          <Link to="/">Home</Link>
        </li>
        <li className="hover:cursor-pointer hover:text-cyan hover:transition transition">
          <Link to="/about">About</Link>
        </li>
        <li className="bg-cyan text-darkBlue hover:cursor-pointer hover:text-white hover:transition transition  px-5 py-1 rounded-full">
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </div>
  );
};

export default TheNavbar;
