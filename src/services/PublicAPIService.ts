import publicServiceApi from "@/plugins/publicAPI";
import { AxiosHeader, AxiosResponse } from "axios";
import instance from "@/plugins/axios";
import axios from "axios";
import moment from "moment";
const API_KEY = "90b48db9-e59f-47f8-8654-0d63c6f1aebf";
let API_AUTH_STR = {
	p_cert_key: API_KEY,
	p_cert_id: "abgoeun3339@gmail.com",
	p_returntype: "json",
};

const ENDPOINT = {
	API_DAILY_PRICE: "recentlyPriceTrendList",
};

class PublicAPIService {
	public async getPublicApi() {
		//API_AUTH_STR["p_product_cls_code"] = "02";
		//API_AUTH_STR["category_code"] = "400";
		API_AUTH_STR["p_productno"] = "411";

		// return await publicServiceApi
		//   .fetch(
		//     `/service/price/xml.do?action=dailySalesList&p_cert_key=90b48db9-e59f-47f8-8654-0d63c6f1aebf
		// 			&p_cert_id=3780&p_returntype=json`
		//   )
		//   .then((response: AxiosResponse) => {
		//     return response;
		//   });

		const BASE_URL = `/service/price/xml.do?action=${ENDPOINT.API_DAILY_PRICE}`;
		const CERT_KEY = "72922f90-303a-423b-a20d-0c35bb2249d7";
		const CERT_ID = "2255";
		const RETURN_TYPE = "json";
		const today = moment();
		// itemcode: 411
		//kindcode: 05
		let END_DAY = today.format("YYYY-MM-DD");
		let START_DAY = today.subtract(14, "days").format("YYYY-MM-DD");
		//API_AUTH_STR["p_regday"] = START_DAY;

		const payload = API_AUTH_STR;

		console.log(payload);

		// const PRODUCT_RANK_CODE = (
		//   product.retail_grade ??
		//   product.organic_grade ??
		//   product.wholesale_grade
		// )?.split(",")[0];
		// const PRODUCT_CLASS_CODE =
		//   product.retail_grade != null ? "01" : product.organic_grade != null ? "02" : "02";
		// const ITEM_CATEGORY_CODE = categoryCode;
		// const ITEM_CODE = product.item_code;
		// const KIND_CODE =
		//   product.kind_code < 10 ? "0" + product.kind_code : product.kind_code;

		publicServiceApi.get(`${BASE_URL}`, { params: payload }).then((response) => {
			console.log(response);
		});

		// return await (
		//   await fetch(
		//     `${BASE_URL}&p_cert_key=72922f90-303a-423b-a20d-0c35bb2249d7&p_cert_id=2255&p_returntype=json&p_startday=2023-10-25&p_endday=2023-11-08&p_productclscode=01&p_itemcategorycode=200&p_itemcode=211&p_kindcode=03&p_productrankcode=04`
		//   )
		// ).json();
	}
}

export default new PublicAPIService();
