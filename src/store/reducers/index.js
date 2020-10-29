import { combineReducers } from "redux";

import users from './users';
import courses from './courses';
import orders from './orders';

export default combineReducers({
    users, courses, orders
})