import { useSelector } from 'react-redux';
import { Grid, Typography } from '@material-ui/core';
import React from 'react';

import OneClass from './OneClass';

const AllClasses = ({page}) => {
  
  const totalClasses = useSelector(state => state.classes);

  console.log('classess in all classess', totalClasses)  
 
  return (
    !totalClasses.length ? <div style={{ height: '24rem' }}><h1>No Class to display</h1> </div> : (
      <div >
        <div style={{ display: 'flex', marginTop: '9em', justifyContent:'space-between' }}>
          <Typography color='secondary'
            style={{ fontSize: '1.2em', textAlign: 'center' }}>
            All Classes
          </Typography>
          {/* <Paper  comonent='form' autoComplete='off' noValidate className={classes.searchBar}>
            <SearchBar page={page} />
          </Paper> */}
        </div>
        <hr style={{marginTop:'2em'}}></hr>
        <Grid container alignItems='center' spacing={8} style={{ padding: '0em', marginTop: '2em' }} >
         
        {totalClasses.map((oneClass) => (
          <Grid item                       
                xs={12} sm={6} md={4} >
              <OneClass oneClass={oneClass} />
            </Grid>
      )) }
        </Grid>
        <div style={{marginTop: '4em', marginLeft: '30%'}}>
         
        </div>
      </div>
      )
  );
};

export default AllClasses;
