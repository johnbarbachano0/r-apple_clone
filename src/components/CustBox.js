import { Box } from "@mui/material";

const CustBox = (props) => {
  const handleClick = () => {
    if (props.link) {
      window.location.href = props.link;
    }
  };
  return (
    <Box
      {...props}
      sx={{
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        "&:hover": props.link && { cursor: "pointer" },
        ...props.sx,
      }}
      onClick={handleClick}
    >
      {props.children}
    </Box>
  );
};

export default CustBox;
