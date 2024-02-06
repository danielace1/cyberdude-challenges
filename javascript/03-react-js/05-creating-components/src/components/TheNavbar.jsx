import reactlogo from "../assets/react.svg";

import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-violet-700 px-28 py-7 flex items-center text-white justify-between">
      <Link to="/">
        <div className="flex space-x-2 items-center">
          <img src={reactlogo} alt="reactlogo" className="w-12" />
          <h1 className="text-3xl">React Components</h1>
        </div>
      </Link>
      <ul className="flex  space-x-6 items-center text-lg">
        <li>
          <Link to={"/"} className="hover:cursor-pointer hover:text-blue-200">
            Home
          </Link>
        </li>
        <li>
          {" "}
          <Link
            to={"/alerts"}
            className="hover:cursor-pointer hover:text-blue-200"
          >
            Alerts
          </Link>
        </li>
        <li>
          {" "}
          <Link
            to={"/buttons"}
            className="hover:cursor-pointer hover:text-blue-200"
          >
            Buttons
          </Link>
        </li>
        <li>
          {" "}
          <Link
            to={"/cards"}
            className="hover:cursor-pointer hover:text-blue-200"
          >
            Cards
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
