import axios from 'axios';
import api from './api';

const instance = axios.create({
  headers: {
    "Content-Type": "application/json", 
  },   
})

instance.interceptors.request.use(
  (config) => {
    console.log('axios.js request : ', config);
    
    // 세션스토리지에 저장된 토큰을 헤더에 저장
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
    return response
  },
  (error) => {
    const { config, response: { status } } = error;
    console.log('error response', error)
    const refresh_token = sessionStorage.getItem('refresh_token')
    
    if (status == 403) { 
      // 토큰없음, 토큰만료
      const originconfig = config;

      // 토큰이 없고, 리프레시 토큰도 없는 경우 > 로그인 만료
      if (!refresh_token) {
        alert('사용자 정보가 만료되었습니다. 다시로그인해주세요.');
        return;
      }

      // 토큰 재발급 요청
      api.memberaccesstoken();

      // 토큰을 새로운 토큰으로 업데이트 한 후 이전에 요청한 API 재요청
      setTimeout(() => { 
        return Promise.resolve(instance(originconfig))
      }, 500)
    }
    
    return Promise.reject(error);
  }
)
export default instance;