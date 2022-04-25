// importing external libraries

import React from 'react';

import {
  Card, CardActions, CardContent,
  Button, Typography,
} from '@material-ui/core';

import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import LocationOnIcon from '@mui/icons-material/LocationOn';

// local imports

import useStyles from './styles';
import { viewService } from '../../../Redux/Actions/serviceActions';


const Service = ({ service }) => {  
  
  const classes = useStyles();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const onSubmit = () => {
   
    dispatch(viewService(service?.id?.toString()));

    navigate('/services/show-service');
  } 
  
  return (
    <div>
      {
        service?.isHot ?
        <Typography
          color='secondary'
          className={classes.hotService}>
          Premier Service
        </Typography>
        :
        <Typography
          color='primary'
          className={classes.hotService}>
          Normal Service
        </Typography>
      }

      
      <Card className={classes.card}>
      
        <CardContent>
          <div gutterBottom className={classes.title1} >
            <Typography gutterBottom className={classes.titleText1}>
              {service?.title}
            </Typography>
            <hr></hr>
          </div>

          <div style={{display: 'flex',marginBottom: '0.5em'}}>
            <LocationOnIcon style={{color:'#1a237e', marginRight: '0.5em'}} />
            <Typography gutterBottom className={classes.timeText2}>
              {service?.address}
            </Typography>
          </div>
          
        </CardContent>

        <CardActions className={classes.actions} >

          <Button className={classes.btn} variant='contained' color='primary' onClick = {() => onSubmit()}>
            
            <Typography className={classes.more}>Click here to view all details ...</Typography>
          </Button>
         
        </CardActions>
      </Card>
    </div>
  );
};

export default Service;
