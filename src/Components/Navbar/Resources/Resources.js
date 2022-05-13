/*
This component will provide a UI 
to display resource options in the navbar tab link
*/

import React from 'react';
import { Link } from 'react-router-dom';

import './resources.css';

const Support = () => {
  return (
    <div className="dropdown">
      <>
        <div className="dropbtn">Support</div>
        </>
        <div className="dropdown-content">
            <Link id="RouterNavLink" to="/content/education">Education Support</Link>
            <Link id="RouterNavLink" to="/content/service-provider">Support Workers</Link>
            
        </div>
  </div>
  )
}

export default Support;