import { createBrowserRouter } from "react-router-dom";
import LoginFormPage from "../components/LoginFormPage";
import SignupFormPage from "../components/SignupFormPage";
import Layout from "./Layout";
import { Homepage } from "../components/HomePage";
import { PrivateRoute } from "../components/PrivateRoute";
import { AdminPageRescues } from "../components/AdminPage";
import { AdminPageEvents } from "../components/AdminPage";
import { AdoptionPage } from "../components/AdoptionPage";
import { DonatePage } from "../components/DonatePage";
import { VolunteerPage } from "../components/VolunteerPage";
import { ComingSoon } from "../components/ComingSoon";
import { MissionPage } from "../components/MissionPage";
import { EventsPage } from "../components/EventsPage";

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
        path: "/sponsors",
        element: <ComingSoon />,
      },
      {
        path: "/mission",
        element: <MissionPage />,
      },
      {
        path: "/events",
        element: <EventsPage />,
      },
      {
        path: "/admin",
        element: (
          <PrivateRoute>
            <AdminPageRescues />
          </PrivateRoute>
        ),
      },
      {
        path: "/admin/events",
        element: (
          <PrivateRoute>
            <AdminPageEvents />
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
