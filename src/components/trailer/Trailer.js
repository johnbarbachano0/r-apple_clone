import React from "react";
import { Box, Link } from "@mui/material";
import ReactPlayer from "react-player";
import prehistoricTrailer from "../../assets/trailer.mp4";

const Trailer = () => {
  return (
    <Box
      component={Link}
      href={
        "https://tv.apple.com/ph/show/prehistoric-planet/umc.cmc.4lh4bmztauvkooqz400akxav?itscg=10000&itsct=atv-apl_hp-pmo_wch-PP-220511"
      }
    >
      <ReactPlayer
        url={prehistoricTrailer}
        controls={false}
        muted={true}
        playing={true}
        loop={true}
        width={"100%"}
        height={"100%"}
      />
    </Box>
  );
};

export default Trailer;
