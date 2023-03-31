import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";

export const Layout = () => {
  return (
    <div className="flex relative">
      <Header />
      <Outlet />
    </div>
  );
};
