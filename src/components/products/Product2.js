import React from "react";
import { Typography } from "@mui/material";
import BuyButtons from "../BuyButtons";
import CustBox from "../CustBox";
import logo_se from "../../assets/logo_iphonese.png";
import ipse from "../../assets/ipse.png";
import useCommon from "../useCommon";

const Product2 = () => {
  const { isMid } = useCommon();

  return (
    <CustBox sx={{ py: 5 }} link={`https://www.apple.com/ph/iphone-se/`}>
      <Typography sx={{ fontSize: 20, fontFamily: "SF Pro Bold", mb: 0 }}>
        The new
      </Typography>
      <CustBox
        sx={{
          height: isMid ? 40 : 60,
          backgroundSize: "auto 100%",
          backgroundImage: `url(${logo_se})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      />
      <Typography sx={{ fontSize: isMid ? 23 : 25, fontFamily: "SF Pro" }}>
        Love the power. Love the value.
      </Typography>
      <BuyButtons
        learn={`${process.env.REACT_APPLE}/iphone-se/`}
        buy={`${process.env.REACT_APPLE}/shop/buy-iphone/iphone-se`}
      />
      <CustBox
        sx={{
          height: isMid ? 250 : 300,
          backgroundSize: "auto 100%",
          backgroundImage: `url(${ipse})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: isMid ? "-20% 0%" : "center",
        }}
      />
    </CustBox>
  );
};

export default Product2;
