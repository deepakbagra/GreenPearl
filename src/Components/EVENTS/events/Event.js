// importing external libraries

import React from 'react';

import {
  Card, CardActions, CardContent,
  Button, Typography,
} from '@material-ui/core';
import moment from 'moment';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

// local imports

import useStyles from './styles';
import { viewEvent } from '../../../Redux/Actions/eventActions';

const Event = ({ event }) => {  
  
  const classes = useStyles();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const formatTime = (time) => {
    return moment(time).format('ddd,MMM YY, hh:mm A ');
  } 

  const onSubmit = () => {
   
    dispatch(viewEvent(event?.id?.toString()));
    
    navigate('/events/show-event');
  } 
  
    return (
      <Card className={classes.card}>
             
        <CardContent>
          <div gutterBottom className={classes.title1} >
            <Typography gutterBottom className={classes.titleText1}>
              {event?.title}
            </Typography>
            <hr></hr>
          </div>

          <div gutterBottom className={classes.time1} >
            <Typography gutterBottom className={classes.timeText1}>
              {formatTime(event?.startTime)} &nbsp;-&nbsp; {formatTime(event?.endTime)}
              </Typography>
          </div>

          <Typography className={classes.maxCount}>Event Capacity: {event?.maxUserCount} person</Typography>
          
          <Typography style={{ fontSize: '0.7rem', color: 'grey', marginTop: '1em' }}>            
            posted {moment.utc(event?.createTime).local().fromNow()}...
          </Typography>         
            
        </CardContent>

        <CardActions className={classes.actions} >

          <Button className={classes.btn} variant='contained' color='primary' onClick = {() => onSubmit()}>
            
            <Typography className={classes.more}>Click here to view all details ...</Typography>
          </Button>
         
        </CardActions>
      </Card>
  );
};

export default Event;
