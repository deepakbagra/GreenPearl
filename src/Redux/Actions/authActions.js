import * as api from '../../API';
import { AUTH, USER_INFO, AVATAR, LOGOUT, PWD_CHANGE } from '../../Redux/Constant/actionTypes';

export const signIn = (formSignIn, navigate) => async (dispatch) => {
    try {
        const { data } = await api.signIn(formSignIn);

        console.log('sign in action', data);
       
        // sign in error message from server as string 
        if (data.code !== 200) return alert(data.msg);
                
        dispatch({ type: AUTH, payload: data });

        navigate('/');
    } catch (error) {
        console.log(error);
               
    }
}

export const logout = () => async (dispatch) => {
    try {
        const { data } = await api.logout();
       
        console.log('logout action', data);
                
        dispatch({ type: LOGOUT, payload: data });
      
    } catch (error) {
        console.log(error);
               
    }
}

export const signUp = (formData, roleId, navigate) => async (dispatch) => {    
    try {
        // sign up in the user        
        const { data } = await api.signUp(formData, roleId);

        console.log('sign up action', data);
        
        //dispatch({ type: AUTH });        
        
        navigate('/auth/signin');
    } catch (error) {
        console.log(error)
    }
}

export const userInfo = () => async (dispatch) => {    
    try {
        // sign up in the user        
        const { data } = await api.userInfo();
        
        console.log('user info action data', data)
        
        
        dispatch({ type: USER_INFO, payload: data });        
        
       
    } catch (error) {
        console.log(error)
    }
}

export const changeAvatar = (avatar) => async (dispatch) => {    
    try {
        // sign up in the user        
        const { data } = await api.changeAvatar(avatar);
        
        console.log('change avatar action', data); 
        if (data?.code === 200) {
            await dispatch({type: AVATAR, payload: 200})
            await dispatch(userInfo());            
            alert("Profile picture has been successfully updated.");
        }
       
    } catch (error) {
        console.log(error)
    }
}

export const changePassword = (newPassword, oldPassword) => async (dispatch) => {    
    try {
        // sign up in the user        
        const { data } = await api.changePassword(newPassword, oldPassword);
        
        console.log('change password action', data); 
        if (data?.code === 200) {
            dispatch({ type: PWD_CHANGE, payload: 200})
            alert("New password has been successfully updated.");
        }
        else {
            alert("Your old password is not correct, please try againt.");
        }
       
    } catch (error) {
        console.log(error)
    }
}

