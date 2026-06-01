import React from "react";
import { Outlet } from "react-router-dom";
import {Nav, Footer} from '../../index.jsx';
const Layout = () => {
  return (
    <div className="app-layout">
      <Nav/>
      <Outlet/>
      <Footer/>
    </div>
  );
};

export default Layout;
