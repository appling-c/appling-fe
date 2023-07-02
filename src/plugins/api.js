
import { ref } from "vue";
import instance from "./axios"
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
    KAKAOLOGIN_AUTH_KAKAO_TOKEN : "/api/oauth/kakao/login?access_token="
}
const api = {
    /**
     * 카카오 로그인 리다이렉팅
     */
    kakaologin: async function(code){
        let kakao_access_token = '';
        await instance.get(`${ENDPOINT.KAKAOLOGIN_AUTH}${code}`, {
        }).then((response) => { 
            const { data } = response;
            const {code} = data;
            if(code == "0000"){
                const {access_token, refresh_token} = data.data; 
                kakao_access_token = access_token;               
                
            }
        })

       await instance.get(`${ENDPOINT.KAKAOLOGIN_AUTH_KAKAO_TOKEN}${kakao_access_token}`).then((auth)=> {                    
            const {access_token, refresh_token} =  auth.data.data;
            this._save_token({access_token, refresh_token});
            
        })

        return await this.memberinfo().then((resultpath)=> {
            return resultpath;
        })
        
    },
    
     /**
     * 상품 상세 조회
     */
    getproductlistbyid: async function(payload) { 
    return await instance.get(`${ENDPOINT.PRODUCTSERACH}/${payload}`, {
    }).then((response) => { 
        return response
    })
    },
    /**
     * 상품 리스트 가져오기
     */
     getproductlist: async function(payload) { 
        return await instance.get(`${ENDPOINT.PRODUCTSERACH}?search=${payload.keyword}&page=${payload.page}&size=${payload.size}`, {
        }).then((response) => { 
            return response
        })
    },
    /**
     * 팜플렛 등록하기
     */
     submittemplate: async function(param) { 
        return await instance.post(ENDPOINT.SUBMITTMEPLATE, param, {
        }).then((response) => { 
            return response
        })
    },
    /**
     * 팜플렛/상품 등록하기 > 이미지 등록 url 얻기
     */
     imageonserver: async function(param) { 
        return await instance.post(ENDPOINT.IMAGEONSERVER, param, {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
              }
        }).then((response) => { 
            return response
        })
    },
    /**
     * 구매자 -> 판매자 권한 신청
     */
    memberseller: async function() { 
        return await instance.post(ENDPOINT.MEMBRESELLER).then((response) => { 
            return response.data.data.message;
        })
    },
    
    logout: function () {
        sessionStorage.removeItem('access_token')
        sessionStorage.removeItem('refresh_token');
        sessionStorage.removeItem('user')
        sessionStorage.removeItem('islogin')
    },

   
    /**
     * 회원가입
     */
    memberjoin: async function (payload) { 
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
    memberlogin: async function (payload) { 
        // 액세스 토큰 받기
        await api.loginccesstoken(payload)

        // 사용자 정보 가져오기(구매자/판매자에 따라 리다이렉팅 페이지가 다름)
        const resultpath = await api.memberinfo()
        return resultpath
    },

    /**
     * user token 발행, 토큰저장
     */
     loginccesstoken: async function (payload) { 
        await instance.post(ENDPOINT.MEMEBERLOGIN, { ...payload }).then((response) => { 
            const { code, data } = response.data;
            if (code == "0000") { 
                const { access_token, refresh_token } = data;
                this._save_token({access_token, refresh_token})
            }
        })
    },

    /**
     * user token 발행, 토큰저장
     */
    _save_token(payload){
       // 토큰저장
       const {access_token, refresh_token} = payload;
       sessionStorage.setItem('access_token', access_token);
       sessionStorage.setItem('refresh_token', refresh_token);
    },



    /**
     * 사용자 정보 가져오기
     */
    memberinfo: async function () {
        let resultpath = '';
        await instance.get(ENDPOINT.MEMEBERINFO).then((result) => { 
            const { data, message } = result.data;
            
            sessionStorage.setItem('user', JSON.stringify(data))
            sessionStorage.setItem('islogin', true)
            const role = data.role
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
    memberaccesstoken: async function () { 
        const refresh_token = sessionStorage.getItem('refresh_token')
        await instance.get(`${ENDPOINT.MEMEBERREFRESH}/${refresh_token}`).then((response) => { 
            const { code, data } = response.data;
            if (code == "0000") { 
                const { access_token, refresh_token } = data;
                // 토큰저장
                sessionStorage.setItem('access_token', access_token);
                sessionStorage.setItem('refresh_token', refresh_token);
                
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