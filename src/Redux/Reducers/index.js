import { combineReducers } from 'redux';
import auth from './authReducer';

import users from './users/userPanelReducer';
import userInfo from './users/userInfoReducer';
import newAvatar from './users/avatarReducer';
import pwdChange from './users/pwdChangeReducer';

import events from './events/eventReducers';
import viewEvent from './events/viewEventReducer';
import joinEvent from './events/joinEventReducer';
import exitEvent from './events/exitEventReducer';
import viewUserEvents from './events/userEventsReducer';

import services from './services/serviceReducers';
import viewService from './services/viewServiceReducer';
import viewUserServices from './services/userServicesReducer';

import classes from './blogs/classReducers';
import blogs from './blogs/blogReducer';


export default combineReducers(
    {
        events,
        auth,
        users,
        userInfo,
        viewEvent,
        viewUserEvents,
        joinEvent,
        exitEvent,
        newAvatar,
        pwdChange,
        services,
        viewService,
        viewUserServices,
        classes,
        blogs,
    }
);