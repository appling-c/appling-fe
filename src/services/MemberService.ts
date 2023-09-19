import instance from "@/plugins/axios";
import { AxiosHeaders, AxiosResponse } from "axios";

const ENDPOINT = {
  API_MEMEBER: "/api/member",
  API_MEMBRER_SELLER: "/api/member/seller",
  API_MEMBER_RECIPIENT: "/api/member/recipient",
  API_MEMBER_SELLER_INTRODUCE: "/api/member/seller/introduce",
};

class MemberService {
  /**
   * 판매자 정보 조회
   */
  public async updatesellerinfo(payload: Object) {
    return await instance.put(`${ENDPOINT.API_MEMBRER_SELLER}`, payload, {}).then((response: AxiosResponse) => {
      return response;
    });
  }

  /**
   * 판매자 정보 조회
   */
  public async getsellerinfo() {
    return await instance.get(`${ENDPOINT.API_MEMBRER_SELLER}`, {}).then((response: AxiosResponse) => {
      return response;
    });
  }

  /**
   * 수령인 정보 수정
   */
  public async updatedeliveryinfo(payload: Object) {
    return await instance.post(`${ENDPOINT.API_MEMBER_RECIPIENT}`, payload, {}).then((response: AxiosResponse) => {
      return response;
    });
  }

  /**
   * 수령인 정보 조회
   */
  public async getdeliveryinfo() {
    return await instance.get(`${ENDPOINT.API_MEMBER_RECIPIENT}`, {}).then((response: AxiosResponse) => {
      return response;
    });
  }

  /**
   * 소개글 불러오기
   */
  public async getsellerintroduce() {
    return await instance
      .get(`${ENDPOINT.API_MEMBER_SELLER_INTRODUCE}`, {
        // headers:{
        //     'Content-Type': 'text/html'
        // }
      })
      .then((response: AxiosResponse) => {
        console.log(response);
        return response;
      });
  }
}

export default new MemberService();
