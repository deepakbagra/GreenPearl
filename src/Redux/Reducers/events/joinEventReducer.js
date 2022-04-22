import * as Actions from '../../Constant/actionTypes';

const joinEventReducer = (join=false, action) => {
    switch(action.type) {
        case Actions.JOIN_EVENT:
            return action.payload;  

        default :
        return join;
    }
}
export default joinEventReducer;