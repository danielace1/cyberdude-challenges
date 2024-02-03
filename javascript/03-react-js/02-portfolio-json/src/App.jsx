import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Animation from "./components/Animation";

const App = () => {
  return (
    <div className=" bg-black">
      <Navbar />
      <Animation />
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default App;
