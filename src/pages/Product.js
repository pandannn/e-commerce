import { Container } from "@mui/material";
import React from "react";
import { NavbarWrapper } from "../components/Common";

const Product = () => {
  return (
    <main>
      {/* navbar */}
      <NavbarWrapper />
      {/* body */}
      <Container>
        <div>
          <img src="https://cf.shopee.co.th/file/1625203f3d829f95c2ab143a3226cd23" />
        </div>
      </Container>
    </main>
  );
};

export default Product;
