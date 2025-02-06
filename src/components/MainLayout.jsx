import React from "react";
import HeaderNav from "./HeaderNav";
import Footer from "./Footer";
import { Outlet } from "react-router";

export default function MainLayout() {
  return (
    <>
      <HeaderNav />
      <Outlet />
      <Footer />
    </>
  );
}
