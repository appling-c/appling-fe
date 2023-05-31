
import { ref } from "vue";
import instance from "./axios"
const ENDPOINT = {
    MEMEBERLOGIN: "/api/auth/login", 
    MEMEBERINFO: "/api/member", 
    MEMEBERREFRESH: "/api/auth/refresh", 
    MEMBERJOIN: "/api/auth/join", 
    MEMBRESELLER : "/api/member/seller"
}
const api = {
    /**
     * 구매자 -> 판매자 권한 신청
     */
    memberseller: async function() { 
        await instance.get(ENDPOINT.MEMBRESELLER).then((response) => { 
            const { data } = response.data;
            return data;
        })
    },
    
    logout: function () {
        sessionStorage.removeItem('access_token')
        sessionStorage.removeItem('refresh_token');
        sessionStorage.removeItem('user')
        sessionStorage.removeItem('islogin')
    },

    /**
     * 토큰 만료 -> 재발급 프로세스 테스트용 API
     */
    calltokentest: async function () {
        await instance.get('/api/v1/hello').then((response) => { 
            return response;
        })    
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
        await api.memberaccsstoken(payload)

        // 사용자 정보 가져오기(구매자/판매자에 따라 리다이렉팅 페이지가 다름)
        const resultpath = await api.memberinfo()
        return resultpath
    },

    /**
     * user token 발행, 토큰저장
     */
    memberaccsstoken: async function (payload) { 
        await instance.post(ENDPOINT.MEMEBERLOGIN, { ...payload }).then((response) => { 
            const { code, data } = response.data;
            if (code == "0000") { 
                const { access_token, refresh_token } = data;
                // 토큰저장
                sessionStorage.setItem('access_token', access_token);
                sessionStorage.setItem('refresh_token', refresh_token);
            }
        })
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

                alert('[2]. 재발급')
            }
        })
    },
}

export default api;