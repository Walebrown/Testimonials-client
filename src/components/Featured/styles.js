import { makeStyles } from "@material-ui/core/styles";

export default makeStyles({
  whiteCustomerExperience: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  leftCustomerTitle: {
    flex: 1,
    fontFamily: "Inter",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: 48,
    letterSpacing: -0.02,
    color: "black",
    marginLeft: 100,
    paddingLeft: 40,
  },
  paragraph: {
    fontFamily: "Inter",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: 18,
    letterSpacing: 0.02,
    color: "black",
  },

  rightCustomerImage: {
    flex: 1,
    margin: 100,
    position: 'relative',
  },
  imgBackground: {
    position: 'relative',
    borderRadius: '50%',
    backgroundColor:'#FFF8F5',
  },

  blackCustomerExperience: {
    display: "flex",
    // position: 'absolute' ,
   justifyContent: 'spaceAround',
     alignContent: 'center',
    backgroundColor: "black",
    width: '100%',
  },

  blackGirlsExperience: {
    flex:1,
     margin: 100,
     
  
  },
  blackGirlsExperienceTitle: {
    fontFamily: "Inter",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: 32,
    letterSpacing: 0.01,

    color: "white",
  },
  blackGirlsExperienceMessage: {
    fontFamily: "Inter",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: 14,
    letterSpacing: 0.01,
    width: 417,
    height: 216,
    lineHeight: 2.3,

    color: "white",
  },
  tags: {},
  blackGirlsImage:{
    flex:1,
     margin: 100,
     position: 'relative',
  },
  blackGirlsBackground:{
    position: 'relative',
    borderRadius: '50%',
    backgroundColor:'#2E2E2E',
  },

  //vendor expereince
  vendorExperience: {
    display: "flex",
    // position: 'absolute' ,
   justifyContent: 'spaceAround',
     alignContent: 'center',
    backgroundColor: "#FFF8F5",
    width: '100%',
  },
    
  vendorExperienceTitle: {
    fontFamily: "Inter",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: 32,
    letterSpacing: 0.01,

    color: "black",
  },
  vendorExperienceMessage: {
    fontFamily: "Inter",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: 14,
    letterSpacing: 0.01,
    width: 417,
    height: 216,
    lineHeight: 2.3,

    color: "black",
  },
  vendorImage:{
    flex:1,
     margin: 100,
     position: 'relative',
  },

  
});
