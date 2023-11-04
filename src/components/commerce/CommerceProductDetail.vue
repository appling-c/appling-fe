<template>
  <!-- Blog Article -->
  <!-- Team -->
  <!-- Blog Article -->
  <div class="max-w-3xl px-4 pt-6 lg:pt-10 pb-12 sm:px-6 lg:px-8 mx-auto">
    <div class="max-w-2xl">
      <!-- Content -->
      <div class="space-y-5 md:space-y-8">
        <div class="space-y-3">
          <div class="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
            <h2 class="text-2xl font-bold md:text-4xl md:leading-tight dark:text-white">
              신선한 {{ productDetailItem?.main_title }} 구매해볼까요?
            </h2>
          </div>

          <blockquote class="mt-10 text-center p-4 sm:px-7">
            <p
              class="text-xl font-medium text-gray-800 md:text-2xl md:leading-normal xl:text-2xl xl:leading-normal dark:text-gray-200"
            >
              {{ productDetailItem?.main_title }} 구매에 궁금한 점이 있으세요?
            </p>
            <p class="text-lg text-gray-800 dark:text-gray-200">
              <a
                class="text-blue-600 decoration-2 hover:underline font-medium"
                href="#"
                >{{ productDetailItem?.seller?.company }}</a
              >에 문의해보세요.
            </p>
          </blockquote>

          <!-- <div class="inline-flex items-center mt-10 text-center p-4 sm:px-7">
            <ul class="flex flex-col sm:flex-row">
              <li
                v-for="option in optionList"
                :key="option.id"
                class="inline-flex items-center gap-x-2.5 py-3 px-4 text-sm font-medium bg-white border text-gray-800 -mt-px first:rounded-t-lg first:mt-0 last:rounded-b-lg sm:-ml-px sm:mt-0 sm:first:rounded-tr-none sm:first:rounded-bl-lg sm:last:rounded-bl-none sm:last:rounded-tr-lg dark:bg-gray-800 dark:border-gray-700 dark:text-white"
              >
                {{ option.name }} <br />
                ₩ {{ option.extra_price.toLocaleString() }}
              </li>
            </ul>
          </div> -->
        </div>

        <div
          class="mt-12 relative before:absolute before:inset-0 before:-z-[1] before:bg-[radial-gradient(closest-side,#cbd5e1,transparent)] dark:before:bg-[radial-gradient(closest-side,#334155,transparent)]"
        >
          <div
            :class="`grid gap-px sm:grid-cols-2 lg:grid-cols-${optionList.length} lg:items-center`"
          >
            <!-- Card -->
            <div
              v-for="option in optionList"
              :key="option.id"
              class="flex flex-col h-full text-center"
            >
              <div class="bg-white pt-8 pb-5 px-8 dark:bg-slate-900">
                <h4 class="font-medium text-lg text-gray-800 dark:text-gray-200">
                  {{ option.name }}
                </h4>
              </div>

              <div class="h-full bg-white lg:mt-px lg:py-5 px-8 dark:bg-slate-900">
                <span class="mt-7 font-bold text-3xl text-gray-800 dark:text-gray-200">
                  <span class="font-bold text-xl -mr-2">₩</span>
                  {{ option.extra_price.toLocaleString() }}
                </span>
              </div>

              <div
                class="bg-white flex justify-center lg:mt-px pt-7 px-8 dark:bg-slate-900"
              >
                <ul class="space-y-2.5 text-center text-sm">
                  <li class="text-gray-800 dark:text-gray-400">1BOX 10개</li>

                  <li class="text-gray-800 dark:text-gray-400">5kg</li>

                  <li class="text-gray-800 dark:text-gray-400">2~3일 소요</li>
                </ul>
              </div>

              <div class="bg-white py-8 px-8 dark:bg-slate-900">
                <a
                  @click="setTargetOption(option)"
                  class="inline-flex justify-center items-center gap-2 rounded-md border-2 border-blue-600 font-semibold text-blue-600 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm py-3 px-6 dark:text-blue-500 dark:border-blue-500 dark:hover:border-blue-700"
                >
                  선택
                </a>
              </div>
            </div>
            <!-- End Card -->
          </div>
        </div>

        <figure>
          <img
            class="w-full object-cover rounded-xl"
            :src="productDetailItem?.main_image"
            alt="Image Description"
          />
        </figure>

        <blockquote class="text-center p-4 sm:px-7">
          <p
            v-html="productDetailItem?.product_main_explanation"
            class="text-xl font-medium text-gray-800 md:text-2xl md:leading-normal xl:text-2xl xl:leading-normal dark:text-gray-200"
          ></p>
        </blockquote>

        <div class="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
          <h2
            class="text-2xl font-bold text-lg md:text-4xl md:leading-tight text-gray-800"
          >
            {{ productDetailItem?.main_title }}를 고를 때 고려할 점.
          </h2>

          <h4 class="text-lg font-bold text-gray-800 dark:text-gray-200">
            다음 설명을 고려하여 구매상품을 구성하세요.
          </h4>
        </div>

        <!-- Icon Blocks -->
        <div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
          <div class="grid sm:grid-cols-1 lg:grid-cols-2 items-center gap-12">
            <!-- Icon Block -->
            <div>
              <svg
                class="w-9 h-9 text-gray-800 dark:text-white"
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path
                  d="M11 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h6zM5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H5z"
                />
                <path d="M8 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
              </svg>
              <div
                class="bg-gradient-to-r from-gray-200 to-white/0 h-0.5 mt-6 dark:from-gray-700 dark:to-slate-900/0"
              >
                <div class="bg-gray-400 w-9 h-0.5"></div>
              </div>
              <div class="mt-5">
                <h3 class="text-lg font-semibold text-gray-800 dark:text-white">
                  보관방법 및 취급방법
                </h3>
                <p
                  v-html="productDetailItem?.product_sub_explanation"
                  class="mt-1 text-gray-600 dark:text-gray-400"
                ></p>
              </div>
            </div>
            <!-- End Icon Block -->

            <!-- Icon Block -->
            <div>
              <svg
                class="w-9 h-9 text-gray-800 dark:text-white"
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path
                  d="M9.465 10H12a2 2 0 1 1 0 4H9.465c.34-.588.535-1.271.535-2 0-.729-.195-1.412-.535-2z"
                />
                <path
                  d="M6 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 1a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm.535-10a3.975 3.975 0 0 1-.409-1H4a1 1 0 0 1 0-2h2.126c.091-.355.23-.69.41-1H4a2 2 0 1 0 0 4h2.535z"
                />
                <path d="M14 4a4 4 0 1 1-8 0 4 4 0 0 1 8 0z" />
              </svg>
              <div
                class="bg-gradient-to-r from-gray-200 to-white/0 h-0.5 mt-6 dark:from-gray-700 dark:to-slate-900/0"
              >
                <div class="bg-gray-400 w-9 h-0.5"></div>
              </div>
              <div class="mt-5">
                <h3 class="text-lg font-semibold text-gray-800 dark:text-white">
                  소비자 안전을 위한 주의사항
                </h3>
                <p
                  v-html="productDetailItem?.purchase_inquiry"
                  class="mt-1 text-gray-600 dark:text-gray-400"
                ></p>
              </div>
            </div>
            <!-- End Icon Block -->
          </div>
        </div>
        <!-- End Icon Blocks -->

        <!-- Icon Blocks -->
        <div class="px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto shadow-sm">
          <div class="grid sm:grid-cols-1 lg:grid-cols-3 items-center gap-12">
            <!-- Icon Block -->
            <div class="text-center">
              <div
                class="flex justify-center items-center w-12 h-12 bg-gray-50 border border-gray-200 rounded-full mx-auto dark:bg-gray-800 dark:border-gray-700"
              >
                <svg
                  class="w-5 h-5 text-gray-600 dark:text-gray-400"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M11 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h6zM5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H5z"
                  />
                  <path d="M8 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
                </svg>
              </div>
              <div class="mt-3">
                <h3 class="text-lg font-semibold text-gray-800 dark:text-white">
                  상품분류
                </h3>
                <p class="mt-1 text-gray-600 dark:text-gray-400">
                  {{ productDetailItem?.category?.name }}
                </p>
              </div>
            </div>
            <!-- End Icon Block -->

            <!-- Icon Block -->
            <div class="text-center">
              <div
                class="flex justify-center items-center w-12 h-12 bg-gray-50 border border-gray-200 rounded-full mx-auto dark:bg-gray-800 dark:border-gray-700"
              >
                <svg
                  class="w-5 h-5 text-gray-600 dark:text-gray-400"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M9.465 10H12a2 2 0 1 1 0 4H9.465c.34-.588.535-1.271.535-2 0-.729-.195-1.412-.535-2z"
                  />
                  <path
                    d="M6 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 1a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm.535-10a3.975 3.975 0 0 1-.409-1H4a1 1 0 0 1 0-2h2.126c.091-.355.23-.69.41-1H4a2 2 0 1 0 0 4h2.535z"
                  />
                  <path d="M14 4a4 4 0 1 1-8 0 4 4 0 0 1 8 0z" />
                </svg>
              </div>
              <div class="mt-3">
                <h3 class="text-lg font-semibold text-gray-800 dark:text-white">
                  원산지
                </h3>
                <p class="mt-1 text-gray-600 dark:text-gray-400">
                  {{ productDetailItem?.origin }}
                </p>
              </div>
            </div>
            <!-- End Icon Block -->

            <!-- Icon Block -->
            <div class="text-center">
              <div
                class="flex justify-center items-center w-12 h-12 bg-gray-50 border border-gray-200 rounded-full mx-auto dark:bg-gray-800 dark:border-gray-700"
              >
                <svg
                  class="w-5 h-5 text-gray-600 dark:text-gray-400"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M5.5 7a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5zM5 9.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5z"
                  />
                  <path
                    d="M9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.5L9.5 0zm0 1v2A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5.5z"
                  />
                </svg>
              </div>
              <div class="mt-3">
                <h3 class="text-lg font-semibold text-gray-800 dark:text-white">
                  생산자
                </h3>
                <p class="mt-1 text-gray-600 dark:text-gray-400">
                  {{ productDetailItem?.producer }}
                </p>
              </div>
            </div>
            <!-- End Icon Block -->
          </div>
        </div>
        <!-- End Icon Blocks -->

        <blockquote class="mt-10 text-center p-4 sm:px-7">
          <p class="text-lg text-gray-800 dark:text-gray-200">
            <a
              :href="`/commerce/brandshop/${productDetailItem?.seller?.seller_id}}`"
              class="text-blue-600 decoration-2 hover:underline font-medium"
              >{{ productDetailItem?.seller?.company }}에서 판매중인 모든 상품 구경하기 >
            </a>
          </p>
        </blockquote>
      </div>
      <!-- End Content -->
    </div>
  </div>

  <div class="sticky bottom-0 inset-x-0 text-center">
    <footer
      class="opacity-90 bg-slate-100 mt-auto w-full py-6 px-4 sm:px-6 lg:px-8 mx-auto"
    >
      <!-- Grid -->
      <div class="text-center">
        <div>
          <div class="grid grid-cols-3 gap-4">
            <div class="col-span-2">
              <span
                v-if="productDetailItem?.type == 'NORMAL'"
                class="flex-none text-xl font-semibold text-black dark:text-white"
              >
                구매수량
              </span>
              <div
                v-if="productDetailItem?.type == 'OPTION'"
                class="col-span-2 flex-none text-xl font-semibold text-black dark:text-white"
                aria-label="Brand"
              >
                <span v-if="targetOption.length == 0">상품 옵션을 선택해주세요.</span>
                <span v-else
                  >{{ targetOption?.name }}<br />
                  <span class="text-base">잔여 수량 : {{ targetOption?.ea }}</span>
                </span>
              </div>
            </div>
            <div>
              <TheCounter
                @updateProductPrice="updateProductPrice"
                :ea="targetOption?.ea"
                :productType="productType"
                :selectCount="productCount"
              />
            </div>

            <div class="col-span-2 flex-none text-xl font-semibold text-black">
              총 상품금액({{ productCount }}개)
            </div>
            <div class="flex rounded-md flex-none text-xl font-semibold text-black">
              {{ productPrice?.toLocaleString() }}원
            </div>
          </div>
        </div>
        <!-- End Col -->

        <div class="mt-3">
          <div class="inline-flex rounded-md shadow-sm">
            <button
              type="button"
              class="py-3 px-4 inline-flex justify-center items-center gap-2 -ml-px first:rounded-l-lg first:ml-0 last:rounded-r-lg border font-medium bg-white text-gray-700 align-middle hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all text-sm dark:bg-gray-800 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400"
            >
              공유하기
            </button>
            <button
              @click="saveCartList()"
              :disabled="productDetailItem?.type == 'OPTION' && targetOption.length == 0"
              type="button"
              class="py-3 px-4 inline-flex justify-center items-center gap-2 -ml-px first:rounded-l-lg first:ml-0 last:rounded-r-lg border font-medium bg-white text-gray-700 align-middle hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all text-sm dark:bg-gray-800 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400"
            >
              장바구니 담기
            </button>
            <!-- <button
              type="button"
              class="py-3 px-4 inline-flex justify-center items-center gap-2 -ml-px first:rounded-l-lg first:ml-0 last:rounded-r-lg border font-medium bg-white text-gray-700 align-middle hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all text-sm dark:bg-gray-800 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400"
            >
              구매하기
            </button> -->
          </div>
        </div>
      </div>
      <!-- End Grid -->
    </footer>
  </div>
  <!-- End Sticky Share Group -->
