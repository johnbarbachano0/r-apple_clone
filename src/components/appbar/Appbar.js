import React, { useState, useRef, useEffect } from "react";
import { AppBar, Box, Link, Toolbar } from "@mui/material";
import Buy from "./Buy";
import Menu from "./Menu";
import useCommon from "../useCommon";

import { styles } from "./styles";
//icons
import AppleIcon from "@mui/icons-material/Apple";
import DragHandleIcon from "@mui/icons-material/DragHandle";
import CloseIcon from "@mui/icons-material/Close";
import { BsBag, BsSearch } from "react-icons/bs";
//data
import { data } from "../../helpers/appLinks";
import SearchBar from "./SearchBar";

const ButtonAppBar = () => {
  const { isLarge } = useCommon();
  const [menuOpen, setMenuOpen] = useState(false);
  const [buyOpen, setBuyOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  const anchor = useRef();

  const handleMenu = () => setMenuOpen((prev) => !prev);
  const handleBuy = (val) => setBuyOpen(val);

  const handleSearch = () => setSearchOpen((prev) => !prev);

  const Apple = () => (
    <AppleIcon
      sx={styles.icon}
      onClick={() => (window.location.href = process.env.REACT_APP_CLIENT)}
    />
  );

  useEffect(() => {
    console.log(searchOpen);
  }, [searchOpen]);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="fixed"
        elevation={0}
        sx={{
          backgroundColor: "#1d1d1f",
          opacity: 0.98,
          zIndex: (theme) => theme.zIndex.drawer + 1,
        }}
      >
        {isLarge ? (
          <Toolbar variant="dense" sx={styles.mbl_toolbar}>
            <Box sx={styles.icon} onClick={() => handleMenu(true)}>
              {menuOpen ? (
                <CloseIcon sx={{ fontSize: 18 }} />
              ) : (
                <DragHandleIcon />
              )}
            </Box>
            <Apple />
            <Box
              sx={{
                ...styles.icon,
                visibility: menuOpen ? "hidden" : "visible",
              }}
              onClick={() => handleBuy(true)}
              ref={anchor}
            >
              <BsBag size={14} />
            </Box>
          </Toolbar>
        ) : (
          <Toolbar variant="dense" sx={styles.toolbar}>
            {searchOpen ? (
              <SearchBar onClose={handleSearch} />
            ) : (
              <>
                <Apple />
                <Box
                  sx={{
                    display: "flex",
                    flex: 1,
                    justifyContent: "space-between",
                  }}
                >
                  {data?.map((item, i) => (
                    <Link
                      key={i}
                      href={item?.link}
                      underline="none"
                      sx={styles.link}
                    >
                      {item?.label}
                    </Link>
                  ))}
                </Box>

                <Box sx={styles.icon} onClick={handleSearch}>
                  <BsSearch size={14} />
                </Box>

                <Box
                  sx={styles.icon}
                  onClick={() => handleBuy(true)}
                  ref={anchor}
                >
                  <BsBag size={14} />
                </Box>
              </>
            )}
          </Toolbar>
        )}
      </AppBar>
      {menuOpen && <Menu onClose={handleMenu} />}

      <Buy
        open={buyOpen}
        anchor={anchor?.current}
        onClose={() => handleBuy(false)}
      />
    </Box>
  );
};

export default ButtonAppBar;
