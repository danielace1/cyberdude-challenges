import { Outlet } from "react-router-dom";
import Navbar from "./components/TheNavbar";

const App = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

export default App;
