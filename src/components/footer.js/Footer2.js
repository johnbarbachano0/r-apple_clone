import React from "react";
import { Divider, Link, Typography } from "@mui/material";
import CustBox from "../CustBox";
import LinkContainer from "./LinkContainer";
import LinkMobile from "./LinkMobile";
import useCommon from "../useCommon";

const Footer2 = () => {
  const { isMid, isLarge } = useCommon();
  return (
    <CustBox sx={{ py: 0, px: 2, width: isMid ? "100%" : "85%" }}>
      {isMid ? <LinkMobile /> : <LinkContainer />}
      <Typography
        paragraph
        sx={{
          textAlign: "left",
          pt: 3,
          color: "#6e6e73",
          fontSize: 12,
          fontFamily: "SF Pro",
        }}
      >
        More ways to shop:{" "}
        <Typography
          component={Link}
          sx={{
            fontSize: 12,
            fontFamily: "SF Pro",
            color: "#0066cc",
            textDecoration: "none",
            "&:hover": { textDecoration: "underline" },
          }}
          href={`https://locate.apple.com/ph/en/`}
        >
          Find a retailer
        </Typography>{" "}
        near you. Or call 1800-1651-0525 (Smart/PLDT), 1800-8474-7382 (Globe).
      </Typography>
      {!isLarge && <Divider />}
    </CustBox>
  );
};

export default Footer2;
