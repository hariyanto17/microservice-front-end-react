import { combineReducers } from "redux";

import users from './users';
import courses from './courses';

export default combineReducers({
    users, courses
})