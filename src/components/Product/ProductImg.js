import React from "react";
import CardMedia from "@mui/material/CardMedia";

import Container from "@mui/material/Container";

const ProductImg = () => {
  return (
    <Container>
      <CardMedia
        component="img"
        height="450"
        image="https://cf.shopee.co.th/file/1625203f3d829f95c2ab143a3226cd23"
        alt="Paella dish"
      />
    </Container>
  );
};

export default ProductImg;
