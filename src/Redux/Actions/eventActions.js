import * as Actions from "../Constant/actionTypes";
import * as api from '../../API';

// ************* Action creators *******************************//

// show all events 

export const listEvents = (pageNumber) => async (dispatch) => {  
    try {
        const { data } = await api.listEvents(pageNumber);      
       console.log('list events', data)
        dispatch({
            type: Actions.LIST_ALL_EVENTS,
            payload: data?.data
        });
    } catch (error) {
        console.log(error);
    }
}

// show a particular event

export const viewEvent = (id) => async (dispatch) => {  
    try {
        const { data } = await api.viewEvent(id);
        console.log('view this event:', data);
       
        dispatch({
            type: Actions.VIEW_EVENT,
            payload: data.data
        });
    } catch (error) {
        console.log(error);
    }
}
// show all events created by a signed user

export const listUserEvents = () => async (dispatch) => {  
    try {
        const { data } = await api.listUserEvents();
       console.log('user events action: ', data.data)
       
      
        dispatch({
            type: Actions.LIST_USER_EVENTS,
            payload: data.data
        });
    } catch (error) {
        console.log(error);
    }
}
// create a new event by a user

export const createEvent = (post) => async (dispatch) => {
    try {
        await api.createEvent(post);
       
        dispatch({
            type: Actions.CREATE_EVENT,
            
        })
    } catch (error) {
        console.log(error);
    }
}
// delete an event by an event creator

export const deleteEvent = (id) => async (dispatch) => {    
    try {        
        const response = await api.deleteEvent(id);
        
        if (response?.data?.code === 401) {
            alert('Not authorized to delete this event.')
        }

        if (response?.data?.code === 200) {
            dispatch({
                type: Actions.DELETE_EVENT,
                payload: id
            });
        }       
       
    } catch (error) {
        alert('Not authorized to delete this event!');
        console.log(error);
    }
}
// join an event by a user

export const joinEvent = (id) => async (dispatch) => {
    try {
        const response = await api.joinEvent(id);
       
        if (response?.data?.code === 401) {
            alert('You need to sign in to join this event.')
        }
        if (response?.data?.code === 200) {
            dispatch({
                type: Actions.JOIN_EVENT,
                payload: true
            })
            alert('You have successfully joined this event.')
        }

        
    } catch (error) {
        alert('Join event: Something wrong happened, please try again!');
        console.log(error);
    }
}

    // exit the subsribed event

    export const exitEvent = (id) => async (dispatch) => {    
        try {        
            const response = await api.exitEvent(id);
            console.log('exit response', response);
           
          
            if (response?.data?.code === 200) {
                dispatch({
                    type: Actions.EXIT_EVENT,
                    payload: true
                })
                alert('You have successfully unsubscribed to this event.')
            }
    
           
        } catch (error) {
            alert('Exit event: Something wrong happened, please try again!');
            console.log(error);
        }
    }





