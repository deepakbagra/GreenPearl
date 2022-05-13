/*
This component will provide a UI to
see the detail of a selected Event
*/

// importing external libraries

import React, {useEffect} from 'react'; 
import { useNavigate } from 'react-router-dom';

import {
  Card, CardActions, CardContent,
  Button, Typography,
} from '@material-ui/core';
import moment from 'moment';
import { useDispatch, useSelector } from 'react-redux';
import DeleteIcon from '@material-ui/icons/Delete';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import LogoutIcon from '@mui/icons-material/Logout';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';

// local imports

import useStyles from './styles';
import { deleteEvent, joinEvent, exitEvent, viewEvent } from '../../../Redux/Actions/eventActions';

const ViewChosenEvent = () => { 
  const navigate = useNavigate();

  const event = useSelector(state => state.viewEvent);

  console.log('view selected event', event);  
 
  const data = JSON.parse(localStorage.getItem('userInfo'));
  const user = JSON.parse(localStorage.getItem('profile'));
  const eventId = localStorage.getItem('eventId');

  // to check whether event creator is viewing his or her own event
  const isMyOwnEvent = () => {
    if (event?.creator?.id?.toString().localeCompare(data?.data?.user?.id?.toString()) === 0) {
      return true;
    }
    else
    return false;
  } 
 
  const classes = useStyles();
  const dispatch = useDispatch();
  
  const formatTime = (time) => {
    return moment(time).format('ddd,MMM YY, hh:mm A ');
  } 

  // check if the user is already a joiner to this event
  const isAlreadyJoiner = () => {   
      for (let i = 0; i < event?.joiners?.length; i++) {        
        if (data?.data?.user?.id?.toString().localeCompare(event?.joiners[i]?.id?.toString()) === 0) {
         
          return true;
        }
      }    
   return false;
  }

  const onSubmitDeleteEvent = () => {
    dispatch(deleteEvent(event?.id?.toString()));    
    navigate(-1);
  }

  const onSubmitJoinEvent = () => {
    dispatch(joinEvent(event?.id?.toString())); 
    navigate(-1);    
  }

  const onSubmitExitEvent = () => {
    dispatch(exitEvent(event?.id?.toString())); 
    navigate(-1);  
  }

  const isJoin = () => {
    if (!user) return true;

    else if (isMyOwnEvent()) {
      return true;
    }
    else if (isAlreadyJoiner()) {
      return true;
    }
    else return false;
  }

  const isExit = () => {
    if (isMyOwnEvent()) {
      return true;
    }
    else if (isAlreadyJoiner()) {
      return false;
    }
    else return true;
  }

  useEffect(() => {   
    dispatch(viewEvent(eventId));
}, [dispatch, eventId]);
 
  return (
    <div>
      <Button color='primary' style={{ marginTop: '8em', fontWeight: 'bold'}} onClick={() => navigate(-1)}>
        <KeyboardBackspaceIcon /> Back to event list
      </Button>
      <Card className={classes.card2} style={{marginTop: '3rem'}} >
             
        <CardContent>

          <div gutterBottom className={classes.title2} >
            <Typography gutterBottom className={classes.titleText2}>
              {event?.title}
            </Typography>
            <hr></hr>
          </div>

          <Typography gutterBottom className={classes.timeText2}>
            {formatTime(event?.startTime)} &nbsp; - &nbsp; {formatTime(event?.endTime)}
          </Typography>
          
          <Typography gutterBottom className={classes.address}>
            {event?.address}
          </Typography>
                   
          <div gutterBottom className={classes.count}>
            <Typography className={classes.countNumber}>
                {parseInt(event?.maxUserCount) - parseInt(event?.joiners?.length)}
            </Typography>
            <Typography className={classes.countText}>
              tickets are still available
            </Typography>
          </div>          
          
          <Typography gutterBottom multipleLine className={classes.contentText}>
              {event?.content}
          </Typography>         

          <Typography style={{ fontSize: '0.9rem', color: 'grey', textAlign: 'right' }}>            
            ... posted {moment.utc(event?.createTime).local().fromNow()}
          </Typography>
            
        </CardContent>

        <CardActions className={classes.actions} >
          
          <Button className={classes.btn} disabled={!isMyOwnEvent()} color='secondary' onClick={onSubmitDeleteEvent}>
            <DeleteIcon className={classes.btn} />
            <Typography className={classes.btnText}>delete</Typography>
          </Button>
          
          <Button className={classes.btn} disabled={isExit()} color='secondary' onClick={onSubmitExitEvent}>
            <LogoutIcon className={classes.btn} />
            <Typography className={classes.btnText}>exit</Typography>
          </Button>
          
          <Button className={classes.btn} disabled={isJoin()} color='secondary' onClick={onSubmitJoinEvent}>
            <SubscriptionsIcon className={classes.btn} />
            <Typography className={classes.btnText}>join</Typography>
          </Button>
          
        </CardActions>
      </Card>
    </div>
  );
};

export default ViewChosenEvent;
