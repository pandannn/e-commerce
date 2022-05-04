import React from "react";
import { Navbar } from "../Appbar/style";
import { AppBarBottom, AppBarTop } from "../Appbar";

const NavbarWrapper = () => {
  return (
    <main>
      <Navbar>
        <AppBarTop />
        <AppBarBottom />
      </Navbar>
    </main>
  );
};

export default NavbarWrapper;
