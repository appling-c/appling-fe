import instance from "@/plugins/axios";
import { AxiosHeaders, AxiosResponse } from "axios";
import { Token, MemberLogin } from "../types/auth";
import store from "../store";
import Cookies from "js-cookie";

const ENDPOINT = {
	KAKAOLOGIN_AUTH: "/api/oauth/kakao?code=",
	KAKAOLOGIN_AUTH_KAKAO_TOKEN: "/api/oauth/kakao/login?access_token=",
	API_AUTH_LOGIN: "/api/auth/login",
	API_AUTH_REFRESH: "/api/auth/refresh",
	API_AUTH_JOIN: "/api/auth/join",
	API_MEMEBER: "/api/member",
};

class UserAthendicateService {
	/**
	 * 회원정보수정
	 */
	public async updatememberinfo(payload: Object): Promise<any> {
		return await instance.patch(ENDPOINT.API_MEMEBER, { ...payload }).then((response) => {
			return response;
		});
	}

	/**
	 * 로그아웃
	 */
	logout(): void {
		store.dispatch("auth/updateUserInfoInterface", {});
		Cookies.remove("access_token");
		Cookies.remove("refresh_token");
	}

	/**
	 * 회원가입
	 */
	public async memberjoin(payload): Promise<void> {
		await instance.post(ENDPOINT.API_AUTH_JOIN, { ...payload }).then((response) => {
			const { code } = response.data;
			if (code == "0000") {
				return "login";
			} else {
				return "signup";
			}
		});
	}

	/**
	 * 토큰재발급
	 */
	public async memberaccesstoken(): Promise<string> {
		const refresh_token = Cookies.get("refresh_token");
		try {
			await instance.get(`${ENDPOINT.API_AUTH_REFRESH}/${refresh_token}`).then((response) => {
				const { code, data } = response.data;
				if (code == "0000") {
					// 토큰저장
					this._save_token(data);
				}
				return new Promise((resolve) => {
					setTimeout(() => {
						resolve("success");
					}, 500);
				});
			});
		} catch (err) {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve("fail");
        }, 500);
      })
		}
	}

	/**
	 * user token 발행, 토큰저장
	 */
	public async loginccesstoken(payload: Object): Promise<void> {
		await instance.post(ENDPOINT.API_AUTH_LOGIN, { ...payload }).then((response) => {
			const { code, data } = response.data;
			if (code == "0000") {
				this._save_token(data);
			}
		});
	}

	/**
	 * 카카오 로그인 리다이렉팅
	 */
	public async kakaologin(code: string) {
		let kakao_access_token: string;
		await instance.get(`${ENDPOINT.KAKAOLOGIN_AUTH}${code}`).then((response: AxiosResponse) => {
			const { data, code } = response?.data;
			if (code == "0000") {
				const { access_token }: Token = data;
				kakao_access_token = access_token;
			}
		});

		await instance
			.get(`${ENDPOINT.KAKAOLOGIN_AUTH_KAKAO_TOKEN}${kakao_access_token}`)
			.then((auth: AxiosResponse) => {
				//const data = auth.data;
				const data = auth.data.data;
				this._save_token(data);
			});

		return await this.memberinfo().then((resultpath: string) => {
			return resultpath;
		});
	}

	/**
	 * 토큰저장
	 */
	_save_token(payload: Token): void {
		// 토큰저장
		const { access_token, refresh_token }: Token = payload;
		store.dispatch("auth/saveUserToken", {
			access_token,
			refresh_token,
		});
	}

	/**
	 * 사용자 정보 가져오기
	 */
	public async memberinfo(): Promise<string> {
		let resultpath: string;
		await instance.get(ENDPOINT.API_MEMEBER).then((result) => {
			let { data, message } = result.data;
			// store 저장
			data["islogin"] = true;
			store.dispatch("auth/updateUserInfoInterface", data);

			const role: string = data.role;
			if (message == "success") {
				resultpath = role === "SELLER" ? "admin/dashboard" : "commerce";
			} else {
				resultpath = "login";
			}
		});
		return resultpath;
	}

	/**
	 * 로그인
	 * 액세스토큰 받기
	 * 사용자 정보 가져오기
	 */
	public async memberlogin(payload: MemberLogin): Promise<string> {
		// 액세스 토큰 받기
		await this.loginccesstoken(payload);

		// 사용자 정보 가져오기(구매자/판매자에 따라 리다이렉팅 페이지가 다름)
		const resultpath = await this.memberinfo();
		return resultpath;
	}
}

export default new UserAthendicateService();
