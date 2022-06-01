import React from "react";
import { Box } from "@mui/material";
import CustBox from "../CustBox";
import LinkBox from "./LinkBox";
import { data } from "../../helpers/links";

const LinkContainer = () => {
  return (
    <CustBox
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "flex-start",
      }}
    >
      <LinkBox label={data[0]?.category} links={data[0]?.links} />
      <Box>
        <LinkBox label={data[1]?.category} links={data[1]?.links} />
        <LinkBox
          label={data[2]?.category}
          links={data[2]?.links}
          sx={{ pt: 1.5 }}
        />
      </Box>
      <LinkBox label={data[3]?.category} links={data[3]?.links} />
      <Box>
        <LinkBox label={data[4]?.category} links={data[4]?.links} />
        <LinkBox
          label={data[5]?.category}
          links={data[5]?.links}
          sx={{ pt: 1.5 }}
        />
      </Box>
      <Box>
        <LinkBox label={data[6]?.category} links={data[6]?.links} />
        <LinkBox
          label={data[7]?.category}
          links={data[7]?.links}
          sx={{ pt: 1.5 }}
        />
      </Box>
    </CustBox>
  );
};

export default LinkContainer;
