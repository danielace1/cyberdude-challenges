import { useState } from "react";
import TheNavbar from "./components/TheNavbar";
import { userContext } from "./context/userContext";

const App = () => {
  const [name, setName] = useState("Admin");

  const [color, setColor] = useState("#f59e0b");

  const inputName = (e) => {
    const res = e.target.value;
    res.length < 3 ? "" : setName(res);
  };

  const inputColor = (e) => {
    setColor(e.target.value);
  };

  const user = {
    username: name,
    colour: color,
  };

  return (
    <>
      <userContext.Provider value={user}>
        <TheNavbar />

        <div className="mx-auto m-20 max-w-xl space-y-7">
          <div>
            <label htmlFor="name" className="block mb-2">
              Name :
            </label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Enter your Name"
              className="bg-gray-200 px-5 py-2 outline-none rounded w-full"
              onChange={inputName}
            />
          </div>

          <div>
            <label htmlFor="color" className="block mb-2">
              Choose your Color :
            </label>
            <input
              type="color"
              name="color"
              id="color"
              className="bg-gray-200 px-4 py-1 h-10 outline-none rounded w-full"
              onChange={inputColor}
            />
          </div>
        </div>
      </userContext.Provider>
    </>
  );
};

export default App;
