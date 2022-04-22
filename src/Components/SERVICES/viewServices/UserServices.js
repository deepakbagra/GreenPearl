import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Container } from '@material-ui/core';

import { listUserServices } from '../../../Redux/Actions/serviceActions';
import UserServices from '../services/userServices';

const Events = () => {
  
  const dispatch = useDispatch();  
   
  useEffect(() => {
      dispatch(listUserServices());
  }, [dispatch]);

  return (
    <Container maxWidth='md' style={{ padding: '0' }} >
      <UserServices />
    </Container>
  );
};

export default Events;
