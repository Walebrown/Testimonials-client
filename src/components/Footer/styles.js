import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(theme => 
  ({
  
  banner: {
    display: "flex",
    [theme.breakpoints.down('sm')]:{
      flexDirection:'column'
    },
  },

  container: {
    backgroundColor: "#25201D",
    position: "absolute",
    width: "100vw",
    marginTop: 40,
    height: '100%',
    margin: 0,
  },
  rightBanner: {
    flex: 1,
    width: '100%',
  },
  imgBackground: {
    position: "relative",
    [theme.breakpoints.down('sm')]:{
      width: '100px',
    },
  },
  leftBanner: {
    flex: 1,
    position: "relative",
    //marginLeft: 100,
    top: -50,
  },

  footerLinks: {
    display: "flex",
  },
  title: {
    fontFamily: "Inter",
    fontStyle: "normal",
    fontWeight: "bold",
    textAlign:'center',
    fontSize: "40px",
    lineHeight: "40px",
    letterSpacing: "-0.03em",
    color: "#FFFFFF",
    [theme.breakpoints.down('sm')]:{
      fontSize:'30px',
      letterSpacing:0,
      
    },
  },
  footerMessage:{
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: "14px",
    lineHeight: "20px",
    textAlign:'center',
    /* or 100% */

    letterSpacing: "0.02em",

    color: "#FFFFFF",

  },
  subscribe:{
    display: 'flex',
    
    padding: '5px',
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    width: '50%',
    [theme.breakpoints.down('sm')]:{
      width:'100%',
    },
  },
  searchBar:{
    flex: 1,
    background:'none',
    border: 'none',
    marginLeft:0,
    
    
  
  },
  subscribeButton:{
    padding: '10px',

  }
}));
