import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";

const Layout = () => {
  return (
    <>
      <div className="bg-wallpaper h-[100vh] bg-cover bg-no-repeat bg-bottom font-nunito flex flex-col">
        <Header />
        <Outlet />
        <Footer />
      </div>
    </>
  );
};

export default Layout;
