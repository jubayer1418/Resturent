import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { ParallaxProvider } from "react-scroll-parallax";
import AuthProvider from "./Providers/AuthProvider.jsx";
import router from "./Routes/Routes.jsx";
import "./index.css";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <div className="max-w-screen-xl  mx-auto">
        <ParallaxProvider>
          <RouterProvider router={router} />
        </ParallaxProvider>
      </div>
    </AuthProvider>
  </React.StrictMode>
);
