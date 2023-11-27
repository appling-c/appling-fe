<template>
  <div class="p-4 mx-4 grid grid-cols-5 gap-4 border-b-2">
    <div class="col-span-1">
      <img
        class="md:h-40 sm:h-16 w-full rounded-lg object-scale-down"
        :src="productItem?.order_product?.main_image"
        alt="image description"
      />
    </div>
    <div class="col-span-4">
      <div class="grid grid-cols-4">
        <div class="col-span-3">
          <p class="mb-4 text-base font-extrabold leading-none text-gray-900 md:text-2xl">
            {{ productItem?.order_product?.main_title }}
          </p>

          <div class="sm:hidden sm:mx-4 grid grid-cols-3 gap-4">
            <div
              v-if="productItem?.order_product?.type == 'OPTION'"
              class="col-span-3 sm:col-span-1 sm:border-r-2 pr-2 w-max"
            >
              {{ productItem?.order_product?.option?.name }}
            </div>

            <div class="col-span-3 sm:col-span-1 sm:border-r-2 pr-2 w-max">
              {{ productItem.ea }}개
            </div>

            <div class="col-span-3 sm:col-span-1 w-max">
              {{ productItem.product_total_price?.toLocaleString() }}원
            </div>
          </div>

          <dl class="sm:flex hidden flex items-center space-x-6">
            <div>
              <dt class="mb-2 font-semibold leading-none text-gray-900">수량</dt>
              <dd class="mb-4 font-light text-slate-900 sm:mb-5">
                {{ productItem.ea }}
              </dd>
            </div>
            <div v-show="productItem?.order_product?.type == 'OPTION'">
              <dt class="mb-2 font-semibold leading-none text-gray-900">선택 옵션</dt>
              <dd class="mb-4 font-light text-slate-900 sm:mb-5">
                {{ productItem?.order_product?.option?.name }}
              </dd>
            </div>
            <div>
              <dt class="mb-2 font-semibold leading-none text-gray-900">가격</dt>
              <dd class="mb-4 font-light text-slate-900 sm:mb-5">
                {{ productItem?.product_total_price?.toLocaleString() }}원
              </dd>
            </div>
          </dl>
        </div>
        <div
          v-if="isShowButtonArea"
          class="col-span-1 hidden sm:grid grid-rows-2 items-center"
        >
          <!-- <button
						type="button"
						class="w-full text-gray-900 bg-white items-center border border-gray-200 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-base px-5 py-2.5 text-center hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200"
					>
						배송조회
					</button> -->
          <button
            type="button"
            class="w-full text-gray-900 bg-white items-center border border-gray-200 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-base px-5 py-2.5 text-center hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200"
          >
            재구매
          </button>
          <button
            @click="orderCancel"
            type="button"
            class="w-full items-center text-white bg-red-500 hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-base px-5 py-2.5 text-center dark:bg-red-500 dark:hover:bg-red-600 dark:focus:ring-red-900"
          >
            주문취소
          </button>
        </div>
      </div>
    </div>
    <div v-if="isShowButtonArea" class="col-span-5 flex sm:hidden items-center space-x-4">
      <!-- <button
				type="button"
				class="w-full text-gray-900 bg-white items-center border border-gray-200 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-base px-3 py-2.5 text-center hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200"
			>
				배송조회
			</button> -->
      <button
        type="button"
        class="w-full text-gray-900 bg-white items-center border border-gray-200 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-base px-3 py-2.5 text-center hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200"
      >
        재구매
      </button>
      <button
        @click="orderCancel"
        type="button"
        class="w-full items-center text-white bg-red-500 hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-base px-3 py-2.5 text-center dark:bg-red-500 dark:hover:bg-red-600 dark:focus:ring-red-900"
      >
        주문취소
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps, computed, defineEmits } from "vue";

const emit = defineEmits(["orderCancel"]);
const props = defineProps({
  isShowButtonArea: {
    type: Boolean,
    default: false,
  },
  productItem: {},
  orderID: {
    type: Number,
    required: false,
    default: 0,
  },
});

function orderCancel() {
  emit("orderCancel", props.orderID);
}
</script>
