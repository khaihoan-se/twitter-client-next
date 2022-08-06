import axiosClient from './axiosClient'
import axios from 'axios'

interface ParamsType {
    [key: string]: string;
}
const LoginApi = {
    login: (params: ParamsType) => { 
        const url = 'login';
        return axiosClient.post(url, params);
    },
    getTokenSuccess: () => {
        const url = 'http://localhost:5000/api/refresh_token';
        return axios.post(url, null)
    }
}

export default LoginApi;