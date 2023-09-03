import instance from "@/plugins/axios"
import { AxiosHeaders, AxiosResponse } from "axios";
import {Token, MemberLogin} from "../types/auth";

const ENDPOINT = {
    KAKAOLOGIN_AUTH: "/api/oauth/kakao?code=", 
    KAKAOLOGIN_AUTH_KAKAO_TOKEN: "/api/oauth/kakao/login?access_token=", 
    
    API_AUTH_LOGIN: "/api/auth/login", 
    API_AUTH_REFRESH: "/api/auth/refresh", 
    API_AUTH_JOIN: "/api/auth/join", 
    
    API_MEMEBER: "/api/member", 
    API_MEMBRER_SELLER : "/api/member/seller", 
    API_MEMBER_RECIPIENT : "/api/member/recipient",
    API_MEMBER_SELLER_INTRODUCE : "/api/member/seller/introduce",
    
    API_SELLER_PRODUCT : "/api/seller/product", 
    
    API_PRODUCT: "/api/product", 
    API_PRODUCT_CATEOGORY : "/api/product/category", 
    API_PRODUCT_COUNT : "/api/product/cnt", 
    
    API_COMMON_HTML: "/api/common/html",
    API_COMMON_IMAGE  : "/api/common/image", 
    
}

class UserAthendicateService {
    logout (): void {
        sessionStorage.removeItem('access_token')
        sessionStorage.removeItem('refresh_token');
        sessionStorage.removeItem('user')
        sessionStorage.removeItem('islogin')
    }
    
    /**
     * 회원가입
     */
    public async memberjoin(payload): Promise<void> { 
        await instance.post(ENDPOINT.API_AUTH_JOIN, { ...payload }).then((response) => { 
            const { code } = response.data;
            if (code == '0000') {
                return 'login';
            } else { 
                return 'signup'
            }
        })
    }

    /**
     * 토큰재발급
     */
    public async memberaccesstoken():Promise<string> { 
        const refresh_token: string = sessionStorage.getItem('refresh_token')
        await instance.get(`${ENDPOINT.API_AUTH_REFRESH}/${refresh_token}`).then((response) => { 
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
    }

    /**
     * user token 발행, 토큰저장
     */
    public async loginccesstoken(payload:Object): Promise<void> { 
        await instance.post(ENDPOINT.API_AUTH_LOGIN, { ...payload }).then((response) => { 
            const { code, data } = response.data;
            if (code == "0000") { 
                this._save_token(data);
            }
        })
    }

    /**
     * 카카오 로그인 리다이렉팅
     */
    public async kakaologin(code: string){
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
        
    }

    /**
     * 토큰저장
     */
    _save_token(payload:Token): void{
        // 토큰저장
        const {access_token, refresh_token}: Token = payload;
        sessionStorage.setItem('access_token', access_token);
        sessionStorage.setItem('refresh_token', refresh_token);
    }

    /**
     * 사용자 정보 가져오기
     */
    public async memberinfo():Promise<string> {
        let resultpath:string;
        await instance.get(ENDPOINT.API_MEMEBER).then((result) => { 
            const { data, message } = result.data;
            sessionStorage.setItem('user', JSON.stringify(data))
            sessionStorage.setItem('islogin', "true")
            const role:string = data.role;
            if (message == 'success') {
                resultpath = role === 'SELLER' ? 'admin/dashboard': 'commerce';
            } else { 
                resultpath = 'login';
            }
        })
        return resultpath;
    }

    /**
     * 로그인
     * 액세스토큰 받기
     * 사용자 정보 가져오기
     */
    public async memberlogin(payload: MemberLogin): Promise<string> { 
        // 액세스 토큰 받기
        await this.loginccesstoken(payload)

        // 사용자 정보 가져오기(구매자/판매자에 따라 리다이렉팅 페이지가 다름)
        const resultpath = await this.memberinfo()
        return resultpath
    }
}


export default new UserAthendicateService();