</template>
<script lang="ts">
import { mapActions } from "vuex";
import ProductService from "@/services/ProductService";
import TheCounter from "@/components/commerce/common/TheCounter.vue";

import productDetailInterface from "../../types/auth";
import TheProductDetailSidebar from "./productDetail/TheProductDetailSidebar.vue";
import Swiper from "https://cdn.jsdelivr.net/npm/swiper@10/swiper-bundle.min.mjs";

export default {
  components: {
    TheProductDetailSidebar,
    TheCounter,
  },
  data() {
    return {
      productDetailItem: {} as productDetailInterface,
      sellerProductList: [],
      countOptionList: [],
      count: "1",
      countdirect: "",
      optionList: [],
      targetOption: [],
      productCount: 1,
      productPrice: 0,
    };
  },
  async created() {
    if (!Kakao?.isInitialized()) {
      Kakao.init("bfdc56a39210639e056f66e470d11426");
    }

    this.id = this.$route.params.id;
    if (this.id > 0) {
      // 상품정보 가져오기
      await this.getproductitemlist(this.id);

      // 판매자가 판매중인 상품 리스트 가져오기
      await this.getSellerProductList(this.seller_id);
    }
  },
  computed: {
    // product info
    productType() {
      // 상품타입
      return this.productDetailItem?.type;
    },

    // seller info
  },

  methods: {
    setTargetOption(targetOption) {
      this.targetOption = targetOption;

      this.productCount = 1;
      this.updateTotalPrice();
    },
    ...mapActions("cart", ["updateSpinnerStatus"]),
    ...mapActions("cart", ["addProductToCart"]),
    getSellerProductList(id) {
      ProductService.getproductlistbysellerid(id).then((response) => {
        this.sellerProductList = response.data.data.list;
        if (this.sellerProductList.length > 0) {
          this.sellerProductList = this.sellerProductList.slice(0, 5);
        }
      });
    },
    updateProductPrice(obj) {
      const { count, productIndex, productType } = obj;
      if (productType == "NORMAL") {
        this.productCount = count;

        this.productPrice = count * this.productDetailItem?.price;
      } else {
        this.productCount = count;
        this.updateTotalPrice();
      }
    },
    updateTotalPrice() {
      let totalPrice = 0;
      if (this.productType == "NORMAL") {
        totalPrice = this.productDetailItem?.price * this.productCount;
      } else {
        totalPrice =
          this.productDetailItem?.price +
          this.targetOption?.extra_price * this.productCount;
      }

      this.productPrice = totalPrice;
    },

    // 장바구니 담기
    async saveCartList() {
      let addCartItem = {
        originPrice: this.productDetailItem.origin_price, // 정상가
        price: this.productDetailItem.price, // 판매가
        count: this.productCount, // 수량
        productID: this.productDetailItem.product_id, // PRODUCT_ID
        productName: this.productDetailItem.main_title, // 상품명
        productType: this.productDetailItem?.type, // 상품타입
      };

      // sellingPriceDP : 개당 가격
      if (this.productType !== "NORMAL") {
        addCartItem["targetOption"] = this.targetOption;
        addCartItem["sellingPriceDP"] =
          addCartItem["price"] + this.targetOption?.extra_price * this.productCount;
      } else {
        addCartItem["sellingPriceDP"] = addCartItem["price"];
      }

      // 장바구니 페이지로 이동
      await this.addProductToCart(addCartItem).then(() => {
        this.movetocartlist();
      });
    },
    back() {
      this.$router.push("/commerce/search");
    },

    // 상품 정보 가져오기
    async getproductitemlist(id) {
      this.updateSpinnerStatus(true);
      await ProductService.getproductlistbyid(id).then((response) => {
        if (response.data.code == "0000") {
          const userdata = response.data.data;
          this.productDetailItem = { ...userdata };
          this.seller_id = userdata.seller.seller_id;
          this.optionList = userdata.option_list;
          this.updateSpinnerStatus(false);

          if (userdata.type == "NORMAL") {
            this.productCount = 1;
            this.updateTotalPrice();
          }
        }
      });
    },

    movetodetail(id: number) {
      return (location.href = `/commerce/detail/${id}`);
    },
    movetoIntroduct(id) {
      return this.$router.push(`/brandshop/preview/${id}`);
    },
    movetocartlist() {
      return this.$router.push(`/commerce/cartlist`);
    },
    setKakaoShareCustomButton() {
      let item = this.productDetailItem;
      const main_title = item.main_title;
      const regularPrice = item.origin_price;
      const discountPrice = item.price;
      const imageUrl = item.main_image;
      const productID = item.id;

      Kakao.Share.createDefaultButton({
        container: "#kakao-article-share",
        objectType: "commerce",
        content: {
          title: `🍎애플링 특가 ${discountPrice?.toLocaleString()}원에 구매해보세요!`,
          imageUrl,
          link: {
            mobileWebUrl: `http://www.appling.me/commerce/detail/${productID}`,
            webUrl: `http://www.appling.me/commerce/detail/${productID}`,
          },
        },
        commerce: {
          productName: main_title,
          regularPrice,
          discountRate: 10,
          discountPrice,
        },
        buttons: [
          {
            title: "상품 구매하러 가기",
            link: {
              mobileWebUrl: `http://www.appling.me/commerce/detail/${productID}`,
              webUrl: `http://www.appling.me/commerce/detail/${productID}`,
            },
          },
        ],
      });
    },
    setSwiper() {
      new Swiper(".swiper", {
        // Optional parameters
        direction: "horizontal",
        loop: true,

        // If we need pagination
        pagination: {
          el: ".swiper-pagination",
          dynamicBullets: "true",
        },

        // Navigation arrows
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });
    },
  },
  async mounted() {
    for (var i = 0; i < 10; i++) {
      this.countOptionList.push({
        key: i + 1,
        value: i + 1,
      });
    }

    // 카카오톡 공유하기 버튼 세팅
    this.setKakaoShareCustomButton();

    // 이미지 스와이퍼 세팅
    this.setSwiper();
  },
};
</script>

<style>
@import url(https://cdn.jsdelivr.net/npm/swiper@10/swiper-bundle.min.css);
.swiper {
  width: 100%;
  height: 100%;
}

.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
}

.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  /* object-fit: cover; */
}
</style>
