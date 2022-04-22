import { USER_INFO } from '../../Constant/actionTypes';

const userInfoReducer = (userInfo = null, action) => {
    switch (action.type) {
        
        case USER_INFO:           
            localStorage.setItem('userInfo', JSON.stringify({ ...action?.payload }));            

            return { ...action?.payload };  
        
      
        default:
            return userInfo;
    }
}

export default userInfoReducer;