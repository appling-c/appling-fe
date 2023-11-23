<template>
  <div class="p-10 mx-auto w-full">
    <div class="pb-10 mx-4 grid grid-cols-4 gap-4 mb-7 border-b border-gray-200">
      <div class="col-span-4">
        <h2
          class="mb-2 text-xl font-semibold leading-none text-gray-900 md:text-2xl dark:text-white"
        >
          <span>주문정보</span>
        </h2>
      </div>
      <div class="col-span-1">주문번호</div>
      <div class="col-span-3">32100019973292</div>
      <div class="col-span-1">주문일</div>
      <div class="col-span-3">2023.11.19</div>
      <div class="col-span-1">주문 상태</div>
      <!-- <div class="col-span-3">
        <the-order-status-chip color="blue" />
      </div> -->
    </div>

    <div class="pb-10 mx-4 grid grid-cols-4 gap-4 mb-7 border-b border-gray-200">
      <div class="col-span-4">
        <h2
          class="mb-2 text-xl font-semibold leading-none text-gray-900 md:text-2xl dark:text-white"
        >
          <span>상품정보</span>
        </h2>
      </div>

      <div
        class="col-span-4"
        v-for="product in orders.order_item_list"
        :key="product.order_item_id"
      >
        {{ product.order_item_id }}
        <the-order-product-card showButtonArea :productItem="product" />
      </div>

      <!-- <div
        class="col-span-4"
        v-for="(product, index) in orders.value.order_item_list"
        :key="index"
      >
        {{ order }}
         <the-order-product-card :productItem="order.order_product" />
        <the-order-product-card /> 
      </div> -->
    </div>

    <div class="pb-10 p-2 mx-4 grid grid-cols-4 gap-4 mb-7 border-b border-gray-200">
      <div class="col-span-4">
        <h2
          class="mb-2 text-xl font-semibold leading-none text-gray-900 md:text-2xl dark:text-white"
        >
          <span>배송지 정보</span>
        </h2>
      </div>
      <div class="col-span-1">받는사람</div>
      <div class="col-span-3">한솔주공505</div>

      <div class="col-span-1">연락처</div>
      <div class="col-span-3">010-1231-1231</div>

      <div class="col-span-1">받는주소</div>
      <div class="col-span-3">
        (12384) 경기도 성남시 분당구 정자동 177 드람맘맘마 에스파
      </div>
    </div>

    <div class="pb-10 mx-4 grid grid-cols-4 gap-4 mb-7 border-b border-gray-200">
      <div class="col-span-4">
        <h2
          class="mb-2 text-xl font-semibold leading-none text-gray-900 md:text-2xl dark:text-white"
        >
          <span>주문 금액</span>
        </h2>
      </div>
      <div class="col-span-1">상품금액</div>
      <div class="col-span-3">18,6000원</div>

      <div class="col-span-1">할인금액</div>
      <div class="col-span-3">4,000원</div>

      <div class="col-span-1">배송비</div>
      <div class="col-span-3">0원</div>

      <div class="col-span-1">총 결제금액</div>
      <div class="col-span-3">14,600원</div>
    </div>

    <div class="pb-10 mx-4 grid grid-cols-4 gap-4 mb-7 border-b border-gray-200">
      <div class="col-span-4">
        <h2
          class="mb-2 text-xl font-semibold leading-none text-gray-900 md:text-2xl dark:text-white"
        >
          <span>상품처</span>
        </h2>
      </div>
      <div class="col-span-1">자연햇살농원</div>
      <div class="col-span-3">강원도 평창군 내맘은 덤더러덤더러덤덤덤</div>

      <div class="col-span-1">연락처</div>
      <div class="col-span-3">010-2332-1234</div>

      <div class="col-span-1">계좌번호</div>
      <div class="col-span-3">카카오뱅크 101-1234-333333</div>

      <div class="col-span-1"></div>
      <div class="col-span-3">* 판매자에게 직접 연락하시면 빠른 확인이 가능합니다.</div>
    </div>

    <div class="pb-10 mx-4 grid grid-cols-4 gap-4">
      <div class="col-span-4">
        <h2
          class="mb-2 text-xl font-semibold leading-none text-gray-900 md:text-2xl dark:text-white"
        >
          <span>배송상품 주문상태 안내</span>
        </h2>
      </div>
      <div class="col-span-4">
        <ol
          class="flex items-center w-full p-3 space-x-2 text-sm font-medium text-center text-gray-500 bg-white border border-gray-200 rounded-lg shadow-sm dark:text-gray-400 sm:text-base dark:bg-gray-800 dark:border-gray-700 sm:p-4 sm:space-x-4 rtl:space-x-reverse"
        >
          <li class="flex items-center text-blue-600 dark:text-blue-500">
            <span
              class="flex items-center justify-center w-5 h-5 me-2 text-xs border border-blue-600 rounded-full shrink-0 dark:border-blue-500"
            >
              1
            </span>
            주문완료 <span class="hidden sm:inline-flex sm:ms-2">Info</span>
            <svg
              class="w-3 h-3 ms-2 sm:ms-4 rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 12 10"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m7 9 4-4-4-4M1 9l4-4-4-4"
              />
            </svg>
          </li>
          <li class="flex items-center">
            <span
              class="flex items-center justify-center w-5 h-5 me-2 text-xs border border-gray-500 rounded-full shrink-0 dark:border-gray-400"
            >
              2
            </span>
            상품준비 <span class="hidden sm:inline-flex sm:ms-2">Info</span>
            <svg
              class="w-3 h-3 ms-2 sm:ms-4 rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 12 10"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m7 9 4-4-4-4M1 9l4-4-4-4"
              />
            </svg>
          </li>
          <li class="flex items-center">
            <span
              class="flex items-center justify-center w-5 h-5 me-2 text-xs border border-gray-500 rounded-full shrink-0 dark:border-gray-400"
            >
              3
            </span>
            배송완료
          </li>
        </ol>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import OrderService from "@/services/OrderService";
import TheOrderStatusChip from "./TheOrderStatusChip.vue";
import moment from "moment";
import { reactive, onMounted } from "vue";
import TheOrderProductCard from "./TheOrderProductCard.vue";
import { useRoute } from "vue-router";

export default {
  components: {
    TheOrderProductCard,
  },
  data() {
    return {
      order_id: 0,
      orders: [],
    };
  },
  methods: {
    async getRecentOrderMemberDetail() {
      await OrderService.getRecentOrderListMemberDetail(this.order_id).then(
        (response) => {
          this.orders = response.data.data;
        }
      );
    },
  },
  async created() {
    this.order_id = this.$route.params.id;
    console.log(this.order_id);
    await this.getRecentOrderMemberDetail();
  },
};
</script>

<style></style>
