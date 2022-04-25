import { useSelector } from 'react-redux';
import { Grid, Typography,Paper } from '@material-ui/core';
import React from 'react';


import useStyles from './styles';
import Service from './Service';
import SearchBar from '../../SERVICES/search/SearchBarAllServices';

const AllServices = ({ page }) => {
    
  const services = useSelector(state => state.services);
  
  console.log('services: ', services);
  
  const classes = useStyles();

  return (
    !services?.length ? <div style={{ height: '24rem' }}><h1>No Service to display</h1> </div> : (
      <div >
        <div style={{ display: 'flex', marginTop: '9em', justifyContent:'space-between' }}>
          <Typography color='secondary'
            style={{ fontSize: '1.2em', textAlign: 'center' }}>
            View Services
          </Typography>
          <Paper  comonent='form' autoComplete='off' noValidate className={classes.searchBar}>
            <SearchBar page={page} />
          </Paper>
        </div>
        <hr style={{ marginTop: '2em' }}></hr>
        
        
        <Grid container alignItems='stretch' spacing={5} style={{ padding: '0em', marginTop: '2em' }} >
        
          {services.map((service) => (          
          <Grid item                       
                xs={12} sm={6} md={4}  >
              <Service service={service} />
          </Grid>
          ))}          
        </Grid>

      </div>
      )
  );
};

export default AllServices;
