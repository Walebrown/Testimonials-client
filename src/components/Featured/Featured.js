import React from "react";
import useStyles from "./styles";
import testimonial from "./Testimonial.png";
import blackbeauty from "./blackbeauty.png";
import womanShopping from './womanShopping.png'
import Posts from '../Posts/Posts'

const Featured = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <div className={classes.whiteCustomerExperience}>
        <div className={classes.leftCustomerTitle}>
          <div className={classes.title}>
            <h2>
              Amazing <br /> Experiences from Our Wonderful Customers
            </h2>
          </div>
          <div className={classes.paragraph}>
            <p>
              Here is what customers and vendors are saying about <br /> us, you
              can share your stories with us too.
            </p>
          </div>
        </div>
        <div className={classes.rightCustomerImage}>
          <div className={classes.imgBackground}>
            <img src={testimonial} alt="testimonials" />
          </div>
        </div>
      </div>
      <div className={classes.blackCustomerExperience}>
      <div className={classes.blackGirlsImage}>
          <div className={classes.blackGirlsBackground}>
            <img src={blackbeauty} alt="black-girls-smiling" />
          </div>
        </div>
        <div className={classes.blackGirlsExperience}>
          <div className={classes.blackGirlsExperienceTitle}>
            <h3>Tolu & Joy’s Experience</h3>
          </div>
          <div className={classes.tag}>CUSTOMER</div>
          <div className={classes.blackGirlsExperienceMessage}>
            <p>
              I had the best experience shopping with vasiti.
              <br />
              Usability of the website was great, very good customer service, an
              all round great experience. I would definately be coming back! I
              had the best experience shopping with vasiti. Usability of the
              website was great, very good customer service, an all round great
              experience. I would definately be coming back!
            </p>
          </div>
        </div>
      </div>
      <Posts/>
      <div className={classes.vendorExperience}>
        <div className={classes.blackGirlsExperience}>
          <div className={classes.vendorExperienceTitle}>
            <h3>Josiah’s Experience</h3>
          </div>
          <div className={classes.tag}>VENDOR</div>
          <div className={classes.vendorExperienceMessage}>
            <p>
              I had the best experience shopping with vasiti.
              <br />
              Usability of the website was great, very good customer service, an
              all round great experience. I would definately be coming back! I
              had the best experience shopping with vasiti. Usability of the
              website was great, very good customer service, an all round great
              experience. I would definately be coming back!
            </p>
          </div>
        </div>
        <div className={classes.vendorImage}>
            <img src={womanShopping} alt="woman-shopping-bag" />

        </div>
    </div>
    </div>
  );
};

export default Featured;
