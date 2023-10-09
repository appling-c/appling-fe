<template>
  <!-- Sidebar -->
  <div
    class="lg:col-span-1 lg:w-full lg:h-full lg:bg-gradient-to-r lg:from-gray-50 lg:via-transparent lg:to-transparent dark:from-slate-800"
  >
    <div class="sticky top-0 left-0 py-8 lg:pl-4 lg:pl-8">
      <!-- Avatar Media -->
      <p
        class="text-xl font-extrabold leading-none tracking-tight text-gray-900 md:text-xl lg:text-xl"
      >
        가격 정보 🧾
      </p>
      <div
        class="group flex items-center gap-x-3 border-b border-gray-200 pb-8 mb-8 dark:border-gray-700"
      >
        <ul class="space-y-3 text-sm">
          <li class="flex space-x-3">
            <svg
              class="flex-shrink-0 h-6 w-6 text-blue-600"
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
            <span class="text-gray-800 dark:text-gray-400">
              애플링 판매가 : {{ productDetailItem?.origin_price?.toLocaleString() }}원
            </span>
          </li>

          <li class="flex space-x-3">
            <svg
              class="flex-shrink-0 h-6 w-6 text-blue-600"
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
            <span class="text-gray-800 dark:text-gray-400">
              애플링 회원가 : {{ productDetailItem?.price?.toLocaleString() }}원
            </span>
          </li>

          <li class="flex space-x-3">
            <svg
              class="flex-shrink-0 h-6 w-6 text-blue-600"
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
            <span class="text-gray-800 dark:text-gray-400">
              구매 가능 수량 : {{ productDetailItem?.ea?.toLocaleString() }} EA
            </span>
          </li>
        </ul>
      </div>

      <p
        class="text-xl font-extrabold leading-none tracking-tight text-gray-900 md:text-xl lg:text-xl"
      >
        최저가 계산기로 계산해보세요! 🧾
      </p>

      <div
        class="group flex items-center gap-x-3 border-b border-gray-200 pb-8 mb-8 dark:border-gray-700"
      >
        <a class="group grow block">
          <div>
            <div class="flex rounded-md shadow-sm"></div>
            <div>
              <ul class="max-w-md divide-y divide-gray-200 dark:divide-gray-700">
                <li class="pb-3 sm:pb-4 flex items-center">
                  <div class="flex items-center space-x-4">
                    <div class="flex-1 min-w-0">
                      <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                        단일상품
                      </p>
                    </div>
                  </div>
                  <div
                    class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white"
                    style="justify-content: flex-end"
                  >
                    <button
                      @click="minusProductCount()"
                      type="button"
                      class="inline-flex flex-shrink-0 justify-center items-center h-[2.875rem] w-[2.875rem] rounded-l-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:z-10 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all text-sm"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="w-6 h-6"
                      >
                        <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 12h-15" />
                      </svg>
                    </button>
                    <input
                      type="text"
                      :value="productCount"
                      readonly
                      style="width: 13%"
                      class="w-full py-3 block border-gray-200 shadow-sm rounded-0 text-sm focus:z-10"
                    />
                    <button
                      @click="plusProductCount()"
                      type="button"
                      class="inline-flex flex-shrink-0 justify-center items-center h-[2.875rem] w-[2.875rem] rounded-r-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:z-10 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all text-sm"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="w-6 h-6"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M12 4.5v15m7.5-7.5h-15"
                        />
                      </svg>
                    </button>
                  </div>
                </li>
                <li class="pb-3 sm:pb-4">
                  <div class="flex items-center space-x-4">
                    <div class="flex-1 min-w-0">
                      <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                        총 상품금액
                      </p>
                    </div>
                    <div
                      class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white"
                    >
                      {{ productPrice?.toLocaleString() }} 원
                    </div>
                  </div>
                </li>
              </ul>

              <button
                type="button"
                @click="buyProduct()"
                :disabled="productDetailItem?.ea == 0"
                :class="productDetailItem?.ea == 0 ? 'cursor-not-allowed' : ''"
                class="w-full py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm dark:bg-slate-900 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800"
              >
                <svg
                  class="w-3.5 h-3.5"
                  xmlns="http://www.w3.org/2000/svg"
                  width="10"
                  height="10"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M5.071 1.243a.5.5 0 0 1 .858.514L3.383 6h9.234L10.07 1.757a.5.5 0 1 1 .858-.514L13.783 6H15.5a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5H15v5a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V9H.5a.5.5 0 0 1-.5-.5v-2A.5.5 0 0 1 .5 6h1.717L5.07 1.243zM3.5 10.5a.5.5 0 1 0-1 0v3a.5.5 0 0 0 1 0v-3zm2.5 0a.5.5 0 1 0-1 0v3a.5.5 0 0 0 1 0v-3zm2.5 0a.5.5 0 1 0-1 0v3a.5.5 0 0 0 1 0v-3zm2.5 0a.5.5 0 1 0-1 0v3a.5.5 0 0 0 1 0v-3zm2.5 0a.5.5 0 1 0-1 0v3a.5.5 0 0 0 1 0v-3z"
                  />
                </svg>
                장바구니 담기
              </button>
            </div>
          </div>
        </a>
      </div>
      <!-- End Avatar Media -->

      <!-- Avatar Media -->
      <p
        class="text-xl font-extrabold leading-none tracking-tight text-gray-900 md:text-xl lg:text-xl"
      >
        판매자 정보 🧑‍🌾
      </p>
      <div class="group flex items-center gap-x-3 border-gray-200 pb-8 mb-8 dark:border-gray-700">
        <a class="group grow block">
          <h5
            class="group-hover:text-gray-600 text-sm font-semibold text-gray-800 dark:group-hover:text-gray-400 dark:text-gray-200"
          >
            {{ productDetailItem.seller?.company }}
          </h5>
          <p class="text-sm text-gray-500">
            {{ productDetailItem.seller?.address }}
          </p>
        </a>

        <div class="grow">
          <div class="flex justify-end">
            <button
              @click="movetoIntroduct(productDetailItem.seller?.seller_id)"
              type="button"
              class="py-1.5 px-2.5 inline-flex justify-center items-center gap-x-1.5 rounded-full border border-transparent font-semibold bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900 text-xs"
            >
              농장 구경가기
            </button>
          </div>
        </div>
      </div>

      <!-- End Avatar Media -->

      <div class="border-b border-gray-200 pb-8 mb-8" v-if="sellerProductList.length > 0">
        <p
          class="text-xl font-extrabold leading-none tracking-tight text-gray-900 md:text-xl lg:text-xl dark:text-white"
        >
          {{ productDetailItem.seller?.company }}에서 판매중인 상품 모음
        </p>
        <!-- Media -->
        <a
          @click="movetodetail(product.product_id)"
          v-for="(product, pIndex) in sellerProductList"
          :key="pIndex"
          class="group flex items-center gap-x-6"
        >
          <div class="grow">
            <span
              class="text-sm font-bold text-gray-800 group-hover:text-blue-600 dark:text-gray-200 dark:group-hover:text-blue-500"
            >
              {{ product?.main_title }}
            </span>
          </div>

          <div class="flex-shrink-0 relative rounded-lg overflow-hidden w-20 h-20">
            <img
              class="w-full h-full absolute top-0 left-0 object-cover rounded-lg"
              :src="product.main_image"
              alt="Image Description"
            />
          </div>
        </a>
        <!-- End Media -->
      </div>

      <div class="space-y-6" v-if="productListAll.length > 0">
        <p
          class="text-xl font-extrabold leading-none tracking-tight text-gray-900 md:text-xl lg:text-xl dark:text-white"
        >
          추천 상품 모음 🗂
        </p>
        <!-- Media -->
        <a
          v-for="pIndex in 6"
          @click="movetodetail(productListAll[pIndex].product_id)"
          :key="pIndex"
          class="group flex items-center gap-x-6"
        >
          <div class="grow">
            <span
              class="text-base font-bold text-gray-800 group-hover:text-blue-600 dark:text-gray-200 dark:group-hover:text-blue-500"
            >
              {{ productListAll[pIndex]?.main_title }}
            </span>

            <p>
              <span class="text-orange-600 font-medium">
                {{ productListAll[pIndex].price.toLocaleString() }}원</span
              >
            </p>
          </div>

          <div class="flex-shrink-0 relative rounded-lg overflow-hidden w-20 h-20">
            <img
              class="w-full h-full absolute top-0 left-0 object-cover rounded-lg"
              :src="productListAll[pIndex].main_image"
              alt="Image Description"
            />
          </div>
        </a>
        <!-- End Media -->
      </div>
    </div>
  </div>
  <!-- End Sidebar -->
