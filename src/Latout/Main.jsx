import { Outlet, useLocation } from "react-router-dom";
import Footer from "../Pages/Shered/Footer";
import Navbar from "../Pages/Shered/Navbar";

const Main = () => {
  const location = useLocation();

  const noHeaderFooter =
    location.pathname.includes("login") || location.pathname.includes("singup");
  return (
    <div>
      {noHeaderFooter || <Navbar></Navbar>}
      <Outlet></Outlet>
      {noHeaderFooter || <Footer></Footer>}
    </div>
  );
};

export default Main;
