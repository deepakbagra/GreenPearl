/*
  This component displays a Blog's
  content selected from a class 
*/

// importing external libraries

import React, {useEffect} from 'react'; 


import {
  Card, CardActions, CardContent,
  Button, Typography,
} from '@material-ui/core';
import moment from 'moment';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';


// local imports

import useStyles from './styles';
import { viewBlog } from '../../Redux/Actions/blogActions';

const Blog = ({ blog }) => {  
  
  const classes = useStyles();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const onSubmit = () => {
   
    dispatch(viewBlog(blog?.id?.toString()));
    localStorage.setItem('blogId', blog?.id?.toString());
    

    navigate('/blogs/show-blog');
  } 
  useEffect(() => {   
    dispatch(viewBlog(blog?.id?.toString()));    
    
  }, [dispatch, blog?.id]);
  
  
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
          
          <Typography style={{ fontSize: '0.9rem', color: 'grey', textAlign: 'right' }}>            
            ... posted {moment.utc(blog?.createTime).local().fromNow()}
          </Typography>
            
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

export default Blog;
