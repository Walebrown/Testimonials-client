import React from 'react'
import useStyles from './styles';


const ExtraLinks = () => {
  const classes = useStyles();
  return (
    <div>
            <div className=''>
                <ul className={classes.links}>
                  
                    <li className=''> MARKETPLACE</li>
                    <li className=''>WHOLESALE CENTER</li>
                    <li className=''> SELLER CENTER</li>
                    <li className=''> SERVICES</li>
                    <li className=''>INTERNSHIPS</li>
                    <li className=''> EVENTS</li>

                </ul>
            </div>
    </div>
  )
}

export default ExtraLinks