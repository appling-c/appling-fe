<template>
  <div class="p-10 mx-auto w-full">
    <div class="mx-4 grid grid-cols-4 gap-4">
      <div class="col-span-3">
        <h2
          class="mb-2 text-xl font-semibold leading-none text-gray-900 md:text-2xl dark:text-white"
        >
          2023.11.19
          <span
            class="bg-blue-100 text-blue-800 text-base font-semibold me-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300"
            >주문완료</span
          >
          <!-- <span
            class="bg-green-100 text-green-800 text-base font-semibold me-2 px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300"
            >배송중</span
          >
          <span
            class="bg-yellow-100 text-yellow-800 text-base font-semibold me-2 px-2.5 py-0.5 rounded dark:bg-yellow-900 dark:text-yellow-300"
            >배송완료</span
          >
          <span
            class="bg-pink-100 text-pink-800 text-base font-semibold me-2 px-2.5 py-0.5 rounded dark:bg-pink-900 dark:text-pink-300"
            >취소완료</span
          > -->
        </h2>
      </div>
      <div class="text-end">
        <a
          href="#"
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

    <div class="mx-4 grid grid-cols-4 gap-4">
      <div class="">
        <img
          class="h-auto w-full rounded-lg"
          src="https://appling-s3-bucket.s3.ap-northeast-2.amazonaws.com/image/2/20231026/105017_0.png"
          alt="image description"
        />
      </div>

      <div class="col-span-3">
        <p
          class="mb-4 text-xl font-extrabold leading-none text-gray-900 md:text-2xl dark:text-white"
        >
          티피링크 미니 스마트 Wi-Fi 플러그 P100
        </p>

        <dl class="flex items-center space-x-6">
          <div>
            <dt class="mb-2 font-semibold leading-none text-gray-900 dark:text-white">
              수량
            </dt>
            <dd class="mb-4 font-light text-slate-900 sm:mb-5 dark:text-gray-400">4</dd>
          </div>
          <div>
            <dt class="mb-2 font-semibold leading-none text-gray-900 dark:text-white">
              선택 옵션
            </dt>
            <dd class="mb-4 font-light text-slate-900 sm:mb-5 dark:text-gray-400">
              12kg
            </dd>
          </div>
          <div>
            <dt class="mb-2 font-semibold leading-none text-gray-900 dark:text-white">
              가격
            </dt>
            <dd class="mb-4 font-light text-slate-900 sm:mb-5 dark:text-gray-400">
              183,000원
            </dd>
          </div>
        </dl>
        <div class="flex items-center space-x-4">
          <button
            type="button"
            class="text-gray-900 bg-white inline-flex items-center border border-gray-200 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200"
          >
            배송조회
          </button>
          <button
            type="button"
            class="text-gray-900 bg-white inline-flex items-center border border-gray-200 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200"
          >
            장바구니 담기
          </button>
          <button
            type="button"
            class="inline-flex items-center text-white bg-red-600 hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-red-500 dark:hover:bg-red-600 dark:focus:ring-red-900"
          >
            주문취소
          </button>
        </div>
      </div>
    </div>
  </div>
</template>


<script setup lang="ts">
import OrderService from "@/services/OrderService";
import moment from "moment";
import { reactive } from "vue";

const orderTotalCount = 20;

let orders = reactive([]);

async function getRecentOrderListMember() {
  const reqestStr = `?search=&page=0&size=5&status=complete`;
  await OrderService.getRecentOrderListMember(reqestStr).then((response) => {
    orders.value = response.data.data?.list;
    console.log(orders);
  });
}

getRecentOrderListMember();
</script>

<style></style>
