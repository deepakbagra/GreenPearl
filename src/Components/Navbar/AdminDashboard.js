/*
This component will provide a UI 
to display Admin Dashboard
*/

import React, { useEffect } from 'react';
import { Paper, Button, AppBar, TableContainer, Table, TableBody, TableHead, TableCell, TableRow, TablePagination  } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';


import { listUsers } from '../../Redux/Actions/adminPanelActions';


const AdminDashboard = () => {
    const users = useSelector(state => state.users);
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);
    
    const dispatch = useDispatch();
   
    useEffect(() => {
        dispatch(listUsers());
    }, [dispatch]);

    const header = [
        { id: 'ID', label: 'ID ', minWidth: 10 },
        { id: 'name', label: 'Name', minWidth: 80 },
        { id: 'email', label: 'Email', minWidth: 80 },
        { id: 'role', label: 'Role', minWidth: 100 },        
      ];    
  
    const handleChangePage = (event, newPage) => {
      setPage(newPage);
    };
  
    const handleChangeRowsPerPage = (event) => {
      setRowsPerPage(+event.target.value);
      setPage(0);
    };
  
    return (
        <Paper style={{ width: '100%', overflow: 'hidden', margin: '0 0 5rem 0 ' }}>
            <AppBar position='static' style={{height:'4rem'}}>
                <div>Admin Dashboard</div>
                <Button style={{marginLeft:'45rem', color:'white', textTransform:'none'}}>Add User</Button>
            </AppBar>
            
        <TableContainer sx={{ maxHeight: 440 }}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                {header.map((header) => (
                  <TableCell
                    key={header.id}
                    align={header.align}
                    style={{ minWidth: header.minWidth }}
                  >
                    {header.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {users
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row) => {
                  return (
                    <TableRow hover role="checkbox" tabIndex={-1} key={row.id}>
                      {header.map((header) => {
                        const value = row[header.id];
                        return (
                          <TableCell key={header.id} align={header.align}>
                            {header.format && typeof value === 'number'
                              ? header.format(value)
                              : value}
                          </TableCell>
                        );
                      })}
                    </TableRow>
                  );
                })}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[10, 25, 100]}
          component="div"
          count={users.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
  );
};

export default AdminDashboard;