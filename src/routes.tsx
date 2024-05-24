import { createBrowserRouter } from "react-router-dom";

import { Dashboard } from "./pages/app/dashboard";
import { Signin } from "./pages/auth/signin";
import { SignUp } from "./pages/auth/signup";
import { AppLayout } from "./pages/layouts/app";
import { AuthLayout } from "./pages/layouts/auth";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [{ path: "/", element: <Dashboard /> }],
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
]);
