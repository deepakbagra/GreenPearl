import { makeStyles } from '@material-ui/core/styles';


export default makeStyles((theme) => ({

    avatarContainer: {
        display: 'flex',
        justifyContent: 'center',       
    },
    avatar: {
        height: '9.8em',
        width: '9.8em',
    },
    modal: {
        backgroundColor: 'rgba(0,0,0,0.7)',
    },
    paper: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        height: '30rem',
        width: '25rem',
        borderRadius: '1em',
        
        textAlign: 'center'
    },
    
    header: {
        fontSize: '0.9rem',
        fontWeight: 'bold',
        marginLeft: '30%',
        margin: '1em'       
    },
    form: {
        marginBottom: '.9rem',
        
    },
    img: {
        fontSize: "0.8rem",
        // marginLeft: '5%',
        marginTop: '1em'
    },
    wrapFile: {
        textAlign: 'center',
        marginTop: '2em'
        
    },
    file: {
        marginTop: '1%', 
        marginLeft: '5%'
    },
    button: {
        marginTop: '2em',        
    },
    xButton: {
        position: 'absolute',
        right: '0em',        
        color: 'red',        
    },
    
     
      
      auth: {
        marginTop: theme.spacing(4),
        textTransform: 'none',
          fontSize: '0.8em',
        width: '67%'
      },
      
      signUpHeader: {
        margin:'auto',         
        fontSize: '0.8em',
        fontWeight: 'bold'
      },
      
      

}));