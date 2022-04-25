import * as Actions from '../../Constant/actionTypes';

const serviceReducers = (services=[], action) => {
    switch(action.type) {
        case Actions.LIST_ALL_SERVICES:
            return action?.payload?.services;
        
        case Actions.CREATE_SERVICE:
            return [...services, action.payload];        
        
        case Actions.DELETE_EVENT:            
            return services.filter(service => service.id.toString().localeCompare(action.payload) !== 0);
        
        case Actions.SEARCH:
            const filteredPost = action.payload !== '' ? services?.filter((service) =>
                service?.title?.toLowerCase().includes(action.payload?.toLowerCase())) : services;
            
          
            if (filteredPost.length === 0) return [];
            
            else return filteredPost;

        default :
        return services;
    }
}
export default serviceReducers;