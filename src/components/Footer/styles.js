import { makeStyles } from "@material-ui/core/styles";

export default makeStyles({
  banner: {
    display: "flex",
  },

  container: {
    backgroundColor: "#25201D",
    position: "absolute",
    width: "100%",
    marginTop: 40,
  },
  rightBanner: {
    flex: 1,
    margin: 100,
  },
  imgBackground: {
    position: "relative",
  },
  leftBanner: {
    flex: 1,
    position: "relative",
    marginLeft: 100,
    top: -50,
  },

  footerLinks: {
    display: "flex",
  },
  title: {
    fontFamily: "Inter",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: "40px",
    lineHeight: "40px",
    /* or 100% */

    letterSpacing: "-0.03em",

    color: "#FFFFFF",
  },
  footerMessage:{
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: "14px",
    lineHeight: "20px",
    /* or 100% */

    letterSpacing: "0.02em",

    color: "#FFFFFF",

  },
  subscribe:{
    
    flexWrap:"wrap",
    padding: '5px',
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    width: '50%',
  },
  searchBar:{
    background:'none',
    border: 'none',
  
  },
  subscribeButton:{
    padding: '10px',

  }
});
