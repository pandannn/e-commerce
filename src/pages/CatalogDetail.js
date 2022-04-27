import { Container } from "@mui/material";
import React from "react";
import Navbar from "../components/navbar";

const CatalogDetail = () => {
  return (
    <main>
      {/* navbar */}
      <Navbar />
      {/* body */}
      <Container>
        <div>
          <img src="https://cf.shopee.co.th/file/1625203f3d829f95c2ab143a3226cd23" />
        </div>
      </Container>
    </main>
  );
};

export default CatalogDetail;
