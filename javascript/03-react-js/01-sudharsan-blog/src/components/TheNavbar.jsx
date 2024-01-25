const TheNavbar = () => {
  return (
    <div className="bg-darkBlue text-white flex items-center justify-between px-16 py-2">
      <div className="flex items-center">
        <div>
          <img
            src="\public/images/s-logo.png"
            alt="s-logo"
            className="w-32 relative"
          />
        </div>
        <h4 className="font-semibold text-2xl absolute left-[165px] top-14">
          udharsan&apos;s Blog
        </h4>
      </div>
      <ul className="flex items-center mt-3 space-x-10 text-lg">
        <li className="hover:cursor-pointer hover:text-cyan hover:transition transition">
          Home
        </li>
        <li className="hover:cursor-pointer hover:text-cyan hover:transition transition">
          About
        </li>
        <li className="bg-cyan text-darkBlue hover:cursor-pointer hover:text-white hover:transition transition  px-5 py-2 rounded-full">
          Contact
        </li>
      </ul>
    </div>
  );
};

export default TheNavbar;
