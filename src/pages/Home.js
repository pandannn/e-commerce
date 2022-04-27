import React from "react";
import Navbar from "../components/navbar";
import Searchtab from "../components/searchtab";
import Catalog from "../components/catalog";
import { Container } from "@mui/material";

const Home = () => {
  return (
    <>
      {/* appbar */}
      <Navbar />
      {/* body */}
      <Container sx={{ display: "flex" }}>
        <Searchtab />
        <Catalog />
      </Container>
    </>
  );
};

export default Home;
