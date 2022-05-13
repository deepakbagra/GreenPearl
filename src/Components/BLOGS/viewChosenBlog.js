/*
  This component displays a Blog's
  content selected from a class 
*/

// importing external libraries

import React, { useEffect, useCallback } from 'react'; 


import {
  Card, CardActions, CardContent,
  Button, Typography,
} from '@material-ui/core';
import moment from 'moment';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import DeleteIcon from '@material-ui/icons/Delete';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import CommentIcon from '@mui/icons-material/Comment';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
  


// local imports

import useStyles from './styles';
import { deleteBlog, likeBlog, dislikeBlog, viewBlog } from '../../Redux/Actions/blogActions';

const Blog = () => {
  const blog = useSelector(state => state.viewBlog);
  
  console.log('blog =', blog);
  

  const user = JSON.parse(localStorage.getItem('userInfo'));
  
  const blogId = localStorage.getItem('blogId');
  console.log('blogId=', blogId);
    
  const classes = useStyles();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // to check whether the user has already liked the blog before
  const isAlreadyLiked = useCallback(() => {
    if (!blog?.likes?.length) {
      return false;
    }
    else {
      for (let i = 0; i < blog?.likes?.length; ++i) {
        if (blog?.likes[i].toString().localeCompare(user?.data?.user?.id?.toString()) === 0) {
          
          return true;
        }
      }
      return false;
    }
  }, [blog?.likes, user?.data?.user?.id ]);
  
  // delete click event listener
  const onSubmitDeleteService = () => {
    dispatch(deleteBlog(blog?.id?.toString()));
  }

  // like click event listener
  const onSubmitLike = useCallback(() => {
    dispatch(likeBlog(blog?.id?.toString())); 
 
    },[dispatch, blog?.id ]);

  // dislike click event listener
  const onSubmitDislike = () => {

    dispatch(dislikeBlog(blog?.id?.toString()));
    
  }; 


  // to check whether blog creator is viewing his or her own blog
  const isMyOwnBlog = () => {

    if (blog?.creator?.id?.toString().localeCompare(user?.data?.user?.id?.toString()) === 0) {
      return true;
    }
    else
    return false;
  }
  // set actions for dislike button
  const setAction = () => {
    if (isAlreadyLiked)
      return false;
    else
      return true;
  }
  
    useEffect(() => {
      console.log("use effect in show blog");
      dispatch(viewBlog(blogId));
      
      
    }, [dispatch, blogId, onSubmitLike]);
  
  return (
    <div> 
      <Button color='primary' style={{ marginTop: '8em', fontWeight: 'bold'}} onClick={() => navigate(-1)}>
        <KeyboardBackspaceIcon /> Back to event list
      </Button>
      <Card className={classes.card} style={{marginTop: '3rem'}} >
             
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
          
          <Button className={classes.btn} disabled={!isMyOwnBlog()} color='secondary' onClick={onSubmitDeleteService}>
            <DeleteIcon className={classes.btn} />
            <Typography className={classes.btnText}>delete</Typography>
          </Button>
          
          <Button className={classes.btn} color='secondary' onClick={onSubmitLike}>
            <ThumbUpIcon className={classes.btn} />
            <div style={{marginRight: '0.3em'}}>{blog?.likeCount}</div>
            {blog?.likeCount < 2 ?
              <Typography className={classes.btnText}>like</Typography>
              :
              <Typography className={classes.btnText}>likes</Typography>
            }            
          </Button>

          <Button className={classes.btn} disabled={setAction()} color='secondary' onClick={onSubmitDislike}>
            <ThumbDownIcon className={classes.btn} />
            <Typography className={classes.btnText}>dislike</Typography>
          </Button>

          <Button className={classes.btn} color='secondary' onClick={() => {}}>
            <CommentIcon className={classes.btn} />
            <Typography className={classes.btnText}>comment</Typography>
          </Button>
          
        </CardActions>
      </Card>
    </div>
  );
};

export default Blog;
