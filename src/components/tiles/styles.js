export const styles = {
  link: {
    pt: 1,
    fontSize: 18,
    fontFamily: "SF Pro",
    "&:hover": { textDecoration: "underline" },
    color: "#2997ff",
  },
  text: {
    pt: 1,
    color: "#c6e1e6",
    fontFamily: "SF Pro Semibold",
    width: "75%",
    fontSize: 20,
    textAlign: "center",
  },
  container: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "stretch",
    width: "100%",
  },
  box: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
};
