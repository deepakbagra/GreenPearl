import * as Actions from '../../Constant/actionTypes';

const joinEventReducer = (exit=false, action) => {
    switch(action.type) {
        case Actions.EXIT_EVENT:
            return action.payload;  

        default :
        return exit;
    }
}
export default joinEventReducer;