import axios, { AxsiosInstance } from "axios";
import instance from "@/plugins/axios";

const publicServiceApi: AxsiosInstance = axios.create({
	//baseURL: "http://www.kamis.or.kr/service/price/xml.do?action=",
	headers: {
		"Content-Type": "application/json",
		charset: "UTF-8",
		withCredentials: true,
		//contentType: "application/json",
	},
	withCredentials: true,
	//contentType: "application/json",
});

// publicServiceApi.intercepetors.request.use((config) => {
// 	return config;
// });

// publicServiceApi.interceptors.response.use(
// 	(response) => {
// 		return response;
// 	},
// 	(error) => {
// 		return Promise.reject(error);
// 	}
// );

export default publicServiceApi;
