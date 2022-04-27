import { Container, Toolbar } from "@mui/material";
import React from "react";
import { Image } from "@mui/icons-material";
import LocalGroceryStoreIcon from "@mui/icons-material/LocalGroceryStore";
import SearchIcon from "@mui/icons-material/Search";
import IconButton from "@mui/material/IconButton";
import InputBase from "@mui/material/InputBase";
// import Logo from "./images/logo.png";
// import { Navbar } from "./style";

const appbarBottom = () => {
  return (
    <Container>
      <Toolbar>
        <Image
          sx={{ width: "5rem" }}
          src="https://www.freepnglogos.com/uploads/shopee-logo-png/shopee-logo-products-kjm-11.png"
        />
        <InputBase
          sx={{
            ml: 1,
            flex: 1,
            color: "#212121",
            border: "1px solid #fff",
            bgcolor: "#fff",
          }}
          placeholder="Search in this Site"
          inputProps={{ "aria-label": "Search in this Site" }}
        />
        <IconButton type="submit" sx={{ p: "10px" }} aria-label="search">
          <SearchIcon />
        </IconButton>
        <LocalGroceryStoreIcon sx={{ width: "10rem" }} />
      </Toolbar>
    </Container>
  );
};

export default appbarBottom;
