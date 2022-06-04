import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    container: {
        textAlign: 'left',       
    },
    title: {        
        fontSize: '2em',
        marginTop: '1em',
        textAlign: 'center',
        
        [theme.breakpoints.between('xs', 'sm')]: {
            fontSize: '1.2rem',           
        },
        [theme.breakpoints.between('sm', 'md')]: {
            fontSize: '1.5rem',           
        },
        [theme.breakpoints.between('md', 'lg')]: {
            fontSize: '1.7rem',
        },
        [theme.breakpoints.up('lg')]: {
            fontSize: '2em',
        }
    },
    subTitle: {
        fontSize: '1.5em',
        marginTop: '1em',
        textAlign: 'center',
        
        [theme.breakpoints.between('xs', 'sm')]: {
            fontSize: '1rem',           
        },
        [theme.breakpoints.between('sm', 'md')]: {
            fontSize: '1.2rem',           
        },
        [theme.breakpoints.between('md', 'lg')]: {
            fontSize: '1.3rem',
        },
        [theme.breakpoints.up('lg')]: {
            fontSize: '1.5em',
        }

    },
    content: {        
        fontSize: '1.2em',
        marginTop: '3em',        
        marginLeft: '10em',
        marginRight: '10em',
       lineHeight: '2em',
        
        [theme.breakpoints.between('xs', 'sm')]: {
            fontSize: '1.2rem',           
        },
        [theme.breakpoints.between('sm', 'md')]: {
            fontSize: '1.5rem',           
        },
        [theme.breakpoints.between('md', 'lg')]: {
            fontSize: '0.9rem',
        },
        [theme.breakpoints.up('lg')]: {
            fontSize: '1.2em',
        }
    },
    
    
}))