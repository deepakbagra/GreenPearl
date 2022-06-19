import React, { useState } from 'react';
import { Grid, Container, TextField, Typography, Button } from '@material-ui/core';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DateTimePicker from '@mui/lab/DateTimePicker';
import moment from "moment";
import useStyles from './styles';
import { useDispatch } from 'react-redux';
import EventIcon from '@mui/icons-material/Event';

import { createEvent } from '../../../Redux/Actions/eventActions';

// initial state of user input 
const initialState = {
    startTime: moment(new Date()).format('YYYY-MM-DD HH:mm:ss'),
    endTime: moment(new Date()).format('YYYY-MM-DD HH:mm:ss'),
    title: '',
    maxUserCount: '',
    content: '',
    address: '',
}
const PostForm = () => {
    const [eventData, setEventData] = useState(initialState);
   
    const classes = useStyles();
    const dispatch = useDispatch();
   
    
    const clear = () => {
        setEventData(initialState);
    }

    const handleChangeTitle = (e) => {
        setEventData({
            ...eventData,               
            title: e.target.value
        });            
    }
    const handleChangeAddress = (e) => {
        setEventData({
            ...eventData,               
            address: e.target.value
        });            
    }
    const handleChangeMaxCount = (e) => {
        setEventData({
            ...eventData,               
            maxUserCount: e.target.value
        });            
    }
    const handleChangeContent = (e) => {
        setEventData({
            ...eventData,               
            content: e.target.value
        });            
    }
    const handleChangeStartTime = (e) => {
        setEventData({
            ...eventData,               
            startTime: moment(e).format('YYYY-MM-DD HH:mm:ss')
        });            
    }
    const handleChangeEndTime = (e) => {
        setEventData({
            ...eventData,               
            endTime: moment(e).format('YYYY-MM-DD HH:mm:ss')
        });            
    }

        const handleSubmit = (e) => {
            e.preventDefault();
           
            dispatch(createEvent(eventData));
            clear();
            
        }
   
    return (
        <Container component='main' className={classes.main}>
            <form autoComplete='off'className={classes.containerForm} noValidate onSubmit={handleSubmit}>
                <div className={classes.root}>       
                    <EventIcon style={{ color: '#b22a00', fontSize: '2em' }} />    
                    <Typography className={classes.header}>Create new event</Typography>
                </div> 
                    <Grid container alighitems='stretch' spacing={2}>
                        <Grid item xs={12} md={6}>
                            <Typography className={classes.headers}>Title</Typography>
                            <TextField className={classes.form} size='small'
                                name='title'                            
                                variant='outlined'
                                fullWidth
                                value={eventData.title}
                                onChange={handleChangeTitle}
                            />
                        </Grid>                        
                        <Grid item xs={12} md={6}>
                                <Typography className={classes.headers}>Maximum participants</Typography>
                                <TextField className={classes.form} size='small'
                                    name='maxUserCount'
                                    variant='outlined'
                                    fullWidth
                                    value={eventData.maxUserCount}
                                    onChange={handleChangeMaxCount}
                                    />
                            </Grid>
                        <LocalizationProvider dateAdapter={AdapterDateFns}>
                        <Grid item xs={12} md={6}>
                            <Typography className={classes.headers}>Event start time</Typography>
                            <Typography className={classes.headers}>(yyyy-mm-dd hrs:min)</Typography>
                            <DateTimePicker                               
                                disablePast
                                showToolbar
                                inputFormat='yyyy-MM-dd hh:mm'                                              
                                value={eventData.startTime}                    
                                onChange={handleChangeStartTime}         
                                renderInput={params =>                                    
                                    <TextField
                                        variant='outlined'
                                        size='small'
                                        className={classes.form}
                                        fullWidth                                                   
                                        {...params}
                                        sx={{
                                        svg: {color:'#bf360c'},
                                        label: {color: 'blue'},                                                  

                                    }} />}
                            />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Typography className={classes.headers}>Event end time</Typography>
                            <Typography className={classes.headers}>(yyyy-mm-dd hrs:min)</Typography>
                            <DateTimePicker
                                disablePast
                                inputFormat='yyyy-MM-dd hh:mm'                                            
                                value={eventData.endTime}                      
                                onChange={handleChangeEndTime}      
                                renderInput={params =>
                                    <TextField
                                        variant='outlined'
                                        size='small'
                                        className={classes.form} 
                                        fullWidth                                                   
                                        {...params}
                                        sx={{
                                        svg: {color:'#bf360c'},
                                        label: {color: 'blue'},
                                    }} />}
                                />
                        </Grid>
                    </LocalizationProvider >
                    <Grid item xs={12}>
                        <Typography className={classes.headers}>Event Location</Typography>
                        <TextField className={classes.form} size='small'
                            name='address'                            
                            variant='outlined'
                            fullWidth
                            multiline
                            value={eventData.address}
                            onChange={handleChangeAddress}
                            />
                    </Grid>
                    <Grid item xs={12}>
                        <Typography className={classes.headers}>Event description ...</Typography>
                        <TextField className={classes.form} size='small'
                            name='content'                            
                            variant='outlined'
                            fullWidth
                            multiline
                            value={eventData.content}
                            onChange={handleChangeContent}
                            />
                    </Grid>
                    
                </Grid>
                <Button className={classes.button}
                    variant='contained'
                    color='primary'
                    type='Post Event'
                    size='small'
                    fullWidth
                > SUBMIT
                </Button>
            </form>
        </Container>
        
           
        )
    };

export default PostForm;
