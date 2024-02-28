import Navbar from "./components/TheNavbar";
import TheFooter from "./components/TheFooter";
import { Outlet } from "react-router-dom";

const App = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <TheFooter />
    </>
  );
};

export default App;
