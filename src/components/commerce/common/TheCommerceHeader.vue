<template>
  <header
    class="
      flex flex-wrap
      sm:justify-start sm:flex-nowrap
      z-50
      w-full
      bg-white
      border-b border-gray-200
      text-sm
      py-3
      sm:py-0
      dark:bg-gray-800 dark:border-gray-700
    "
  >
    <nav
      class="
        relative
        max-w-7xl
        w-full
        mx-auto
        px-4
        sm:flex sm:items-center sm:justify-between sm:px-6
        lg:px-8
      "
      aria-label="Global"
    >
      <div class="flex items-center justify-between">
        <a
          @click="movetomain()"
          class="flex-none text-xl font-semibold dark:text-white"
          aria-label="Brand"
          >🍎</a
        >
        <div class="sm:hidden">
          <button
            type="button"
            class="
              hs-collapse-toggle
              p-2
              inline-flex
              justify-center
              items-center
              gap-2
              rounded-md
              border
              font-medium
              bg-white
              text-gray-700
              shadow-sm
              align-middle
              hover:bg-gray-50
              focus:outline-none
              focus:ring-2
              focus:ring-offset-2
              focus:ring-offset-white
              focus:ring-blue-600
              transition-all
              text-sm
              dark:bg-slate-900
              dark:hover:bg-slate-800
              dark:border-gray-700
              dark:text-gray-400
              dark:hover:text-white
              dark:focus:ring-offset-gray-800
            "
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

      <div
        id="navbar-collapse-with-animation"
        class="
          hs-collapse
          hidden
          overflow-hidden
          transition-all
          duration-300
          basis-full
          grow
          md:block
        "
      >
        <div class="overflow-hidden overflow-y-auto max-h-[75vh] scrollbar-y">
          <div
            class="
              flex flex-col
              gap-x-0
              mt-5
              divide-y divide-dashed divide-gray-200
              md:flex-row
              md:items-center
              md:justify-end
              md:gap-x-7
              md:mt-0
              md:pl-7
              md:divide-y-0
              md:divide-solid
              dark:divide-gray-700
            "
          >
            <div
              class="
                hs-dropdown
                [--strategy:static]
                md:[--strategy:absolute]
                [--adaptive:none]
                py-3
                md:py-6
              "
            >
              <button
                @click="cartlist"
                type="button"
                class="
                  flex
                  items-center
                  w-full
                  text-gray-800
                  hover:text-gray-600
                  font-medium
                  dark:text-gray-200 dark:hover:text-gray-500
                "
              >
                🛒장바구니
              </button>
            </div>

            <div
              v-if="userInfoInterface.islogin"
              class="
                hs-dropdown
                [--strategy:static]
                md:[--strategy:absolute]
                [--adaptive:none]
                md:[--trigger:hover]
                py-3
                md:py-6
              "
            >
              <button
                type="button"
                class="
                  flex
                  items-center
                  w-full
                  text-gray-800
                  hover:text-gray-600
                  font-medium
                  dark:text-gray-200 dark:hover:text-gray-500
                "
              >
                🍎마이애플링
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

              <div
                v-if="userInfoInterface.role !== 'SELLER'"
                class="
                  hs-dropdown-menu
                  transition-[opacity,margin]
                  duration-[0.1ms]
                  md:duration-[150ms]
                  hs-dropdown-open:opacity-100
                  opacity-0
                  md:w-80
                  hidden
                  z-10
                  bg-white
                  md:shadow-2xl
                  rounded-lg
                  py-2
                  md:p-2
                  dark:bg-gray-800 dark:divide-gray-700
                  before:absolute
                  top-full
                  before:-top-5 before:left-0 before:w-full before:h-5 before:right-[0px]
                  right-0
                "
              >
                <router-link
                  to="/commerce/regist"
                  class="
                    inline-flex
                    gap-x-5
                    w-full
                    p-4
                    text-gray-600
                    rounded-md
                    hover:bg-gray-100
                    focus:ring-2 focus:ring-blue-500
                    dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300
                  "
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
                    <span class="block font-semibold mb-1 text-gray-800 dark:text-gray-200"
                      >판매자 권한 신청하기
                      <span
                        class="inline ml-1 text-xs bg-blue-600 text-white py-1 px-2 rounded-full"
                        >New</span
                      ></span
                    >

                    판매자 권한을 요청하고 상품을 판매할 수 있습니다.
                  </div>
                </router-link>

                <div class="my-2 border-t border-gray-100 dark:border-gray-800"></div>

                <a
                  @click="account()"
                  class="
                    inline-flex
                    gap-x-5
                    w-full
                    p-4
                    text-gray-600
                    rounded-md
                    hover:bg-gray-100
                    focus:ring-2 focus:ring-blue-500
                    dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300
                  "
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
                    <span class="block font-semibold mb-1 text-gray-800 dark:text-gray-200"
                      >내 정보</span
                    >
                    내정보 수정, 배송지 관리
                  </div>
                </a>

                <div class="my-2 border-t border-gray-100 dark:border-gray-800"></div>

                <a
                  @click="logout"
                  class="
                    inline-flex
                    gap-x-5
                    w-full
                    p-4
                    text-gray-600
                    rounded-md
                    hover:bg-gray-100
                    focus:ring-2 focus:ring-blue-500
                    dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300
                  "
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
                      d="M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1h8zm-7.978-1A.261.261 0 0 1 7 12.996c.001-.264.167-1.03.76-1.72C8.312 10.629 9.282 10 11 10c1.717 0 2.687.63 3.24 1.276.593.69.758 1.457.76 1.72l-.008.002a.274.274 0 0 1-.014.002H7.022zM11 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0zM6.936 9.28a5.88 5.88 0 0 0-1.23-.247A7.35 7.35 0 0 0 5 9c-4 0-5 3-5 4 0 .667.333 1 1 1h4.216A2.238 2.238 0 0 1 5 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816zM4.92 10A5.493 5.493 0 0 0 4 13H1c0-.26.164-1.03.76-1.724.545-.636 1.492-1.256 3.16-1.275zM1.5 5.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0zm3-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4z"
                    />
                  </svg>
                  <div class="grow">
                    <span class="block font-semibold mb-1 text-gray-800 dark:text-gray-200"
                      >로그아웃</span
                    >
                  </div>
                </a>
              </div>
            </div>

            <div v-if="userInfoInterface.role == 'MEMBER'" class="pt-3 md:pt-0">
              <button
                type="button"
                class="
                  py-3
                  px-3
                  inline-flex
                  justify-center
                  items-center
                  gap-2
                  rounded-md
                  bg-blue-100
                  border border-transparent
                  font-medium
                  text-blue-500
                  hover:text-white hover:bg-blue-500
                  focus:outline-none focus:ring-2
                  ring-offset-white
                  focus:ring-blue-500 focus:ring-offset-2
                  transition-all
                "
                @click="movetoDashboard()"
              >
                판매자 대시보드 바로가기
              </button>
            </div>

            <div
              v-if="!userInfoInterface.islogin"
              class="
                hs-dropdown
                [--strategy:static]
                md:[--strategy:absolute]
                [--adaptive:none]
                py-3
                md:py-6
              "
            >
              <button
                @click="signup"
                type="button"
                class="
                  flex
                  items-center
                  w-full
                  text-gray-800
                  hover:text-gray-600
                  font-medium
                  dark:text-gray-200 dark:hover:text-gray-500
                "
              >
                <svg
                  class="w-4 h-4"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"
                  />
                </svg>
                회원가입
              </button>
            </div>

            <div
              v-if="!userInfoInterface.islogin"
              class="
                hs-dropdown
                [--strategy:static]
                md:[--strategy:absolute]
                [--adaptive:none]
                py-3
                md:py-6
              "
            >
              <button
                @click="login"
                type="button"
                class="
                  flex
                  items-center
                  w-full
                  text-gray-800
                  hover:text-gray-600
                  font-medium
                  dark:text-gray-200 dark:hover:text-gray-500
                "
              >
                <svg
                  class="w-4 h-4"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"
                  />
                </svg>
                로그인
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </header>
</template>

<script lang="ts">
import UserAthendicateService from "@/services/UserAthendicateService";
import { mapActions, mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters("auth", ["userInfoInterface"]),
  },

  methods: {
    logout() {
      UserAthendicateService.logout();
      this.$router.go(0);
    },
    account() {
      this.$router.push("/account");
    },
    signup() {
      this.$router.push("/signup");
    },
    login() {
      this.$router.push("/login");
    },
    cartlist() {
      this.$router.push("/commerce/cartlist");
    },
    movetomain() {
      this.$router.push("/commerce/main");
    },
    movetoDashboard() {
      this.$router.push("/admin/dashboard");
    },
  },
  mounted() {
    console.log(this.userInfoInterface);
    if (this.$route.fullPath == "/") {
      this.$router.push("/commerce/main");
    }
  },
};
</script>
