import React from "react";
import Appbar from "../components/appbar/Appbar";
import Footer from "../components/footer.js/Footer";
import Product1 from "../components/products/Product1";
import Product2 from "../components/products/Product2";
import Support from "../components/support/Support";
import Tiles from "../components/tiles/Tiles";
import Trailer from "../components/trailer/Trailer";
import { Paper } from "@mui/material";

const Homepage = () => {
  return (
    <Paper elevation={0}>
      <Appbar />
      <Support />
      <Product1 />
      <Product2 />
      <Trailer />
      <Tiles />
      <Footer />
    </Paper>
  );
};

export default Homepage;
