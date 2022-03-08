import React from 'react'
import useStyles from './styles';


const ExtraLinks = () => {
  const classes = useStyles();
  return (
    <div>
            <div className={classes.container}>
                <ul className={classes.links}>
                  
                    <li className={classes.link}> MARKETPLACE</li>
                    <li className={classes.link}>WHOLESALE CENTER</li>
                    <li className={classes.link}> SELLER CENTER</li>
                    <li className={classes.link}> SERVICES</li>
                    <li className={classes.link}>INTERNSHIPS</li>
                    <li className={classes.link}> EVENTS</li>

                </ul>
            </div>
    </div>
  )
}

export default ExtraLinks