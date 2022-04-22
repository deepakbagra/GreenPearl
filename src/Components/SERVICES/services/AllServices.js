import { useSelector } from 'react-redux';
import { CircularProgress, Grid, Typography,Paper, Button } from '@material-ui/core';
import React, {useState} from 'react';

import useStyles from './styles';
import Service from './Service';
import SearchBar from '../../SERVICES/search/SearchBarAllServices';

const AllServices = () => {
  const [showOthers, setShowOthers] = useState(false);
  const services = useSelector(state => state.services); 
  
  console.log('services: ', services)

  const classes = useStyles();

  return (
    !services?.hotServices?.length && !services?.nonHotServices?.length ? <div style={{ height: '24rem' }}><CircularProgress /> </div> : (
      <div >
        <div style={{ display: 'flex', marginTop: '9em', justifyContent:'space-between' }}>
          <Typography color='secondary'
            style={{ fontSize: '1.2em', textAlign: 'center' }}>
            View Services
          </Typography>
          <Paper  comonent='form' autoComplete='off' noValidate className={classes.searchBar}>
            <SearchBar />
          </Paper>
        </div>
        <hr style={{ marginTop: '2em' }}></hr>

        {/* Hot services Grid */}
        
        <Typography color='primary'
            style={{ fontSize: '1em' }}>
            Hot Services
          </Typography>
        <Grid container alignItems='stretch' spacing={5} style={{ padding: '0em', marginTop: '2em' }} >
        
        {services?.hotServices?.map((service) => (
          <Grid item                       
                xs={12} sm={6} md={4}  >
              <Service service={service} />
            </Grid>
        ))}          
        </Grid>

        {/* Other services Grid */}

        
        <Button color='primary' onClick={() => setShowOthers(prev => !prev)}
          
            style={{ fontSize: '1em', textTransform: 'none', marginTop: '2em' }}>
          {!showOthers ? 'Show other Services ...' : 'Hide other Services'}      
         
        </Button>
          
        {showOthers ? (
          <Grid container alignItems='stretch' spacing={5} style={{ padding: '0em' }} >
          
            {services?.nonHotServices?.map((service) => (
              <Grid item
                xs={12} sm={6} md={4} >
                <Service service={service} />
              </Grid>
            ))}
          </Grid> )
          : null
        }

      </div>
      )
  );
};

export default AllServices;
