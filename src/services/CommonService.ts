import instance from "@/plugins/axios"
import { AxiosHeaders, AxiosResponse } from "axios";
import {Token, MemberLogin} from "../types/auth";

const ENDPOINT = {
    
    API_COMMON_HTML: "/api/common/html",
    API_COMMON_IMAGE  : "/api/common/image", 
    
}

class CommonService {
    /**
     * 농장 소개 html 저장하기
     */
    public async savebrandshophtml(payload: Object) { 
        return await instance.post(ENDPOINT.API_COMMON_HTML, payload, {
            headers:{
                'Content-Type': 'application/x-www-form-urlencoded'
              }
        }).then((response:AxiosResponse) => { 
            return response
        })
    }

    public async callhtmlstring(payload: Object | String) { 
        return await instance.get(`https://appling-s3.s3.ap-northeast-2.amazonaws.com/html/2/20230805/191541_0.html`, {
        }).then((response:AxiosResponse) => { 
            return response
        })
    }


    /**
     * 이미지 등록 url 얻기
     */
    public async imageonserver(param):Promise<{}|[]> { 
        return await instance.post(ENDPOINT.API_COMMON_IMAGE, param, {
            headers:{
                'Content-Type': 'application/x-www-form-urlencoded'
              }
        }).then((response:AxiosResponse) => { 
            return response
        })
    }
    



    
}


export default new CommonService();