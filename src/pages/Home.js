import React from "react";
import { NavbarWrapper, SearchBar } from "../components/Common";
// import SearchFilter from "../components/SearchFilter";
import Catalogue from "../components/Catalogue";
import { Box, Container } from "@mui/material";

const Home = () => {
  return (
    <>
      {/* appbar */}
      <NavbarWrapper />
      {/* body */}
      <Container sx={{ display: "flex" }}>
        {/* <SearchFilter /> */}
        <Box>
          <SearchBar />
          <Catalogue />
        </Box>
      </Container>
    </>
  );
};

export default Home;
