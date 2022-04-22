import * as api from '../../API';
import {  USER_INFO } from '../../Redux/Constant/actionTypes';

export const userInfo = () => async (dispatch) => {
    
    try {
        const { data } = await api.userInfo();

        console.log('userInfo', data);        
        dispatch({
            type: USER_INFO,
            payload: data
        });
    } catch (error) {
        console.log(error);
    }
}