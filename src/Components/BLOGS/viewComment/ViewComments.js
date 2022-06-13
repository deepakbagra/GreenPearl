import React from 'react';
import { Grid, IconButton, Paper } from '@material-ui/core';
import Comment from './Comment';
import CancelIcon from '@material-ui/icons/Cancel';
import useStyles from './styles';

const ViewComments = ({ close, blog }) => {
  const comments = blog?.comments;
  console.log("comments", comments);
  

  const classes = useStyles();

    return (
        <div >
            <IconButton onClick={close} className={classes.close} >
                <CancelIcon />
            </IconButton>
        <Paper className={classes.paper} style={{overflowY: 'scroll'}}  >
            
         <Grid container alignItems='center' spacing={2} style={{ padding: '0em', marginTop: '0em' }} >
         
        {comments?.map((comment) => (
          <Grid item                       
                xs={12}  >
            <Comment comment={comment} close={close} />
            <hr style={{marginTop: '6em'}}></hr>
            </Grid>
      )) }
            </Grid>
            
        </Paper>
    </div>
  )
}

export default ViewComments