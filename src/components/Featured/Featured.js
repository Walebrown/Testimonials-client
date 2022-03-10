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
        <div className={classes.leftCustomer}>
          <h2 className={classes.title}> Amazing <br /> Experiences from Our Wonderful Customers</h2>
          <p className={classes.paragraph}>
              Here is what customers and vendors are saying about <br /> us, you
              can share your stories with us too. 
          </p>
        </div>
        <div className={classes.rightCustomerImage}>
          <div className={classes.imgBackground}>
            <img src={testimonial} alt="testimonials" className={classes.images} />
          </div>
        </div>
      </div>
      <div className={classes.blackCustomerExperience}>
      <div className={classes.blackGirlsImage}>
          <div className={classes.blackGirlsBackground}>
            <img src={blackbeauty} alt="black-girls-smiling" className={classes.images}/>
          </div>
        </div>
        <di className={classes.blackGirlsExperience}>
          <h3 className={classes.blackGirlsExperienceTitle}>
              Tolu & Joy’s Experience
          </h3>
          <div className={classes.tag}>CUSTOMER</div>
          <p className={classes.blackGirlsExperienceMessage}>
            
              I had the best experience shopping with vasiti.
              <br />
              Usability of the website was great, very good customer service, an
              all round great experience. I would definately be coming back! I
              had the best experience shopping with vasiti. Usability of the
              website was great, very good customer service, an all round great
              experience. I would definately be coming back!
            
          </p>
        </di>
      </div>
      <Posts/>
      <div className={classes.vendorExperience}>
        <div className={classes.blackGirlsExperience}>
          <h3 className={classes.vendorExperienceTitle}>Josiah’s Experience</h3>
          <div className={classes.tag}>VENDOR</div>
          <p className={classes.vendorExperienceMessage}>
              I had the best experience shopping with vasiti.
              <br />
              Usability of the website was great, very good customer service, an
              all round great experience. I would definately be coming back! I
              had the best experience shopping with vasiti. Usability of the
              website was great, very good customer service, an all round great
              experience. I would definately be coming back!
            
          </p>
        </div>
        <div className={classes.vendorImage}>
            <img src={womanShopping} alt="woman-shopping-bag" className={classes.images}/>

        </div>
    </div>
    </div>
  );
};

export default Featured;
