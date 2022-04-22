import { PWD_CHANGE } from '../../Constant/actionTypes';

const pwdChangeReducer = (pwdChange = 401, action) => {
    switch (action.type) {
        
        case PWD_CHANGE: 
            localStorage.setItem('password', action?.payload);
            return action?.payload; 
        
        default:
            return pwdChange;
    }
}

export default pwdChangeReducer;