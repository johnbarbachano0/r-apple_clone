import React from "react";
import { Typography } from "@mui/material";
import BuyButtons from "../BuyButtons";
import CustBox from "../CustBox";
import ip13 from "../../assets/ip13.png";
import ip13m from "../../assets/ip13m.png";
import useCommon from "../useCommon";

const Product1 = () => {
  const { isMid } = useCommon();

  return (
    <CustBox sx={{ py: 5 }} link={`https://www.apple.com/ph/iphone-13-pro/`}>
      <Typography
        sx={{ fontSize: isMid ? 40 : 55, fontFamily: "SF Pro Bold", mb: 0 }}
      >
        iPhone 13 Pro
      </Typography>
      <Typography sx={{ fontSize: isMid ? 23 : 25, fontFamily: "SF Pro" }}>
        Oh. So. Pro.
      </Typography>
      <BuyButtons
        learn={`${process.env.REACT_APPLE}/iphone-13-pro`}
        buy={`${process.env.REACT_APPLE}/shop/buy-iphone/iphone-13-pro`}
      />
      <CustBox
        sx={{
          height: 400,
          backgroundSize: "auto 100%",
          backgroundImage: `url(${isMid ? ip13m : ip13})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      />
    </CustBox>
  );
};

export default Product1;
