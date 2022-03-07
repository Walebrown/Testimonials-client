import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(3),
    },
  },
  paper: {
    display: "flex",
    padding: theme.spacing(3),
    width: "527px",
    height: "700px",
    flexDirection: "column",
    justifyContent: "center",

    marginLeft: "500px",
  },
  form: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    alignContent: "center",
  },
  fileInput: {
    width: "463px",
    height: "62px",
    background: "#FEFEFE",
    border: "1px solid #EAEAEA",
    boxSizing: "border-box",
    borderRadius: "8px",
    padding: 20,
    marginTop: 10,
  },
  buttonSubmit: {
    marginBottom: 10,
    marginTop: 10,
    width: "253px",
    height: "70px",

    background: "#FF5C00",
    boxShadow: "2px 8px 30px rgba(230, 83, 0, 0.18)",
    borderRadius: "8px",
  },
  story: {
    width: "463px",
    height: "111px",
  },
  title: {
    fontFamily: "Inter",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: "28px",
    lineHeight: "34px",
    /* identical to box height */

    letterSpacing: "-0.02em",

    color: "#000000",
    marginButtom: "30px",
  },
}));
