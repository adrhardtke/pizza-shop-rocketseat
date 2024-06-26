import { createBrowserRouter } from "react-router-dom";

import { NotFound } from "./pages/404";
import { Dashboard } from "./pages/app/dashboard/dashboard";
import { Orders } from "./pages/app/orders/orders";
import { Signin } from "./pages/auth/signin";
import { SignUp } from "./pages/auth/signup";
import { Error } from "./pages/error";
import { AppLayout } from "./pages/layouts/app";
import { AuthLayout } from "./pages/layouts/auth";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      { path: "/", element: <Dashboard /> },
      { path: "/orders", element: <Orders /> },
    ],
  },
  {
    path: "/",
    element: <AuthLayout />,
    children: [
      { path: "/signin", element: <Signin /> },
      {
        path: "/signup",
        element: <SignUp />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);
