import { Typography, Button } from "@material-ui/core";
import { useNavigate } from 'react-router-dom';
import useStyle from './styles';

const Copyright = () => {
    const classes = useStyle();
    const navigate = useNavigate();
   
    return (
        <div className={classes.root}>
            <Typography className={classes.text}>
                {new Date().getFullYear()}  
                {', Copyright © '}
                | monajamshaid.info | All Rights Reserved |
                <Button onClick={() => navigate('/privacy-policy')}>                 
                        <Typography style={{color:'white', fontSize:'0.8rem'}}>Privacy Policy</Typography>
                </Button>
            </Typography>
        </div>
    )
}

export default Copyright;