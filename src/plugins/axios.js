import axios from 'axios';

import api from './api';

const instance = axios.create({
  baseURL: "http://3.34.1.129:8000",
  headers: {
    "Content-Type": "application/json", 
   //withCredentials : true
  }, 
  //withCredentials : true
  
})

instance.interceptors.request.use(
  (config) => {
    console.log('axios.js request : ', config);
    const access_token = sessionStorage.getItem('access_token')
    if (access_token) {
      config.headers["Authorization"] = `Bearer ${access_token}`
    } 
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
    const refresh_token = sessionStorage.getItem('refresh_token')
    if (code == "0401") { 
      
      // 토큰없음, 토큰만료
      api.memberaccesstoken();

      return new Promise((resolve) => { 
        resolve(instance(response))
      })
    }
    return response
  },
  (error) => {
    return Promise.reject(error);
  }
)
export default instance;