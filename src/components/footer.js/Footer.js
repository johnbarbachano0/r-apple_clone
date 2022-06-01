import React from "react";
import Copyright from "./Copyright";
import CustBox from "../CustBox";
import Footer1 from "./Footer1";
import Footer2 from "./Footer2";

const Footer = () => {
  return (
    <>
      <CustBox
        sx={{
          background: "#f5f5f7",
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          width: "100%",
        }}
      >
        <Footer1 />
        <Footer2 />
        <Copyright />
      </CustBox>
    </>
  );
};

export default Footer;
