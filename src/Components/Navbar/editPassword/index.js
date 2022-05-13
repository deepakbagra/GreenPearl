/*
This component will allow a singed user
to change their password
*/

import React, { useState, useEffect } from 'react';
import { Avatar, Paper, Grid, Typography, TextField, IconButton, InputAdornment, Button } from '@material-ui/core';
import CancelIcon from '@mui/icons-material/Cancel';
import EditIcon from '@mui/icons-material/Edit';
import useStyles from './styles';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import { changePassword } from '../../../Redux/Actions/authActions';
import { PWD_CHANGE } from '../../../Redux/Constant/actionTypes';


const initialState = { newPassword: '' };

const EditPassword = (props) => { 

    const [formData, setFormData] = useState(initialState);
    const [oldPassword, setOldPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    
    
    const pwdChangeStatus =  useSelector(state => state.pwdChange);
    
    const classes = useStyles();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();        
        dispatch(changePassword(formData, oldPassword));       
    }

    const handleChangeNewPwd = (e) => {
        setFormData({ newPassword: e.target.value });
    }

    const handleChangeOldPwd = (e) => {
        setOldPassword(e.target.value);
    }

    const handleShowPassword = () => {
        setShowPassword((prevShowPassword) => !prevShowPassword);
    }

    useEffect(() => {
        if (pwdChangeStatus === 200) { 
            console.log('200 ok')
            props.logout();

            // navigate to sign in page after update password           
            navigate('/auth/signin');
            dispatch({ type: PWD_CHANGE, payload: 401 });
            
        }
    }, [navigate, dispatch, props, pwdChangeStatus]);
   
    return (
        <Paper className={classes.paper}>
            
            <IconButton onClick={props.closePwd } className={classes.xButton} type='submit'><CancelIcon fontSize='large'/></IconButton>
            <div style={{display: 'flex', justifyContent:'center', marginTop: '3em'}}>
                <Avatar><EditIcon /></Avatar>
            </div>
            <Typography style={{ marginTop: '0.5em', marginLeft: '1em', fontSize: '1.4em' }}>Change your password</Typography>
            <Typography style={{marginBottom:'1em', marginLeft: '1.5em', fontSize:'0.9em'}}>Chnaging password frequently helps improve authentication strength for your account</Typography>
            <hr style={{marginBottom: '2em'}}></hr>
            
            <form className={classes.form} onSubmit={handleSubmit}>
                <Grid container spacing={3}>
                    <Typography className={classes.signUpHeader}>Old password</Typography>
                    <Grid item xs={12} >
                    <TextField size='small' 
                                name='oldPwd'                                   
                                autoFocus
                                variant='outlined'
                                required 
                                value={formData.oldPwd}
                                type={showPassword ? 'text' : 'password'}
                                onChange={handleChangeOldPwd}
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
                    <Typography className={classes.signUpHeader}>New Password</Typography>
                    <Grid item xs={12} >
                        <TextField size='small'
                                name='newPwd'                                   
                                autoFocus
                                variant='outlined'
                                required
                                value={formData.newPwd}
                                type={showPassword ? 'text' : 'password'}
                                onChange={handleChangeNewPwd}
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
                    variant='contained'
                    color='primary'
                    className={classes.auth}
                        >
                    Submit
                </Button>
            </form>
                
        </Paper>
        
  );
}

export default EditPassword;