import React from 'react';
import useStyles from '../AboutAutism/WhatIsAutism/styles';
import { Typography } from '@material-ui/core';

const ServiceProvider = () => {
    const classes = useStyles();
  return (
    < div className={classes.container}>
    <Typography variant='h4' style={{marginTop: '5em'}}className={classes.title}>Financial and funding support for people with autism</Typography>
          <Typography className={classes.content}>The Australian Government provides a range of financial support for children, teenagers and adults on the autism spectrum, and their carers.

        This financial support may be accessed in the diagnosis stage, and once a diagnosis has been confirmed.

        The primary source of financial support for people with a disability is the National Disability Insurance Agency (NDIA).
        <p>The NDIA manages the National Disability Insurance Scheme (NDIS) which may be able to help you access  services and support in your community. It also provides funding for support like early intervention therapies, or one-off items like wheelchairs or assistive technologies depending on the participant’s NDIS Plan, which is based on the individual’s needs.</p>
          <p>There are also various Medicare and Centrelink initiatives that can provide financial support.

To access financial support, you will have to apply for funding – they will not be granted to you automatically when you or your child is diagnosed.

Some funding schemes will only require you to provide proof of diagnosis, whilst others will require you to explain why you or your child needs support.

Eligibility requirements for supports vary, so you or your child might qualify for support under one scheme, but not another. Some funding schemes (or services) have limited funding, so you might be put on a waiting list.</p>
          </Typography>
    
  </div>
  )
}

export default ServiceProvider;