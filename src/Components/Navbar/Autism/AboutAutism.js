import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';
import './about.autism.css';

const AboutAutism = () => {
  return (
    <div className="dropdown">
      <>
        <div className="dropbtn">About Autism</div>
      </>
        <div className="dropdown-content">
            <Button component={Link} to ="/aboutautism/whatisautism" >What is Autism ?</Button>
            < Button component={Link} to ="/aboutautism/myths">Myths</Button>
            <Button component={Link} to ="/aboutautism/rights">Know Your Rights</Button>
        </div>
  </div>
  )
}

export default AboutAutism;