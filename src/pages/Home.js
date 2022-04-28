import React from "react";
import Navbar from "../components/navbar";
import Searchfilther from "../components/searchfilther";
import Catalog from "../components/catalog";
import { Container } from "@mui/material";
import Searchbar from "../components/searchbar";

const Home = () => {
  return (
    <>
      {/* appbar */}
      <Navbar />
      {/* body */}
      <Container sx={{ display: "flex" }}>
        <Searchfilther />
        <Container>
          <Searchbar />
          <Catalog />
        </Container>
      </Container>
    </>
  );
};

export default Home;
