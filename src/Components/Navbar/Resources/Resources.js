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
            <Link id="RouterNavLink" to="/support/service-provider">Survice Providers</Link>
            <Link id="RouterNavLink" to="/support/support workers">Support Workers</Link>
            <Link id="RouterNavLink" to="/support/volunteers">Volunteers</Link>
        </div>
  </div>
  )
}

export default Support;