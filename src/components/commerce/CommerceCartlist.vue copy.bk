<template>
  <!-- Blog Article -->
  <!-- Features -->
  <div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
    <!-- Grid -->
    <div class="md:grid md:grid-cols-2 md:items-center md:gap-12 xl:gap-32">
      <div>
        <table class="rounded-xl">
          <caption>
            주문 내역
          </caption>
          <thead>
            <tr>
              <th scope="col">상품명</th>
              <th scope="col">수량</th>
              <th scope="col">가격</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(invent, index) in inventoryList" :key="index">
              <td data-label="Due Date">{{ invent.productName }}</td>
              <td data-label="Account">
                <select
                  class="
                    py-3
                    px-4
                    pr-9
                    block
                    w-full
                    border-gray-200
                    rounded-md
                    text-sm
                    focus:border-blue-500 focus:ring-blue-500
                    dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400
                    sm:p-4
                  "
                  v-model="invent.count"
                >
                  <option selected>수량</option>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                </select>
              </td>
              <td data-label="Period">{{ invent.price }}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <!-- End Col -->

      <div class="mt-5 sm:mt-10 lg:mt-0">
        <div class="space-y-6 sm:space-y-8">
          <!-- Title -->
          <div class="space-y-2 md:space-y-4">
            <h2 class="font-bold text-3xl lg:text-4xl text-gray-800 dark:text-gray-200">배송정보 입력하기</h2>
            <template v-if="!isLogin">
              <p class="text-gray-500">애플링 회원 가입/로그인 후 주문할 수 있어요.</p>
              <button
                type="button"
                class="
                  w-full
                  py-3
                  px-4
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
                  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600
                  transition-all
                  text-sm
                  dark:bg-slate-900 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800
                "
              >
                로그인
              </button>
            </template>
            <template v-else>
              <p class="text-gray-500">운송장에 사용할 주문인, 수령인 정보를 선택해주세요.</p>

              <h6>주문자 정보</h6>

              <TheUserAddressForm @update-user-address-form="(data) => (this.orderInfo = data)" />

              <h6>수령인 정보</h6>

              <TheUserAddressForm @update-user-address-form="(data) => (this.deiveryInfo = data)" />

              <button
                @click="setOrder()"
                type="button"
                class="
                  w-full
                  py-3
                  px-4
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
                  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600
                  transition-all
                  text-sm
                  dark:bg-slate-900 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800
                "
              >
                주문하기
              </button>
            </template>
          </div>
          <!-- End Title -->

          <!-- List -->
          <ul role="list" class="space-y-2 sm:space-y-4">
            <li class="flex space-x-3">
              <!-- Solid Check -->
              <svg
                class="flex-shrink-0 h-6 w-6 text-blue-600 dark:text-blue-500"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15.1965 7.85999C15.1965 3.71785 11.8387 0.359985 7.69653 0.359985C3.5544 0.359985 0.196533 3.71785 0.196533 7.85999C0.196533 12.0021 3.5544 15.36 7.69653 15.36C11.8387 15.36 15.1965 12.0021 15.1965 7.85999Z"
                  fill="currentColor"
                  fill-opacity="0.1"
                />
                <path
                  d="M10.9295 4.88618C11.1083 4.67577 11.4238 4.65019 11.6343 4.82904C11.8446 5.00788 11.8702 5.32343 11.6914 5.53383L7.44139 10.5338C7.25974 10.7475 6.93787 10.77 6.72825 10.5837L4.47825 8.5837C4.27186 8.40024 4.25327 8.0842 4.43673 7.87781C4.62019 7.67142 4.93622 7.65283 5.14261 7.83629L7.01053 9.49669L10.9295 4.88618Z"
                  fill="currentColor"
                />
              </svg>
              <!-- End Solid Check -->

              <span class="text-sm sm:text-base text-gray-500"> <span class="font-bold">Easy & fast</span> designing </span>
            </li>

            <li class="flex space-x-3">
              <!-- Solid Check -->
              <svg
                class="flex-shrink-0 h-6 w-6 text-blue-600 dark:text-blue-500"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15.1965 7.85999C15.1965 3.71785 11.8387 0.359985 7.69653 0.359985C3.5544 0.359985 0.196533 3.71785 0.196533 7.85999C0.196533 12.0021 3.5544 15.36 7.69653 15.36C11.8387 15.36 15.1965 12.0021 15.1965 7.85999Z"
                  fill="currentColor"
                  fill-opacity="0.1"
                />
                <path
                  d="M10.9295 4.88618C11.1083 4.67577 11.4238 4.65019 11.6343 4.82904C11.8446 5.00788 11.8702 5.32343 11.6914 5.53383L7.44139 10.5338C7.25974 10.7475 6.93787 10.77 6.72825 10.5837L4.47825 8.5837C4.27186 8.40024 4.25327 8.0842 4.43673 7.87781C4.62019 7.67142 4.93622 7.65283 5.14261 7.83629L7.01053 9.49669L10.9295 4.88618Z"
                  fill="currentColor"
                />
              </svg>
              <!-- End Solid Check -->

              <span class="text-sm sm:text-base text-gray-500"> Powerful <span class="font-bold">features</span> </span>
            </li>

            <li class="flex space-x-3">
              <!-- Solid Check -->
              <svg
                class="flex-shrink-0 h-6 w-6 text-blue-600 dark:text-blue-500"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15.1965 7.85999C15.1965 3.71785 11.8387 0.359985 7.69653 0.359985C3.5544 0.359985 0.196533 3.71785 0.196533 7.85999C0.196533 12.0021 3.5544 15.36 7.69653 15.36C11.8387 15.36 15.1965 12.0021 15.1965 7.85999Z"
                  fill="currentColor"
                  fill-opacity="0.1"
                />
                <path
                  d="M10.9295 4.88618C11.1083 4.67577 11.4238 4.65019 11.6343 4.82904C11.8446 5.00788 11.8702 5.32343 11.6914 5.53383L7.44139 10.5338C7.25974 10.7475 6.93787 10.77 6.72825 10.5837L4.47825 8.5837C4.27186 8.40024 4.25327 8.0842 4.43673 7.87781C4.62019 7.67142 4.93622 7.65283 5.14261 7.83629L7.01053 9.49669L10.9295 4.88618Z"
                  fill="currentColor"
                />
              </svg>
              <!-- End Solid Check -->

              <span class="text-sm sm:text-base text-gray-500"> User Experience Design </span>
            </li>
          </ul>
          <!-- End List -->
        </div>
      </div>
      <!-- End Col -->
    </div>
    <!-- End Grid -->
  </div>
  <!-- End Blog Article -->
