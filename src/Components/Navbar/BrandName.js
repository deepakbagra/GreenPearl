/*
This component will display 
Logo of the site owner
*/

import React from 'react';
import useStyles from './styles';
import brandLogo from '../../Images/LOGO.png';

const BrandName = () => {
  const classes = useStyles();
  return (
    <>
      <img src={brandLogo} alt='Autism Platform' className={classes.brand} />
      <h3 style={{color: '#eeeeee', fontStyle: 'italic', marginLeft: '-17em'}}>Green Pearls Consulting</h3>
    </>
    
      
    
  )
}

export default BrandName;