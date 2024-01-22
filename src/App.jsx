import { RouterProvider } from "react-router";
import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Team from "./pages/team/Team";
import Dashboard from "./pages/dashboard/Dashboard";
import Contact from "./pages/contact/Contact";
import Invoices from "./pages/invoices/Invoices";
import Form from "./pages/form/Form";
import Calendar from "./pages/calendar/Calendar";
import Faq from "./pages/charts/Faq";
import Pie from "./pages/charts/Pie";
import Line from "./pages/charts/Line";
import Geography from "./pages/charts/Geography";
import Bar from "./pages/charts/Bar";
import NotFound from "./pages/not-found/404";

const router = createBrowserRouter([
  {
    element: <Home />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        path: "/",
        element: <Dashboard />,
      },
      {
        path: "/team",
        element: <Team />,
      },
      {
        path: "/contacts",
        element: <Contact />,
      },
      {
        path: "/invoices",
        element: <Invoices />,
      },
      {
        path: "/form",
        element: <Form />,
      },

      {
        path: "/calendar",
        element: <Calendar />,
      },

      {
        path: "/faq",
        element: <Faq />,
      },

      {
        path: "/bar",
        element: <Bar />,
      },

      {
        path: "/pie",
        element: <Pie />,
      },

      {
        path: "/line",
        element: <Line />,
      },

      {
        path: "/geography",
        element: <Geography />,
      },
    ],
  },
]);

const App = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