</template>

<script lang="ts">
import { mapGetters } from "vuex";
import TheUserAddressForm from "./common/TheUserAddressForm.vue";

export default {
  components: {
    TheUserAddressForm,
  },
  computed: {
    ...mapGetters("cart", ["inventory"]),
    ...mapGetters("auth", ["userInfoInterface"]),
  },
  data() {
    return {
      inventoryList: [],
      isLogin: false,
      orderInfo: {},
      deiveryInfo: {},
    };
  },
  methods: {
    setOrder() {
      console.log(this.inventory, this.orderInfo, this.deiveryInfo);
    },
  },
  mounted() {
    this.inventoryList = this.inventory;
    if (Object.keys(this.userInfoInterface).length == 0) {
      this.isLogin = false;
    } else {
      this.isLogin = true;
    }
  },
};
</script>

<style scoped>
table {
  border: 1px solid #ccc;
  border-collapse: collapse;
  margin: 0;
  padding: 0;
  width: 100%;
  table-layout: fixed;
}

table caption {
  font-size: 1.5em;
  margin: 0.5em 0 0.75em;
}

table tr {
  background-color: #f8f8f8;
  border: 1px solid #ddd;
  padding: 0.35em;
}

table th,
table td {
  padding: 0.625em;
  text-align: center;
}

table th {
  font-size: 0.85em;
  letter-spacing: 0.1em;
  text-transform: uppercase;
}

@media screen and (max-width: 600px) {
  table {
    border: 0;
  }

  table caption {
    font-size: 1.3em;
  }

  table thead {
    border: none;
    clip: rect(0 0 0 0);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    width: 1px;
  }

  table tr {
    border-bottom: 3px solid #ddd;
    display: block;
    margin-bottom: 0.625em;
  }

  table td {
    border-bottom: 1px solid #ddd;
    display: block;
    font-size: 0.8em;
    text-align: right;
  }

  table td::before {
    /*
    * aria-label has no advantage, it won't be read inside a table
    content: attr(aria-label);
    */
    content: attr(data-label);
    float: left;
    font-weight: bold;
    text-transform: uppercase;
  }

  table td:last-child {
    border-bottom: 0;
  }
}
</style>
