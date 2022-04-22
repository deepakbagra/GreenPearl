// importing external libraries

import React from 'react'; 
import { useNavigate } from 'react-router-dom';

import {
  Card, CardActions, CardContent,
  Button, Typography,
} from '@material-ui/core';
import moment from 'moment';
import { useDispatch, useSelector } from 'react-redux';
import DeleteIcon from '@material-ui/icons/Delete';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';

// local imports

import useStyles from './styles';
import { deleteService } from '../../../Redux/Actions/serviceActions';

const ViewChosenEvent = () => { 

  const service = useSelector(state => state.viewService);  
  
  console.log('service', service)
 
  const data = JSON.parse(localStorage.getItem('userInfo'));

  const classes = useStyles();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // to check whether service creator is viewing his or her own service
  const isMyOwnService = () => {
    if (service?.creator?.id?.toString().localeCompare(data?.data?.user?.id?.toString()) === 0) {
      return true;
    }
    else
    return false;
  }

  const onSubmitDeleteService = () => {
    dispatch(deleteService(service?.id?.toString()));    
    navigate(-1);
  }
  
  return (
    <div>
      <Button color='primary' style={{ marginTop: '10em', fontWeight: 'bold'}} onClick={() => navigate(-1)}>
        <KeyboardBackspaceIcon /> Back to Service list
      </Button>
      <Card className={classes.card2} style={{marginTop: '3rem'}} >
             
        <CardContent>

          <div gutterBottom className={classes.title2} >
            <Typography gutterBottom className={classes.titleText2}>
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
          
          <div style={{display: 'flex', marginBottom: '0.5em'}}>
            <PhoneIcon style={{ color: '#1a237e', marginRight: '0.5em' }} />
            <Typography gutterBottom className={classes.timeText2}>
              {service?.phone}
            </Typography>
          </div>

          <div style={{display: 'flex'}}>
            <AlternateEmailIcon style={{color:'#1a237e', marginRight: '0.5em'}} /> 
            <Typography gutterBottom className={classes.timeText2}>
              {service?.email}
            </Typography>
          </div>
          
          <Typography gutterBottom multipleLine className={classes.contentText}>
              {service?.content}
          </Typography>         

          <Typography style={{ fontSize: '0.9rem', color: 'grey', textAlign: 'right' }}>            
            ... posted {moment.utc(service?.createTime).local().fromNow()}
          </Typography>
            
        </CardContent>

        <CardActions className={classes.actions} >
          
          <Button className={classes.btn} disabled={!isMyOwnService()} color='secondary' onClick={onSubmitDeleteService}>
            <DeleteIcon className={classes.btn} />
            <Typography className={classes.btnText}>delete</Typography>
          </Button>          
          
        </CardActions>
      </Card>
    </div>
  );
};

export default ViewChosenEvent;
