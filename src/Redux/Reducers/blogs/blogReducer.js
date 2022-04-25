import * as Actions from '../../Constant/actionTypes';

const blogReducer = (blogs = [], action) => {
    switch(action.type) { 
        case Actions.LIST_CLASS_BLOGS:
            localStorage.setItem('page', action?.payload?.pages);
            return action?.payload?.blogs; 
        
        case Actions.CREATE_BLOG:            
            return blogs ; 

        default :
            return blogs ;
    }
}
export default blogReducer;