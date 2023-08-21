import instance from "@/plugins/axios"
import { AxiosHeaders, AxiosResponse } from "axios";
import {Token, MemberLogin} from "../types/auth";

const ENDPOINT = {
    API_SELLER_PRODUCT : "/api/seller/product", 
    API_PRODUCT: "/api/product", 
    API_PRODUCT_CATEOGORY : "/api/product/category", 
    API_PRODUCT_COUNT : "/api/product/cnt", 
}

class ProductService {
    /**
     * 상품 리스트 가져오기
     */
    public async getproductlist(payload:Object) { 
        return await instance.get(`${ENDPOINT.API_SELLER_PRODUCT}`, { params: payload}).
        then((response:AxiosResponse) => { 
            return response
        })
    }

    /**
     * 상품 등록/수정
     */
    public async submittemplate(param:Object, mode:string):Promise<{}|[]> { 
        if(mode == 'regist'){
            // 등록
            return await instance.post(ENDPOINT.API_SELLER_PRODUCT, param, {
            }).then((response:AxiosResponse) => { 
                return response
            })
        }else{
            // 수정
            return await instance.put(ENDPOINT.API_SELLER_PRODUCT, param, {
            }).then((response:AxiosResponse) => { 
                return response
            })
        }
        
    }

    /**
     * 판매자가 판매중인 상품 리스트 가져오기
     */
    public async getproductlistbysellerid(payload: Object) { 
        return await instance.get(`${ENDPOINT.API_PRODUCT}?seller_id=${payload}`,{
        }).then((response:AxiosResponse) => { 
            return response;
        })
    }

    /**
     * 상품 뷰 조회수+1
     */
    public async productcount(payload:Object) { 
        return await instance.patch(`${ENDPOINT.API_PRODUCT_COUNT}`, payload).then((response:AxiosResponse) => { 
            return response;
        })
    }
    
    /**
     * 상품 카테고리 리스트
     */
     public async categorylist() { 
        return await instance.get(`${ENDPOINT.API_PRODUCT_CATEOGORY}`, {
        }).then((response:AxiosResponse) => { 
            return response;
        })
    }

     /**
     * 상품 상세 조회
     */
    public async getproductlistbyid(payload: Object | String) { 
        return await instance.get(`${ENDPOINT.API_PRODUCT}/${payload}`, {
        }).then((response:AxiosResponse) => { 
            return response
        })
    }

    /**
     * 상품 리스트 가져오기
     */
    public async getproductlist_product_new(payload:Object) { 
        return await instance.get(`${ENDPOINT.API_PRODUCT}`, { params: payload}).
        then((response:AxiosResponse) => {

            return response
        })
    }
    
}


export default new ProductService();