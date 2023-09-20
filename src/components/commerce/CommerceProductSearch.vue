<script lang="ts">
import { mapActions, mapGetters } from "vuex";
import ProductService from "@/services/ProductService";

export default {
  data() {
    return {
      products: [],
      categorys: [],
      size: 500,
      page: 1,
      keyword: "",
      total_page: 1,
      categoryid: "",
      totalProductCount: 0,
    };
  },
  computed: {
    ...mapGetters("cart", ["productSearchItem"]),
  },
  methods: {
    async gotodetail(id) {
      // 조회수 증가
      const payload = {
        product_id: id,
      };
      await this.addProducetViewCount(payload).then(() => {
        this.$router.push(`/commerce/detail/${id}`);
      });
    },
    ...mapActions("cart", ["gotoSearchResult", "getproductlist", "addProducetViewCount", "updateSpinnerStatus"]),

    async gotoproduct(key: string, value: string | Number): Promise<void> {
      this.productSearchItem[`${key}`] = value;
      await this.gotoSearchResult(this.productSearchItem).then(() => {
        // 검색결과로 이동
        return this.$router.go(this.$router.currentRoute);
      });
    },
  },

  beforeMount() {
    this.categoryid = this.$route.query.categoryid;
    this.getproductlist().then((response) => {
      this.updateSpinnerStatus(false);
      if (response.data.code !== "0000") {
        return (this.products = []);
      }
      const { total_page, list, islastpage, number_of_elements } = response?.data.data;
      this.total_page = total_page;
      this.products = list;
      this.islastpage = islastpage;

      this.totalProductCount = this.total_page * number_of_elements;
    });

    ProductService.categorylist().then((response) => {
      this.categorys.push({
        category_id: "",
        name: "모두보기",
      });
      this.categorys.push(...response.data.data.list);

      this.categorys[0].name = "🤝 모두보기";
      this.categorys[1].name = "🍏 과일";
      this.categorys[2].name = "🥬 채소";
      this.categorys[3].name = "🥩 육류";
    });
  },
  mounted() {
    this.updateSpinnerStatus(true);
  },
};
</script>
<template>
  <!-- Card Blog -->
  <div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
    <!-- Title -->
    <div class="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
      <h2 class="text-2xl font-bold md:text-4xl md:leading-tight dark:text-white">상품 둘러보기</h2>
      <p class="mb-10 mt-10 text-gray-600 dark:text-gray-400">농장에서 정성다해 키운<br />{{ totalProductCount }}개의 유기농 상품들이 준비되어있어요!</p>
      <!-- Form -->
      <form>
        <div
          class="
            relative
            z-10
            flex
            space-x-3
            p-3
            bg-white
            border
            rounded-lg
            shadow-lg shadow-gray-100
            dark:bg-gray-800 dark:border-gray-700 dark:shadow-gray-900/[.2]
          "
        >
          <div class="flex-[1_0_0%]">
            <label for="hs-search-article-1" class="block text-base text-gray-700 font-medium dark:text-white"
              ><span class="sr-only">키워드 검색하기!</span></label
            >
            <input
              type="text"
              v-model="keyword"
              name="hs-search-article-1"
              id="hs-search-article-1"
              class="p-3 block w-full border-transparent rounded-md focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-800 dark:text-gray-400"
              placeholder="검색 키워드는 랜덤으로 누누가 만들어줄거예요!"
            />
          </div>

          <div class="flex-[0_0_auto]">
            <a
              class="
                p-4
                inline-flex
                justify-center
                items-center
                gap-2
                rounded-md
                border border-transparent
                font-semibold
                bg-blue-500
                text-white
                hover:bg-blue-600
                focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2
                transition-all
                text-base
                dark:focus:ring-offset-gray-800
              "
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                <path
                  d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"
                />
              </svg>
            </a>
          </div>
        </div>

        <div class="mt-10 sm:mt-20">
          <a
            @click="gotoproduct('category_id', citem.category_id)"
            v-for="(citem, index) in categorys"
            :key="index"
            class="
              m-1
              py-3
              px-4
              inline-flex
              justify-center
              items-center
              gap-2
              rounded-md
              border
              font-medium
              bg-white
              text-gray-700
              shadow-sm
              align-middle
              hover:bg-gray-50
              focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600
              transition-all
              text-base
              dark:bg-slate-900 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800
            "
          >
            {{ citem.name }}
          </a>
        </div>
      </form>
    </div>
    <!-- End Title -->

    <!-- Grid -->
    <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
      <!-- Card -->
      <a
        @click="gotodetail(product.id)"
        v-for="(product, index) in products"
        :key="index"
        class="group hover:bg-gray-100 rounded-xl p-5 transition-all dark:hover:bg-white/[.05]"
      >
        <!-- <div class="relative aspect-w-16 aspect-h-10">
        <img class="w-full object-cover rounded-xl" :src="product.main_image" alt="Image Description">
        <span class="absolute top-0 right-0 rounded-tr-xl rounded-bl-xl text-xs font-medium bg-gray-800 text-white py-1.5 px-3 dark:bg-gray-900">
          프리미엄
        </span>
      </div> -->

        <div class="relative pt-[50%] sm:pt-[70%] rounded-xl overflow-hidden">
          <img
            class="w-full h-full absolute top-0 left-0 object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out rounded-xl"
            :src="product.main_image"
            alt="Image Description"
          />
          <span class="absolute top-0 right-0 rounded-tr-xl rounded-bl-xl text-xs font-medium bg-gray-800 text-white py-1.5 px-3 dark:bg-gray-900">
            프리미엄
          </span>
        </div>

        <h3 class="mt-5 text-xl text-gray-800 dark:text-gray-300 dark:group-hover:text-white font-semibold">
          {{ product.main_title }}
        </h3>
        <p class="mb-6 text-base font-normal text-gray-500 dark:text-gray-400">
          {{ product.main_explanation }}
        </p>

        <p>
          <!-- Icon -->
          <span class="inline-flex justify-center items-center w-[46px] h-[46px] rounded-full text-gray-600">
            <svg
              style="display: inline-block"
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
                d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z"
              />
            </svg>
          </span>
          <!-- End Icon -->

          <span class="text-base font-normal text-gray-500 dark:text-gray-600">
            <s>{{ product.origin_price.toLocaleString() }}원</s>
          </span>

          <svg
            style="display: inline-block"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
          </svg>

          <span>
            <span class="inline-flex items-center gap-1.5 py-1.5 px-3 rounded-full text-xs font-medium bg-red-600 text-white">할인가</span>
            {{ product.price.toLocaleString() }}원</span
          >
        </p>
        <p class="mt-3 inline-flex items-center gap-x-2 text-sm font-semibold text-gray-800 dark:text-gray-200">
          자세히 보기
          <svg
            class="w-2.5 h-2.5 transition ease-in-out group-hover:translate-x-1"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M0.975821 6.92249C0.43689 6.92249 -3.50468e-07 7.34222 -3.27835e-07 7.85999C-3.05203e-07 8.37775 0.43689 8.79749 0.975821 8.79749L12.7694 8.79748L7.60447 13.7596C7.22339 14.1257 7.22339 14.7193 7.60447 15.0854C7.98555 15.4515 8.60341 15.4515 8.98449 15.0854L15.6427 8.68862C16.1191 8.23098 16.1191 7.48899 15.6427 7.03134L8.98449 0.634573C8.60341 0.268455 7.98555 0.268456 7.60447 0.634573C7.22339 1.00069 7.22339 1.59428 7.60447 1.9604L12.7694 6.92248L0.975821 6.92249Z"
              fill="currentColor"
            />
          </svg>
        </p>
      </a>
      <!-- End Card -->
    </div>
    <!-- End Grid -->
  </div>

  <!-- End Card Blog -->
</template>
