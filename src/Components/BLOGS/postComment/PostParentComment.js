import React, { useState } from 'react';
import { Paper, TextField, IconButton, Button } from '@material-ui/core';
import CancelIcon from '@material-ui/icons/Cancel';
import useStyles from './styles';
import { useDispatch } from 'react-redux';
import { postParentComment } from '../../../Redux/Actions/blogActions';

const PostForm = ({ closeEdit, blogId }) => {    
    
    const [postData, setPostData] = useState({ blogId: '', content: '' });

    //const user = JSON.parse(localStorage.getItem('profile'));

    const classes = useStyles();
    const dispatch = useDispatch();

    const clear = () => {
        setPostData({ blogId: '', content: '' });        
    }

    const handleChange = (e) => {
        setPostData({
            blogId: blogId,            
            content: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
    
      dispatch(postParentComment(postData));
      clear();
    }
    
    return (
        <Paper className={classes.paper}>
            <div style={{display:'flex', justifyContent: 'flex-end'}}>
            <IconButton onClick={closeEdit} style={{color: 'red'}} >
                <CancelIcon />
                </IconButton>
                </div>
            <form autoComplete='off' noValidate onSubmit={handleSubmit}>
                    
                <TextField className={classes.form} size='small'
                    name='content'
                    label='Post your comment here'
                    variant='outlined'
                    fullWidth
                    value={postData.content}
                    onChange={handleChange}
                />                    
                <div style={{display:'flex', justifyContent: 'center'}}>
                <Button className={classes.button}
                    variant='contained'
                    color='primary'
                    type='sumbit'
                    size='small'
                                        
                    > Post Comment
                    </Button>
                </div>
            </form>
      </Paper>  
  );
};

export default PostForm;
