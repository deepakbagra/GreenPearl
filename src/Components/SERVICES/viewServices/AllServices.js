import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Container } from '@material-ui/core';
import Pagination from '@mui/material/Pagination';

import { listServices } from '../../../Redux/Actions/serviceActions';
import AllServices from '../services/AllServices';
import useStyles from './styles';

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
      dispatch(listServices(page));
  }, [dispatch, page]);

  return (
    <Container maxWidth='md' style={{ padding: '0' }} >
      <AllServices page={page} />
      <Pagination className={classes.page} count={pageLength} page={page} color='primary' onChange={handleChange} />
    </Container>
  );
};

export default Events;
