import * as Actions from '../../Constant/actionTypes';

const serviceReducers = (services=[], action) => {
    switch(action.type) {
        case Actions.LIST_ALL_SERVICES:
            return action.payload;
        
        case Actions.CREATE_SERVICE:
            return [...services, action.payload];        
        
        case Actions.DELETE_EVENT:            
            return services.filter(service => service.id.toString().localeCompare(action.payload) !== 0);
        
        case Actions.SEARCH:            
            const filteredPostsHot = action.payload !== '' ? services?.hotServices?.filter((service) =>
                service?.title?.toLowerCase().includes(action.payload?.toLowerCase())) : services?.hotServices;
            
            const filteredPostsNonHot = action.payload !== '' ? services?.nonHotServices?.filter((service) =>
                service?.title?.toLowerCase().includes(action.payload?.toLowerCase())) : services?.nonHotServices;
            
            if (filteredPostsHot.length === 0 && filteredPostsNonHot === 0) return [];            
            
            else return {
                nonHotServices: filteredPostsNonHot,
                hotServices: filteredPostsHot
            };

        default :
        return services;
    }
}
export default serviceReducers;