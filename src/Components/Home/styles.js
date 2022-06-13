import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    container: {
        background: 'white',
        marginTop: '9.1rem',
    },
    banner: {
        height: '20rem',        
    },
    homePageTitle: {
        color: '#424242',
        borderBottom: '1px solid',
        marginTop: '2em',
        marginBottom: '1em',
        fontSize:'1.7em'
    },
    homePageText: {
        color: '#424242',        
        marginTop: '2em',
        fontSize: '1.2em'
        
    },
    card: {
        width: '100%',
        background: '#e0e0e0', 
        height: '19em',
        [theme.breakpoints.down('xs')]: {
            
            width: '50%'
        },
        [theme.breakpoints.between('xs', 'sm')]: {
            
            width: '60%'
        },
        [theme.breakpoints.between('sm', 'md')]: {
            
            width: '90%'
        },
        [theme.breakpoints.between('md', 'lg')]: {
            
            width: 'auto'
        },
    },
   
    title: {
        fontSize: '0.85em'      
    },
    titleText: {
        fontSize: '2em',
        [theme.breakpoints.down('xs')]: {
           fontSize: '1em' 
            
        },
        [theme.breakpoints.between('xs', 'sm')]: {
           fontSize: '1.3em' 
            
        },
        [theme.breakpoints.between('sm', 'md')]: {
           fontSize: '1.6em'
           
        },
        [theme.breakpoints.between('md', 'lg')]: {
           fontSize: '1.8em'
            
        },
    },
   
    
    btn: {
        textTransform: 'none'
    },
    more: {
        fontWeight: 'bold',
        margin: 'auto'
   }
    
}))