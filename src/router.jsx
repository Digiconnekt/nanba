import { createBrowserRouter } from "react-router-dom";

import HeaderFooter from "./layouts/HeaderFooter";

import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Error404 from "./pages/Error404";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HeaderFooter />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
  {
    path: "*",
    element: <Error404 />,
  },
]);

export default router;
