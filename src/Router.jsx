import { createBrowserRouter, RouterProvider } from "react-router-dom";

import ErrorPage from "./pages/ErrorPage";
import Home from "./pages/Home";
import Desert from "./pages/Desert";
import Wind from "./pages/Wind";
import Rain from "./pages/Rain";
import Forests from "./pages/Forests";
import Sea from "./pages/Sea";
import Waterfall from "./pages/Waterfall";
import Birds from "./pages/Birds";
import Thunder from "./pages/Thunder";
import Leaves from "./pages/Leaves";
import Fire from "./pages/Fire";
import Insects from "./pages/Insects";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/Desert",
    element: <Desert />,
  },
  {
    path: "/Wind",
    element: <Wind />,
  },
  {
    path: "/Rain",
    element: <Rain />,
  },
  {
    path: "/Forests",
    element: <Forests />,
  },
  {
    path: "/Sea",
    element: <Sea />,
  },
  {
    path: "/Waterfall",
    element: <Waterfall />,
  },
  {
    path: "/Birds",
    element: <Birds />,
  },
  {
    path: "/Thunder",
    element: <Thunder />,
  },
  {
    path: "/Falling Leaves",
    element: <Leaves />,
  },
  {
    path: "/Fire",
    element: <Fire />,
  },
  {
    path: "/Insects",
    element: <Insects />,
  },
]);

function Router() {
  return <RouterProvider router={router} />;
}

export default Router;
