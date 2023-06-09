import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../Latout/Dashboard";
import Main from "../Latout/Main";
import AddItem from "../Pages/Dashboard/AddItem";
import AllUsers from "../Pages/Dashboard/AllUsers";
import ManageItems from "../Pages/Dashboard/ManageItems";
import MyCart from "../Pages/Dashboard/MyCart";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Menu from "../Pages/Menu/Menu";
import Order from "../Pages/Order/Order";
import Secret from "../Pages/Secret.jsx/Secret";
import SingUp from "../Pages/SingUp/SingUp";
import AdminRoute from "./AdminRoute";
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
  {
    path: "dashboard",
    element: (
      <PrivateRoute>
        <Dashboard></Dashboard>
      </PrivateRoute>
    ),
    children: [
      {
        path: "mycart",
        element: <MyCart></MyCart>,
      },
      {
        path: "allusers",
        element: <AllUsers></AllUsers>,
      },
      {
        path: "addItem",
        element: (
          <AdminRoute>
            <AddItem></AddItem>
          </AdminRoute>
        ),
      },
      {
        path: "manageitems",
        element: (
          <AdminRoute>
            <ManageItems></ManageItems>
          </AdminRoute>
        ),
      },
    ],
  },
]);
export default router;
