import { makeStyles } from '@material-ui/core/styles';
import { deepPurple } from '@material-ui/core/colors';

export default makeStyles((theme) => ({
    appBar: {        
        zIndex: '5',
        background: 'white',
        boxShadow: 'none',
        marginBottom: '2rem',
        marginTop: '2rem',       
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',              
        [theme.breakpoints.between('xs', 'sm')]: {
            height: '5rem',           
        },
        [theme.breakpoints.between('sm', 'md')]: {
            height: '5rem',           
        },
        [theme.breakpoints.between('md', 'lg')]: {
            height: '5rem',
        }
    },
    topBar: {
       
        background: 'white',
        boxShadow: 'none',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        height: '1.3rem',        
        [theme.breakpoints.between('xs', 'sm')]: {
            height: '2rem',           
        },
        [theme.breakpoints.between('sm', 'md')]: {
            height: '2.2rem',           
        },
        [theme.breakpoints.between('md', 'lg')]: {
            height: '2.3rem',
        }
    },
    signinBox: {
        width: '4em',
        background: '#e0e0e0',        
    },
    searchBar: {
        height: '1.2em',
        width: '10em',
        backgroundColor: '#f9fbe7',
        //borderRadius: '0.75em',
        display: 'flex',
        alignItems: 'center',
        [theme.breakpoints.down('xs')]: {
            height: '1.2rem',
        },
        [theme.breakpoints.between('xs', 'sm')]: {
            height: '1.3rem',           
        },
        [theme.breakpoints.between('sm', 'md')]: {
            height: '1.3rem',           
        },
        [theme.breakpoints.between('md', 'lg')]: {
            height: '1.4rem',                      
        }
    },
    searchInput: {
        padding: '0.5rem',
        marginLeft: '0.5rem',
        fontSize: '0.8rem',
        [theme.breakpoints.down('xs')]: {
            fontSize: '0.4rem',
            marginLeft: '0.1rem'
        },
        [theme.breakpoints.between('xs', 'sm')]: {
            fontSize: '0.5rem',
            marginLeft: '0.2rem'          
        },
        [theme.breakpoints.between('sm', 'md')]: {
            fontSize: '0.7rem',
            marginLeft: '0.3rem'          
        },
        [theme.breakpoints.between('md', 'lg')]: {
            fontSize: '0.8rem',
            marginLeft: '0.4rem'          
        } ,       
    },
    searchIcon: {
        padding: '0.4em',
        fontSize: '1em',
        [theme.breakpoints.down('xs')]: {
            padding: '0.4rem',
            fontSize: '0.7rem',
        },
        [theme.breakpoints.between('xs', 'sm')]: {
            padding: '0.5rem',
            fontSize: '0.8rem',      
        },
        [theme.breakpoints.between('sm', 'md')]: {
            padding: '0.6rem',
            fontSize: '0.9rem',         
        },
        [theme.breakpoints.between('md', 'lg')]: {
            padding: '0.7rem',
            fontSize: '1em',
        },
    },
    closeIcon: {
        padding: '0.6rem',
        fontSize:'1.2rem',
        [theme.breakpoints.down('xs')]: {
            padding: '0',
            fontSize:'0.85rem',
        },
        [theme.breakpoints.between('xs', 'sm')]: {
            padding: '0',
            fontSize:'0.95rem',    
        },
        [theme.breakpoints.between('sm', 'md')]: {
            padding: '0',
            fontSize:'1rem',         
        },
        [theme.breakpoints.between('md', 'lg')]: {
            padding: '0',
            fontSize:'1.2rem',
        },
    },
    navLinks: {        
        display: 'flex',
        marginLeft: '-33em'
    },    
    topNavLinks: {        
        display: 'flex',
        marginLeft: '2em'
        
        
    },
    topNavLinksButton: {
                 
        color: 'black',        
        fontSize: '0.8em',
    },
    account: {        
        display: 'flex', 
        marginRight: '-5em'
    },
    modal: {
       backgroundColor: 'rgba(0,0,0,0.7)',
    },
    xButton: {
        position: 'absolute',
        top: '0%',
        left: '95%',
        color: 'white',
        [theme.breakpoints.down('xs')]: {
            left: '91%',
        },
        [theme.breakpoints.between('xs', 'sm')]: {
            left: '91%',
        },
        [theme.breakpoints.between('sm', 'md')]: {
            left: '94.3%',
        },
        [theme.breakpoints.between('md', 'lg')]: {
            left: '95%',
        },
    },
    auth: {
        color: 'black',        
        fontSize: '0.8em',
        backgroundColor: 'white'
    },
    authMenu: {
        fontSize: '0.72rem',        
    },
    divider: {
        margin: 'auto'
    },
    avatar: {
        //color: theme.palette.getContrastText(deepPurple[600]),
        //backgroundColor: deepPurple[600],
        width: '1.7em',
        height: '1.7em',
        marginTop: '15%',
        marginLeft: '2em',
        [theme.breakpoints.down('xs')]: {
            width: '1.2em',
            height: '1.2em',            
        }
    },
    profile: {
        display: 'flex',       
        width: '100px',
    },
    brand: {
        height: '5rem',
        background: 'white',
        [theme.breakpoints.down('xs')]: {
            height: '2rem',            
        }
    },
    button: {
        fontSize: '0.9em',
        color: 'black',
        
             
    },
    homeIcon: {
        fontSize: '1em',
        color: 'black'
    },
   
    
    
}))