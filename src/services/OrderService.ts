import instance from "@/plugins/axios";
import { AxiosHeaders, AxiosResponse } from "axios";
import { Token, MemberLogin } from "../types/auth";

const ENDPOINT = {
  API_ORDER: "/api/order",
  API_ORDER_LIST: "/api/order/temp",
  API_ORDER_COMPLETE: "/api/order/complete",
};

class OrderService {
  /**
   * 임시 주문서 등록하기
   */
  public async saveTempOrderList(payload: Object) {
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
}

export default new OrderService();
