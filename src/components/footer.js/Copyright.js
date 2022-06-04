import React from "react";
import { Box, Divider, Link, Typography } from "@mui/material";
import CustBox from "../CustBox";
import useCommon from "../useCommon";

const Copyright = () => {
  const { isMid, isLarge } = useCommon();
  const data = [
    {
      label: "Privacy Policy",
      link: `https://www.apple.com/legal/privacy/en-ww/`,
    },
    {
      label: "Terms of Use",
      link: `https://www.apple.com/legal/internet-services/terms/site.html`,
    },
    {
      label: "Sales and Refunds",
      link: `https://www.apple.com/ph/shop/browse/open/salespolicies`,
    },
    {
      label: "Legal",
      link: `https://www.apple.com/legal/internet-services/terms/site.html`,
    },
    {
      label: "Site Map",
      link: `https://www.apple.com/ph/sitemap/`,
    },
  ];
  return (
    <CustBox
      sx={{
        pt: 1,
        pb: 4,
        px: 2,
        width: isMid ? "100%" : "85%",
        display: "flex",
        flexDirection: isLarge ? "column" : "row",
        justifyContent: "space-between",
        alignItems: isLarge ? "flex-start" : "center",
      }}
    >
      <Typography
        sx={{ color: "#6e6e73", fontSize: 12, order: isLarge ? 2 : 1 }}
      >
        Copyright © 2022 Apple Inc. All rights reserved.
      </Typography>

      <CustBox
        sx={{
          display: "flex",
          flexDirection: "row",
          order: isLarge ? 3 : 2,
        }}
      >
        {data.map((item, i) => {
          return (
            <Box sx={{ display: "flex" }} key={i}>
              <Typography
                component={Link}
                href={item.link}
                underline={"none"}
                sx={{
                  "&:hover": { textDecoration: "underline" },
                  color: "#6e6e73",
                  fontSize: 12,
                  px: 1,
                  pl: i === 0 ? 0 : 1,
                }}
              >
                {item.label}
              </Typography>
              {i !== data?.length - 1 && (
                <Divider orientation="vertical" flexItem />
              )}
            </Box>
          );
        })}
      </CustBox>

      <Typography
        component={Link}
        href={`https://www.apple.com/choose-country-region/`}
        underline={"none"}
        sx={{
          "&:hover": { textDecoration: "underline" },
          color: "#6e6e73",
          fontSize: 12,
          px: 1,
          pl: isLarge && 0,
          py: isLarge && 2,
          order: isLarge ? 1 : 3,
        }}
      >
        Philippines
      </Typography>
    </CustBox>
  );
};

export default Copyright;
