import React, { useState } from 'react';
import { Grid, Container, TextField, Typography, Button } from '@material-ui/core';

import useStyles from './styles';
import { useDispatch } from 'react-redux';
import EventIcon from '@mui/icons-material/Event';

import { createBlog } from '../../../Redux/Actions/blogActions';

// initial state of user input 
const initialState = {
    title: '',
    content: '',
}

const PostForm = () => {
    const [eventData, setEventData] = useState(initialState);

    const classId = localStorage.getItem('classId');
   
    const classes = useStyles();
    const dispatch = useDispatch();
   
    
    const clear = () => {
        setEventData(initialState);
    }

    const handleChange = (e) => {
        setEventData({
            ...eventData,               
            [e.target.name]: e.target.value
        });            
    }    

    const handleSubmit = (e) => {
        e.preventDefault();
        
        dispatch(createBlog({ ...eventData, classId: classId }));
        clear();        
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
                                value={eventData.title}
                                onChange={handleChange}
                            />
                        </Grid>                        
                        
                    <Grid item xs={12}>
                        <Typography className={classes.headers}>Service description ...</Typography>
                        <TextField className={classes.form} size='small'
                            name='content'                            
                            variant='outlined'
                            fullWidth
                            multiline
                            value={eventData.content}
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
                > Sumbit
                </Button>
            </form>
        </Container>
        
           
        )
    };

export default PostForm;
