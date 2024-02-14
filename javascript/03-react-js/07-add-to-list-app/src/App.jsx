import reactLogo from "./assets/react.svg";

const App = () => {
  return (
    <>
      <nav className="bg-orange-500 py-5 text-center text-white font-semibold text-2xl">
        <div className="flex justify-center space-x-3">
          <img src={reactLogo} alt="reactLogo" />
          <h1>Add to list App </h1>
        </div>
        <div></div>
      </nav>
    </>
  );
};

export default App;
