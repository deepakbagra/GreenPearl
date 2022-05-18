/*
  This component displays a Blog's
  content selected from a class 
*/

// importing external libraries

import React, { useEffect, useCallback , useState} from 'react'; 


import {
  Card, CardActions, CardContent,
  Button, Typography, Avatar
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
  
  console.log('blog comment length =', blog?.comments.length);  

  const user = JSON.parse(localStorage.getItem('profile'));
  const userInfo = JSON.parse(localStorage.getItem('userInfo'));

  console.log('userInfo =', userInfo); 
  const username = userInfo?.data?.user?.username;
  const nickname = userInfo?.data?.user?.nickname;
  const avatar = userInfo?.data?.avatar?.path;
  
  const blogId = localStorage.getItem('blogId');
  
  console.log('user=', user);
    
  const classes = useStyles();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  // delete click event listener
  const onSubmitDeleteService = () => {
    dispatch(deleteBlog(blog?.id?.toString()));
    navigate(-1);
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
          <pre style={{ whiteSpace: "pre-wrap", wordWrap: "break-word"}}>
          <Typography paragraph gutterBottom multipleLine className={classes.contentText}>
              {blog?.content}
            </Typography>
            </pre>  

          <Typography style={{ fontSize: '0.9rem', color: 'grey', textAlign: 'right' }}>            
            ... Posted by {nickname ? nickname : username} <br></br>          
            ... {moment.utc(blog?.createTime).local().fromNow()}
            <div style={{display: 'flex', justifyContent:'flex-end'}}>
              <Avatar alt={username} src={avatar} />
            </div>
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
              <Button className={classes.btn} disabled={!user} color='secondary' onClick={handleModalOpenParentComment}>
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
              <Button className={classes.btn} disabled={!user || !blog?.comments.length} color='secondary' onClick={handleModalOpenViewComment}>
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
