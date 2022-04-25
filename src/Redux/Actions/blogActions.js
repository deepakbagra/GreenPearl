import * as Actions from "../Constant/actionTypes";
import * as api from '../../API';

// ************* Action creators *******************************//

// show all services 

export const listServices = (pageNumber) => async (dispatch) => {  
    try {
        const { data } = await api.listServices(pageNumber);      
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
// show all blog classes 

export const listClasses = () => async (dispatch) => {  
    try {
        const { data } = await api.listClasses();
        console.log('list blog class action: ', data);       
      
        dispatch({
            type: Actions.LIST_CLASSES,
            payload: data.data
        });
    } catch (error) {
        console.log(error);
    }
}

// show all blogs of a class 

export const viewBlogsByClass = (id, page) => async (dispatch) => {  
    try {
        const { data } = await api.viewBlogsByClass(id, page);
        console.log('list blogs of a class action: ', data); 
        console.log('page number class action: ', page); 
      
        dispatch({
            type: Actions.LIST_CLASS_BLOGS,
            payload: data.data
        });
    } catch (error) {
        console.log(error);
    }
}

// create a new event by a user

export const createBlog = (post) => async (dispatch) => {
    try {
        const { data } = await api.createBlog(post);
        if (data?.code === 200) {
            alert('Your blog has been posted successfully.');
        }
        dispatch({
            type: Actions.CREATE_BLOG,            
        })
    } catch (error) {
        console.log(error);
    }
}
// delete a service by a service creator

// export const deleteService = (id) => async (dispatch) => {    
//     try {        
//         const response = await api.deleteService(id);

//         console.log('delete service action', response);
        
//         if (response?.data?.code === 401) {
//             alert('Not authorized to delete this event.')
//         }

//         if (response?.data?.code === 200) {
//             dispatch({
//                 type: Actions.DELETE_EVENT,
//                 payload: id
//             });
//         }       
       
//     } catch (error) {
//         alert('Not authorized to delete this event!');
//         console.log(error);
//     }
// }

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





