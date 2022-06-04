import { useSelector } from 'react-redux';
import { Grid, Typography,Paper, Button } from '@material-ui/core';
import React, { useState, useEffect } from 'react';
import Pagination from '@mui/material/Pagination';
import { useDispatch } from 'react-redux';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import { useNavigate } from 'react-router-dom';
import SearchBar from '../search/SearchBarBlogs';


import useStyles from './styles';
import Blog from '../Blog';
import { viewBlogsByClass } from '../../../Redux/Actions/blogActions';

const BlogsByClass = () => {
    
  const blogs = useSelector(state => state.blogs);  
  const [page, setPage] = useState(1);

  const dispatch = useDispatch();
  const navigate = useNavigate();

    const handleChange = (event, value) => {
        setPage(value);
    };
    
    const pageLength = localStorage.getItem('page');

    const classId = localStorage.getItem('classId');
  
    console.log('blogs: ', blogs);
    console.log('classId', classId);
    console.log('page length', pageLength);
  
    const classes = useStyles();
    
    useEffect(() => {
        dispatch(viewBlogsByClass(classId, page));
    }, [dispatch, page, classId]);

  return (
    !blogs?.length ? <div style={{ height: '24rem' }}><h1>No Service to display</h1> </div> : (
      <div style={{width: '90%', marginLeft: '4em'}}>
        <div style={{ display: 'flex', marginTop: '9em', justifyContent:'space-between' }}>
          <Typography color='secondary'
            style={{ fontSize: '1.2em', textAlign: 'center' }}>
            View Blogs
          </Typography>
          <Paper  comonent='form' autoComplete='off' noValidate className={classes.searchBar}>
            <SearchBar page={page} classId={classId} />
          </Paper>
        </div>
        <hr style={{ marginTop: '2em' }}></hr>

        <Button color='primary' style={{ marginTop: '2em', fontWeight: 'bold'}} onClick={() => navigate(-1)}>
        <KeyboardBackspaceIcon /> Back to class list
      </Button>       
        
        <Grid container alignItems='stretch' spacing={5} style={{ padding: '0em', marginTop: '2em' }} >
        
          {blogs.map((blog) => (          
          <Grid item                       
                xs={12} sm={6} md={4} >
              <Blog blog={blog} page={page} classId={classId} />
          </Grid>
          ))}          
        </Grid>
        <Pagination className={classes.page} count={pageLength} page={page} color='primary' onChange={handleChange} />
      </div>
      )
  );
};

export default BlogsByClass;
