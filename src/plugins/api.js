
import { ref } from "vue"
import instance from "./axios"
const ENDPOINT = {
    MEMEBERLOGIN: "/api/auth/login", 
    MEMEBERINFO: "/api/v1/hello", 
    MEMEBERREFRESH: "/api/auth/refresh", 
    MEMBERJOIN : "/api/auth/join"
}
const api = {
    calltokentest: async function () {
        await instance.get('/api/v1/hello').then((response) => { 
            console.log(response)
        })    
    },
    
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
        await api.memberaccsstoken(payload).then(() => { 
            api.memberinfo()
        })
        // const [, resultpath] = await Promise.all([
        //     api.memberaccsstoken(payload),
        //     api.memberinfo()])
        // return resultpath;
    },

    /**
     * user token 발행, 토큰저장
     */
    memberaccsstoken: async function (payload) { 
        await instance.post(ENDPOINT.MEMEBERLOGIN, { ...payload }).then((response) => { 
            const { code, data } = response.data;
            if (code == "0000") { 
                const { access_token, refresh_token } = data;
                console.log(access_token, refresh_token)
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
            console.log(data, message)
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
    memberaccesstoken: async function () { 
        const refresh_token = sessionStorage.getItem('refresh_token')
        const access_token = sessionStorage.getItem('access_token')
        if (!refresh_token) { 
            return alert('사용자 정보가 만료되었습니다. 다시로그인해주세요.')
        }
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