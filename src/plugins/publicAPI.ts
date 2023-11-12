import axios from "axios";

let publicServiceApi = axios.create({
  headers: {
    "Content-Type": "application/json",
    accept: "application/json",
  },
  data: {},

  
  // headers: {
  //   "Content-Type": "application/json??????????????",
  //   charset: "UTF-8",
  //   withCredentials: "true",
  //   //contentType: "application/json",
  // },
  //data: {},
  withCredentials: "true",
  //contentType: "application/json",
});

console.log(publicServiceApi);

publicServiceApi.interceptors.request.use((config) => {
  console.log(config);
  return config;
});

// publicServiceApi.interceptors.response.use(
// 	(response) => {
// 		return response;
// 	},
// 	(error) => {
// 		return Promise.reject(error);
// 	}
// );

export default publicServiceApi;
