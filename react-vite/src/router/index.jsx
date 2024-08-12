import { createBrowserRouter } from "react-router-dom";
import LoginFormPage from "../components/LoginFormPage";
import SignupFormPage from "../components/SignupFormPage";
import Layout from "./Layout";
import { Homepage } from "../components/HomePage";
import { PrivateRoute } from "../components/PrivateRoute";
import AdminPage from "../components/AdminPage/AdminPage";
import { AdoptionPage } from "../components/AdoptionPage";
import { DonatePage } from "../components/DonatePage";
import { VolunteerPage } from "../components/VolunteerPage";

export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Homepage />,
      },
      {
        path: "/adopt",
        element: <AdoptionPage />,
      },
      {
        path: "/donate",
        element: <DonatePage />,
      },
      {
        path: "/volunteer",
        element: <VolunteerPage />,
      },
      {
        path: "/admin",
        element: (
          <PrivateRoute>
            <AdminPage />
          </PrivateRoute>
        ),
      },
      {
        path: "/login",
        element: <LoginFormPage />,
      },
      {
        path: "signup",
        element: <SignupFormPage />,
      },
    ],
  },
]);
