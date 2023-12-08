<script lang="ts">
import api from "@/plugins/api";
import type MemberLogin from "@/types/auth";
import UserAthendicateService from "@/services/UserAthendicateService";
import { mapActions } from "vuex";
import router from "../plugins/router";
export default {
  data() {
    return {
      user: {} as MemberLogin,
      resultUrl: "",
    };
  },
  methods: {
    ...mapActions("cart", ["updateSpinnerStatus"]),
    setUser(email, password) {
      this.user.email = email;
      this.user.password = password;
    },
    temp() {
      this.email = "luna@luna.com";
      this.password = "123123";
      this.setUser(this.email, this.password);
    },
    temp2() {
      this.email = "juno@mail.com";
      this.password = "password";
      this.setUser(this.email, this.password);
    },
    kakaologin() {
      const returnurl = import.meta.env.DEV
        ? "http://localhost:5173"
        : "https://www.appling.me";
      return (location.href = `
        https://kauth.kakao.com/oauth/authorize?client_id=04376f3d0a7618a3622f9c541d90d272&redirect_uri=${returnurl}/oauth/kakao/login&response_type=code`);
    },
    gotosingup() {
      this.$router.push("/signup");
    },
    async submit() {
      // 사용자 로그인 처리
      const user = this.user;
      this.updateSpinnerStatus(true);
      try {
        await UserAthendicateService.memberlogin(user).then((result) => {
          this.updateSpinnerStatus(false);
          if (this.resultUrl) {
            this.$router.push(`${this.resultUrl}`);
          } else {
            this.$router.push(`/${result}`);
          }
        });
      } catch (err) {
        console.log(err);
        alert(err);
        this.updateSpinnerStatus(false);
      }
    },
  },

  mounted() {
    this.resultUrl = this.$route?.query?.resultUrl;
  },
};
</script>
<template>
  <section class="bg-gray-50 dark:bg-gray-900">
    <div
      class="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-20 lg:py-16 lg:grid-cols-12"
    >
      <div class="w-full place-self-center lg:col-span-6">
        <div
          class="p-6 mx-auto bg-white rounded-lg shadow dark:bg-gray-800 sm:max-w-xl sm:p-8"
        >
          <a
            href="#"
            class="inline-flex items-center mb-4 text-xl font-semibold text-gray-900 dark:text-white"
          >
          <img
						class="mx-auto mb-4 w-16 h-16 rounded-full"
						src="/src/assets/apple-logo.png"
						alt="Micheal Avatar"
					/>
          애플링
          </a>
         
          <p class="text-sm font-light text-gray-500 dark:text-gray-300">
            아직 애플링 계정이 없다면?
            <a
              @click="gotosingup"
              class="text-blue-600 decoration-2 hover:underline font-medium"
              >회원가입</a
            >
          </p>

          <p class="mt-2 text-sm text-gray-600 dark:text-gray-400">
            <a
              @click="temp"
              class="text-blue-600 decoration-2 hover:underline font-medium"
            >
              어둠의 경로로 로그인하기
            </a>
          </p>
          <p class="mt-2 text-sm text-gray-600 dark:text-gray-400">
            <a
              @click="temp2"
              class="text-blue-600 decoration-2 hover:underline font-medium"
            >
              juno의 경로로 로그인하기
            </a>
          </p>

          <div class="mt-4 space-y-6 sm:mt-6">
            <div class="grid gap-6 sm:grid-cols-2">
              <div>
                <label
                  for="email"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >아이디</label
                >
                <input
                  type="email"
                  name="email"
                  id="email"
                  class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="name@company.com"
                  required
                  v-model="user.email"
                />
              </div>
              <div>
                <label
                  for="password"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >비밀번호</label
                >
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="••••••••"
                  class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required
                  v-model="user.password"
                />
              </div>
            </div>
            <div class="flex items-center">
              <div class="w-full h-0.5 bg-gray-200 dark:bg-gray-700"></div>
              <div class="px-5 text-center text-gray-500 dark:text-gray-400">or</div>
              <div class="w-full h-0.5 bg-gray-200 dark:bg-gray-700"></div>
            </div>
            <div class="space-y-3">
              <a
                @click="kakaologin"
                class="w-full inline-flex items-center justify-center py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-gray-900 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
              >
                <svg
                  class="w-5 h-5 mr-2 text-gray-900 dark:text-white"
                  viewBox="0 0 21 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_13183_29163)">
                    <path
                      d="M18.6574 15.5863C18.3549 16.2851 17.9969 16.9283 17.5821 17.5196C17.0167 18.3257 16.5537 18.8838 16.1969 19.1936C15.6439 19.7022 15.0513 19.9627 14.4168 19.9775C13.9612 19.9775 13.4119 19.8479 12.7724 19.585C12.1308 19.3232 11.5412 19.1936 11.0021 19.1936C10.4366 19.1936 9.83024 19.3232 9.18162 19.585C8.53201 19.8479 8.00869 19.985 7.60858 19.9985C7.00008 20.0245 6.39356 19.7566 5.78814 19.1936C5.40174 18.8566 4.91842 18.2788 4.33942 17.4603C3.71821 16.5863 3.20749 15.5727 2.80738 14.4172C2.37887 13.1691 2.16406 11.9605 2.16406 10.7904C2.16406 9.45009 2.45368 8.29407 3.03379 7.32534C3.4897 6.54721 4.09622 5.9334 4.85533 5.4828C5.61445 5.03219 6.43467 4.80257 7.31797 4.78788C7.80129 4.78788 8.4351 4.93738 9.22273 5.2312C10.0081 5.52601 10.5124 5.67551 10.7335 5.67551C10.8988 5.67551 11.4591 5.5007 12.4088 5.15219C13.3069 4.82899 14.0649 4.69517 14.6859 4.74788C16.3685 4.88368 17.6327 5.54699 18.4734 6.74202C16.9685 7.65384 16.2241 8.93097 16.2389 10.5693C16.2525 11.8454 16.7154 12.9074 17.6253 13.7506C18.0376 14.1419 18.4981 14.4444 19.0104 14.6592C18.8993 14.9814 18.7821 15.29 18.6574 15.5863V15.5863ZM14.7982 0.400358C14.7982 1.40059 14.4328 2.3345 13.7044 3.19892C12.8254 4.22654 11.7623 4.82035 10.6093 4.72665C10.5947 4.60665 10.5861 4.48036 10.5861 4.34765C10.5861 3.38743 11.0041 2.3598 11.7465 1.51958C12.1171 1.09416 12.5884 0.740434 13.16 0.458257C13.7304 0.18029 14.2698 0.0265683 14.7772 0.000244141C14.7921 0.133959 14.7982 0.267682 14.7982 0.400345V0.400358Z"
                      fill="currentColor"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_13183_29163">
                      <rect
                        width="20"
                        height="20"
                        fill="white"
                        transform="translate(0.5)"
                      />
                    </clipPath>
                  </defs>
                </svg>
                카카오톡 아이디로 시작하기
              </a>
            </div>
            <div class="flex items-center justify-between">
              <div class="flex items-start">
                <div class="flex items-center h-5">
                  <input
                    id="remember"
                    aria-describedby="remember"
                    type="checkbox"
                    class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                  />
                </div>
                <div class="ml-3 text-sm">
                  <label for="remember" class="text-gray-500 dark:text-gray-300"
                    >아이디 저장</label
                  >
                </div>
              </div>
              <a
                href="#"
                class="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500"
                >비밀번호 찾기</a
              >
            </div>
            <button
              @click="submit"
              type="submit"
              class="w-full text-white bg-blue-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
            >
              로그인
            </button>
          </div>
        </div>
      </div>
      <div class="mr-auto place-self-center lg:col-span-6">
        <img
          class="hidden mx-auto lg:flex"
          src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/authentication/illustration.svg"
          alt="illustration"
        />
      </div>
    </div>
  </section>
</template>
