import * as Actions from '../../Constant/actionTypes';

const viewBlogReducer = (blog={}, action) => {
    switch(action.type) {
        case Actions.VIEW_BLOG:
            localStorage.setItem('viewBlog', JSON.stringify({ ...action?.payload }));
            return action.payload;  

        default :
        return blog;
    }
}
export default viewBlogReducer;