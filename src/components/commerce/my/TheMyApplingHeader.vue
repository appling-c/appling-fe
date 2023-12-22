<template>
  <div>
    <aside
      id="sidebar-user"
      class="fixed top-0 left-0 z-40 w-52 h-screen transition-transform -translate-x-full sm:translate-x-0"
      aria-label="Sidebar"
    >
      <div
        class="overflow-y-auto py-4 px-3 h-full bg-white border-r border-gray-200 dark:bg-gray-800 dark:border-gray-700"
      >
        <div class="text-center text-gray-500 dark:text-gray-400">
          <img
            class="mx-auto mb-4 w-36 h-36 rounded-full"
            src="/src/assets/apple-in-basket.png"
            alt="Micheal Avatar"
          />
          <h3 class="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
            <a href="#">{{ name }}님</a>
          </h3>
          <p class="font-light text-gray-500 dark:text-gray-400">{{ email }}</p>
          <a
            @click="logout"
            class="inline-flex items-center justify-center w-full py-2.5 px-5 my-5 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
          >
            <svg
              aria-hidden="true"
              class="mr-1 w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
              ></path>
            </svg>
            로그아웃
          </a>
        </div>
        <ul class="pt-5 mt-5 space-y-2 border-t border-gray-200 dark:border-gray-700">
          <li>
            <a
              href="/commerce/main"
              class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
            >
              <img class="w-10 h-10" src="../../../assets/main.png" />

              <span class="">메인으로 이동</span>
            </a>
          </li>
          <li>
            <a
              @click="cartlist"
              class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
            >
              <img class="w-10 h-10" src="../../../assets/cartlist.png" />
              <span class="">장바구니</span>
            </a>
          </li>
          <li>
            <a
              @click="history()"
              class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
            >
              <img class="w-10 h-10" src="../../../assets/delivery.png" />
              <span class="">주문확인/배송조회</span>
            </a>
          </li>

          <li>
            <a
              @click="account()"
              class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
            >
              <img class="w-10 h-10" src="../../../assets/myinfo.png" />
              <span class="">내 정보</span>
            </a>
          </li>
        </ul>
      </div>
    </aside>
  </div>
</template>

<script lang="ts">
import UserAthendicateService from "@/services/UserAthendicateService";
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters("auth", ["userInfoInterface"]),

    name() {
      if (this.userInfoInterface) {
        return this.userInfoInterface.name;
      }
    },
    email() {
      if (this.userInfoInterface) {
        return this.userInfoInterface.email;
      }
    },
  },

  methods: {
    logout() {
      UserAthendicateService.logout();
      this.$router.push("/commerce/main");
    },
    account() {
      this.$router.push("/my/account");
    },

    cartlist() {
      this.$router.push("/my/cartlist");
    },

    history() {
      this.$router.push("/my/order/history");
    },
  },
};
</script>
