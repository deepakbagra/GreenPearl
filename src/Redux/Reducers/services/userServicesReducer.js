import * as Actions from '../../Constant/actionTypes';

const userServicesReducer = (userServices=[], action) => {
    switch(action.type) {
        case Actions.LIST_USER_SERVICES:
            return action.payload;
        
        case Actions.SEARCH_USER_SERVICES:            
            const filteredPosts = action.payload !== '' ? userServices?.filter((service) =>
            service?.title?.toLowerCase().includes(action.payload?.toLowerCase())) : userServices;
            
            if (filteredPosts.length === 0) return [];
            
            else return filteredPosts;
        
        default :
        return userServices;
    }
}
export default userServicesReducer;