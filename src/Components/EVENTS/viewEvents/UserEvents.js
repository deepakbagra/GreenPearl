/*
This component will provide props to its children 
component to see  let a User see all Events
*/

import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Container } from '@material-ui/core';

import { listUserEvents } from '../../../Redux/Actions/eventActions';
import UserEvents from '../events/UserEvents';

const Events = () => {
  
  const dispatch = useDispatch();
  
   
  useEffect(() => {
      dispatch(listUserEvents());
  }, [dispatch]);

  return (
    <Container maxWidth='md' style={{ padding: '0' }} >
      <UserEvents />
    </Container>
  );
};

export default Events;
