import React, { useState } from 'react';
import { Grid, Container, TextField, Typography, Button } from '@material-ui/core';

import useStyles from './styles';
import { useDispatch } from 'react-redux';
import EventIcon from '@mui/icons-material/Event';

import { createBlog } from '../../../Redux/Actions/blogActions';

import { useNavigate } from 'react-router-dom';

// initial state of user input 
const initialState = {
    title: '',
    content: '',
}

const PostForm = () => {
    const [blogData, setBlogData] = useState(initialState);

    const classId = localStorage.getItem('classId');
   
    const classes = useStyles();
    const dispatch = useDispatch();
    const navigate = useNavigate();
   
    
    const clear = () => {
        setBlogData(initialState);
    }

    const handleChange = (e) => {
        setBlogData({
            ...blogData,               
            [e.target.name]: e.target.value
        });            
    }    

    const handleSubmit = (e) => {
        e.preventDefault();
        
        dispatch(createBlog({ ...blogData, classId: classId }));
        clear();
        navigate(-1);      
    }
   
    return (
        <Container component='main' className={classes.main}>
            <form autoComplete='off'className={classes.containerForm} noValidate onSubmit={handleSubmit}>
                <div className={classes.root}>       
                    <EventIcon style={{ color: '#b22a00', fontSize: '2em' }} />    
                    <Typography className={classes.header}>Post a new Blog</Typography>
                </div> 
                    <Grid container alighitems='stretch' spacing={2}>
                        <Grid item xs={12} >
                            <Typography className={classes.headers}>Title</Typography>
                            <TextField className={classes.form} size='small'
                                name='title'                            
                                variant='outlined'
                                fullWidth
                                value={blogData.title}
                                onChange={handleChange}
                            />
                        </Grid>                        
                        
                    <Grid item xs={12}>
                        <Typography className={classes.headers}>Content</Typography>
                        <TextField className={classes.form} size='small'
                            name='content'                            
                            variant='outlined'
                            fullWidth
                            multiline
                            value={blogData.content}
                            onChange={handleChange}
                            />
                    </Grid>
                    
                </Grid>
                <Button className={classes.button}
                    variant='contained'
                    color='primary'
                    type='Post Blog'
                    size='small'
                    fullWidth
                > SUBMIT
                </Button>
            </form>
        </Container>
        
           
        )
    };

export default PostForm;
