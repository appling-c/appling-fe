<template>
  <header
    :class="isShowHeader ? 'flex' : 'hidden md:flex'"
    class="sticky top-0 inset-x-0 z-40 flex-wrap sm:justify-start sm:flex-nowrap w-full bg-white border-b text-sm py-2.5 sm:py-0 lg:pl-52"
  >
    <div class="flex items-center justify-between px-4 sm:px-0 md:px-2">
      <div class="sm:hidden">
        <button
          type="button"
          class="hs-collapse-toggle p-2 inline-flex justify-center items-center gap-2 rounded-md border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm dark:bg-slate-900 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800"
          data-hs-collapse="#navbar-collapse-with-animation"
          aria-controls="navbar-collapse-with-animation"
          aria-label="Toggle navigation"
        >
          <svg
            class="hs-collapse-open:hidden w-4 h-4"
            width="16"
            height="16"
            fill="currentColor"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
            />
          </svg>
          <svg
            class="hs-collapse-open:block hidden w-4 h-4"
            width="16"
            height="16"
            fill="currentColor"
            viewBox="0 0 16 16"
          >
            <path
              d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"
            />
          </svg>
        </button>
      </div>
    </div>
    <nav class="flex basis-full w-full mx-auto px-4 sm:px-6 md:px-8" aria-label="Global">
      <div
        class="w-full flex items-center justify-end ml-auto sm:justify-between sm:gap-x-3 sm:order-3"
      >
        <div class="hidden sm:flex">
          <div class="mr-5 lg:mr-0">
            <a
              @click="movetomain()"
              class="flex-none text-xl font-semibold"
              aria-label="Brand"
              >🍎</a
            >
          </div>
        </div>
        <div
          id="navbar-collapse-with-animation"
          class="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow md:block"
        >
          <div class="overflow-hidden overflow-y-auto max-h-[75vh] scrollbar-y">
            <div
              class="flex flex-col gap-x-0 mt-5 divide-y divide-dashed divide-gray-200 md:flex-row md:items-center md:justify-end md:gap-x-7 md:mt-0 md:pl-7 md:divide-y-0 md:divide-solid dark:divide-gray-700"
            >
              <div
                v-if="userInfoInterface.islogin"
                class="hs-dropdown [--strategy:static] md:[--strategy:absolute] [--adaptive:none] md:[--trigger:hover] py-3 md:py-4"
              >
                <button
                  type="button"
                  class="flex items-center w-full text-gray-800 hover:text-gray-600 font-medium dark:text-gray-200 dark:hover:text-gray-500"
                >
                  <img
                    class="mx-auto w-8 h-8 rounded-full"
                    src="/src/assets/apple-logo.png"
                  />마이애플링
                  <svg
                    class="ml-2 w-2.5 h-2.5 text-gray-600"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                    ></path>
                  </svg>
                </button>

                <!-- 판매자가 아닌 경우에만 노출 -->
                <div
                  class="hs-dropdown-menu transition-[opacity,margin] duration-[0.1ms] md:duration-[150ms] hs-dropdown-open:opacity-100 opacity-0 md:w-80 hidden z-10 bg-white md:shadow-2xl rounded-lg py-2 md:p-2 dark:bg-gray-800 dark:divide-gray-700 before:absolute top-full before:-top-5 before:left-0 before:w-full before:h-5 before:right-[0px] right-0"
                >
                  <router-link
                    v-if="userInfoInterface.role == 'MEMBER'"
                    to="/my/seller/request"
                    class="inline-flex gap-x-5 w-full p-4 text-gray-600 rounded-md hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300"
                  >
                    <svg
                      class="flex-shrink-0 w-5 h-5 mt-1"
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                    >
                      <path
                        d="M4.5 5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1zM3 4.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zm2 7a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zm-2.5.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1z"
                      />
                      <path
                        d="M2 2a2 2 0 0 0-2 2v1a2 2 0 0 0 2 2h1v2H2a2 2 0 0 0-2 2v1a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-1a2 2 0 0 0-2-2h-1V7h1a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H2zm13 2v1a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1zm0 7v1a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1v-1a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1zm-3-4v2H4V7h8z"
                      />
                    </svg>
                    <div class="grow">
                      <span
                        class="block font-semibold mb-1 text-gray-800 dark:text-gray-200"
                        >판매자 권한 신청하기
                        <span
                          class="inline ml-1 text-xs bg-blue-600 text-white py-1 px-2 rounded-full"
                          >New</span
                        ></span
                      >

                      판매자 권한을 요청하고 상품을 판매할 수 있습니다.
                    </div>
                  </router-link>
                  <a
                    href="/commerce/main"
                    class="inline-flex gap-x-5 w-full p-4 text-gray-600 rounded-md hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300"
                  >
                    <img class="w-8 h-8" src="../../../assets/main.png" />
                   

                    <div class="grow">
                      <span
                        class="pt-2 block font-semibold mb-1 text-gray-800 dark:text-gray-200"
                        >메인으로 이동</span
                      >
                    </div>
                  </a>

                  <div class="my-2 border-t border-gray-100 dark:border-gray-800"></div>
                  <a
                    @click="cartlist"
                    class="inline-flex gap-x-5 w-full p-4 text-gray-600 rounded-md hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300"
                  >
                  <img class="w-8 h-8" src="../../../assets/cartlist.png" />
                   
                    <div class="grow">
                      <span
                        class="pt-2 block font-semibold mb-1 text-gray-800 dark:text-gray-200"
                        >장바구니</span
                      >
                    </div>
                  </a>

                  <div class="my-2 border-t border-gray-100 dark:border-gray-800"></div>
                  <a
                    @click="history()"
                    class="inline-flex gap-x-5 w-full p-4 text-gray-600 rounded-md hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300"
                  >
                  <img class="w-8 h-8" src="../../../assets/delivery.png" />
                   
                    <div class="grow">
                      <span
                        class="pt-2 block font-semibold mb-1 text-gray-800 dark:text-gray-200"
                        >주문확인/배송조회</span
                      >
                    </div>
                  </a>

                  <div class="my-2 border-t border-gray-100 dark:border-gray-800"></div>

                  <a
                    @click="account()"
                    class="inline-flex gap-x-5 w-full p-4 text-gray-600 rounded-md hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300"
                  >
                  <img class="w-8 h-8" src="../../../assets/myinfo.png" />
                   
                    <div class="grow">
                      <span
                        class="pt-2 block font-semibold mb-1 text-gray-800 dark:text-gray-200"
                        >내 정보</span
                      >
                      내 정보, 비밀번호 변경
                    </div>
                  </a>

                  <div class="my-2 border-t border-gray-100 dark:border-gray-800"></div>

                  <a
                    @click="logout"
                    class="inline-flex gap-x-5 w-full p-4 text-gray-600 rounded-md hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300"
                  >
                    <svg
                      class="w-[16px] h-[16px] text-gray-800 dark:text-white"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 20 20"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="1.5"
                        d="M18.5 8V4.5a3.5 3.5 0 1 0-7 0V8M8 12.167v3M2 8h12a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1Z"
                      />
                    </svg>
                    <div class="grow">
                      <span
                        class="block font-semibold mb-1 text-gray-800 dark:text-gray-200"
                        >로그아웃</span
                      >
                    </div>
                  </a>
                </div>
              </div>

              <div v-if="userInfoInterface.role == 'SELLER'" class="pt-3 md:pt-0">
                <button
                  type="button"
                  class="py-3 px-3 inline-flex justify-center items-center gap-2 rounded-md bg-blue-100 border border-transparent font-medium text-blue-500 hover:text-white hover:bg-blue-500 focus:outline-none focus:ring-2 ring-offset-white focus:ring-blue-500 focus:ring-offset-2 transition-all"
                  @click="movetoDashboard()"
                >
                  판매자 대시보드 바로가기
                </button>
              </div>

              <div
                v-if="!userInfoInterface.islogin"
                class="hs-dropdown [--strategy:static] md:[--strategy:absolute] [--adaptive:none] py-3 md:py-6"
              >
                <button
                  @click="signup"
                  type="button"
                  class="flex items-center w-full text-gray-800 hover:text-gray-600 font-medium dark:text-gray-200 dark:hover:text-gray-500"
                >
                  <svg
                    class="w-[16px] h-[16px] text-gray-800 dark:text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 18 18"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1.5"
                      d="M1 10h3.439a.991.991 0 0 1 .908.6 3.978 3.978 0 0 0 7.306 0 .99.99 0 0 1 .908-.6H17M1 10v6a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-6M1 10l2-9h12l2 9M6 4h6M5 7h8"
                    />
                  </svg>
                  회원가입
                </button>
              </div>

              <div
                v-if="!userInfoInterface.islogin"
                class="hs-dropdown [--strategy:static] md:[--strategy:absolute] [--adaptive:none] py-3 md:py-6"
              >
                <button
                  @click="login"
                  type="button"
                  class="flex items-center w-full text-gray-800 hover:text-gray-600 font-medium dark:text-gray-200 dark:hover:text-gray-500"
                >
                  <svg
                    class="w-[16px] h-[16px] text-gray-800 dark:text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 16 20"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1.5"
                      d="M11.5 8V4.5a3.5 3.5 0 1 0-7 0V8M8 12v3M2 8h12a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1Z"
                    />
                  </svg>
                  로그인
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </header>
</template>

<script lang="ts">
import UserAthendicateService from "@/services/UserAthendicateService";
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters("auth", ["userInfoInterface"]),
    isShowHeader() {
      if (this.$route.fullPath.indexOf("/admin") !== -1) {
        return false;
      } else {
        return true;
      }
    },
  },

  methods: {
    logout() {
      UserAthendicateService.logout();
      this.$router.go(0);
    },
    account() {
      this.$router.push("/my/account");
    },
    signup() {
      this.$router.push("/signup");
    },
    login() {
      this.$router.push("/login");
    },
    cartlist() {
      this.$router.push("/my/cartlist");
    },
    movetomain() {
      this.$router.push("/commerce/main");
    },
    movetoDashboard() {
      this.$router.push("/admin/dashboard");
    },
    history() {
      this.$router.push("/my/order/history");
    },
  },
  mounted() {
    if (this.$route.fullPath == "/") {
      this.$router.push("/commerce/main");
    }
    console.log(this.$route);
  },
};
</script>
