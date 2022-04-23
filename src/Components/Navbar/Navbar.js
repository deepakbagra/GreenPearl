// importing in-built libraries

import { AppBar, IconButton, Paper, Button } from '@material-ui/core';
import decode from 'jwt-decode';

import HomeIcon from '@material-ui/icons/Home';

import React, { useState, useEffect, useCallback } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

// importing local components

import useStyles from './styles';
import BrandName from './BrandName';
import LoginMenu from './Login';
import LogoutMenu from './LogoutMenu';
import Resources from './Resources/Resources';
import AboutAutism from './Autism/AboutAutism';
import SearchBar from './SearchBar';
import Event from './Events';
import Service from './Services';

const Header = () => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
  const [screenSize, setScreenSize] = useState(window.innerWidth);
  
  console.log('user in navbar', user)

  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const classes = useStyles();
  
  const logout = useCallback(() => {
    
    dispatch({ type: 'LOGOUT' });

    navigate('/');

    setUser(null);
    
  }, [dispatch, navigate]);

  useEffect(() => {
    window.addEventListener("resize", () => setScreenSize(window.innerWidth));    
    
    return () => window.removeEventListener("resize", () => setScreenSize(window.innerWidth));    
  });
  
  useEffect(() => {
    const token = user?.data?.token;    
    if (token) {
      const decodedToken = decode(token);     
      if (decodedToken.exp * 1000 < new Date().getTime()) {
        logout();
      }      
    }
    setUser(JSON.parse(localStorage.getItem('profile')));
  }, [navigate, logout, user?.data?.token]);
 

  return (
    <>
    {/* Top Bar */}

      <AppBar className={classes.topBar} position='fixed'  >             
        <Paper  comonent='form' autoComplete='off' noValidate className={classes.searchBar}>
              <SearchBar />
        </Paper>

        {/* top bar nav links */}

        <div className={classes.topNavLinks}>
          <Button component={Link} to='/contact' color='primary' className={classes.topNavLinksButton}>Contact</Button>
          <Button component={Link} to='/aboutus' color='primary' className={classes.topNavLinksButton}>About Us</Button>                  
        </div>

        {/* Login button */}
        
        {user?.code === 200 ?         
          <Button variant='text' className={classes.auth} color='secondary'>
            <LogoutMenu logout={logout} />
          </Button>
             :  (screenSize > 600 ? 
            <div className={classes.account}>
              <a href="http://81.68.206.216:10010/" target="_blank" rel="noreferrer"><Button className={classes.auth} variant='text' >Admin Dashboard</Button>
              </a>
                <Button className={classes.auth} component={Link} to='/auth/signin' variant='text' >Sign In</Button>
                <Button className={classes.auth} component={Link} to='/auth/signup' variant='text' >Create a new Account</Button>
                   
              </div> :  <LoginMenu /> 
            )
          }
      </AppBar>
      
      {/* Bottom App Bar */}

      <AppBar className={classes.appBar} position='fixed' color='inherit'>
        <BrandName />
        
      {/* nav links  */}

        <div className={classes.navLinks}>
          <IconButton component={Link} to='/'><HomeIcon className={classes.homeIcon}/></IconButton>
          <Button  ><AboutAutism /></Button>
          <Button component={Link} to='/support' ><Resources /></Button>
          <Button className={classes.button}><Event user={user} /></Button>          
          <Button className={classes.button}><Service user={user}/></Button>
          <Button component={Link} to='/blog' className={classes.button}>Blog</Button>
        </div>
      </AppBar>
    </>
  );
};

export default Header;
