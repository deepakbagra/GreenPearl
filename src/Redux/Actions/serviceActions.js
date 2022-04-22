import * as Actions from "../Constant/actionTypes";
import * as api from '../../API';

// ************* Action creators *******************************//

// show all services 

export const listServices = () => async (dispatch) => {  
    try {
        const { data } = await api.listServices();      
       console.log('list services', data)
        dispatch({
            type: Actions.LIST_ALL_SERVICES,
            payload: data.data
        });
    } catch (error) {
        console.log(error);
    }
}

// show a particular service

export const viewService = (id) => async (dispatch) => {  
    try {
        const { data } = await api.viewService(id);
        console.log('view this service:', data);
       
        dispatch({
            type: Actions.VIEW_SERVICE,
            payload: data.data
        });
    } catch (error) {
        console.log(error);
    }
}
// show all services posted by a signed user

export const listUserServices = () => async (dispatch) => {  
    try {
        const { data } = await api.listUserServices();
       console.log('user services action: ', data.data)
       
      
        dispatch({
            type: Actions.LIST_USER_SERVICES,
            payload: data.data
        });
    } catch (error) {
        console.log(error);
    }
}

// create a new event by a user

export const createService = (post) => async (dispatch) => {
    try {
        const { data } = await api.createService(post);
        if (data?.code === 200) {
            alert('Your service has been posted successfully.');
        }
        dispatch({
            type: Actions.CREATE_SERVICE,
            
        })
    } catch (error) {
        console.log(error);
    }
}
// delete a service by a service creator

export const deleteService = (id) => async (dispatch) => {    
    try {        
        const response = await api.deleteService(id);

        console.log('delete service action', response);
        
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


    // exit the subsribed event

    // export const exitEvent = (id) => async (dispatch) => {    
    //     try {        
    //         const response = await api.exitEvent(id);
    //         console.log('exit response', response);
           
          
    //         if (response?.data?.code === 200) {
    //             dispatch({
    //                 type: Actions.EXIT_EVENT,
    //                 payload: true
    //             })
    //             alert('You have successfully unsubscribed to this event.')
    //         }
    
           
    //     } catch (error) {
    //         alert('Exit event: Something wrong happened, please try again!');
    //         console.log(error);
    //     }
    // }





