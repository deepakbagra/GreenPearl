import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Container } from '@material-ui/core';

import { listEvents } from '../../../Redux/Actions/eventActions';
import AllEvents from '../events/AllEvents';

const Events = () => {
  
  const dispatch = useDispatch();
  
   
  useEffect(() => {
      dispatch(listEvents());
  }, [dispatch]);

  return (
    <Container maxWidth='md' style={{ padding: '0' }} >
      <AllEvents />
    </Container>
  );
};

export default Events;
