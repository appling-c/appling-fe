
import instance from "./axios"
const ENDPOINT = {
    MEMEBERLOGIN: "/api/member/login", 
    MEMEBERINFO: "/api/member", 
    MEMEBERREFRESH: "/api/member/refresh", 
    MEMBERJOIN : "/api/member/join"
}
const api = {
    /**
     * 사용자 로그인
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
     * 사용자 로그인
     */
    memberlogin: async function (payload) { 
        const [, resultpath] = await Promise.all([ api.memberaccsstoken(payload), api.memberinfo()])
        return resultpath;
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
            sessionStorage.setItem('user', { ...data })
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
    memberaccsstoken: async function () { 
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
    },
}

export default api;