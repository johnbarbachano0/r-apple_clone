import React, { useRef, useState } from "react";
import QuickLinks from "./QuickLinks";
import useCommon from "../useCommon";
//search
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";
import { styled } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  display: "flex",
  flexDirection: "row",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: "#fff0",
  color: "#fff",
  width: "100%",
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  flex: 1,
  "& .MuiInputBase-input": {
    transition: theme.transitions.create("width"),
    width: "100%",
  },
}));

const SearchBar = ({ onClose }) => {
  const anchor = useRef(null);
  const [val, setVal] = useState(null);
  const { isMid } = useCommon();

  const handleChange = (e) => {
    const { value } = e.target;
    setVal(value);
  };
  const handleEnter = (e) => {
    const { key } = e;
    if (key === "Enter" && val?.length !== 0) {
      window.location.href = `${process.env.REACT_APP_APPLE}/search/${val}?src=globalnav`;
    }
  };

  return (
    <Search sx={{ width: "60%" }}>
      <SearchIconWrapper>
        <SearchIcon sx={{ position: "relative", top: 4 }} />
      </SearchIconWrapper>
      <StyledInputBase
        placeholder="Search apple.com"
        inputProps={{ "aria-label": "search" }}
        autoFocus
        ref={anchor}
        onChange={handleChange}
        onKeyDown={handleEnter}
      />
      <SearchIconWrapper>
        <CloseIcon
          sx={{
            position: "relative",
            top: 4,
            "&:hover": { cursor: "pointer" },
          }}
          onClick={onClose}
        />
      </SearchIconWrapper>
      {!isMid && <QuickLinks />}
    </Search>
  );
};

export default SearchBar;
