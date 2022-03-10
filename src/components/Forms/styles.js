import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(2,2),
      verticalAlign:'middle',
    },
  },
  paper: {
    padding: theme.spacing(1),
    width: "50%",
    height: "100%",
    margin:'30px',
    marginLeft: "350px",
    [theme.breakpoints.down('sm')]:{
      width: '100%',
      margin: '0',
      marginLeft: "0",
      
    },

   
  },
  form: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: "center",
    alignContent: "center",
  },
  fileInput: {
    width: '95%',
    margin: '10px 0',
    // width: "463px",
    // height: "62px",
    background: "#FEFEFE",
    border: "1px solid #EAEAEA",
    boxSizing: "border-box",
    borderRadius: "8px",
    padding: '20px',
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
    width: "95%",
   
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
