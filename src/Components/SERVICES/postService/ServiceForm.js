import React, { useState } from 'react';
import { Grid, Container, TextField, Typography, Button } from '@material-ui/core';

import useStyles from './styles';
import { useDispatch } from 'react-redux';
import EventIcon from '@mui/icons-material/Event';

import { createService } from '../../../Redux/Actions/serviceActions';

// initial state of user input 
const initialState = {   
    title: '',
    phone: '',
    email: '',    
    address: '',
    content: '',
}
const PostForm = () => {
    const [eventData, setEventData] = useState(initialState);
   
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
        
        dispatch(createService(eventData));
        clear();        
    }
   
    return (
        <Container component='main' className={classes.main}>
            <form autoComplete='off'className={classes.containerForm} noValidate onSubmit={handleSubmit}>
                <div className={classes.root}>       
                    <EventIcon style={{ color: '#b22a00', fontSize: '2em' }} />    
                    <Typography className={classes.header}>Post new Service</Typography>
                </div> 
                    <Grid container alighitems='stretch' spacing={2}>
                        <Grid item xs={12} md={6}>
                            <Typography className={classes.headers}>Title</Typography>
                            <TextField className={classes.form} size='small'
                                name='title'                            
                                variant='outlined'
                                fullWidth
                                value={eventData.title}
                                onChange={handleChange}
                            />
                        </Grid>                        
                        <Grid item xs={12} md={6}>
                                <Typography className={classes.headers}>Phone</Typography>
                                <TextField className={classes.form} size='small'
                                    name='phone'
                                    variant='outlined'
                                    fullWidth
                                    value={eventData.phone}
                                    onChange={handleChange}
                                    />
                    </Grid>

                    <Grid item xs={12}>
                        <Typography className={classes.headers}>Email</Typography>
                        <TextField className={classes.form} size='small'
                            name='email'                            
                            variant='outlined'
                            fullWidth
                            multiline
                            value={eventData.email}
                            onChange={handleChange}
                            />
                    </Grid>
                    
                    <Grid item xs={12}>
                        <Typography className={classes.headers}>Address</Typography>
                        <TextField className={classes.form} size='small'
                            name='address'                            
                            variant='outlined'
                            fullWidth
                            multiline
                            value={eventData.address}
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
                    type='Post Event'
                    size='small'
                    fullWidth
                > Sumbit
                </Button>
            </form>
        </Container>
        
           
        )
    };

export default PostForm;
