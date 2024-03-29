import instance from "@/plugins/axios";
import { AxiosHeaders, AxiosResponse } from "axios";

const ENDPOINT = {
  API_MEMBRER_SELLER: "/api/member/seller",
  API_MEMBER_RECIPIENT: "/api/member/recipient",
  API_MEMBER_SELLER_INTRODUCE: "/api/common/introduce",
};

class MemberService {
  /**
   * 판매자 정보 수정(덮어쓰기)
   */
  public async updatesellerinfo(payload: Object) {
    return await instance
      .put(`${ENDPOINT.API_MEMBRER_SELLER}`, payload, {})
      .then((response: AxiosResponse) => {
        return response;
      });
  }

  /**
   * 판매자 정보 조회
   */
  public async getsellerinfo() {
    return await instance
      .get(`${ENDPOINT.API_MEMBRER_SELLER}`, {})
      .then((response: AxiosResponse) => {
        return response;
      });
  }

  /**
   * 판매자 정보 등록
   */
  public async registSellerInfo(payload: Object) {
    return await instance
      .post(`${ENDPOINT.API_MEMBRER_SELLER}`, payload, {})
      .then((response: AxiosResponse) => {
        return response;
      });
  }

  /**
   * 수령인 정보 수정
   */
  public async updatedeliveryinfo(payload: Object) {
    return await instance
      .post(`${ENDPOINT.API_MEMBER_RECIPIENT}`, payload, {})
      .then((response: AxiosResponse) => {
        return response;
      });
  }

  /**
   * 수령인 정보 조회
   */
  public async getdeliveryinfo() {
    return await instance
      .get(`${ENDPOINT.API_MEMBER_RECIPIENT}`, {})
      .then((response: AxiosResponse) => {
        return response;
      });
  }

  /**
   * 소개글 불러오기
   */
  public async getsellerintroduce(id) {
    console.log(id);

    return await instance
      .get(`${ENDPOINT.API_MEMBER_SELLER_INTRODUCE}/${id}`, {
        // headers:{
        //     'Content-Type': 'text/html'
        // }
      })
      .then((response: AxiosResponse) => {
        return response;
      });
  }
}

export default new MemberService();
