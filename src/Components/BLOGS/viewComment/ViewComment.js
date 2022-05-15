import React, { useState } from 'react';
import { Paper, TextField, IconButton, Button } from '@material-ui/core';
import CancelIcon from '@material-ui/icons/Cancel';
import useStyles from './styles';
import { useDispatch } from 'react-redux';
import { postParentComment } from '../../../Redux/Actions/blogActions';

const ViewForm = ({ closeEdit, blogId }) => {

    

    const classes = useStyles();
    const dispatch = useDispatch();

   
    
    return (
        <Paper className={classes.paper}>
            <div style={{display:'flex', justifyContent: 'flex-end'}}>
            <IconButton onClick={closeEdit} style={{color: 'red'}} >
                <CancelIcon />
                </IconButton>
                </div>
                
                <div style={{display:'flex', justifyContent: 'center'}}>
                <Button className={classes.button}
                    variant='contained'
                    color='primary'
                    type='sumbit'
                    size='small'
                                        
                    > Post Comment
                    </Button>
                </div>
            
      </Paper>  
  );
};

export default ViewForm;
