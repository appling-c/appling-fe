
import { ref } from "vue";
import instance from "./axios"
import {Token, MemberLogin} from "../types/auth";
import { AxiosHeaders, AxiosResponse } from "axios";

const ENDPOINT = {
    MEMEBERLOGIN: "/api/auth/login", 
    MEMEBERINFO: "/api/member", 
    MEMEBERREFRESH: "/api/auth/refresh", 
    MEMBERJOIN: "/api/auth/join", 
    MEMBRESELLER : "/api/member/seller", 
    IMAGEONSERVER : "/api/common/image", 
    SUBMITTMEPLATE : "/api/seller/product", 
    PRODUCTSERACH : "/api/product", 
    KAKAOLOGIN_AUTH : "/api/oauth/kakao?code=", 
    KAKAOLOGIN_AUTH_KAKAO_TOKEN: "/api/oauth/kakao/login?access_token=", 
    CATEOGORYLIST : "/api/product/category", 
    PRODUCTCOUNT : "/api/product/cnt"
    
}
const api = {
    /**
     * 상품 뷰 조회수+1
     */
     productcount: async function (payload:Object) { 
        return await instance.patch(`${ENDPOINT.PRODUCTCOUNT}`, payload).then((response:AxiosResponse) => { 
            return response;
        })
    },
    
    /**
     * 상품 카테고리 리스트
     */
    categorylist: async function () { 
        return await instance.get(`${ENDPOINT.CATEOGORYLIST}`, {
        }).then((response:AxiosResponse) => { 
            return response;
        })
    },
    /**
     * 카카오 로그인 리다이렉팅
     */
    kakaologin: async function(code: string){
        let kakao_access_token: string;
        await instance.get(`${ENDPOINT.KAKAOLOGIN_AUTH}${code}`).then((response:AxiosResponse) => { 
            const {data, code} = response?.data;
            if(code == "0000"){
                const {access_token}: Token = data; 
                kakao_access_token = access_token;      
            }
        })

       await instance.get(`${ENDPOINT.KAKAOLOGIN_AUTH_KAKAO_TOKEN}${kakao_access_token}`).then((auth:AxiosResponse)=> {                    
            const data: Token = auth.data;
            this._save_token(data);
            
        })

        return await this.memberinfo().then((resultpath:string)=> {
            return resultpath;
        })
        
    },
    
     /**
     * 상품 상세 조회
     */
    getproductlistbyid: async function(payload: Object | String) { 
        return await instance.get(`${ENDPOINT.PRODUCTSERACH}/${payload}`, {
        }).then((response:AxiosResponse) => { 
            return response
        })
    },
    /**
     * 상품 리스트 가져오기
     */
     getproductlist: async function(payload:Object) { 
        return await instance.get(`${ENDPOINT.SUBMITTMEPLATE}`, { params: payload}).
        then((response:AxiosResponse) => { 
            return response
        })
    },
    /**
     * 상품 리스트 전체 가져오기
     */
     getproductlist_all: async function():Promise<{}|[]> { 
        return await instance.get(`${ENDPOINT.PRODUCTSERACH}`, {
        }).then((response:AxiosResponse) => { 
            return response
        })
    },
    /**
     * 상품 등록/수정
     */
     submittemplate: async function(param:Object, mode:string):Promise<{}|[]> { 
        if(mode == 'regist'){
            // 등록
            return await instance.post(ENDPOINT.SUBMITTMEPLATE, param, {
            }).then((response:AxiosResponse) => { 
                return response
            })
        }else{
            // 수정
            return await instance.put(ENDPOINT.SUBMITTMEPLATE, param, {
            }).then((response:AxiosResponse) => { 
                return response
            })
        }
        
    },
    /**
     * 이미지 등록 url 얻기
     */
     imageonserver: async function(param):Promise<{}|[]> { 
        return await instance.post(ENDPOINT.IMAGEONSERVER, param, {
            headers:AxiosHeaders ={
                'Content-Type':string = 'application/x-www-form-urlencoded'
              }
        }).then((response:AxiosResponse) => { 
            return response
        })
    },
    /**
     * 구매자 -> 판매자 권한 신청
     */
    memberseller: async function(): Promise<string> { 
        // 권한 변경 
        await instance.post(ENDPOINT.MEMBRESELLER)
        
        // 토큰 리프레시
        const authupdate = await this.memberaccesstoken();
        return authupdate
    },
    
    logout: function (): void {
        sessionStorage.removeItem('access_token')
        sessionStorage.removeItem('refresh_token');
        sessionStorage.removeItem('user')
        sessionStorage.removeItem('islogin')
    },

   
    /**
     * 회원가입
     */
    memberjoin: async function (payload): Promise<void> { 
        await instance.post(ENDPOINT.MEMBERJOIN, { ...payload }).then((response) => { 
            const { code } = response.data;
            if (code == '0000') {
                return 'login';
            } else { 
                return 'signup'
            }
        })
    },

    /**
     * 로그인
     * 액세스토큰 받기
     * 사용자 정보 가져오기
     */
    memberlogin: async function (payload: MemberLogin): Promise<string> { 
        // 액세스 토큰 받기
        await api.loginccesstoken(payload)

        // 사용자 정보 가져오기(구매자/판매자에 따라 리다이렉팅 페이지가 다름)
        const resultpath = await api.memberinfo()
        return resultpath
    },

    /**
     * user token 발행, 토큰저장
     */
     loginccesstoken: async function (payload:Object): Promise<void> { 
        await instance.post(ENDPOINT.MEMEBERLOGIN, { ...payload }).then((response) => { 
            const { code, data } = response.data;
            if (code == "0000") { 
                this._save_token(data);
            }
        })
    },

    /**
     * 토큰저장
     */
    _save_token(payload:Token): void{
       // 토큰저장
       const {access_token, refresh_token}: Token = payload;
       sessionStorage.setItem('access_token', access_token);
       sessionStorage.setItem('refresh_token', refresh_token);
    },



    /**
     * 사용자 정보 가져오기
     */
    memberinfo: async function ():Promise<string> {
        let resultpath:string;
        await instance.get(ENDPOINT.MEMEBERINFO).then((result) => { 
            const { data, message } = result.data;
            sessionStorage.setItem('user', JSON.stringify(data))
            sessionStorage.setItem('islogin', "true")
            const role:string = data.role;
            if (message == 'success') {
                resultpath = role === 'USER' ? 'commerce' : 'admin/dashboard';
            } else { 
                resultpath = 'login';
            }
        })
        return resultpath
    }, 

    /**
     * 토큰재발급
     */
    memberaccesstoken: async function ():Promise<string> { 
        const refresh_token: string = sessionStorage.getItem('refresh_token')
        await instance.get(`${ENDPOINT.MEMEBERREFRESH}/${refresh_token}`).then((response) => { 
            const { code, data } = response.data;
            if (code == "0000") { 
                // 토큰저장
                this._save_token(data);
            }
        })

        return new Promise(resolve => {
            setTimeout(() => {
              resolve('success');
            }, 500);
          });
    },
}

export default api;