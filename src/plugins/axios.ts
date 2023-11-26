import axios, { AxiosInstance } from "axios";
import UserAthendicateService from "@/services/UserAthendicateService";
import store from "../store";
import Cookies from "js-cookie";

let instance: AxiosInstance = axios.create({
	//baseURL: import.meta.env.VITE_APP_BASE_URL,
	headers: {
		"Content-Type": "application/json",
	},
});

if (import.meta.env.PROD) {
	instance.defaults.baseURL = import.meta.env.VITE_APP_BASE_URL;
}

instance.interceptors.request.use(
	(config) => {
		// 세션스토리지에 저장된 토큰을 헤더에 저장

		const access_token = Cookies.get("access_token");

		if (access_token) {
			config.headers["Authorization"] = `Bearer ${access_token}`;
		}
		return config;
	},
	(error) => {
		return Promise.reject(error);
	}
);

instance.interceptors.response.use(
	(response) => {
		console.log("axios.js response : ", response);
		return response;
	},
	(error) => {
		const {
			config,
			response: { status },
		} = error;

		const refresh_token = Cookies.get("refresh_token");

		// 토큰이 없고, 리프레시 토큰도 없는 경우 > 로그인 만료
		if (!refresh_token) {
			alert("사용자 정보가 만료되었습니다. 다시 로그인해주세요.");
			location.href = `/login`;

			return UserAthendicateService.logout();
		}

		if (status == 403 || status == 401) {
			// 토큰없음, 토큰만료
			const originconfig = config;

			// 토큰 재발급 요청
			UserAthendicateService.memberaccesstoken().then((response) => {
				console.log("토큰 재발급 요청", response);
				if (response == "fail") {
					alert("사용자 정보가 만료되었습니다. 다시 로그인해주세요.");
					location.href = `/login`;
					return UserAthendicateService.logout();
				} else {
					return instance(originconfig);
				}
			});
		} else {
			return Promise.reject(error);
		}
	}
);
export default instance;
