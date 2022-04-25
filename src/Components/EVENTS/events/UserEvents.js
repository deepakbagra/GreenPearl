import { useSelector } from 'react-redux';
import { Grid, Button, Paper } from '@material-ui/core';
import React, { useState } from 'react';

import Event from './Event';
import SearchBar from '../search/SearchBarUserEvents';
import useStyles from './styles';


const UserEvents = () => {
  const [newEvents, setNewEvents] = useState([]);
  const events = useSelector(state => state.viewUserEvents);  

  let userOwnEvents = [];
  let userJoinedEvents = [];

  const classes = useStyles();

  console.log('all user events', events)
  
  if (!events.length) {
    userOwnEvents = events.createdEvent;
    userJoinedEvents = events.joinedEvent;
  }

  // filtering audited events
  const auditedOwnEvents = userOwnEvents?.filter((event) => event?.auditStatus === 1);
  const auditedJoinedEvents = userJoinedEvents?.filter((event) => event?.auditStatus === 1);

  return (   
    (!auditedOwnEvents?.length && !auditedJoinedEvents?.length) ? <div style={{ height: '24rem', margin: '14em' }}><h1>No Event to display</h1></div> : (
      <div >
        <div style={{zIndex:'auto', marginTop: '8rem', padding: '1em', display:'flex', justifyContent:'space-between'}}>
          <Button variant='contained' color='secondary' style={{marginRight: '2em', zIndex: '0', position:'relative'}} onClick={() => setNewEvents(auditedOwnEvents)}>Your created events</Button>
          
          
          <Paper  comonent='form' autoComplete='off' noValidate className={classes.searchBar}>
            <SearchBar />
          </Paper>
          <Button variant='contained' color='secondary' style={{marginRight: '2em',  zIndex: '0', position:'relative'}} onClick={() => setNewEvents(auditedJoinedEvents)}>Your joined events</Button>
        </div>
        <hr style={{ marginTop: '1em' }}></hr>
      <Grid container alignItems='stretch' spacing={5} style={{ padding: '0em', marginTop: '1em' }} >
             
        {newEvents.map((event) => (
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

export default UserEvents;
