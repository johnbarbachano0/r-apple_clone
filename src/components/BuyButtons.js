import React from "react";
import CustBox from "./CustBox";
import { Link } from "@mui/material";
import { styles } from "./tiles/styles";
import useCommon from "./useCommon";

const BuyButtons = ({
  learn,
  buy,
  padding,
  learnTitle,
  buyTitle,
  ...props
}) => {
  const { isMid } = useCommon();
  return (
    <CustBox sx={{ p: 2, ...padding }}>
      {learn && (
        <Link
          sx={{ ...styles.link, fontSize: isMid ? 15 : 18, ...props.sx }}
          href={learn}
          underline={"none"}
        >
          {learnTitle ? learnTitle : "Learn More"} {">"}
        </Link>
      )}
      {buy && (
        <Link
          sx={{ ...styles.link, fontSize: isMid ? 15 : 18, ...props.sx, pl: 4 }}
          href={buy}
          underline={"none"}
        >
          {buyTitle ? buyTitle : "Buy"} {">"}
        </Link>
      )}
    </CustBox>
  );
};

export default BuyButtons;
