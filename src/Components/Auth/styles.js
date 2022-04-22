import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  main: {    
    display: 'flex',
    marginBottom: '4rem',
    marginTop: '6rem',
    justifyContent: 'center',
    [theme.breakpoints.down('xs')]: {
      width: '60%',
    }  
  },
  paper: {
    marginTop: theme.spacing(5),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '80%',
    padding: theme.spacing(1), 
    [theme.breakpoints.down('xs')]: {
      marginTop: theme.spacing(2),
    },
  }, 
  
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
    },
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%',
    marginTop: theme.spacing(1),
  },
  submit: {
    marginTop: '0.5em',
    textTransform: 'none'
   
  },
  auth: {
    marginTop: theme.spacing(2),
    textTransform: 'none',
    fontSize: '0.8em'
  },
  googleButton: {
    marginBottom: theme.spacing(2),
    height:'2.3rem'
  },
  signUpHeader: {
    marginLeft: '0.6em',
    fontSize: '0.8em',
    fontWeight: 'bold'
  },
  role: {
    fontSize: '.8em',
    fontWeight: 'bold',
    marginBottom: '0.7em',
    marginTop: '0.7em'
  }, 
  
  selecor: {
    '& .css-1yk1gt9-MuiInputBase-root-MuiOutlinedInput-root-MuiSelect-root': {
      height: '2.5em'
    },
  },
  
}));