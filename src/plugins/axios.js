import axios from 'axios';

import api from './api';

const instance = axios.create({
  baseURL: "http://3.34.1.129:8000",
  headers: {
    "Content-Type": "application/json", 
    "Authorization" : `Bearer ${sessionStorage.getItem('access_token')}` 
  }
})

instance.interceptors.request.use(
  (config) => {
    console.log('axios.js request : ' , config);
    return config
  }, 
  (error) => {
    return Promise.reject(error);
  }
);
instance.interceptors.response.use(
  (response) => {
    console.log('axios.js response : ', response);
    const { code } = response.data.code;
    if (code == "0401") { 
      // 토큰없음, 토큰만료
      api.memberaccsstoken();
    }
    return response
  },
  (error) => {
    return Promise.reject(error);
  }
)
export default instance;