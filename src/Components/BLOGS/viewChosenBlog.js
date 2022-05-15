/*
  This component displays a Blog's
  content selected from a class 
*/

// importing external libraries

import React, { useEffect, useCallback , useState} from 'react'; 


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
import Modal from '@material-ui/core/Modal';
 


// local imports
import useStyles from './styles';
import PostParentComment from './postComment/PostParentComment';
import ViewComments from './viewComment/ViewComments';
import { deleteBlog, likeBlog, dislikeBlog, viewBlog } from '../../Redux/Actions/blogActions';

const Blog = () => {
  
  const [modalOpenParentComment, setModalOpenParentComment] = useState(false);
  const [modalOpenViewComment, setModalOpenViewComment] = useState(false);
  const blog = useSelector(state => state.viewBlog);
  

  //Modal toggle settings for parent comment tag
  const handleModalOpenParentComment = () => { setModalOpenParentComment(true) };
  const handleModalCloseParentComment = () => { setModalOpenParentComment(false) }; 

  //Modal toggle settings for view comment tag
  const handleModalOpenViewComment = () => { setModalOpenViewComment(true) };
  const handleModalCloseViewComment = () => { setModalOpenViewComment(false) }; 
  
  console.log('blog =', blog);
  

  const user = JSON.parse(localStorage.getItem('userInfo'));
  
  const blogId = localStorage.getItem('blogId');
  
  console.log('blogId=', blogId);
    
  const classes = useStyles();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // to check whether the user has already liked the blog before
  // const isAlreadyLiked = useCallback(() => {
  //   if (!blog?.likes?.length) {
  //     return false;
  //   }
  //   else {
  //     for (let i = 0; i < blog?.likes?.length; ++i) {
  //       if (blog?.likes[i].toString().localeCompare(user?.data?.user?.id?.toString()) === 0) {
          
  //         return true;
  //       }
  //     }
  //     return false;
  //   }
  // }, [blog?.likes, user?.data?.user?.id ]);
  
  // delete click event listener
  const onSubmitDeleteService = () => {
    dispatch(deleteBlog(blog?.id?.toString()));
  }

  // like click event listener
  const onSubmitLike = useCallback(() => {
    dispatch(likeBlog(blog?.id?.toString())); 
 
    },[dispatch, blog?.id ]);

  // dislike click event listener
  const onSubmitDislike = useCallback(() => {
    dispatch(dislikeBlog(blog?.id?.toString()));    
  }, [dispatch, blog?.id]);

  // to check whether blog creator is viewing his or her own blog
  const isMyOwnBlog = () => {

    if (blog?.creator?.id?.toString().localeCompare(user?.data?.user?.id?.toString()) === 0) {
      return true;
    }
    else
    return false;
  }
  
  
    useEffect(() => {
      console.log("use effect in show blog");
      dispatch(viewBlog(blogId));     
      
    }, [dispatch, blogId, onSubmitLike, onSubmitDislike]);
  
  return (
    <div> 
      <Button color='primary' style={{ marginTop: '8em', fontWeight: 'bold'}} onClick={() => navigate(-1)}>
        <KeyboardBackspaceIcon /> Back to Blog list
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
          
          <Button className={classes.btn} disabled={!user && !isMyOwnBlog()} color='secondary' onClick={onSubmitDeleteService}>
            <DeleteIcon className={classes.btn} />
            <Typography className={classes.btnText}>delete</Typography>
          </Button>
          
          <Button className={classes.btn} disabled={!user} color='secondary' onClick={onSubmitLike}>
            <ThumbUpIcon className={classes.btn} />
            <div style={{marginRight: '0.3em'}}>{blog?.likeCount}</div>
            {blog?.likeCount < 2 ?
              <Typography className={classes.btnText}>like</Typography>
              :
              <Typography className={classes.btnText}>likes</Typography>
            }            
          </Button>

          <Button className={classes.btn} disabled={!user} color='secondary' onClick={onSubmitDislike}>
            <ThumbDownIcon className={classes.btn} />
            <Typography className={classes.btnText}>dislike</Typography>
          </Button>

          {/* post comment action */}
          <div>          
              <Button className={classes.btn} color='secondary' onClick={handleModalOpenParentComment}>
              <CommentIcon className={classes.btn}/>
              <Typography className={classes.btnText}>post comment</Typography>
              </Button>
            
            <Modal className={classes.modal} open={modalOpenParentComment} onClose={handleModalCloseParentComment}>
              <>             
                <PostParentComment closeEdit={handleModalCloseParentComment} blogId={blogId} />
              </>
            </Modal>
          </div>
          {/* view comment action */}
          <div>          
              <Button className={classes.btn} color='secondary' onClick={handleModalOpenViewComment}>
              <CommentIcon className={classes.btn}/>
              <Typography className={classes.btnText}>view comments</Typography>
              </Button>
            
            <Modal className={classes.modal} open={modalOpenViewComment} onClose={handleModalCloseViewComment}>
              <>             
                <ViewComments close={handleModalCloseViewComment} blog={blog} />
              </>
            </Modal>
          </div>
        </CardActions>
      </Card>
    </div>
  );
};

export default Blog;
