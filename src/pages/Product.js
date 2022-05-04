import React from "react";
import { NavbarWrapper } from "../components/Common";
import ProductImg from "../components/Product/ProductImg";
import Box from "@mui/material/Box";
import ProductTextTop from "../components/Product/ProductTextTop";
import ProductShopCard from "../components/Product/ProductShopCard";
import ProductSpecifications from "../components/Product/ProductSpecifications";
import ProductDescription from "../components/Product/ProductDescription";

const product = () => {
  return (
    <main>
      <NavbarWrapper />
      {/* <Flex> */}
      <Box>
        <ProductImg />
        <ProductTextTop />
      </Box>
      <ProductShopCard />
      <ProductSpecifications />
      <ProductDescription />
    </main>
  );
};

export default product;
