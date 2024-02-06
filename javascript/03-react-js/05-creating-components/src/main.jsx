import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AlertsPage from "./pages/AlertsPage.jsx";
import ButtonsPage from "./pages/ButtonsPage.jsx";
import CardsPage from "./pages/CardsPage.jsx";
import HomePage from "./pages/HomePage.jsx";

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
        path: "/alerts",
        element: <AlertsPage />,
      },
      {
        path: "/buttons",
        element: <ButtonsPage />,
      },
      {
        path: "/cards",
        element: <CardsPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
