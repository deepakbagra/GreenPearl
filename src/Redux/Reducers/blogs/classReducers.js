import * as Actions from '../../Constant/actionTypes';

const classsReducer = (classes = [], action) => {
    switch(action.type) { 
        case Actions.LIST_CLASSES:
            return action.payload;  

        default :
        return classes;
    }
}
export default classsReducer;