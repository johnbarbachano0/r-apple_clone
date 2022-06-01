import React from "react";
import { Box, Link, Typography } from "@mui/material";

const Support = () => {
  return (
    <Box
      sx={{
        p: 1.5,
        mt: 6,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#fbfbfd",
        color: "#1d1d1f",
        borderRadius: 0,
      }}
      elevation={0}
    >
      <Typography paragraph sx={{ fontSize: 14, textAlign: "center", m: 0 }}>
        <Typography
          component={Link}
          sx={{
            fontSize: 14,
            color: "#0066cc",
            textDecoration: "none",
            "&:hover": { textDecoration: "underline" },
          }}
          href={"https://www.apple.com/ph/store"}
        >
          Shop online
        </Typography>{" "}
        for fast, free delivery. Call us at 1800-1651-0525 or visit{" "}
        <Typography
          component={Link}
          sx={{
            fontSize: 14,
            color: "#0066cc",
            textDecoration: "none",
            "&:hover": { textDecoration: "underline" },
          }}
          href={"https://support.apple.com/en-ph"}
        >
          support
        </Typography>
        .
      </Typography>
    </Box>
  );
};

export default Support;

//
