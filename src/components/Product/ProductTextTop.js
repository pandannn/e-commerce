import { Box, Container, Typography } from "@mui/material";
import React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const ProductTextTop = () => {
  return (
    <Container>
      <Box sx={{ display: "flex", marginTop: "1rem", marginBottom: "1rem" }}>
        <Typography>
          Women short Sleeve Shirts Thin Casual Fashion Loose Shirt Tops Womens
          Blouse 【Heavy Embroidery】Original Art Retro Peter
        </Typography>
      </Box>
      <Box sx={{ marginBottom: "1rem" }}>
        <Typography>฿786</Typography>
      </Box>
      <Stack
        spacing={2}
        direction="row"
        alignItems="center"
        sx={{ marginBottom: "1rem" }}
      >
        <Typography>Color</Typography>
        <Button variant="outlined">Navy</Button>
        <Button variant="outlined">White</Button>
        <Button variant="outlined">Blue</Button>
        <Button variant="outlined">Red</Button>
        <Button variant="outlined">Pink</Button>
      </Stack>
      <Stack
        spacing={2}
        direction="row"
        alignItems="center"
        sx={{ marginBottom: "1rem" }}
      >
        <Typography>size</Typography>
        <Button variant="outlined">M 40-50kg</Button>
        <Button variant="outlined">L 50-60kg</Button>
        <Button variant="outlined">XL 60-70kg</Button>
        <Button variant="outlined">2XL 70-80kg</Button>
      </Stack>
      <Stack spacing={2} direction="row" alignItems="center">
        <Button variant="contained">
          <ShoppingCartIcon /> Add To Cart
        </Button>
        <Button variant="contained">Buy Now</Button>
      </Stack>
    </Container>
  );
};

export default ProductTextTop;
