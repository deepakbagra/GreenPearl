// importing libraries
import React from 'react';
import { Grid, Typography, Button } from '@material-ui/core';

// importing local components
import Banner from './Banner';
import useStyles from './styles';

const Home = () => {
    const classes = useStyles();

    return (
        <Grid container alighitems='stretch' className={classes.container}>
            <Grid item   xs={12} md={6}>
                <Banner />
            </Grid>
            <Grid item xs={12} md={6}>
                <Typography variant='h6' className={classes.homePageTitle}>How can we help you ?</Typography>
                <Typography className={classes.homePageText}>We provide right information about autism to make a child's life better.
                    You can be a parent, teacher, a carer or a servcie provider.
                    We give you a social platform to participate in social events and to be connected with service providers. Here you can share your story that may inspire many others who are dealing with similar issues.
                </Typography>
                <p><Button color='primary' style={{textTransform: 'none', fontWeight: 'bold'}}>Read more ...</Button></p>
                
                
            </Grid>
      </Grid>
    
  )
}

export default Home