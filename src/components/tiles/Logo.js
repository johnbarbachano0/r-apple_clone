import React from "react";
import CustBox from "../CustBox";

const Logo = (props) => {
  return (
    <CustBox
      sx={{
        height: props.height,
        width: props.width,
        backgroundSize: "100% 100%",
        backgroundImage: `url(${props.logo})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    />
  );
};

export default Logo;
