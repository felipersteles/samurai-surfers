import { createBrowserRouter } from "react-router-dom";
import { Home, CityPage } from "../pages";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/:cityName/:cityId",
    element: <CityPage />,
  },
]);
