import React from "react";
import Checkbox from "@mui/material/Checkbox";
import { Box, Typography, Button } from "@mui/material";
import CardMedia from "@mui/material/CardMedia";

const ShoppingList = () => {
  return (
    <Box sx={{ display: "flex", justifyContent: "space-between" }}>
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Checkbox sx={{ paddingLeft: "1rem" }} />
        <CardMedia
          component="img"
          image="https://cf.shopee.co.th/file/1625203f3d829f95c2ab143a3226cd23"
          alt="green iguana"
          sx={{
            margin: "1rem",
            height: "80px",
            objectFit: "contain",
            display: "flex",
            width: 1 / 6,
          }}
        />
        <Typography sx={{ paddingInlineStart: "2rem" }}>
          Name of Product
        </Typography>
      </Box>
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Typography sx={{ paddingLeft: "2rem", paddingRight: "1rem" }}>
          Price
        </Typography>
        <Typography sx={{ paddingLeft: "2rem", paddingRight: "1rem" }}>
          Price
        </Typography>
        <Button>+</Button>
        <Typography sx={{ paddingLeft: "1rem", paddingRight: "1rem" }}>
          0
        </Typography>
        <Button>-</Button>
        <Button>Delite</Button>
      </Box>
    </Box>
  );
};

export default ShoppingList;
