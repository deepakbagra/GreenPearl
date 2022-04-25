import { makeStyles } from "@material-ui/core";


export default makeStyles((theme) => ({
    main: {    
        display: 'flex',       
        width: '70%',       
        marginTop: '10rem',
        justifyContent: 'center',
        background: 'white',
        [theme.breakpoints.down('xs')]: {
          width: '80%',
        }  
      },
    root: {
        alignItems: 'center',
        textAlign: 'center'
    },
    containerForm: {
        width: '50%',
        marginTop: '2em',
        
    },    
    header: {
        fontSize: '1em',
        fontWeight: 'bold',        
        marginBottom: '2em'               
    },
    headers: {
        fontSize: '0.9rem',
        fontWeight: 'bold',        
        marginBottom: '0.4em'               
    },   
    form: {
        marginBottom: '.9rem',
        width: '100%'
        
    },
    img: {
        fontSize: "0.8rem",
        marginLeft: '5%',
        
    },
    
    button: {
        marginTop: '2%',        
    },
    
   
   
}))