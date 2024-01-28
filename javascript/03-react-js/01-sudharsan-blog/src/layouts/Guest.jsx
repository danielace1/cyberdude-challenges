import { Outlet } from "react-router-dom";
import TheNavbar from "../components/TheNavbar";
import Footer from "../components/Footer";

const GuestLayout = () => {
  return (
    <>
      <TheNavbar />
      <div>
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default GuestLayout;
