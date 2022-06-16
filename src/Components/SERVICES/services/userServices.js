/*
This component will provide a UI 
to display a user's own services
*/

import { useSelector } from 'react-redux';
import { CircularProgress, Grid, Paper, Typography } from '@material-ui/core';
import React from 'react';

import Service from './Service';
import SearchBar from '../search/SearchBarUserServices';
import useStyles from './styles';

const UserServices = () => {
  
  let services = useSelector(state => state.viewUserServices);

  services = services?.services

  // filtering audited services
  const auditedServices = services?.filter((service) => service.auditStatus === 1);
  
  const classes = useStyles();

  console.log('all user services', services)
  
  
  return (   
    !services?.length ? <div style={{ height: '24rem', margin: '14em' }}><CircularProgress /> </div> : (
      <div >
        <div style={{zIndex:'auto', marginTop: '8rem', padding: '1em', display:'flex', justifyContent:'space-between'}}>
            <Typography color='secondary' style={{fontSize: '1.3em'}}>Your posted services</Typography>
           <Paper  comonent='form' autoComplete='off' noValidate className={classes.searchBar}>
            <SearchBar />
          </Paper>          
        </div>
        <hr style={{ marginTop: '1em' }}></hr>
      <Grid container alignItems='stretch' spacing={5} style={{ padding: '0em', marginTop: '1em' }} >
             
        {auditedServices?.map((service) => (
                  <Grid item                       
                       xs={12} sm={6} md={4} >
                      <Service service={service} />
                    </Grid>
              )) }
        </Grid>
      </div>
        )
  );
};

export default UserServices;
