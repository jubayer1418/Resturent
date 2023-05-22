import { Outlet } from "react-router-dom";
import Footer from "../Pages/Shered/Footer";
import Navbar from "../Pages/Shered/Navbar";

const Main = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Main;
