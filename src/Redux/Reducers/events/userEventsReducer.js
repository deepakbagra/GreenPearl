import * as Actions from '../../Constant/actionTypes';

const userEventsReducer = (userEvents=[], action) => {
    switch(action.type) {
        case Actions.LIST_USER_EVENTS:
            return action.payload;
        
        default :
        return userEvents;
    }
}
export default userEventsReducer;