</template>

<script lang="ts">
import { mapActions } from "vuex";

export default {
  data() {
    return {
      productListAll: [],
      productCount: 0,
      productPrice: 0,
    };
  },
  props: {
    productDetailItem: {} as productDetailInterface,
    seller_id: String,
    sellerProductList: [],
  },
  methods: {
    buyProduct() {
      if (this.productCount > 0) {
        this.$emit("updateProductCount", this.productCount);
      }
    },
    movetoIntroduct(id) {
      return this.$router.push(`/brandshop/preview/${id}`);
    },
    ...mapActions("cart", ["addProductToCart", "getproductlist"]),

    /**
     * Increments the product count and updates the product price.
     *
     * @param {type} paramName - description of parameter
     * @return {type} description of return value
     */
    plusProductCount() {
      if (this.productCount >= this.productDetailItem?.ea) {
        this.productCount = this.productDetailItem.ea;
      } else {
        this.productCount++;
      }
      this.updateProductPrice();
    },

    /**
     * Decreases the product count by one and updates the product price.
     *
     * @param {type} none - This function does not take any parameters.
     * @return {type} undefined - This function does not return a value.
     */
    minusProductCount() {
      if (this.productCount <= 1) {
        this.productCount = 1;
      } else {
        this.productCount--;
      }
      this.updateProductPrice();
    },

    /**
     * Updates the product price based on the product count and price of the product detail item.
     */
    updateProductPrice() {
      this.productPrice = this.productCount * this.productDetailItem.price;
    },

    movetodetail(id: number) {
      return (location.href = `/commerce/detail/${id}`);
    },
  },
  mounted() {
    this.getproductlist().then((response) => {
      if (response.data.code !== "0000") {
        return (this.productListAll = []);
      }
      const { list } = response?.data.data;

      this.productListAll = list;
    });
  },
};
</script>
