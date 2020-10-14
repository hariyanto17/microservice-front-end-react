import axios from 'configs/axios'

export default {
    login: (credentials) => axios.post("/users/login", credentials),
    register: (payload) => axios.post("/users/register", payload),
    refresh: (credentials) => axios.post("/refresh-tokens", {
        refresh_token: credentials.refresh_token,
        email: credentials.email
    }),
    
    details: () => axios.get("/users"),
    update:(data) => axios.put("/users", data),
    logout:() => axios.post("users/logout")
};