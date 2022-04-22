import React, {useEffect} from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';
import { useDispatch } from 'react-redux';

import './service.links.css';
import { userInfo } from '../../../Redux/Actions/authActions';

const Services = () => {
    
    const user = JSON.parse(localStorage.getItem('userInfo'));
    
    const dispatch = useDispatch();

    console.log('userInfo in service', user);

    // check if the logged in user role is of Service Provider type (id: 5) 
    const isRoleFive = () => {   
        for (let i = 0; i < user?.data?.roles?.length; i++) {        
            if (user?.data?.roles[i]?.id === 5) {
                return true;
            }
        }    
    return false;
    }
    console.log('user role in service', isRoleFive());

    useEffect(() => {
        dispatch(userInfo());
    }, [dispatch])
   

  
  return (
    <div className="dropdown">
        <div className="dropbtn">Service</div>
        <div className="dropdown-content">
            
          {isRoleFive() ? <Button component={Link} to="/services/create-service" >Post Service</Button> : null }
        <Button component={Link} to="/services/show-services">Show All Services</Button>
        {isRoleFive() ? <Button component={Link} to="/services/show-user-services">Show Your Services</Button> : null}
          
        </div>
  </div>
  )
}

export default Services;