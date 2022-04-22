import { AVATAR } from '../../Constant/actionTypes';

const avatarReducer = (newAvatar = 401, action) => {
    switch (action.type) {
        
        case AVATAR: 
            return action?.payload; 
        
        default:
            return newAvatar;
    }
}

export default avatarReducer;