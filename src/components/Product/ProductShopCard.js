import React from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import StoreIcon from "@mui/icons-material/Store";
import TextsmsIcon from "@mui/icons-material/Textsms";
import { Box, Button, Container, Typography } from "@mui/material";

const ProductShopCard = () => {
  return (
    <Container>
      <Box sx={{ display: "flex" }}>
        <AccountCircleIcon />
        <Typography sx={{ paddingLift: "1rem" }}>n71b9wasxo</Typography>
      </Box>
      <Box>
        <Button variant="contained">
          <TextsmsIcon />
          Chat Now
        </Button>
        <Button variant="contained">
          <StoreIcon />
          View Shop
        </Button>
      </Box>
    </Container>
  );
};

export default ProductShopCard;
