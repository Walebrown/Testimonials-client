import React from "react";
import useStyles from "./styles";
import celeb from "./celeb.png";
import { useNavigate } from "react-router-dom";

const SuccessPageComp = () => {

    const Navigate = useNavigate();


    const goToHome = () =>{
        Navigate("/")

    }
  const classes = useStyles();
  return (
    <div className={classes.container}>
      
        <div className={classes.imgContainer}>
          <img src={celeb} alt="celebration" />
        </div>
      

      <h2 className={classes.title}>Thank you for <br /> sharing your story!</h2>

      <p className={classes.message}>
        
          Lorem ipsum dolor sit amet, consectetur <br/> adipiscing elit, sed do
          eiusmod tempor incididunt ut  <br/> labore et dolore magna aliqua.
        
      </p>

      <button onClick={goToHome} className={classes.button}>CLOSE</button>
    </div>
  );
};

export default SuccessPageComp;
