import { Box, Button, Checkbox, Typography } from "@mui/material";
import React from "react";

const NavTotal = () => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Checkbox sx={{ paddingLeft: "1rem" }} />
        <Typography sx={{ paddingInlineStart: "2rem" }}>Select All</Typography>
      </Box>
      <Box sx={{ display: "flex" }}>
        <Typography sx={{ paddingLeft: "2rem", paddingRight: "2rem" }}>
          Total
        </Typography>
        <Typography sx={{ paddingLeft: "2rem", paddingRight: "2rem" }}>
          ฿0
        </Typography>
        <Button>Check Out</Button>
      </Box>
    </Box>
  );
};

export default NavTotal;
