<template>
  <div>
    <div>
      <header class=" ">
        <h1 class="block text-2xl font-bold text-slate-800 sm:text-3xl dark:text-white">
          📦 주문 관리
        </h1>
        <p class="mt-2 text-lg text-slate-800 dark:text-slate-600">
          고객이 주문한 내역을 확인하고 처리하는 페이지 입니다.
        </p>

        <div class="mt-5 flex flex-col items-center gap-2 sm:flex-row sm:gap-3">
          <router-link
            to="/admin/order/calendar"
            class="w-full sm:w-auto inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold text-blue-500 hover:text-blue-700 focus:outline-none focus:ring-2 ring-offset-gray-50 focus:ring-blue-500 focus:ring-offset-2 transition-all text-base py-3 px-4 dark:ring-offset-slate-900"
          >
            <svg
              class="w-2.5 h-2.5"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
            >
              <path
                d="M11.2792 1.64001L5.63273 7.28646C5.43747 7.48172 5.43747 7.79831 5.63273 7.99357L11.2792 13.64"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
              ></path>
            </svg>
            달력으로 보기🗓️
          </router-link>
        </div>
      </header>
    </div>
    <div class="relative bg-white shadow-md dark:bg-gray-800 sm:rounded-lg">
      <div
        class="flex flex-col items-start justify-between p-4 space-y-3 dark:bg-gray-800 md:flex-row md:items-center md:space-y-0 md:space-x-4"
      >
        <div class="flex items-center">
          <h5 class="mr-3 font-semibold dark:text-white">총 {{ orderTotalCount }} 건</h5>
        </div>
        <div
          class="flex flex-row items-center justify-end flex-shrink-0 w-auto space-x-3"
        >
          <button
            @click="getRecentOrderList()"
            type="button"
            class="flex items-center justify-center flex-shrink-0 px-4 py-2 text-base font-medium text-slate-900 bg-white border border-gray-200 rounded-lg focus:outline-none hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-slate-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-4 h-4 mr-2 text-slate-400"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z"
              />
            </svg>
            새로고침
          </button>
        </div>
      </div>
      <div class="mx-4 border-t dark:mx-0 dark:border-gray-700 dark:bg-gray-800"></div>
      <div
        class="flex flex-col items-center justify-between px-4 pb-4 space-y-3 md:pb-0 md:mt-4 dark:bg-gray-800 md:flex-row md:space-y-0 md:space-x-4"
      >
        <ul
          class="flex-wrap hidden text-base font-medium text-center text-slate-500 md:flex dark:text-slate-400"
        >
          <li class="mb-4 mr-2 lg:mr-4">
            <a
              @click="setSearchStatus('')"
              :class="
                status === '' ? 'bg-blue-600 text-white' : 'bg-primary-600 text-slate'
              "
              class="inline-block px-4 py-2 border rounded-full hover:text-slate-900 hover:bg-gray-100"
            >
              전체
            </a>
          </li>
          <li
            class="mb-4 mr-2 lg:mr-4"
            v-for="statusDP in orderSellerStatus"
            :key="statusDP"
          >
            <a
              @click="
                setSearchStatus(
                  Object.keys(orderSellerStatus).find(
                    (key) => orderSellerStatus[key] === statusDP
                  )
                )
              "
              :class="
                status ==
                Object.keys(orderSellerStatus).find(
                  (key) => orderSellerStatus[key] === statusDP
                )
                  ? 'bg-blue-600 text-white hover:bg-blue-600'
                  : 'bg-primary-600 text-slate'
              "
              class="inline-block px-4 py-2 border rounded-full hover:text-slate-900 hover:bg-gray-100"
            >
              {{ statusDP }}
            </a>
          </li>
        </ul>

        <div class="flex items-center w-full space-x-4 md:w-auto">
          <select
            id="list-navigation"
            class="block w-full p-2 text-base text-slate-900 border border-gray-300 rounded-lg md:hidden bg-gray-50 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
            @change="setSearchStatus($event.target.value)"
          >
            <option value="">전체</option>
            <option
              v-for="statusDP in orderSellerStatus"
              :key="statusDP"
              :value="
                Object.keys(orderSellerStatus).find(
                  (key) => orderSellerStatus[key] === statusDP
                )
              "
            >
              {{ statusDP }}
            </option>
          </select>
        </div>
      </div>
    </div>

    <div class="mt-6 bg-white rounded-xl shadow p-4 sm:p-7 dark:bg-slate-900">
      <div class="container">
        <div class="flex flex-col">
          <div class="-m-1.5 overflow-x-auto">
            <div class="p-1.5 min-w-full inline-block align-middle">
              <div
                class="sm:hidden grid grid-cols-4 border-b px-2 py-4 mx-4 text-base font-medium text-slate-500"
                v-for="order in orders.value"
                :key="order.order_id"
              >
                <div class="col-span-3">
                  <TheOrderStatusChip :status="order?.status" type="seller" />

                  {{ order.order_name }} /
                  {{ setOrderTotalPrice(order?.order_item_list) }}원
                </div>

                <div class="col-span-1 text-right">
                  <a
                    @click="orderDetail(order.order_id)"
                    class="text-blue-500 hover:text-blue-700"
                  >
                    ></a
                  >
                </div>
              </div>
              <div class="sm:block hidden overflow-hidden">
                <table class="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                  <thead class="">
                    <tr>
                      <th
                        scope="col"
                        class="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase"
                      >
                        주문번호
                      </th>
                      <th
                        scope="col"
                        class="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase"
                      >
                        주문일자
                      </th>
                      <th
                        scope="col"
                        class="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase"
                      >
                        주문상품
                      </th>

                      <th
                        scope="col"
                        class="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase"
                      >
                        주문금액
                      </th>

                      <th
                        scope="col"
                        class="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase"
                      >
                        주문상태
                      </th>

                      <th
                        scope="col"
                        class="px-6 py-3 text-right text-xs font-medium text-slate-500 uppercase"
                      >
                        배송지정보
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <!--full-->
                    <tr class="" v-for="order in orders.value" :key="order.order_id">
                      <td
                        class="px-6 py-4 whitespace-nowrap text-base font-medium text-slate-800 dark:text-slate-200"
                      >
                        #{{ order.order_number }}
                      </td>
                      <td
                        class="px-6 py-4 whitespace-nowrap text-base text-slate-800 dark:text-slate-200"
                      >
                        {{ moment(order.created_at).format("YYYY.MM.DD HH:mm") }}
                      </td>
                      <td
                        class="px-6 py-4 whitespace-nowrap text-base text-slate-800 dark:text-slate-200"
                      >
                        {{ order.order_name }}
                      </td>

                      <td
                        class="px-6 py-4 whitespace-nowrap text-base text-slate-800 dark:text-slate-200"
                      >
                        {{ setOrderTotalPrice(order?.order_item_list) }}원
                      </td>
                      <td
                        class="px-6 py-4 whitespace-nowrap text-base text-slate-800 dark:text-slate-200"
                      >
                        <TheOrderStatusChip :status="order?.status" type="seller" />
                      </td>
                      <td
                        class="px-6 py-4 whitespace-nowrap text-right text-base font-medium"
                      >
                        <a
                          @click="orderDetail(order.order_id)"
                          class="text-blue-500 hover:text-blue-700"
                        >
                          상세보기</a
                        >
                      </td>
                    </tr>
                    <!-- <tr v-if="orderTotalCount == 0">
                      <td>
                        <TheNodataTemplate message="주문 내역이 " />
                      </td>
                    </tr> -->
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import OrderService from "@/services/OrderService";
import moment from "moment";
import { computed, reactive, defineEmits, ref } from "vue";
import { mapActions, useStore } from "vuex";
import TheOrderStatusChip from "../../commerce/my/order/TheOrderStatusChip.vue";
import router from "../../../plugins/router";
import TheNodataTemplate from "../../TheNodataTemplate.vue";
import { orderSellerStatus } from "@/types/order";

let orderTotalCount = ref(0);

let orders = reactive([]);

const store = useStore();

let status = "";

const updateSpinnerStatus = () => store.getters["cart/updateSpinnerStatus"];

async function getRecentOrderList() {
  let reqestStr = `?search=&page=0&size=10`;
  if (status !== "") {
    status = status.toLowerCase();
    reqestStr += `&status=${status}`;
  }
  await OrderService.getRecentOrderList(reqestStr).then((response) => {
    orders.value = response.data.data?.list;

    orderTotalCount = response.data.data.total_elements;
    updateSpinnerStatus(false);
  });
}

function setSearchStatus(key) {
  status = key;
  getRecentOrderList();
}

function setOrderTotalPrice(orderItemList) {
  let totalPrice = 0;
  orderItemList.forEach((item) => {
    totalPrice += item?.product_total_price;
  });
  return totalPrice.toLocaleString();
}

function orderDetail(orderID) {
  router.push("/admin/order/history/detail/" + orderID);
}

getRecentOrderList();
</script>
