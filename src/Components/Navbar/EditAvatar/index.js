/*
This component will allow a singed user
to change their profile picture
*/

import React, { useState, useEffect, useCallback } from 'react';
import { Paper, Avatar, Typography, IconButton } from '@material-ui/core';
import CancelIcon from '@mui/icons-material/Cancel';
import useStyles from './styles';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from "react-hook-form";
import { CircularProgress } from '@mui/material';
import { changeAvatar } from '../../../Redux/Actions/authActions';


const EditAvatar = (props) => {
   
    const { register, handleSubmit } = useForm();
    const [isLoading, setIsLoading] = useState(false);
    
    const [user, setUser] = useState(useState(JSON.parse(localStorage.getItem('userInfo')))[0]);
    
    const newUser = useSelector(state => state.userInfo);
    const newAvatar = useSelector(state => state.newAvatar);


    console.log('newAvatar', newAvatar);
    console.log('newUser', newUser);
    console.log('isLoading', isLoading);

    const username = user?.data?.user?.username;

    console.log('userInfo in edit avatar component', user);
    console.log('is loading', isLoading);

    const classes = useStyles();
    const dispatch = useDispatch();   

    const onSubmit = useCallback(async (data) => {

        const formData = new FormData();
        formData.append("file", data.file[0]);
        dispatch(changeAvatar(formData));
        setIsLoading(prev => !prev);

    },[dispatch]);

    useEffect(() => {
        if (newUser) {
            setUser(newUser);
            setIsLoading(prev => !prev);
        }
    }, [newUser, onSubmit]);  
   
   
    return (
        <Paper className={classes.paper}>
            {!isLoading ? <div style={{marginTop: '1em', textAlign:'center'}} > <CircularProgress  /> </div>: null}
            <IconButton onClick={props.closeAd } className={classes.xButton} type='submit'><CancelIcon fontSize='large'/></IconButton>
            <Typography style={{marginTop: '2em', marginLeft: '1em', fontSize:'1.4em'}}>Profile picture</Typography>
            <Typography style={{marginBottom:'1em', marginLeft: '1.5em', fontSize:'0.9em'}}>A picture helps people recognize you and lets you know when you are signed in to your account</Typography>
            <hr></hr>
            <div className={classes.avatarContainer}>
                <Avatar className={classes.avatar} alt={username} src={user?.data?.avatar?.path} />
                </div>           
          
            <div className={classes.wrapFile}>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input type="file" {...register("file")} />
                    <input style={{color:'white', background: 'blue', borderColor:'blue'}} type="submit" />
                    </form>
            </div>
      </Paper>  
  );
}

export default EditAvatar;