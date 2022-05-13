// importing libraries
import React from 'react';
import { Grid, Typography, Button, Card, CardContent, CardActions } from '@material-ui/core';
import { useNavigate } from 'react-router-dom';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import BiotechIcon from '@mui/icons-material/Biotech';
import SchoolIcon from '@mui/icons-material/School';
import SupportIcon from '@mui/icons-material/Support';

// importing local components
import Banner from './Banner';
import useStyles from './styles';


const Home = () => {
    const classes = useStyles();
    const navigate = useNavigate();

    return (
        
        <Grid container alighitems='stretch' className={classes.container}>
            <Grid item   xs={12} md={6}>
                <Banner />
            </Grid>
            <Grid item xs={12} md={6}>
                <Typography variant='h6' className={classes.homePageTitle}>How can we help you ?</Typography>
                <Typography className={classes.homePageText}>We provide right information about autism to make a child's life better.
                    You can be a parent, teacher, a carer or a servcie provider.
                    We give you a social platform to participate in social events and to be connected with service providers. Here you can share your story that may inspire many others who are dealing with similar issues.
                </Typography>
                
            </Grid>

            {/* first block */}

            <Grid item xs={12} md={3}>

                
                <Card className={classes.card} style={{marginTop: '4em', marginLeft: '2em'}}>
                    
                    <CardContent>
                        <div style={{textAlign: 'center'}}>
                            < AcUnitIcon color='primary' style={{ fontSize: '5em' }} />
                        
                            <div gutterBottom className={classes.title} >                            
                                <Typography gutterBottom className={classes.titleText}>                                
                                    Symptoms
                                </Typography>
                                <hr></hr>
                               
                            </div>

                            <div gutterBottom  >                            
                                <Typography style={{ fontWeight: 'bold' }} >                                
                                What is autism and how to tell if a child has autism?
                                </Typography>
                               
                            </div>
                        </div>
                    
                    </CardContent>         
               
                    <CardActions style={{justifyContent: 'center'}} >     
                        <Button  color='primary' className={classes.btn} onClick = {() => navigate('/content/symptoms')}>                 
                            <Typography className={classes.more}>Show more ...</Typography>
                        </Button>              
                    </CardActions>
                    
                </Card>
                
            </Grid>

            {/* second block */}

            <Grid item xs={12} md={3}>

                <Card className={classes.card} style={{marginTop: '4em', marginLeft: '2em'}}>
                        
                    <CardContent>
                        <div style={{textAlign: 'center'}}>
                            < BiotechIcon color='primary' style={{ fontSize: '5em' }} />
                        
                            <div gutterBottom className={classes.title} >                            
                                <Typography gutterBottom className={classes.titleText}>                                
                                    Diagnosis
                                </Typography>
                                <hr></hr>
                            
                            </div>

                            <div gutterBottom  >                            
                                <Typography style={{ fontWeight: 'bold' }} >                                
                                How to get a diagnosis for children showing autism symptoms?
                                </Typography>
                            
                            </div>
                        </div>
                    
                    </CardContent>         
            
                    <CardActions style={{justifyContent: 'center'}} >     
                        <Button  color='primary' className={classes.btn} onClick = {() => navigate('/content/symptoms')}>                 
                            <Typography className={classes.more}>Show more ...</Typography>
                        </Button>              
                    </CardActions>
                        
                </Card>
            </Grid>

            {/* third block */}

            <Grid item xs={12} md={3}>

                <Card className={classes.card} style={{marginTop: '4em', marginLeft: '2em'}}>
                        
                    <CardContent>
                        <div style={{textAlign: 'center'}}>
                            < SchoolIcon color='primary' style={{ fontSize: '5em' }} />
                        
                            <div gutterBottom className={classes.title} >                            
                                <Typography gutterBottom className={classes.titleText}>                                
                                Educational Supports
                                </Typography>
                                <hr></hr>
                            
                            </div>

                            <div gutterBottom  >                            
                                <Typography style={{ fontWeight: 'bold' }} >                                
                                How to help an autistic child as a parent or a teacher?
                                </Typography>
                            
                            </div>
                        </div>
                    
                    </CardContent>         
            
                    <CardActions style={{justifyContent: 'center'}} >     
                        <Button  color='primary' className={classes.btn} onClick = {() => navigate('/content/education')}>                 
                            <Typography className={classes.more}>Show more ...</Typography>
                        </Button>              
                    </CardActions>
                        
                </Card>
            </Grid>

            {/* fourth block */}

            <Grid item xs={12} md={3}>

                <Card className={classes.card} style={{marginTop: '4em', marginLeft: '2em', marginRight: '0.5em'}}>
                        
                    <CardContent>
                        <div style={{textAlign: 'center'}}>
                            < SupportIcon color='primary' style={{ fontSize: '5em' }} />
                        
                            <div gutterBottom className={classes.title} >                            
                                <Typography gutterBottom className={classes.titleText}>                                
                                Service Providers
                                </Typography>
                                <hr></hr>
                            
                            </div>

                            <div gutterBottom  >                            
                                <Typography style={{ fontWeight: 'bold' }} >                                
                                Service providers providing all kinds of service to help autistic children
                                </Typography>
                            
                            </div>
                        </div>
                    
                    </CardContent>         
            
                    <CardActions style={{justifyContent: 'center'}} >     
                        <Button  color='primary' className={classes.btn} onClick = {() => navigate('/content/service-provider')}>                 
                            <Typography className={classes.more}>Show more ...</Typography>
                        </Button>              
                    </CardActions>
                        
                </Card>
            </Grid>
            <Grid item xs={12} md={6}>
                <a href='https://www.youtube.com/watch?v=JYPeOm5A8XQ' target="_blank" rel="noreferrer">
                    <Button style={{marginTop: '4em'}}>
                        <img style={{height: '30%'}} src='https://img.youtube.com/vi/JYPeOm5A8XQ/maxresdefault.jpg' alt="Helping Parents and Therapists Cope with Autism Spectrum Disorder" width="500" height="600" />
                    </Button>
                </a>
            </Grid>
            <Grid item xs={12} md={6}>
                <Typography style={{marginTop: '2em'}} variant="h4">Helping Parents and Therapists Cope with Autism Spectrum Disorder.</Typography>
                <Typography style={{marginTop: '1em'}} variant="body1"> -- TED talk by Dr. Sherkow</Typography>
                <Typography variant="body2" style={{color:'grey', marginTop: '3em' }}>
                    Dr. Susan P. Sherkow is a practicing child, adolescent, and adult psychiatrist trained at Tufts University School of Medicine, Albert Einstein College of Medicine, and the New York Psychoanalytic Institute. She is currently the Director of The Sherkow Center for Child Development and Autism Spectrum Disorder.
                </Typography>
            </Grid>
            
            
      </Grid>
    
  )
}

export default Home