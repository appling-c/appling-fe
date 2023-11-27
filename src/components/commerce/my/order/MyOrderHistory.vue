<template>
  <div>
    <div
      class="p-4 sm:p-10 mx-auto w-full border-b-2"
      v-for="order in orders.value"
      :key="order.order_id"
    >
      <div class="mx-4 grid grid-cols-4 gap-4">
        <div class="col-span-3">
          <h2
            class="mb-2 text-base font-semibold leading-none text-gray-900 md:text-2xl dark:text-white"
          >
            {{ moment(order?.created_at).format("YYYY.MM.DD HH:mm") }}
            <span class="block sm:hidden"><br /></span>
            <TheOrderStatusChip :status="order?.status" type="member" />
          </h2>
        </div>
        <div class="col-span-1 text-end">
          <a
            :href="`/my/order/history/detail/${order.order_id}`"
            class="inline-flex items-center font-medium text-primary-600 hover:text-primary-800 dark:text-primary-500 dark:hover:text-primary-700"
          >
            <span class="sm:block hidden"> 주문상세</span>
            <svg
              class="ml-1 w-6 h-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </a>
        </div>
      </div>
      <template v-for="product in order.order_item_list" :key="product.order_item_id">
        <the-order-product-card
          isShowButtonArea
          :productItem="product"
          :orderID="order.order_id"
          @orderCancel="orderCancel"
        />
      </template>
    </div>
    <div
      id="cryptoModal"
      tabindex="-1"
      aria-hidden="true"
      :class="modalOpen ? 'flex' : 'hidden'"
      class="overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"
    >
      <div class="relative p-4 w-full max-w-md max-h-full">
        <!-- Modal content -->
        <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
          <!-- Modal header -->
          <div
            class="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600"
          >
            <h3 class="text-lg font-semibold text-gray-900 dark:text-white">주문취소</h3>
            <button
              type="button"
              class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm h-8 w-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
              @click="modalClose"
            >
              <svg
                class="w-3 h-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 14"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                />
              </svg>
              <span class="sr-only">Close modal</span>
            </button>
          </div>
          <!-- Modal body -->
          <div class="p-4 md:p-5">
            <p class="text-sm font-normal text-gray-500 dark:text-gray-400">
              아래 상품을 모두 취소할까요? <br />
              개별 취소는 불가하며, 전체 취소후 재주문해주세요.
            </p>
            <ul class="my-4 space-y-3">
              <li v-for="(cancelItem, cindex) in cancelObject" :key="cindex">
                <a
                  class="flex items-center p-3 text-base font-bold text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white"
                >
                  <span class="flex-1 ms-3 whitespace-nowrap"
                    >{{ cancelItem.order_product.main_title }} {{ cancelItem.ea }}EA</span
                  >
                  <span
                    class="inline-flex items-center justify-center px-2 py-0.5 ms-3 text-xs font-medium text-gray-500 bg-gray-200 rounded dark:bg-gray-700 dark:text-gray-400"
                    >Popular</span
                  >
                </a>
              </li>
            </ul>
            <div
              class="flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600"
            >
              <button
                type="button"
                class="ms-3 text-white bg-red-500 hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-base px-5 py-2.5 text-center dark:bg-red-500 dark:hover:bg-red-600 dark:focus:ring-red-900"
              >
                주문취소
              </button>
              <button
                type="button"
                class="ms-3 text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-base font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
              >
                닫기
              </button>
            </div>
            <div>
              <a
                href="#"
                class="inline-flex items-center text-xs font-normal text-gray-500 hover:underline dark:text-gray-400"
              >
                <svg
                  class="w-3 h-3 me-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M7.529 7.988a2.502 2.502 0 0 1 5 .191A2.441 2.441 0 0 1 10 10.582V12m-.01 3.008H10M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                  />
                </svg>
                부분취소를 할 수 없나요??????????</a
              >
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Main modal -->
  </div>
</template>

<script setup lang="ts">
import OrderService from "@/services/OrderService";
import moment from "moment";
import { reactive, defineEmits, onMounted, ref, toRaw } from "vue";
import TheOrderProductCard from "./TheOrderProductCard.vue";
import TheOrderStatusChip from "./TheOrderStatusChip.vue";
import { Modal } from "flowbite";

const orderTotalCount = 20;

let modalOpen = ref(false);

let modal = null;

// set the modal menu element

let cancelObject = ref([]);

const emit = defineEmits(["renderTabTitle"]);
emit("renderTabTitle", "주문확인/배송조회");
let orders = reactive([]);

async function getRecentOrderListMember() {
  const reqestStr = `?search=&page=0&size=100`;
  await OrderService.getRecentOrderListMember(reqestStr).then((response) => {
    orders.value = response.data.data?.list;
  });
}

function orderCancel(orderID) {
  cancelObject.value = toRaw(
    orders.value.find((order) => order.order_id == orderID)?.order_item_list
  );
  console.log(cancelObject);
  modal.show();
}

function modalClose() {
  modal.hide();
}

onMounted(() => {
  const $targetEl = document.getElementById("cryptoModal");
  modal = new Modal($targetEl);
});

getRecentOrderListMember();
</script>

<style></style>
