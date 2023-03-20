import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import SideNav from "./SideNav";
import Dashboard from "../Dashboard/Dashboard";

function Layout() {
  return (
    <div>
      <Header />
      <SideNav />

      <Dashboard />
      {/* <Footer /> */}
    </div>
  );
}

export default Layout;
