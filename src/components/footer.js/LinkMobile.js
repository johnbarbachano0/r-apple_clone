import React from "react";
import { Link } from "@mui/material";
import { data } from "../../helpers/links";
import { styled } from "@mui/material/styles";
import CustBox from "../CustBox";
import Typography from "@mui/material/Typography";

import AddIcon from "@mui/icons-material/Add";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  borderBottom: `1px solid ${theme.palette.divider}`,
  "&:before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<AddIcon sx={{ fontSize: "0.9rem" }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor: "#f5f5f7",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(45deg)",
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  px: theme.spacing(0),
}));

const LinkMobile = () => {
  return (
    <CustBox
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "flex-start",
        width: "100%",
      }}
    >
      {data.map((item, i) => (
        <Accordion key={i} sx={{ width: "100%", background: "#f5f5f7" }}>
          <AccordionSummary
            expandIcon={<AddIcon sx={{ fontSize: 15, mx: 2, my: 1 }} />}
            id="panel1a-header"
            sx={{ px: 0 }}
          >
            <Typography
              sx={{
                color: "#6e6e73",
                fontSize: 12,
                fontFamily: "SF Pro Semibold",
              }}
            >
              {item?.category}
            </Typography>
          </AccordionSummary>
          <AccordionDetails
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start",
              alignItems: "flex-start",
              m: 0,
            }}
          >
            {item?.links?.map((item, i) => (
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
          </AccordionDetails>
        </Accordion>
      ))}
    </CustBox>
  );
};

export default LinkMobile;
