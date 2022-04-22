import { useSelector } from 'react-redux';
import { CircularProgress, Grid, Typography,Paper } from '@material-ui/core';
import React from 'react';


import useStyles from './styles';

import Event from './Event';
import SearchBar from '../search/SearchBarAllEvents';

const AllEvents = () => {
  const events = useSelector(state => state.events);
  

  const classes = useStyles();

  return (
    !events.length ? <div style={{ height: '24rem' }}><CircularProgress /> </div> : (
      <div >
        <div style={{ display: 'flex', marginTop: '9em', justifyContent:'space-between' }}>
          <Typography color='secondary'
            style={{ fontSize: '1.2em', textAlign: 'center' }}>
            All Events
          </Typography>
          <Paper  comonent='form' autoComplete='off' noValidate className={classes.searchBar}>
            <SearchBar />
          </Paper>
        </div>
        <hr style={{marginTop:'2em'}}></hr>
        <Grid container alignItems='stretch' spacing={5} style={{ padding: '0em', marginTop: '2em' }} >
         
        {events.map((event) => (
          <Grid item                       
                xs={12} sm={6} md={4} >
              <Event event={event} />
            </Grid>
      )) }
        </Grid>
      </div>
      )
  );
};

export default AllEvents;
