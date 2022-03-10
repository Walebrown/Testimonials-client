import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(theme => 
  ({

  container:{
    width: '100vw',
    margin: 0,
    [theme.breakpoints.down('sm')]:{
      padding: 0,
     // width: '70%',
    },
  },
  whiteCustomerExperience: {
    display: "flex",
    width: '100%',
    justifyContent: "center",
    alignItems: "center",
    [theme.breakpoints.down('sm')]:{
      flexDirection:'column'
    },
  },

 

  leftCustomer: {
    flex: 1,
    width: '100%',
    padding: '20px',
    [theme.breakpoints.down('sm')]:{
      padding:0,
    },
  },
  title:{
    textAlign: 'center',
    fontFamily: "Inter",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: 48,
    letterSpacing: -0.02,
    color: "black",
    [theme.breakpoints.down('sm')]:{
      fontSize: 20,
      textAlign:'center',
      width: '100%',
    
    },
  },
  paragraph: {
    textAlign:'center',
    fontFamily: "Inter",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: 18,
    letterSpacing: 0.02,
    color: "black",
    [theme.breakpoints.down('sm')]:{
      fontSize:15,
      width: '100%',
      textAlign:'center',
    },
  },

  rightCustomerImage: {
    flex: 1,
    width: '100%',
    position: 'relative',
    [theme.breakpoints.down('sm')]:{
      margin:0,
      
    },
  },
  imgBackground: {
    position: 'relative',
    borderRadius: '50%',
    backgroundColor:'#FFF8F5',
    [theme.breakpoints.down('sm')]:{
      // width: '100%',
      // height: '100%',
      width: '100%',
    },
  },

  blackCustomerExperience: {
    display: "flex",
   justifyContent: 'center',
     alignContent: 'center',
    backgroundColor: "black",
    padding: 100,
    margin: 0,
    [theme.breakpoints.down('sm')]:{
      flexDirection:'column',
      padding: 0,
      
    },
  },

  blackGirlsExperience: {
    flex:1,
    marginLeft: 100,
  
    [theme.breakpoints.down('sm')]:{
      flexDirection:'column',
      margin:0,
      

    }
     
     
  
  },
  blackGirlsExperienceTitle: {
    fontFamily: "Inter",
    fontStyle: "normal",
    width: '100%',
    fontWeight: "bold",
    fontSize: 32,
    letterSpacing: 0.01,
    color: "white",
    [theme.breakpoints.down('sm')]:{
      textAlign:'center',
    },
  },
  blackGirlsExperienceMessage: {
    fontFamily: "Inter",
    width: '100%',
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: 14,
    letterSpacing: 0.01,
    lineHeight: 2.3,
    color: "white",
    [theme.breakpoints.down('sm')]:{
      textAlign:'center'
    },
  },
  blackGirlsImage:{
    flex:1,
     position: 'relative',
     [theme.breakpoints.down('sm')]:{
      margin:0,
      
    },
  },
  blackGirlsBackground:{
    position: 'relative',
    borderRadius: '50%',
    backgroundColor:'#2E2E2E',
    [theme.breakpoints.down('sm')]:{
      // width: '50%',
      // height: '50%',
    },
    
  },
  images:{
    [theme.breakpoints.down('sm')]:{
      width: '100%',
      height: '100%',
      padding: 10,
    },
  },

  //vendor expereince
  vendorExperience: {
    display: "flex",
   justifyContent: 'center',
     alignContent: 'center',
    backgroundColor: "#FFF8F5",
    width: '100%',
    [theme.breakpoints.down('sm')]:{
      flexDirection:'column'
    },
  },
    
  vendorExperienceTitle: {
    fontFamily: "Inter",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: 32,
    letterSpacing: 0.01,
    color: "black",
    [theme.breakpoints.down('sm')]:{
      textAlign:'center',
      
    },
  },
  vendorExperienceMessage: {
    fontFamily: "Inter",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: 14,
    letterSpacing: 0.01,
    // width: 417,
    // height: 216,
    lineHeight: 2.3,
    color: "black",
    [theme.breakpoints.down('sm')]:{
      fontSize:12,
      textAlign:'center',
    },
  },
  vendorImage:{
    flex:1,
     position: 'relative',
     [theme.breakpoints.down('sm')]:{
      margin:0,
    },
  },

  customerTag:{
    color: 'white',
    [theme.breakpoints.down('sm')]:{
      textAlign:'center',

    },

  },
  vendorTag:{
    color:'black',
    [theme.breakpoints.down('sm')]:{
      textAlign:'center',

    },

  }
 
}));
