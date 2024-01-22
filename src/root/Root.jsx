import React from "react";
import { Outlet } from "react-router-dom";
import MiniDrawer from "../components/drawer/MiniDrawer";

const Root = () => {
  return (
    <>
      <MiniDrawer />
      <Outlet />
    </>
  );
};

export default Root;
