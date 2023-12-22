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
              당신에게 딱 맞는 {{ productDetailItem?.main_title }}는?
            </p>
            <p class="text-lg text-gray-800 dark:text-gray-200">
              <a
                class="text-blue-600 decoration-2 hover:underline font-medium"
                href="#"
                >{{ productDetailItem?.seller?.company }}</a
              >에 문의해보세요.
            </p>
          </blockquote>
        </div>

        <figure>
          <div>
            <img
              class="w-full object-cover rounded-xl"
              :src="productDetailItem?.main_image"
              alt="Image Description"
            />
          </div>
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
            어떤 {{ productDetailItem?.main_title }}이 당신에게 맞을까요?
          </h2>

          <h4 class="text-lg font-bold text-gray-800 dark:text-gray-200">
            다음 설명을 고려하여 구매상품을 구성하세요.
          </h4>
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
                  {{
                    Number(productDetailItem?.price + option.extra_price).toLocaleString()
                  }}
                </span>
              </div>

              <div
                class="bg-white flex justify-center lg:mt-px pt-7 px-8 dark:bg-slate-900"
              >
                <ul class="space-y-2.5 text-center text-sm">
                  <li class="text-gray-800 dark:text-gray-400">1BOX 10개</li>

                  <li class="text-gray-800 dark:text-gray-400">큰 캔 음료 사이즈</li>

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

        <!-- Icon Blocks -->
        <div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
          <div class="items-center gap-12">
            <!-- Icon Block -->
            <div>
              <img class="w-16 h-16" src="../../../assets/package-list.png" />

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
              <img class="w-16 h-16" src="../../../assets/box.png" />

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
          <div
            class="flex justify-center sm:grid sm:grid-cols-1 lg:grid-cols-3 items-center gap-12"
          >
            <!-- Icon Block -->
            <div class="text-center">
              <div
                class="flex justify-center items-center w-12 h-12 bg-gray-50 border border-gray-200 rounded-full mx-auto dark:bg-gray-800 dark:border-gray-700"
              >
                <img class="w-15 h-15" src="../../../assets/apple-logo.png" />

                <!-- <svg
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
                </svg> -->
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
                <img class="w-15 h-15" src="../../../assets/apple-in-basket.png" />
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
                <img class="w-15 h-15" src="../../../assets/crops.png" />
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
              :href="`/commerce/main`"
              class="text-blue-600 decoration-2 hover:underline font-medium"
            >
              판매중인 모든 상품 구경하기 >
            </a>
          </p>
        </blockquote>
      </div>
      <!-- End Content -->
    </div>
  </div>

  <div class="sticky bottom-0 inset-x-0 text-center">
    <footer class="opacity-90 bg-slate-100">
      <!-- Grid -->

      <!-- 구매 상태 -->
      <div class="mt-auto w-full py-4 px-4 sm:px-4 lg:px-6 mx-auto">
        <div class="grid grid-cols-3 gap-4">
          <div class="col-span-2">
            <span
              v-if="productDetailItem?.type == 'NORMAL'"
              class="flex-none text-xl sm:block flex font-semibold text-black dark:text-white"
            >
              구매수량
            </span>
            <div
              v-if="productDetailItem?.type == 'OPTION'"
              class="col-span-2 sm:block flex flex-none text-xl font-semibold text-black dark:text-white"
              aria-label="Brand"
            >
              <span v-if="targetOption.length == 0">상품 옵션을 선택해주세요.</span>
              <span v-else
                >{{ targetOption?.name }}<br />
                <span class="text-base">잔여 수량 : {{ targetOption?.ea }}</span>
              </span>
            </div>
          </div>
          <div class="mx-auto">
            <TheCounter
              @updateProductPrice="updateProductPrice"
              :ea="targetOption?.ea"
              :productType="productType"
              :selectCount="productCount"
            />
          </div>

          <div
            class="col-span-2 sm:block flex flex-none text-xl font-semibold text-black"
          >
            총 상품금액({{ productCount }}개)
          </div>
          <div
            class="flex rounded-md flex-none sm:block flex text-xl font-semibold text-black"
          >
            {{ productPrice?.toLocaleString() }}원
          </div>
        </div>
      </div>

      <!-- button-->
      <div style="width: 100%">
        <button
          id="kakao-article-share"
          type="button"
          style="width: 40%"
          class="py-3 px-4 inline-flex justify-center items-center gap-2 -ml-px first:ml-0 last:rounded-r-lg border font-medium bg-white text-gray-700 align-middle hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all text-base"
        >
          공유하기
        </button>
        <button
          @click="saveCartList()"
          :disabled="productDetailItem?.type == 'OPTION' && targetOption.length == 0"
          type="button"
          style="width: 60%"
          class="py-3 px-4 inline-flex justify-center items-center gap-2 -ml-px first:ml-0 last:rounded-r-lg border font-medium bg-white text-gray-700 align-middle hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all text-base"
        >
          장바구니 담기
        </button>

        <!-- <div class="inline-flex rounded-md shadow-sm">
				</div> -->
      </div>

      <!-- End Grid -->
    </footer>
  </div>
  <!-- End Sticky Share Group -->
</template>
<script lang="ts">
import { mapActions, mapGetters } from "vuex";
import ProductService from "@/services/ProductService";
import TheCounter from "@/components/commerce/common/TheCounter.vue";

import productDetailInterface from "../../types/auth";

export default {
  components: {
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
    ...mapGetters("auth", ["userInfoInterface"]),
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
      const { count, productType } = obj;
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
          (this.productDetailItem?.price + this.targetOption?.extra_price) *
          this.productCount;
      }

      this.productPrice = totalPrice;
    },

    // 장바구니 담기
    async saveCartList() {
      const islogin = this.userInfoInterface?.islogin;

      console.log(this.userInfoInterface, islogin);

      if (!islogin || islogin == undefined) {
        return this.$router.push(
          `/login?resultUrl=/commerce/detail/${this.productDetailItem?.product_id}`
        );
      }

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
          addCartItem["price"] + this.targetOption?.extra_price;
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

          const option_id = this.$route.query?.option_id;
          if (option_id) {
            const targetOption = this.optionList.find((option) => {
              return option.option_id == option_id;
            });
            this.setTargetOption(targetOption);
          }

          if (userdata.type == "NORMAL") {
            this.productCount = 1;
            this.updateTotalPrice();
          }

          // 카카오톡 공유하기 버튼 세팅
          this.setKakaoShareCustomButton();
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
      return this.$router.push(`/my/cartlist`);
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
  },
  async mounted() {
    for (var i = 0; i < 10; i++) {
      this.countOptionList.push({
        key: i + 1,
        value: i + 1,
      });
    }
    document.getElementById("common-footer").style.display = "none";
  },
};
</script>
