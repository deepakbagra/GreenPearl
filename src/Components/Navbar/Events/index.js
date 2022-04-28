import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';
import './event.links.css';

const Events = () => { 
  
  const user = JSON.parse(localStorage.getItem('userInfo'));
  
  return (
    <div className="dropdown">
        <div className="dropbtn">Events</div>
        <div className="dropdown-content">
            
          {user ? <Button component={Link} to="/events/create-event" >Create Event</Button> : null }
          <Button component={Link} to="/events/show-events">Show All Events</Button>
          {user ? <Button component={Link} to="/events/show-user-events">Show Your Events</Button> : null }
        </div>
  </div>
  )
}

export default Events;