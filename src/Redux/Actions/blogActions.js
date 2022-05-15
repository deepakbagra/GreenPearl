import * as Actions from "../Constant/actionTypes";
import * as api from '../../API';

// ************* Action creators *******************************//


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
        console.log('list page of blogs of a class action: ', page); 
      
        dispatch({
            type: Actions.LIST_CLASS_BLOGS,
            payload: data.data
        });
    } catch (error) {
        console.log(error);
    }
}


// show a particular event

export const viewBlog = (id) => async (dispatch) => {  
    try {
        const { data } = await api.viewBlog(id);
        console.log('view blog action:', data);
       
        dispatch({
            type: Actions.VIEW_BLOG,
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
// delete a blog by a blog creator

export const deleteBlog = (id) => async (dispatch) => {    
    try {        
        const response = await api.deleteBlog(id);

        console.log('delete blog action', response);
        
        if (response?.data?.code === 401) {
            alert('Not authorized to delete this Blog.')
        }

        if (response?.data?.code === 200) {
            dispatch({
                type: Actions.DELETE_BLOG,
                payload: id
            });
        }       
       
    } catch (error) {
        alert('Not authorized to delete this Blog!');
        console.log(error);
    }
}

// like a blog

export const likeBlog = (id) => async (dispatch) => {    
    try {        
        const response = await api.likeBlog(id);

        console.log('like blog action', response);        
        
        if (response?.data?.code === 200) {
            alert("You have successfully liked this blog!")
            dispatch({
                type: Actions.LIKE_BLOG,
                payload: id
            });
        }       
       
    } catch (error) {
        alert('You have already liked this Blog!');
        console.log(error);
    }
}

// Dislike a blog

export const dislikeBlog = (id) => async (dispatch) => {    
    try {        
        const response = await api.dislikeBlog(id);

        console.log('Dislike blog action', response);        
        
        if (response?.data?.code === 200) {
            alert("You have successfully disliked this blog!");
            dispatch({
                type: Actions.DISLIKE_BLOG,
                payload: id
            });
        }
        else
            alert("You haven't liked this blog before!");
       
    } catch (error) {
        alert("You haven't liked this blog before!");
        console.log(error);
    }
}

// create a new parent comment by a user

export const postParentComment = (post) => async (dispatch) => {
    try {
        const { data } = await api.postParentComment(post);
        if (data?.code === 200) {
            alert('Your comment has been posted successfully.');
        }
        dispatch({
            type: Actions.CREATE_PARENT_COMMENT,            
        })
    } catch (error) {
        console.log(error);
    }
}

// create a new child comment by a user

export const postParentReComment = (post) => async (dispatch) => {
    try {
        const { data } = await api.postParentReComment(post);
        if (data?.code === 200) {
            alert('Your comment has been posted successfully.');
        }
        dispatch({
            type: Actions.CREATE_CHILD_COMMENT,            
        })
    } catch (error) {
        console.log(error);
    }
}






