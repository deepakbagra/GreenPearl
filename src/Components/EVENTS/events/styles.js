import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    allEventAppbar: {
        //height: '3rem',   

    },   
    card: {
        width: '100%',       
        marginTop: 'auto',
        background: '#e0e0e0',       
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
    card2: {
        margin: 'auto',
        width: '20rem',
        background: '#f3e5f5',
        [theme.breakpoints.down('xs')]: {
            margin: 'auto',
            width: '80%'
        },
        [theme.breakpoints.between('xs', 'sm')]: {
            margin: 'auto',
            width: '80%'
        },
        [theme.breakpoints.between('sm', 'md')]: {
            margin: 'auto',
            width: '90%'
        },
        [theme.breakpoints.between('md', 'lg')]: {
            margin: 'auto',
            width: '40%'
        },
    },
    title1: {
        textAlign: 'center',       
    },
    titleText1: {
        fontSize: '1.5em',
        [theme.breakpoints.down('xs')]: {
           fontSize: '0.9em' 
            
        },
        [theme.breakpoints.between('xs', 'sm')]: {
           fontSize: '1em' 
            
        },
        [theme.breakpoints.between('sm', 'md')]: {
           fontSize: '1.1em'
           
        },
        [theme.breakpoints.between('md', 'lg')]: {
           fontSize: '1.3em'
            
        },
    },
    title2: {
        textAlign: 'center',       
    },
    titleText2: {
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
    timeText1: {
        fontSize: '0.8em',
        color: '#b71c1c',
        fontWeight: '900',
        [theme.breakpoints.down('xs')]: {
           fontSize: '0.5em' 
            
        },
        [theme.breakpoints.between('xs', 'sm')]: {
           fontSize: '0.6em' 
            
        },
        [theme.breakpoints.between('sm', 'md')]: {
           fontSize: '0.7em'
           
        },
        [theme.breakpoints.between('md', 'lg')]: {
           fontSize: '0.7em'
            
        },
    },
    timeText2: {
        fontSize: '0.8em',
        color: '#b71c1c',
        fontWeight: '900',
        [theme.breakpoints.down('xs')]: {
           fontSize: '0.5em' 
            
        },
        [theme.breakpoints.between('xs', 'sm')]: {
           fontSize: '0.6em' 
            
        },
        [theme.breakpoints.between('sm', 'md')]: {
           fontSize: '0.7em'
           
        },
        [theme.breakpoints.between('md', 'lg')]: {
           fontSize: '0.8em'
            
        },
    },
    address: {
        fontSize: '0.8em',
        color: 'grey',
        fontWeight: '900',
        [theme.breakpoints.down('xs')]: {
           fontSize: '0.5em' 
            
        },
        [theme.breakpoints.between('xs', 'sm')]: {
           fontSize: '0.6em' 
            
        },
        [theme.breakpoints.between('sm', 'md')]: {
           fontSize: '0.7em'
           
        },
        [theme.breakpoints.between('md', 'lg')]: {
           fontSize: '0.8em'
            
        },
    },
    actions: {
        height:'3rem'
    },
    img: {
        paddingTop: '57%',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        backgroundBlendMode: 'darken',
        
    },
    count: {        
        display: 'flex',
        color: '#01579b',        
    }, 
    countNumber: {
        fontSize: '1.4em',
        fontWeight: '700',
        marginRight: '0.5em',
        
    },
    countText: {
        fontWeight: '700',
    },
    maxCount: {
        fontSize: '0.8em',
        fontWeight: 'bold'
    },
    contentText: {
        fontSize: '1.1em',        
        marginTop: '1.4em',
        wordWrap:'break-word',
        [theme.breakpoints.down('xs')]: {
            fontSize: '0.7em'
        },
        [theme.breakpoints.between('xs', 'sm')]: {
            fontSize: '0.8em'
        }
    },
   
    btn: {
        fontSize: '1.6rem',
        padding: '0.3em',
        margin: 'auto',
        [theme.breakpoints.down('xs')]: {
            fontSize: '0.8rem'
        },
        [theme.breakpoints.between('xs', 'sm')]: {
            fontSize: '1.2rem'
        },
        [theme.breakpoints.between('sm', 'md')]: {
            fontSize: '1.1rem'
        }
    },
    more: {
        fontSize: '0.9rem',
        textTransform: 'none',
        [theme.breakpoints.down('xs')]: {
            fontSize: '0.6rem'
        },
        [theme.breakpoints.between('xs', 'sm')]: {
            fontSize: '0.7rem'
        },
        [theme.breakpoints.between('sm', 'md')]: {
            fontSize: '0.8rem'
        }
    },
    btnText: {
        fontSize: '1rem',
        textTransform: 'none',
        [theme.breakpoints.down('xs')]: {
            fontSize: '0.8rem'
        },
        [theme.breakpoints.between('xs', 'sm')]: {
            fontSize: '0.9rem'
        },
        [theme.breakpoints.between('sm', 'md')]: {
            fontSize: '1rem'
        }
    },
    searchBar: {
        height: '1.8rem',
        width: '12em',
        
        backgroundColor: '#f9fbe7',
        display: 'flex',
        
        [theme.breakpoints.down('xs')]: {
            height: '1.3rem',
            width: '5.5rem',
        },
        [theme.breakpoints.between('xs', 'sm')]: {
            height: '1.9rem',
        },
        [theme.breakpoints.between('sm', 'md')]: {
            height: '2rem',
        },
        [theme.breakpoints.between('md', 'lg')]: {
            height: '2.2rem',
        }
    },
    
}))