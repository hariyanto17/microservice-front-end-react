import {toast} from 'react-toastify'
import users from "constants/api/Users";

import axios, { setAutorizationHeader } from "./index";

const errorHandler = (error) => {
    if (error) {
        let message;
        if (error.response) {
            const originalRequest = error.config
            if (error.response.status === 500){ 
                message = "something went terribly wrong";
            }
            else if (error.response.status === 403 && !originalRequest._retry){
                originalRequest._retry = true
                const session = localStorage['MICRO:token'] ? JSON.parse(localStorage['MICRO:token']) : null
                return users.refresh({refresh_token: session.refresh_token, email: session.email}).then(res => {
                    if (res.data) {
                        setAutorizationHeader(res.data.token)
                        localStorage.setItem("MICRO:token", JSON.stringify({
                            ...session, token: res.data.token
                        }))
                        originalRequest.headers.authorization = res.data.token
                        return axios(originalRequest)
                    } else {
                        window.location.href="/login"
                        localStorage.removeItem("MICRO:token")
                    }
                })
            }else {
                message = error.response.data.message;
            }

            if(typeof message === "string") toast.error(message);

            return Promise.reject(error);
        }
    }
}

export default errorHandler