<template>
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
      <the-order-product-card showButtonArea :productItem="product" />
    </template>
  </div>
</template>

<script setup lang="ts">
import OrderService from "@/services/OrderService";
import moment from "moment";
import { reactive, defineEmits } from "vue";
import TheOrderProductCard from "./TheOrderProductCard.vue";
import TheOrderStatusChip from "./TheOrderStatusChip.vue";
const orderTotalCount = 20;

const emit = defineEmits(["renderTabTitle"]);
emit("renderTabTitle", "주문확인/배송조회");
let orders = reactive([]);

async function getRecentOrderListMember() {
  const reqestStr = `?search=&page=0&size=5&status=complete`;
  await OrderService.getRecentOrderListMember(reqestStr).then((response) => {
    orders.value = response.data.data?.list;
  });
}

getRecentOrderListMember();
</script>

<style></style>
