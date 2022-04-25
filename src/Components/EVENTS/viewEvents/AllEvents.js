import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Container } from '@material-ui/core';
import Pagination from '@mui/material/Pagination';
import useStyles from './styles';

import { listEvents } from '../../../Redux/Actions/eventActions';
import AllEvents from '../events/AllEvents';

const Events = () => {

  // pagination
  const [page, setPage] = useState(1);

  const handleChange = (event, value) => {
    setPage(value);
  };

  // total number of pages
  const pageLength = localStorage.getItem('page');  

  const dispatch = useDispatch();
  const classes = useStyles();
   
  useEffect(() => {
      dispatch(listEvents(page));
  }, [dispatch, page]);

  return (
    <Container maxWidth='md' style={{ padding: '0' }} >
      <AllEvents page={page} />
      <Pagination className={classes.page} count={pageLength} page={page} color='primary' onChange={handleChange} />
    </Container>
  );
};

export default Events;
