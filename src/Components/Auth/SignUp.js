/*
This is a Sign Up component 
This will provide a UI for a user to register their login detail
and submit through Submit button
*/

import React, { useState } from 'react';
import { Avatar, Paper, Container, Button, Grid, TextField, Typography, InputAdornment, IconButton } from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import useStyles from './styles';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Box from '@mui/material/Box';

import { signUp } from '../../Redux/Actions/authActions';

const initialState = {
    username: '',    
    password: '',   
};

const SignUp = () => {
    const [formData, setFormData] = useState(initialState);
    const [showPassword, setShowPassword] = useState(false);
    const [roleId, setRole] = useState('');
    const [repeatPassword, setRepeatPassword] = useState('');

    const classes = useStyles();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        // comparing repeat password if equal to first password
        if (formData.password.localeCompare(repeatPassword) !==0) {
            alert('password and repeat password do not match !');
        }
        else            
            dispatch(signUp(formData, roleId, navigate)); 
    }

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    const handleChangeRepeatPwd = (e) => {
        setRepeatPassword(e.target.value);
    }

    const handleRoleChange = (e) => {
        setRole(e.target.value);
    }

    const handleShowPassword = () => {
        setShowPassword((prevShowPassword) => !prevShowPassword);
    }
    

    return (
        <Container component='main' className={classes.main} maxWidth='xs'>
            <Paper className={classes.paper} elevation={5}>
                <Avatar className={classes.avatar}>
                  <LockOutlinedIcon />
                </Avatar>
                <form className={classes.form} onSubmit={handleSubmit}>
                    <Grid container spacing={2}>
                        <Typography className={classes.signUpHeader}>Username</Typography>
                        <Grid item xs={12}>
                            <TextField size='small'
                                name='username'
                                placeholder='required'
                                autoFocus
                                variant='outlined'
                                required
                                fullWidth
                                value={formData.username}
                                onChange={handleChange}
                            />
                        </Grid>
                        
                        <Typography className={classes.signUpHeader}>Password</Typography>
                        <Grid item xs={12}>
                            <TextField size='small'
                                name='password'
                                placeholder='required'
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
                        <Typography className={classes.signUpHeader}>Repeat Password</Typography>
                        <Grid item xs={12}>
                            <TextField size='small'
                                name='repeatPassword'
                                placeholder='required'                               
                                autoFocus
                                variant='outlined'
                                required       
                                fullWidth
                                value={repeatPassword}
                                type='password'
                                onChange={handleChangeRepeatPwd}                                
                            />
                        </Grid>
                    </Grid>
                    <Typography className={classes.role}>Role</Typography>
                    <Grid item xs={12}>
                        <Box sx={{ minWidth: 120, marginBottom:'0.5em' }}>
                            <FormControl fullWidth className={classes.selecor} >                                
                                <Select                                
                                id="roleId"
                                value={roleId}                               
                                onChange={handleRoleChange}
                                >
                                <MenuItem style={{fontSize: '0.8em'}} value={1}>Admin</MenuItem>
                                <MenuItem style={{fontSize: '0.8em'}} value={2}>Parent</MenuItem>
                                <MenuItem style={{fontSize: '0.8em'}} value={3}>Teacher</MenuItem>
                                <MenuItem style={{fontSize: '0.8em'}} value={4}>Carer</MenuItem> 
                                <MenuItem style={{fontSize: '0.8em'}} value={5}>Service Provider</MenuItem>    
                                </Select>
                            </FormControl>
                        </Box>
                    </Grid>
                    <Button type='submit' fullWidth variant='contained' color='primary' className={classes.submit} >
                        Sign Up
                    </Button>                    
                </form>
                <Button onClick={() => navigate('/')}
                    style={{ fontSize: '0.8em', fontWeight: 'bold', textTransform: 'none' }}
                    fullWidth color='secondary' >
                    Close
                </Button>
              
            </Paper>
        </Container>
    )
}

export default SignUp;