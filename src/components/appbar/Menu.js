import * as React from "react";
import { Box, Drawer, Link } from "@mui/material";
import { data } from "../../helpers/appLinks";

//drawer
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import SearchBar from "./SearchBar";

export default function Menu({ onClose }) {
  const [state, setState] = React.useState({
    top: true,
  });
  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{
        background: "#1d1d1f",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "center",
        height: "100%",
        width: "100%",
      }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List
        sx={{
          width: "95%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <ListItem disablePadding sx={{ pt: 5 }}>
          <SearchBar />
        </ListItem>
        {data.map((item, i) => (
          <ListItem key={i} disablePadding>
            <ListItemButton component={Link} href={item?.link}>
              <ListItemText
                primary={item.label}
                sx={{ fontSize: 17, color: "#fff" }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
      {["top"].map((anchor) => (
        <React.Fragment key={anchor}>
          <Drawer
            variant="permanent"
            anchor={anchor}
            open={state[anchor]}
            ModalProps={{
              keepMounted: true,
            }}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
