import * as Actions from '../../Constant/actionTypes';

const eventReducers = (events={}, action) => {
    switch(action.type) {
        case Actions.VIEW_EVENT:
            return action.payload;  

        default :
        return events;
    }
}
export default eventReducers;