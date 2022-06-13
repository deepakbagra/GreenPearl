/*
This component will provide a UI 
to display Logout menu options in the navbar tab link
*/

import React, { useState, useEffect } from 'react';
import { Avatar, Modal } from '@material-ui/core';
import { useSelector } from 'react-redux';
import EditAvatar from './EditAvatar';
import EditPassword from './editPassword';
import './logoutmenu.css';
import useStyles from './styles';
import EditNickname from './editNickname';

const LogoutMenu = (props) => {
  // for avatar modal
  const [modalOpen, setModalOpen] = useState(false);

  // for password modal
  const [modalOpenPwd, setModalOpenPwd] = useState(false);

  // for nickname modal
  const [modalOpenNickname, setModalOpenNickname] = useState(false);

  const [user, setUser] = useState(JSON.parse(localStorage.getItem('userInfo')));

  const newUser = useSelector(state => state.userInfo);
 
  const avatarImg = user?.data?.avatar?.path;
  const username = user?.data?.user?.username;

  console.log('userInfo in logout component', user);  
  
  const classes = useStyles();  

  // modal related to avatar change page
  const handleModalClose = () => { setModalOpen(false) };

  const handleModalOpen = () => {     
      setModalOpen(true); 
  }

  // modal related to nickname change page
  const handleModalCloseNickname = () => { setModalOpenNickname(false) };

  const handleModalOpenNickname = () => {     
      setModalOpenNickname(true); 
  }

  // modal related to password change page
  const handleModalClosePwd = () => { setModalOpenPwd(false) };

  const handleModalOpenPwd = () => {     
      setModalOpenPwd(true); 
  }

  useEffect(() => {
    if (newUser) {
        setUser(newUser)
    }   
  },[newUser])


  return (
    <div style={{marginLeft: '0em'}}>
    <div className="log-dropdown">
      <>
        <div className="log-dropbtn">
        <Avatar className={classes.avatar} alt={username} src={avatarImg} />
        </div>
      </>
      {/* avatar change modal page component  */}
      <Modal className={classes.modal} open={modalOpen}  onClose={handleModalClose}>
          <>            
            <EditAvatar closeAd={handleModalClose} />
          </>          
      </Modal>
      
      {/* password change modal page component  */}
      <Modal className={classes.modal} open={modalOpenPwd}  onClose={handleModalClosePwd}>
          <>            
            <EditPassword logout={props.logout} closePwd={handleModalClosePwd} />
          </>          
      </Modal>
        
        {/* nickname change modal page component  */}
      <Modal className={classes.modal} open={modalOpenNickname}  onClose={handleModalCloseNickname}>
          <>            
            <EditNickname closeAd={handleModalCloseNickname} />
          </>          
      </Modal>
      
        <div className="log-dropdown-content">
            <button className="log-dropdown-content-btn " onClick={handleModalOpenPwd}>Change password</button>
            <button className="log-dropdown-content-btn" onClick={handleModalOpen}>Change avatar</button>
            <button className="log-dropdown-content-btn" onClick={handleModalOpenNickname}>Set nickname</button>    
            <button className="log-dropdown-content-btn" onClick={props.logout}>Logout</button>
        </div>
      </div>
    </div>
  )
}

export default LogoutMenu;