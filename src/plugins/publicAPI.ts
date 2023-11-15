import axios from "axios";

let publicServiceApi = axios.create({
	headers: {
		"Content-Type": "application/json",
		accept: "application/json",
	},
	data: {},
});

publicServiceApi.interceptors.request.use((config) => {
	return config;
});

publicServiceApi.interceptors.response.use(
	(response) => {
		return response;
	},
	(error) => {
		return Promise.reject(error);
	}
);

export default publicServiceApi;
