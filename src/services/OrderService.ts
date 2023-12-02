import instance from "@/plugins/axios";
import { AxiosHeaders, AxiosResponse } from "axios";
import { Token, MemberLogin } from "../types/auth";

const ENDPOINT = {
	API_ORDER: "/api/order",
	API_ORDER_LIST: "/api/order/temp",
	API_ORDER_COMPLETE: "/api/order/complete",
	API_ORDER_COMPLETE_LIST: "/api/order/seller",
	API_ORDER_COMPLETE_LIST_MEMBER: "/api/order/member",
	API_ORDER_CANCEL_MEMBER: "/api/order/member/cancel",
	API_ORDER_UPDTE_SELLER: "/api/order/seller",
};

class OrderService {
	/**
	 * seller 주문 상태 업데이트
	 * @param payload
	 * oreder : 주문확인
	 * onprocessing : 배송준비중
	 * confirm : 배송완료
	 * cancel : 취소
	 * @returns
	 */

	public async updateOrderStatusSeller(payload) {
		const { status, order_id } = payload;
		const request = { order_id: order_id };
		try {
			await instance
				.patch(`${ENDPOINT.API_ORDER_UPDTE_SELLER}/${status}`, request)
				.then((response: AxiosResponse) => {
					return response;
				});
		} catch (err) {
			return err;
		}
	}
	// member 주문 취소
	public async cancelMellerOrder(payload) {
		return await instance
			.patch(`${ENDPOINT.API_ORDER_CANCEL_MEMBER}`, payload)
			.then((response: AxiosResponse) => {
				return response;
			});
	}

	/**
	 * seller 주문 상세
	 */
	public async getRecentOrderSellerDetail(payload: String) {
		return await instance
			.get(`${ENDPOINT.API_ORDER_COMPLETE_LIST}/${payload}`)
			.then((response: AxiosResponse) => {
				console.log(response);
				return response;
			});
	}
	/**
	 * member 주문 상세
	 */
	public async getRecentOrderListMemberDetail(payload: String) {
		return await instance
			.get(`${ENDPOINT.API_ORDER_COMPLETE_LIST}/${payload}`)
			.then((response: AxiosResponse) => {
				console.log(response);
				return response;
			});
	}
	/**
	 * 임시 주문서 등록하기
	 */
	public async saveTempOrderList(payload: Object) {
		console.log(payload);
		return await instance
			.post(`${ENDPOINT.API_ORDER}`, { order_list: payload })
			.then((response: AxiosResponse) => {
				console.log(response);
				return response;
			});
	}

	/**
	 * 임시주문서 불러오기
	 */
	public async getTempOrderList(orderID) {
		return await instance
			.get(`${ENDPOINT.API_ORDER_LIST}/${orderID}`)
			.then((response: AxiosResponse) => {
				return response;
			});
	}

	/**
	 * 주문하기
	 */
	public async setOrder(payload) {
		return await instance
			.patch(`${ENDPOINT.API_ORDER_COMPLETE}`, payload)
			.then((response: AxiosResponse) => {
				return response;
			});
	}

	/**
	 * (seller) 주문내역 불러오기
	 */
	public async getRecentOrderList(payload) {
		return await instance
			.get(`${ENDPOINT.API_ORDER_COMPLETE_LIST}${payload}`)
			.then((response: AxiosResponse) => {
				return response;
			});
	}

	/**
	 * (member) 주문내역 불러오기
	 */
	public async getRecentOrderListMember(payload) {
		return await instance
			.get(`${ENDPOINT.API_ORDER_COMPLETE_LIST_MEMBER}${payload}`)
			.then((response: AxiosResponse) => {
				return response;
			});
	}
}

export default new OrderService();
