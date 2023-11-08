import publicServiceApi from "@/plugins/publicAPI";
import { AxiosHeader, AxiosResponse } from "axios";
import instance from "@/plugins/axios";

const API_KEY = "90b48db9-e59f-47f8-8654-0d63c6f1aebf";
let API_AUTH_STR = {
	p_cert_key: API_KEY,
	p_cert_id: "abgoeun3339@gmail.com",
	p_return_type: "json",
};

const ENDPOINT = {
	API_DAILY_PRICE: "dailyPriceByCategoryList",
};

class PublicAPIService {
	public async getPublicApi() {
		API_AUTH_STR["p_product_cls_code"] = "02";
		API_AUTH_STR["p_item_category_code"] = "400";

		const payload = JSON.stringify(API_AUTH_STR);
		console.log(payload);

		return await publicServiceApi
			.get(
				`/service/price/xml.do?action=dailySalesList&p_cert_key=90b48db9-e59f-47f8-8654-0d63c6f1aebf
				&p_cert_id=abgoeun3339@gmail.com&p_returntype=json`,
				{
					headers: {
						"Content-Type": "application/json",
					},
				}
			)
			.then((response: AxiosResponse) => {
				return response;
			});
	}
}

export default new PublicAPIService();
