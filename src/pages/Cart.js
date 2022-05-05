import { Box, Container } from "@mui/material";
import React from "react";
import { NavbarWrapper } from "../components/Common";
import { NavCart, ShoppingList, NavTotal } from "../components/ShoppingCart";

const Cart = () => {
  return (
    <>
      <NavbarWrapper />
      <Box sx={{ bgcolor: "#f5f5f5" }}>
        <Container>
          <NavCart />
          <ShoppingList />
          <NavTotal />
        </Container>
      </Box>
    </>
  );
};

export default Cart;
