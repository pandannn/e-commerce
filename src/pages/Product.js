import { Container } from "@mui/material";
import React from "react";
import { NavbarWrapper } from "../components/Common";
import {
  ProductDescription,
  ProductImg,
  ProductShopCard,
  ProductSpecifications,
  ProductTextTop,
} from "../components/Product";

const Product = () => {
  return (
    <>
      {/* navbar */}
      <NavbarWrapper />
      {/* body */}
      <Container sx={{ display: "flex" }}>
        <ProductImg />
        <ProductTextTop />
      </Container>
      <ProductShopCard sx={{ marginTop: "1rem" }} />
      <ProductSpecifications sx={{ marginTop: "1rem" }} />
      <ProductDescription sx={{ marginTop: "1rem" }} />
    </>
  );
};

export default Product;
