import React from "react";
import { AppBarBottom, AppBarTop } from "../Appbar";
import { Navbar } from "../Appbar/style";

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
