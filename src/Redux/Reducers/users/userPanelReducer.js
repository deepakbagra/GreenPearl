import { USER_INFO } from '../../Constant/actionTypes';


const postReducers = (userInfo=[], action) => {
    switch(action.type) {
        case USER_INFO:
            return action.payload;        
        

        default :
        return userInfo;
    }
}
export default postReducers;