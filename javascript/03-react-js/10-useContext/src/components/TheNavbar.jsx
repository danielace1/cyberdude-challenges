import { useContext } from "react";
import { userContext } from "../context/userContext";

const TheNavbar = () => {
  const user = useContext(userContext);

  return (
    <nav
      style={{ backgroundColor: user.colour }}
      className={` bg-amber-500 px-20 py-5 shadow-lg flex justify-between items-center`}
    >
      <div>
        <h1 className="font-semibold text-3xl text-white">useContext</h1>
      </div>
      <div>
        <h1
          title="Hi, How are you?"
          className="text-white font-semibold hover:cursor-pointer hover:text-gray-200 text-xl capitalize"
        >
          Welcome {user.username}
        </h1>
      </div>
    </nav>
  );
};

export default TheNavbar;
