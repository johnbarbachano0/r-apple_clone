import React from "react";
import { Box, Link, Typography } from "@mui/material";

const LinkBox = ({ label, links, sx }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "flex-start",
        ...sx,
      }}
    >
      <Typography
        sx={{ color: "#6e6e73", fontSize: 12, fontFamily: "SF Pro Semibold" }}
      >
        {label}
      </Typography>
      {links?.map((item, i) => (
        <Link
          key={i}
          sx={{
            py: 0.5,
            color: "#6e6e73",
            fontSize: 12,
            "&:hover": { textDecoration: "underline" },
          }}
          href={item?.url}
          underline={"none"}
        >
          {item?.link}
        </Link>
      ))}
    </Box>
  );
};

export default LinkBox;
