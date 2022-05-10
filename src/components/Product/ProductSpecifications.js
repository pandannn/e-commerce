import React from "react";
import Box from "@mui/material/Box";
import { Container, Typography } from "@mui/material";

const ProductSpecifications = () => {
  return (
    <Container>
      <Typography>Product Specifications</Typography>
      <Box>
        <Typography>Category</Typography>
        <Typography>
          Shopee : WoMen Clothes : Plus Size Clothes : Top
        </Typography>
      </Box>
      <Box sx={{ display: "flex" }}>
        <Typography sx={{ paddingRight: "3rem" }}>Materrail</Typography>
        <Typography>Chiffon</Typography>
      </Box>
      <Box sx={{ display: "flex" }}>
        <Typography sx={{ paddingRight: "3rem" }}>Occasion</Typography>
        <Typography>Casual</Typography>
      </Box>
      <Box sx={{ display: "flex" }}>
        <Typography sx={{ paddingRight: "3rem" }}>Plus Size</Typography>
        <Typography>Yes</Typography>
      </Box>
      <Box sx={{ display: "flex" }}>
        <Typography sx={{ paddingRight: "3rem" }}>Style</Typography>
        <Typography>Basic</Typography>
      </Box>
      <Box sx={{ display: "flex" }}>
        <Typography sx={{ paddingRight: "3rem" }}>Petite</Typography>
        <Typography>No</Typography>
      </Box>
      <Box sx={{ display: "flex" }}>
        <Typography sx={{ paddingRight: "3rem" }}>Country of Origin</Typography>
        <Typography>China</Typography>
      </Box>
    </Container>
  );
};

export default ProductSpecifications;
