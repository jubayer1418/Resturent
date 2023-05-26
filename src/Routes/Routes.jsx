import { createBrowserRouter } from "react-router-dom";
import Main from "../Latout/Main";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Menu from "../Pages/Menu/Menu";
import Order from "../Pages/Order/Order";
import Secret from "../Pages/Secret.jsx/Secret";
import SingUp from "../Pages/SingUp/SingUp";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      { path: "menu", element: <Menu></Menu> },
      { path: "order/:category", element: <Order></Order> },
      { path: "/login", element: <Login></Login> },
      { path: "/singup", element: <SingUp></SingUp> },
      {
        path: "secret",
        element: (
          <PrivateRoute>
            <Secret></Secret>
          </PrivateRoute>
        ),
      },
    ],
  },
]);
export default router;
