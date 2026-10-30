import { createBrowserRouter, RouterProvider } from "react-router";
import Home from "#routes/Home";
import Store from "#routes/Store";
import RootLayout from "#layouts/RootLayout";

const routes = [
  {
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/store",
        element: <Store />,
      },
      {
        path: "/checkout",
        element: <h1>Checkout</h1>,
      },
    ],
  },
];

const router = createBrowserRouter(routes);

function AppRouter() {
  return <RouterProvider router={router} />;
}

export default AppRouter;
