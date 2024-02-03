import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div className=" bg-black">
      <Navbar />

      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default App;
