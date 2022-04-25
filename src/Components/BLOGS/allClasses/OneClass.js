// importing external libraries

import React, { useEffect } from 'react';

import {
  Card, CardActions, CardContent,
  Button, Typography,
} from '@material-ui/core';

import { useNavigate } from 'react-router-dom';

// local imports

import useStyles from './styles';


const OneClass = ({ oneClass }) => { 
  
    const classes = useStyles();
    //const dispatch = useDispatch();
    const navigate = useNavigate();
 
  const onClickPost = () => {  
        localStorage.setItem('classId', oneClass?.id?.toString());
        navigate('/class/create-blog');
    }
    
  const onClickView = () => {
        localStorage.setItem('classId', oneClass?.id?.toString());  
        navigate('/class/show-blogs');
    }

  useEffect(() => {
      console.log('class id in one class',oneClass?.id?.toString())
        // return () => {
        //     localStorage.setItem('classId', oneClass?.id?.toString()); 
        // }
    },[oneClass?.id, navigate])
   
    return (
      <Card className={classes.card}>
             
        <CardContent>
          <div gutterBottom className={classes.title1} >
            <Typography gutterBottom className={classes.titleText1}>
              {oneClass?.name}
            </Typography>
            <hr></hr>
            </div>
            <Typography gutterBottom multipleLine className={classes.address}>
                {oneClass?.description}
            </Typography>
            
        </CardContent>

        <CardActions className={classes.actions} >
            <Button className={classes.btn} color='primary' onClick={onClickView}>            
                <Typography className={classes.btnText}>View Blogs</Typography>
            </Button>
            <Button className={classes.btn} color='primary' onClick={onClickPost}>            
                <Typography className={classes.btnText}>Post Blog</Typography>
            </Button>
         
        </CardActions>
      </Card>
  );
};

export default OneClass;
