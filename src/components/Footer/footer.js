import React from "react";
import useStyles from "./styles";
import subscribeBanner from "./subscribeBanner.png";

const Footer = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <div className={classes.banner}>
        <div className={classes.leftBanner}>
          <div className={classes.imgBackground}>
            <img src={subscribeBanner} alt="subscribe" />
          </div>
        </div>
        <div className={classes.rightBanner}>
          <div className={classes.title}>
            <h2>Be a member <br/> of our community 🎉</h2>
          </div>
          <div className={classes.footerMessage}>
            <h4>We’d make sure you’re always first to know what’s happening on Vasiti—thus, the world.</h4>
          </div>
          <div className={classes.subscribe}>
          <input type="text" placeholder="enter your email address" className={classes.searchBar} />
          <button className={classes.subscribeButton}>SUBSCRIBE</button>
          </div>
         
        </div>
      </div>
      <div className={classes.footerLinks}>
        <div className={classes.left}></div>
        <div className={classes.right}></div>
      </div>
    </div>
  );
};

export default Footer;
