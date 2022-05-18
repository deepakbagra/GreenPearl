/*
This is a Sign In component 
This will provide a UI for a user to enter their login detail
and submit through Submit button
*/

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Avatar, Paper, Grid, Typography, TextField, IconButton, InputAdornment, Container, Button } from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import useStyles from './styles';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';

import { signIn } from '../../Redux/Actions/authActions';
import { userInfo } from '../../Redux/Actions/authActions';


const initialState = { username: '', password: '' };

const SignIn = () => {
    const [formData, setFormData] = useState(initialState);
    const [showPassword, setShowPassword] = useState(false);

    const classes = useStyles();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        
        dispatch(signIn(formData, navigate));
    }

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    const handleShowPassword = () => {
        setShowPassword((prevShowPassword) => !prevShowPassword);
    }

    useEffect(() => {
        return () => {
            dispatch(userInfo());
        }
    }, [dispatch])

     

    return (
        <Container component='main' maxWidth='xs' className={classes.main}>
            <Paper className={classes.paper} elevation={5}>
            
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <form className={classes.form} onSubmit={handleSubmit}>
                    <Grid container spacing={2}>
                        <Typography className={classes.signUpHeader}>Username</Typography>
                        <Grid item xs={12} >
                            <TextField size='small'
                                    name='username'                                    
                                    autoFocus
                                    variant='outlined'
                                    required   
                                    fullWidth
                                    value={formData.username}                                
                                    onChange={handleChange}
                                />
                        </Grid>
                        <Typography className={classes.signUpHeader}>Password</Typography>
                        <Grid item xs={12} >
                            <TextField size='small'
                                    name='password'                                   
                                    autoFocus
                                    variant='outlined'
                                    required      
                                    fullWidth
                                    value={formData.password}
                                    type={showPassword ? 'text' : 'password'}
                                    onChange={handleChange}
                                    InputProps={{
                                        endAdornment:
                                            <InputAdornment position='end'>
                                                <IconButton onClick={handleShowPassword}>
                                                {showPassword ? <VisibilityOff /> : <Visibility />} 
                                                </IconButton>
                                            </InputAdornment>                                    
                                }}
                            />
                        </Grid>
                    </Grid>
                    <Button                        
                        type='submit'
                        size='small'
                        name='submit'
                        fullWidth variant='contained'
                        color='primary'
                        className={classes.auth}
                         >
                        Sign In
                    </Button>
                </form>                
                <Button component={Link} to='/auth/signup'
                    className={classes.auth}
                    size='small' fullWidth variant='contained'
                    color='primary'>Not already sign up ? Sign up here </Button>
                <Button onClick={() => navigate('/')}
                    className={classes.auth}
                    fullWidth color='secondary' >
                    Close
                </Button>
            </Paper>
        </Container>
    )
}

export default SignIn;
