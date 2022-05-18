/*
This component will allow a singed user
to change their nickname
*/

import React, { useState } from 'react';
import { Avatar, Paper, Grid, Typography, TextField, IconButton, Button } from '@material-ui/core';
import CancelIcon from '@mui/icons-material/Cancel';
import EditIcon from '@mui/icons-material/Edit';
import useStyles from './styles';
import { useDispatch } from 'react-redux';

import { changeNickname } from '../../../Redux/Actions/authActions';



const initialState = { nickname: '' };

const EditNickname = (props) => { 

    const [formData, setFormData] = useState(initialState);    
   
    const classes = useStyles();
    const dispatch = useDispatch();
   

    const handleSubmit = (e) => {
        e.preventDefault();        
        dispatch(changeNickname(formData));
        
    }

    const handleChange = (e) => {
        setFormData({ nickname: e.target.value });
    }
    

    return (
        <Paper className={classes.paper}>
            
            <IconButton onClick={props.closeAd } className={classes.xButton} type='submit'><CancelIcon fontSize='large'/></IconButton>
            <div style={{display: 'flex', justifyContent:'center', marginTop: '3em'}}>
                <Avatar><EditIcon /></Avatar>
            </div>
            <Typography style={{ marginTop: '0.5em', marginLeft: '1em', fontSize: '1.4em' }}>Set your nickname</Typography>
            
            <hr style={{marginBottom: '2em'}}></hr>
            
            <form className={classes.form} onSubmit={handleSubmit}>
                <Grid container spacing={3}>
                    <Typography className={classes.signUpHeader}>Nickname</Typography>
                    <Grid item xs={12} >
                    <TextField size='small' 
                                name='nickname'                                   
                                autoFocus
                                variant='outlined'
                                required 
                                value={formData.nickname}                               
                                onChange={handleChange}                                
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

export default EditNickname;