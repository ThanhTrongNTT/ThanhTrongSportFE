import React from "react";
import Header from "../component/Header/header";
import Footer from "../component/Footer/footer";
import { Outlet } from "react-router-dom";

const LayoutDefault = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default LayoutDefault;
