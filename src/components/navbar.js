import React from "react";
import AppbarTop from "./Appbar/appbarTop";
import AppbarBottom from "./Appbar/appbarBottom";
import { Navbar } from "./Appbar/style";

const navbar = () => {
  return (
    <main>
      <Navbar>
        <AppbarTop />
        <AppbarBottom />
      </Navbar>
    </main>
  );
};

export default navbar;
