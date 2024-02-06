import { Link } from "react-router-dom";
import reactlogo from "../assets/react.svg";

const HomePage = () => {
  return (
    <section className="bg-gray-800 mx-20 my-14 px-20 py-10 rounded">
      <div className="flex items-center space-x-5">
        <div>
          <img src={reactlogo} className="w-20  animate-spin" alt="reactlogo" />
        </div>
        <h1 className="text-white text-4xl font-semibold">React Components</h1>
      </div>
      <p className="text-gray-300 mt-5">
        React components are the building blocks of React applications,
        encapsulating reusable UI elements. They can be either functional
        components, defined as JavaScript functions, or class components,
        defined as ES6 classes. Components accept inputs called props and return
        JSX (JavaScript XML) to describe the UI structure. They enable
        modularization, reusability, and maintainability in React applications,
        allowing developers to create complex UIs by composing smaller, reusable
        pieces. Additionally, components manage their own state, allowing for
        dynamic and interactive user interfaces.
      </p>
      <Link to="/alerts">
        {" "}
        <button className="bg-sky-400 px-10 py-3 mt-5 rounded font-semibold text-white hover:bg-sky-500">
          Get Started
        </button>
      </Link>
    </section>
  );
};

export default HomePage;
