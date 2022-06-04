import React, { useCallback, useEffect, useState } from 'react';
import SearchIcon from '@material-ui/icons/Search';
import CloseIcon from '@material-ui/icons/Close';
import { InputBase, Paper, IconButton } from '@material-ui/core';
import useStyles from './styles';
import { useDispatch } from 'react-redux';

import { viewBlogsByClass } from '../../../Redux/Actions/blogActions';

const SearchBar = ({ classId, page }) => {
  
    const [input, setInput] = useState('');
    console.log('id in search bar = ', classId)
    const classes = useStyles();    

    const dispatch = useDispatch();    

    const handleSearch = (e) => {
        const queryText = e?.target?.value;

        setInput(queryText);

      dispatch({ type: 'SEARCH', payload: queryText });      
          
    };

  const clearInput = useCallback(() => {

    setInput('');

    dispatch(viewBlogsByClass(classId, page));

  },[dispatch, page, classId]);
  
  useEffect(() => {

    if (input === '') clearInput();

  }, [clearInput, input]);

  return (
    <Paper comonent='form' autoComplete='off' noValidate className={classes.searchBar}>
          <InputBase className={classes.searchInput} value={input} onChange={handleSearch} placeholder='search by title' />
          { input === '' ?
              <SearchIcon className={classes.searchIcon} />
              : 
              <IconButton onClick={clearInput}> <CloseIcon className={classes.closeIcon} /></IconButton>             
           } 
    </Paper>
  )
}

export default SearchBar;