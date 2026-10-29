import { createBrowserRouter, RouterProvider } from "react-router";
import Home from "#routes/Home";
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
        element: <h1>Store</h1>,
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
