<template>
  <div class="mt-7 sm:mt-12 mx-auto max-w-xl relative">
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
            v-on:enter="gotoproduct('keyword', keyword)"
            type="text"
            v-model="keyword"
            name="hs-search-article-1"
            id="hs-search-article-1"
            class="p-3 block w-full border-transparent rounded-md focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-800 dark:text-gray-400"
            placeholder="자연농원 사과"
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
    </form>
    <!-- End Form -->

    <!-- SVG Element -->
    <div class="hidden md:block absolute top-0 right-0 -translate-y-12 translate-x-20">
      <svg class="w-16 h-auto text-orange-500" width="121" height="135" viewBox="0 0 121 135" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M5 16.4754C11.7688 27.4499 21.2452 57.3224 5 89.0164" stroke="currentColor" stroke-width="10" stroke-linecap="round" />
        <path d="M33.6761 112.104C44.6984 98.1239 74.2618 57.6776 83.4821 5" stroke="currentColor" stroke-width="10" stroke-linecap="round" />
        <path d="M50.5525 130C68.2064 127.495 110.731 117.541 116 78.0874" stroke="currentColor" stroke-width="10" stroke-linecap="round" />
      </svg>
    </div>
    <!-- End SVG Element -->

    <!-- SVG Element -->
    <div class="hidden md:block absolute bottom-0 left-0 translate-y-10 -translate-x-32">
      <svg class="w-40 h-auto text-cyan-500" width="347" height="188" viewBox="0 0 347 188" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M4 82.4591C54.7956 92.8751 30.9771 162.782 68.2065 181.385C112.642 203.59 127.943 78.57 122.161 25.5053C120.504 2.2376 93.4028 -8.11128 89.7468 25.5053C85.8633 61.2125 130.186 199.678 180.982 146.248L214.898 107.02C224.322 95.4118 242.9 79.2851 258.6 107.02C274.299 134.754 299.315 125.589 309.861 117.539L343 93.4426"
          stroke="currentColor"
          stroke-width="7"
          stroke-linecap="round"
        />
      </svg>
    </div>
    <!-- End SVG Element -->
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
  <!-- Clients -->

  <!-- End Clients -->
</template>

<script lang="ts">
import { mapGetters, mapActions, mapState } from "vuex";
import ProductService from "@/services/ProductService";

export default {
  data() {
    return {
      categorys: [],
      keyword: "",
    };
  },
  computed: {
    ...mapGetters("cart", ["productSearchItem"]),
  },
  mounted() {
    this.getcategorylist();
  },
  methods: {
    async getcategorylist() {
      await ProductService.categorylist().then((response) => {
        this.categorys.push({
          category_id: "",
          name: "모두보기",
        });
        this.categorys.push(...response.data.data.list);
      });

      this.categorys[0].name = "🤝 모두보기";
      this.categorys[1].name = "🍏 과일";
      this.categorys[2].name = "🥬 채소";
      this.categorys[3].name = "🥩 육류";
    },
    ...mapActions("cart", ["gotoSearchResult"]),

    gotoproduct: async function (key: string, value: string | Number): Promise<void> {
      this.productSearchItem[`${key}`] = value;
      await this.gotoSearchResult(this.productSearchItem).then(() => {
        // 검색결과로 이동
        return this.$router.push("/commerce/search");
      });
    },
  },
};
</script>
