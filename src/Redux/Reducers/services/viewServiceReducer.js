import * as Actions from '../../Constant/actionTypes';

const viewServiceReducers = (service={}, action) => {
    switch(action.type) {
        case Actions.VIEW_SERVICE:
            return action.payload;  

        default :
        return service;
    }
}
export default viewServiceReducers;