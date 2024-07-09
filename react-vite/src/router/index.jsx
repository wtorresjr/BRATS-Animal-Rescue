import { createBrowserRouter } from "react-router-dom";
import LoginFormPage from "../components/LoginFormPage";
import SignupFormPage from "../components/SignupFormPage";
import Layout from "./Layout";
import { Homepage } from "../components/HomePage";
import { PrivateRoute } from "../components/PrivateRoute";

export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <LoginFormPage />,
      },
      {
        path: "/home",
        element: (
          // <PrivateRoute>
            <Homepage />
          // </PrivateRoute>
        ),
      },
      {
        path: "signup",
        element: <SignupFormPage />,
      },
    ],
  },
]);
