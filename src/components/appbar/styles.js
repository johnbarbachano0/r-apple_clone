export const styles = {
  link: {
    textAlign: "center",
    fontFamily: "SF Pro Thin",
    fontSize: 12,
    textSpacing: 5,
    color: "#f5f5f7",
    opacity: 0.8,
    transition: "0.5s",
    "&:hover": {
      color: "#fff",
      opacity: 1,
    },
  },
  icon: {
    mx: 2.75,
    fontSize: 18,
    position: "relative",
    bottom: 2,
    color: "#f5f5f7",
    opacity: 0.75,
    transition: "0.5s",
    "&:hover": {
      opacity: 1,
      cursor: "pointer",
    },
  },
  toolbar: {
    justifyContent: "center",
    mx: 7,
  },
  mbl_toolbar: {
    justifyContent: "space-between",
    m: 0,
  },
};
