import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const { statusText } = useRouteError();

  return (
    <div className="bg-darkBlue min-h-screen p-10">
      <div className="flex justify-center mt-20">
        <img
          src="https://static-00.iconduck.com/assets.00/404-page-not-found-illustration-2048x998-yjzeuy4v.png"
          alt="Error page"
          className="w-56 sm:w-96"
        />
      </div>
      <div className="text-white text-center mt-5">
        <h4 className="text-xl sm:text-3xl">Oops! Page {statusText}</h4>
        <div className="underline text-lg sm:text-xl mt-3">
          <Link to={"/"}>Go Back</Link>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
