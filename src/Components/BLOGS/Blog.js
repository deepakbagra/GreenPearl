// importing external libraries

import React from 'react'; 


import {
  Card, CardActions, CardContent,
  Button, Typography,
} from '@material-ui/core';
import moment from 'moment';
//import { useDispatch } from 'react-redux';
import DeleteIcon from '@material-ui/icons/Delete';

// import LocationOnIcon from '@mui/icons-material/LocationOn';
// import PhoneIcon from '@mui/icons-material/Phone';
// import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';

// local imports

import useStyles from './styles';
//import { deleteService } from '../../Redux/Actions/serviceActions';

const Blog = ({ blog }) => { 
    
  
  const classes = useStyles();
  //const dispatch = useDispatch();
 

  
  const onSubmitDeleteService = () => {
    
  }
  
  return (
    <div>
      
      <Card className={classes.card2} style={{marginTop: '3rem'}} >
             
        <CardContent>

          <div gutterBottom className={classes.title2} >
            <Typography gutterBottom className={classes.titleText2}>
              {blog?.title}
            </Typography>
            <hr></hr>
          </div>
          
          
          
          <Typography gutterBottom multipleLine className={classes.contentText}>
              {blog?.content}
          </Typography>         

          <Typography style={{ fontSize: '0.9rem', color: 'grey', textAlign: 'right' }}>            
            ... posted {moment.utc(blog?.createTime).local().fromNow()}
          </Typography>
            
        </CardContent>

        <CardActions className={classes.actions} >
          
          <Button className={classes.btn} color='secondary' onClick={onSubmitDeleteService}>
            <DeleteIcon className={classes.btn} />
            <Typography className={classes.btnText}>delete</Typography>
          </Button>          
          
        </CardActions>
      </Card>
    </div>
  );
};

export default Blog;
