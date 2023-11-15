import publicServiceApi from "@/plugins/publicAPI";
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
		API_AUTH_STR["p_productno"] = "411";
		//const BASE_URL = `/service/price/xml.do?action=${ENDPOINT.API_DAILY_PRICE}`;
		const BASE_URL = `/service/price/xml.do?action=`;
		const CERT_KEY = "72922f90-303a-423b-a20d-0c35bb2249d7";
		const CERT_ID = "2255";
		const RETURN_TYPE = "json";
		const today = moment();

		const payload = API_AUTH_STR;
		let payload2 = `periodProductList&p_productclscode=02&p_startday=2023-11-14&p_endday=2023-11-14&p_itemcategorycode=400&p_itemcode=411&p_kindcode=05&p_productrankcode=07&p_countrycode=1101&p_productclscode=01&p_convert_kg_yn=Y&p_cert_key=${CERT_KEY}&p_cert_id=${2255}&p_returntype=json`;
		return await publicServiceApi.get(`${BASE_URL}${payload2}`);
	}
}

export default new PublicAPIService();
