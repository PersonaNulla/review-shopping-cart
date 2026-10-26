import { createBrowserRouter } from "react-router";
import Home from "#routes/Home";

const routes = [
  {
    path: "/",
    element: <Home />,
  },
];

const router = createBrowserRouter(routes);

export default router;
