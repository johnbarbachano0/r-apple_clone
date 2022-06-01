import * as React from "react";
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";

const data = [
  {
    label: "Shop Apple Store Online",
    link: `${process.env.REACT_APP_APPLE}/shop/goto/shop`,
  },
  {
    label: "Accessories",
    link: `${process.env.REACT_APP_APPLE}/shop/goto/accessories/apple_accessories`,
  },
  {
    label: "AirPods",
    link: `${process.env.REACT_APP_APPLE}/airpods`,
  },
  {
    label: "AirTag",
    link: `${process.env.REACT_APP_APPLE}/airtag`,
  },
  {
    label: "Gift Cards",
    link: `${process.env.REACT_APP_APPLE}/goto/giftcards`,
  },
];

export default function QuickLinks() {
  return (
    <Box
      sx={{
        width: "100%",
        mt: 5,
        position: "absolute",
        backgroundColor: "#ddd",
        color: "#000",
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
        opacity: 1,
        overflow: "hidden",
      }}
    >
      <List>
        <ListItem>
          <ListItemText primary="QUICK LINKS" sx={{ color: "#6e6e73" }} />
        </ListItem>
        {data.map((item, i) => (
          <ListItem disablePadding key={i}>
            <ListItemButton href={item.link}>
              <ListItemText
                primary={item.label}
                sx={{ px: 2, "&:hover": { color: "#06c" } }}
                primaryTypographyProps={{ fontSize: 14 }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
}
