import * as Actions from '../../Constant/actionTypes';

const eventReducers = (events=[], action) => {
    switch(action.type) {
        case Actions.LIST_ALL_EVENTS:
            return action.payload;
        
        case Actions.CREATE_EVENT:
            return [...events, action.payload];        
        
        case Actions.DELETE_EVENT:            
            return events.filter(event => event.id.toString().localeCompare(action.payload) !== 0);
        
        case Actions.SEARCH:            
            const filteredPosts = action.payload !== '' ? events?.filter((event) =>
                event?.title?.toLowerCase().includes(action.payload?.toLowerCase())) : events;
            
            if (filteredPosts.length === 0) return [];
            
            else return filteredPosts;

        default :
        return events;
    }
}
export default eventReducers;