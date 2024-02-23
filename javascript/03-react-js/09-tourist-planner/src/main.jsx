import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import HomePage from "./pages/HomePage.jsx";
import MakeTripPlan from "./pages/MakeTripPlan.jsx";
import ViewTripPlan from "./pages/ViewTripPlan.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/maketripplan",
        element: <MakeTripPlan />,
      },
      {
        path: "/viewtripplan",
        element: <ViewTripPlan />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
