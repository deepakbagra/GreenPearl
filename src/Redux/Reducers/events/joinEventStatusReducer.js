import { JOIN_EVENT_STATUS } from '../../Constant/actionTypes';

const joinEventStatusReducers = (joinEventStatus=[], action) => {
    switch(action.type) {
        case JOIN_EVENT_STATUS:
            return action.payload;        
        

        default :
        return joinEventStatus;
    }
}
export default joinEventStatusReducers;