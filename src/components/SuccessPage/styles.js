import { makeStyles } from "@material-ui/core/styles";

export default makeStyles({
  container: {
    display: "flex",
    flexDirection: "column",
    alignContent: "center",
    justifyContent: "center",
    alignItems: "center",
    width: "527px",
    height: "627px",
    marginLeft:"500px",
    marginTop: '20px',

    background: "#FFFFFF",
    borderRadius: "16px",
  },

  title: {
    fontFamily: "Inter",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: "28px",
    lineHeight: "34px",
    textAlign: "center",
    letterSpacing: "-0.02em",
    margin: 20,

    color: "#000000",
  },
  button: {
    width: "253px",
    height: "70px",

    background: "#FF5C00",
    boxShadow: "2px 8px 30px rgba(230, 83, 0, 0.18)",
    borderRadius: "8px",
  },
  message: {
    fontFamily: "Inter",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: "16px",
    lineHeight: "28px",
    textAlign: "center",
    letterSpacing: "-0.02em",

    color: "#4A4A4A",
    margin: 20,
  },
});
