import axios from 'axios';

import errorHandler from './errorHandler'

const instance = axios.create({
    baseURL: `${process.env.REACT_APP_API_HOST}`
});

instance.interceptors.response.use((response) => response.data, errorHandler)

export {default as setAutorizationHeader} from "./setAutorizationHeader"
export default instance;