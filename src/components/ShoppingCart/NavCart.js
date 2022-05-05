import React from "react";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import { Box, Typography } from "@mui/material";

const NavCart = () => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Box sx={{ display: "flex", paddingLeft: "1rem" }}>
          <FormControlLabel control={<Checkbox />} label="All Product" />
        </Box>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Typography sx={{ paddingInlineEnd: "2rem" }}>Unit Price</Typography>
          <Typography sx={{ paddingInlineEnd: "2rem" }}>Quantity</Typography>
          <Typography sx={{ paddingInlineEnd: "2rem" }}>Total Price</Typography>
          <Typography sx={{ paddingInlineEnd: "2rem" }}>Actions</Typography>
        </Box>
      </Box>
    </>
  );
};

export default NavCart;
