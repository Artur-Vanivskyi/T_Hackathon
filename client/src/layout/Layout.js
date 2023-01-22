import React from "react";
import Navbar from "../components/navbar/Navbar";
import Routes from "./Routes";


function Layout() {
  return (
    <>
      <div>
        <Navbar />
      </div>
      <div>
        <Routes />
      </div>
    </>
  );
}

export default Layout;
