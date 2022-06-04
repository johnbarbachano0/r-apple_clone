import React from "react";
import { Divider, Typography } from "@mui/material";
import CustBox from "../CustBox";
import useCommon from "../useCommon";

const Footer1 = () => {
  const { isMid } = useCommon();
  return (
    <CustBox sx={{ py: 2, px: 2, width: isMid ? "100%" : "85%" }}>
      <Typography sx={{ color: "#6e6e73", fontSize: 12, textAlign: "justify" }}>
        *₱249/month after free trial. One subscription per Family Sharing group.
        Offer good for three months after eligible device activation. Plan
        automatically renews until cancelled. Restrictions and other terms
        apply.
      </Typography>
      <Typography
        sx={{ color: "#6e6e73", fontSize: 12, textAlign: "justify", py: 2 }}
      >
        {`₱249/month after free trial. Only one offer per Apple ID and only one
        offer per family if you${"'"}re part of a Family Sharing group, regardless of
        the number of devices you or your family purchases. This offer is not
        available if you or your Family have previously accepted an Apple TV+
        one year free offer. Offer good for 3 months after eligible device
        activation. Plan automatically renews until cancelled. Restrictions and
        other terms apply.`}
      </Typography>
      <Divider />
    </CustBox>
  );
};

export default Footer1;
