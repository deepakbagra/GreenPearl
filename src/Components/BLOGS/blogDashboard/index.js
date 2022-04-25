import React, { useEffect} from 'react';
import { Container } from '@material-ui/core';
import { useDispatch } from 'react-redux';

import { listClasses } from '../../../Redux/Actions/blogActions';
import AllClasses from '../allClasses/AllClasses';



const BlogDasboard = () => {

  const dispatch = useDispatch();
  
  
  // const updatedClasses = classes.map(c => {
  //   return ({
  //     ...c, id: c.id.toString()
  //   })
  // });  
  
  useEffect(() => {
    dispatch(listClasses());
}, [dispatch]);
  


  return (
    <Container maxWidth='md' style={{ padding: '0' }} >    
      <AllClasses/>
    </Container>
  );
}
export default BlogDasboard;