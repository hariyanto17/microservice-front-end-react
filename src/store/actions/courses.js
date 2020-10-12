import { 
    FETCH_COURSES,
    WATCH_COURSE,
    STATUS_COURSES,
    MESSAGE_COURSES } from "constants/types/courses";

    export const statusCourses = (status) => ({
        type: STATUS_COURSES,
        payload:status
    })
    export const fetchCourses = (status) => ({
        type: FETCH_COURSES,
        payload:status
    })
    export const watchCourses = (course) => ({
        type: WATCH_COURSE,
        payload:course
    })
    export const messageCourses = (message) => ({
        type: MESSAGE_COURSES,
        payload:message
    })