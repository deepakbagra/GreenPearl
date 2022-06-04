import * as Actions from '../../Constant/actionTypes';

const blogReducer = (blogs = [], action) => {
    switch(action.type) { 
        case Actions.LIST_CLASS_BLOGS:
            localStorage.setItem('page', action?.payload?.page?.pages);
            return action?.payload?.blogs; 
        
        case Actions.CREATE_BLOG:            
            return blogs; 
        
        case Actions.DELETE_BLOG:            
            return blogs.filter(blog => blog.id.toString().localeCompare(action.payload) !== 0);
        
        case Actions.SEARCH:            
        const filteredPosts = action?.payload !== '' ? blogs?.filter((blog) =>
            blog?.title?.toLowerCase().includes(action.payload.toLowerCase())) : blogs;
        
        if (filteredPosts.length === 0) return [];  
        
        else return filteredPosts;

        default :
            return blogs ;
    }
}
export default blogReducer;