import { Typography } from "@material-ui/core";
import useStyle from './styles';

const Copyright = () => {
    const classes = useStyle();
   
    return (
        <div className={classes.root}>
            <Typography className={classes.text}>
                {new Date().getFullYear()}  
                {'Copyright © '}
                | autism-social-plateform | All Rights Reserved.
            </Typography>
        </div>
    )
}

export default Copyright;