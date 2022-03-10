import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(theme => 
  ({
  
  banner: {
    display: "flex",
    justifyContent:'center',
    alignContent:'center',
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
    [theme.breakpoints.down('sm')]:{
      marginTop:0,
      
    },
  },
  rightBanner: {
    flex: 1,
    width: '100%',
    alignItems:"center",
    margin: 100,
    [theme.breakpoints.down('sm')]:{
      margin:0,
      //width: '70%',
    },
  },
  imgBackground: {
    position: "relative",
    width: '100%',
    [theme.breakpoints.down('sm')]:{
      
    },
  },
  leftBanner: {
    flex: 1,
    position: "relative",
    //width: '70%',
    margin: 100,
    top: -150,
    [theme.breakpoints.down('sm')]:{
      margin: 0,
      top:0,
      
      
    },
  },
  images:{
    [theme.breakpoints.down('sm')]:{
      width: '100%',
      height: '100%',
  
    },
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
    letterSpacing: "0.02em",
    color: "#FFFFFF",

  },
  subscribe:{
    display: 'flex',
    padding: '5px',
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    width: '100%',
    [theme.breakpoints.down('sm')]:{
      width:'100%',
    },
  },
  searchBar:{
    flex: 1,
    background:'none',
    border: 'none',
    width: '100%',

    
    
  
  },
  subscribeButton:{
    padding: '10px',

  }
}));
