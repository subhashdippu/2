import { createBrowserRouter } from "react-router-dom";
import Main from "../pages/main";
import Home from "../pages/home";
import LeadsPage from "../pages/leadsPage";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    element: <LeadsPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
]);
export default router;
