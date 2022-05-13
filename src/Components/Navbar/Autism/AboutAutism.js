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
            < Button component={Link} to ="/content/symptoms">Symptoms</Button>
            <Button component={Link} to ="/content/symptoms">Diagnosis</Button>
        </div>
  </div>
  )
}

export default AboutAutism;