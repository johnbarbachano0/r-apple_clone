import * as React from "react";
import {
  Box,
  Divider,
  ListItemIcon,
  Link,
  Menu,
  MenuItem,
  Typography,
} from "@mui/material";
import useCommon from "../useCommon";
import useWindowDimensions from "../useWindowDimensions";
import {
  BsBag,
  BsBookmark,
  BsBoxSeam,
  BsGearWideConnected,
} from "react-icons/bs";
import { RiAccountCircleLine } from "react-icons/ri";

const data = [
  {
    icon: <BsBag size={16} color={"#06c"} />,
    label: "Bag",
    link: `${process.env.REACT_APP_APPLE}/shop/bag`,
  },
  {
    icon: <BsBookmark size={16} color={"#06c"} />,
    label: "Saved Items",
    link: `${process.env.REACT_APP_APPLE}/shop/saveditems`,
  },
  {
    icon: <BsBoxSeam size={16} color={"#06c"} />,
    label: "Order",
    link: `${process.env.REACT_APP_APPLE}/shop/order/list`,
  },
  {
    icon: <BsGearWideConnected size={16} color={"#06c"} />,
    label: "Account",
    link: `${process.env.REACT_APP_APPLE}/shop/account/home`,
  },
  {
    icon: <RiAccountCircleLine size={16} color={"#06c"} />,
    label: "Sign in",
    link: "https://secure2.store.apple.com/ph/shop/signIn?ssi=1AAABgRoJNM8g6NGtm59c2mMc10UxZxxnfpeCEqNs055KNOAU1Du383EAAAA0aHR0cHM6Ly93d3cuYXBwbGUuY29tL3BoL3xodHRwczovL3d3dy5hcHBsZS5jb20vcGgvfAACAZwTIJd0o-oVbVqHzYchW69FYWmbeiQL9PkHk2OPvFis",
  },
];

export default function Buy({ open, anchor, onClose }) {
  const { isMobile } = useCommon();
  const { width } = useWindowDimensions();
  return (
    <Menu
      anchorEl={anchor}
      id="account-menu"
      open={open}
      onClose={() => onClose(false)}
      onClick={() => onClose(false)}
      PaperProps={{
        elevation: 0,
        sx: {
          overflow: "visible",
          filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
          mt: 1.5,
        },
      }}
      transformOrigin={{ horizontal: "right", vertical: "top" }}
      anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
    >
      <Box sx={{ width: "100%", py: 4 }}>
        <Typography
          sx={{ textAlign: "center", color: "#6e6e73", fontSize: 14 }}
        >
          Your bag is Empty
        </Typography>
      </Box>

      <Divider />
      {data.map((item, i) => (
        <MenuItem key={i} component={Link} href={item.link} sx={{ py: 2 }}>
          <ListItemIcon>{item.icon}</ListItemIcon>
          <Typography
            sx={{
              color: "#06c",
              fontSize: 14,
              width: isMobile ? width : 300,
            }}
          >
            {item.label}
          </Typography>
        </MenuItem>
      ))}
    </Menu>
  );
}
