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
      <div className={classes.image}>
        <div className={classes.imgContainer}>
          <img src={celeb} alt="celebration" />
        </div>
      </div>

      <div className={classes.title}>
        Thank you for <br />
        sharing your story!
      </div>

      <div className={classes.message}>
        <p>
          Lorem ipsum dolor sit amet, consectetur <br/> adipiscing elit, sed do
          eiusmod tempor incididunt ut  <br/> labore et dolore magna aliqua.
        </p>
      </div>

      <button onClick={goToHome} className={classes.button}>CLOSE</button>
    </div>
  );
};

export default SuccessPageComp;
