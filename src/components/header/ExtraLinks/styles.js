import { makeStyles } from "@material-ui/core/styles";

export default makeStyles({
  links: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignContent: "center",
    textDecoration: "none",
  },

  link: {
    marginRight: "50px",
    textDecoration: "none",
  },

  container: {
    background: "#FFFFFF",
    border: "1px solid rgba(0, 0, 0, 0.08)",
    boxSizing: "border-box",
    boxShadow: "1px 4px 4px rgba(0, 0, 0, 0.04)",
  },
});
