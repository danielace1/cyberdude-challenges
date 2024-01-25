import { Outlet } from "react-router-dom";
import TheNavbar from "../components/TheNavbar";

const GuestLayout = () => {
  return (
    <>
      <TheNavbar />
      <div>
        <Outlet />
      </div>
    </>
  );
};

export default GuestLayout;
