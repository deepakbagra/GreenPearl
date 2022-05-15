import React, { useState } from 'react';
import { Paper, TextField, IconButton, Button } from '@material-ui/core';
import CancelIcon from '@material-ui/icons/Cancel';
import useStyles from './styles';
import { useDispatch } from 'react-redux';
import { postParentReComment } from '../../../Redux/Actions/blogActions';

const PostForm = ({ closeEdit, commentParentId, towardUserId }) => {    
    
    const [postData, setPostData] = useState({
        commentParentId: '',
        towardUserId: '',
        content: ''
    });
    
    const classes = useStyles();
    const dispatch = useDispatch();

    const clear = () => {
        setPostData({
            commentParentId: '',
            towardUserId: '',
            content: ''
        });        
    }

    const handleChange = (e) => {
        setPostData({
            commentParentId: commentParentId.toString(),
            towardUserId: towardUserId.toString(),
            content: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
    
      dispatch(postParentReComment(postData));
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
                    label='Comment here'
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
