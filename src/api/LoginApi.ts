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
    },
    getUserInfo: (token: string, bsurrl: string) => {
        // const url = 'info'
        return axiosClient.get(bsurrl, {
            headers: {
                Authorization: token
                // Authorization: JSON.stringify(token)
            }
        });
    }
}

export default LoginApi;