import axios from 'axios';
import JSONbigint from 'json-bigint'

// server end point
const uri = 'http://81.68.206.216:10001';

const api = axios.create({ baseURL: uri });


// request interceptor, preventing the response the default behaviour of parsing the response with JSON.parse
api.interceptors.request.use((request) => {
    request.transformResponse = [data => data]
    return request
  })

  

// Axios interceptor for Authorization before making API calls

api.interceptors.request.use((req) => {
    if (localStorage.getItem('profile')) {
      
      let token = JSON.parse(localStorage.getItem('profile')).data?.token;
      if (typeof token !== 'undefined')
         req.headers['token'] = token;     
    }
    
    
    return req;
})

// events related

export const listEvents = (pageNumber) => api.get(`/event/page?auditStatus=1&pageNumber=${pageNumber}&pageSize=3`);
export const viewEvent = (id) => api.get(`/event/${id}`);
export const listUserEvents = () => api.get('/event/user');
export const joinEvent = (id) => api.patch(`/event/${id}/join`);
export const exitEvent = (id) => api.patch(`/event/${id}/exit`);
export const createEvent = (newPost) => api.post('/event', newPost);
export const deleteEvent = (id) => api.delete(`/event/${id}`);

// service related
export const createService = (newPost) => api.post('/service', newPost);
export const listServices = (pageNumber) => api.get(`/service?auditStatus=1&pageNumber=${pageNumber}&pageSize=3`);
export const viewService = (id) => api.get(`/service/${id}`);
export const deleteService = (id) => api.delete(`/service/${id}`);
export const listUserServices = () => api.get('/service/user');


// blog related
export const createBlog = (newPost) => api.post('/blog', newPost);
export const listClasses = () => api.get('/blog/class');
export const viewBlogsByClass = (id, pageNumber) => api.get(`/blog/class/${id}/page?pageNumber=${pageNumber}&pageSize=2`);
export const viewBlog = (id) => api.get(`/blog/${id}`);
export const deleteBlog = (id) => api.delete(`/blog/${id}`);
export const likeBlog = (id) => api.post(`/blog/${id}/like`);
export const dislikeBlog = (id) => api.delete(`/blog/${id}/like`);
export const postParentComment = (comment) => api.post(`/blog/comment/parent`, comment);
export const postParentReComment = (comment) => api.post(`/blog/comment/child`, comment);


// auth related

export const signIn = (formSignin) => api.post('/account/login', formSignin);
export const logout = () => api.get('/account/logout');
export const signUp = (formSignUp, roleId) => api.post(`/account/signup?roleId=${roleId}`, formSignUp);
export const userInfo = () => api.get('/account/info');
export const changeAvatar = (avatar) => api.patch('/user/avatar', avatar);
export const changePassword = (newPassword, oldPassword) => api.patch(`/account/password?oldPassword=${oldPassword}`, newPassword);

// response interceptor parsing the response data with JSONbigint, and returning the response
api.interceptors.response.use((response) => {
    response.data = (JSONbigint.parse(response.data));
    
    return response
  })
  
