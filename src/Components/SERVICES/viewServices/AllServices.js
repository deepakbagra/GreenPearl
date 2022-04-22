import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Container } from '@material-ui/core';

import { listServices } from '../../../Redux/Actions/serviceActions';
import AllServices from '../services/AllServices';

const Events = () => {
  
  const dispatch = useDispatch();
  
   
  useEffect(() => {
      dispatch(listServices());
  }, [dispatch]);

  return (
    <Container maxWidth='md' style={{ padding: '0' }} >
      <AllServices />
    </Container>
  );
};

export default Events;
