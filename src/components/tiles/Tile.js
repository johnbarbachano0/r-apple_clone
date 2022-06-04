import React from "react";
import CustBox from "../CustBox";
import useCommon from "../useCommon";
import useWindowDimensions from "../useWindowDimensions";

const Tile = (props) => {
  const { height } = useWindowDimensions();
  const { isMid } = useCommon();
  return (
    <CustBox
      sx={{
        width: isMid ? "100%" : "50%",
        height: height * 0.95,
        maxHeight: isMid ? 550 : 600,
        backgroundSize: "100% 100%",
        backgroundImage: `url(${props.image})`,
        backgroundRepeat: "no-repeat",
        display: "flex",
        ...props.sx,
      }}
      link={props.link}
    >
      {props.children}
    </CustBox>
  );
};

export default Tile;
