import React from 'react';
import useStyles from './styles';
import banner from '../../Images/homePagePic.jpg';

const Banner = () => {
  const classes = useStyles();
  return (
    <img src={banner} alt='Autism Awareness' className={classes.banner}/>
      
    
  )
}

export default Banner;