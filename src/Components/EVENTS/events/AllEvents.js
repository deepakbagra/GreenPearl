/*
This component will provide a UI to see all Events
in Pagination way
*/

import { useSelector } from 'react-redux';
import { Grid, Typography,Paper } from '@material-ui/core';
import React from 'react';
import useStyles from './styles';
import Event from './Event';
import SearchBar from '../search/SearchBarAllEvents';

const AllEvents = ({page}) => {
  
  const events = useSelector(state => state.events);

  console.log('events in all events', events)
  
  // filtering audited events
  //const auditedEvents = events?.filter((event) => event?.auditStatus === 1);

  const classes = useStyles();

  return (
    !events.length ? <div style={{ height: '24rem' }}><h1>No Event to display</h1> </div> : (
      <div >
        <div style={{ display: 'flex', marginTop: '9em', justifyContent:'space-between' }}>
          <Typography color='secondary'
            style={{ fontSize: '1.2em', textAlign: 'center' }}>
            All Events
          </Typography>
          <Paper  comonent='form' autoComplete='off' noValidate className={classes.searchBar}>
            <SearchBar page={page} />
          </Paper>
        </div>
        <hr style={{marginTop:'2em'}}></hr>
        <Grid container alignItems='center' spacing={8} style={{ padding: '0em', marginTop: '2em' }} >
         
        {events.map((event) => (
          <Grid item                       
                xs={12} sm={6} md={4} >
              <Event event={event} />
            </Grid>
      )) }
        </Grid>
        <div style={{marginTop: '4em', marginLeft: '30%'}}>
         
        </div>
      </div>
      )
  );
};

export default AllEvents;
