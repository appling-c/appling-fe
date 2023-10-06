<script>
import TheSearchBar from "./common/TheSearchBar.vue";
import { mapActions, mapGetters } from "vuex";

export default {
  components: { TheSearchBar },
  data() {
    return {
      categorys: [],
      keyword: "",
      products: [],
    };
  },
  methods: {
    gotoproducts(category_id) {
      this.$router.push(`/commerce/search?categoryid=${category_id}`);
    },

    gopricing() {
      this.$router.push("/commerce/pricing");
    },

    async gotodetail(id) {
      // 조회수 증가
      const payload = {
        product_id: id,
      };
      await this.addProducetViewCount(payload).then(() => {
        this.$router.push(`/commerce/detail/${id}`);
      });
    },
    ...mapActions("cart", ["getproductlist", "addProducetViewCount", "updateSpinnerStatus"]),
  },
  mounted() {
    this.getproductlist().then((response) => {
      this.updateSpinnerStatus(false);
      if (response.data.code !== "0000") {
        return (this.products = []);
      }
      const { list } = response?.data.data;

      this.products = list;
    });
  },
};
</script>
<template>
  <div>
    <div style="padding-top: 13rem" class="max-w-2xl mx-auto text-center pt-20 pb-6 lg:pb-32">
      <h2 class="text-2xl font-bold sm:text-3xl md:text-4xl">
        판매자와 소비자의 연결고리,<br />
        어서오세요, 애플링입니다.🍎
      </h2>

      <!-- Grid -->
      <div class="mt-7 grid grid-cols-12 sm:flex sm:justify-center gap-6 sm:gap-x-12 lg:gap-x-20">
        <div class="col-span-6 text-center">
          <h4 class="text-xl md:text-3xl font-semibold text-gray-800 dark:text-gray-200">250+</h4>
          <h4 class="text-base text-gray-600 dark:text-gray-400">개의 상품!</h4>
        </div>
        <!-- End Col -->

        <div class="col-span-6 text-center">
          <h4 class="text-xl md:text-3xl font-semibold text-gray-800 dark:text-gray-200">160+</h4>
          <h4 class="text-base text-gray-600 dark:text-gray-400">건 이상의 안전한 거래</h4>
        </div>
        <!-- End Col -->

        <div class="col-start-4 col-span-6 text-center">
          <h4 class="text-xl md:text-3xl font-semibold text-gray-800 dark:text-gray-200">100+</h4>
          <h4 class="text-base text-gray-600 dark:text-gray-400">명 이상 애플링 이용중!</h4>
        </div>
        <!-- End Col -->
      </div>
      <!-- End Grid -->
    </div>

    <!-- End Clients -->
    <!-- Hero -->
    <div class="relative overflow-hidden">
      <div class="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-24">
        <div class="text-center">
          <h1 class="text-4xl sm:text-6xl font-bold text-gray-800 dark:text-gray-200">
            둘러보기👀
          </h1>

          <p class="mt-3 text-gray-600 dark:text-gray-400">
            아래의 키워드를 선택하고 상품을 둘러보세요!
          </p>

          <the-search-bar />
        </div>
      </div>
    </div>
    <!-- End Hero -->
    <!-- Card Blog -->
    <div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
      <!-- Title -->
      <div class="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
        <h2 class="text-2xl font-bold md:text-4xl md:leading-tight dark:text-white">
          애플링 최고 인기 상품!<br />산지에서 바로 보내는<br />초신선 농산물을 소개합니다.
        </h2>
        <p class="mt-1 text-gray-600 dark:text-gray-400">
          산지에 바로 주문하는 유통 다이어트로 판매자는 더 높은 가격에,<br />
          소비자는 더 낮은 가격에 국산 농산물을 거래해보세요.
        </p>
      </div>
      <!-- End Title -->

      <!-- Grid -->
      <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <!-- Card -->
        <a
          v-for="pIndex in 5"
          :key="pIndex"
          class="group rounded-xl overflow-hidden"
          @click="gotodetail(products[pIndex]?.product_id)"
        >
          <div class="relative pt-[50%] sm:pt-[70%] rounded-xl overflow-hidden">
            <img
              class="
                w-full
                h-full
                absolute
                top-0
                left-0
                object-cover
                group-hover:scale-105
                transition-transform
                duration-500
                ease-in-out
                rounded-xl
              "
              :src="products[pIndex]?.main_image"
              alt="Image Description"
            />
            <span
              class="
                absolute
                top-0
                right-0
                rounded-tr-xl rounded-bl-xl
                text-xs
                font-medium
                bg-gray-800
                text-white
                py-1.5
                px-3
                dark:bg-gray-900
              "
            >
              프리미엄
            </span>
          </div>

          <div class="mt-7">
            <h3
              class="
                text-xl
                font-semibold
                text-gray-800
                group-hover:text-gray-600
                dark:text-gray-200
              "
            >
              {{ products[pIndex]?.main_title }}
            </h3>
            <p class="mt-3 text-gray-800 dark:text-gray-200">
              {{ products[pIndex]?.main_explanation }}
            </p>
            <p
              class="
                mt-5
                inline-flex
                items-center
                gap-x-1.5
                text-blue-600
                decoration-2
                group-hover:underline
                font-medium
              "
            >
              더보기👀
              <svg class="w-2.5 h-2.5" width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path
                  d="M5.27921 2L10.9257 7.64645C11.1209 7.84171 11.1209 8.15829 10.9257 8.35355L5.27921 14"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                />
              </svg>
            </p>
          </div>
        </a>
        <!-- End Card -->

        <!-- Card -->
        <a
          class="
            group
            relative
            flex flex-col
            w-full
            min-h-[15rem]
            bg-center bg-cover
            rounded-xl
            hover:shadow-lg
            transition
            bg-[url('/src/assets/back-darken.png')]
          "
          href="/signup"
        >
          <div class="flex-auto p-4 md:p-6">
            <h3 class="text-xl text-white/[.9] group-hover:text-white">
              <span class="font-bold font-red-400">애플링</span> 가족이 되고 상품 구매, 판매
              서비스를 시작하세요!
            </h3>
          </div>
          <div class="pt-0 p-4 md:p-6">
            <div
              class="
                inline-flex
                items-center
                gap-2
                text-sm
                font-medium
                text-white
                group-hover:text-white/[.7]
              "
            >
              자세히 보기
              <svg class="w-2.5 h-2.5" width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path
                  d="M5.27921 2L10.9257 7.64645C11.1209 7.84171 11.1209 8.15829 10.9257 8.35355L5.27921 14"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                />
              </svg>
            </div>
          </div>
        </a>
        <!-- End Card -->
      </div>
      <!-- End Grid -->
    </div>
    <!-- End Card Blog -->

    <!-- <div class="max-w-2xl mx-auto text-center pt-20 pb-6 lg:pb-16">
      <h2 class="text-2xl font-bold sm:text-3xl md:text-4xl dark:text-white">Blog Sections</h2>
      <p class="mt-4 md:text-lg text-gray-600 dark:text-gray-400">Quickly get a project started with any of our examples ranging from using parts of the UI to custom components and layouts using Tailwind CSS.</p>
      <div class="mt-5">
        <a @click="gopricing" class="inline-flex justify-center items-center gap-x-3 text-center bg-blue-600 hover:bg-blue-700 border border-transparent text-white text-sm font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white transition py-3 px-4 dark:focus:ring-offset-gray-800">
          멤버십 자세히 보기
        </a>
      </div>
    </div> -->
  </div>
</template>
