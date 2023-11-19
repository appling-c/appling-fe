<template>
  <div>
    <div class="flex rounded-md">
      <button
        @click="minusProductCount()"
        class="px-4 inline-flex items-center min-w-fit rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-sm text-gray-500 dark:bg-gray-700 dark:border-gray-700 dark:text-gray-400"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-3 h-3"
        >
          <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 12h-15" />
        </svg>
      </button>
      <input
        type="text"
        :value="selectCount"
        readonly
        class="py-2 px-3 w-16 block border-gray-200 shadow-sm rounded-r-md text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
      />
      <button
        @click="plusProductCount()"
        class="py-3 px-4 inline-flex items-center min-w-fit w-full border border-gray-300 bg-gray-50 text-sm text-gray-500 -mt-px -ml-px first:rounded-t-lg last:rounded-b-lg sm:w-auto sm:first:rounded-l-lg sm:mt-0 sm:first:ml-0 sm:first:rounded-tr-none sm:last:rounded-bl-none sm:last:rounded-r-lg dark:bg-gray-700 dark:border-gray-700 dark:text-gray-400"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-3 h-3"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M12 4.5v15m7.5-7.5h-15"
          />
        </svg>
      </button>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    ea: [Number, String],
    selectCount: [Number, String],
    productIndex: Number,
    productType: String,
  },
  data() {
    return {
      count: 0,
    };
  },
  compted: {
    maxCount() {
      return this.ea;
    },
  },
  watch: {
    selectCount(value) {
      this.count = value;
    },
  },
  methods: {
    /**
     * Increments the product count and updates the product price.
     *
     * @param {type} paramName - description of parameter
     * @return {type} description of return value
     */
    plusProductCount() {
      if (this.count >= this.maxCount) {
        this.count = this.maxCount;
      } else {
        this.count++;
      }
      this.$emit("updateProductPrice", {
        count: this.count,
        productIndex: this.productIndex,
        productType: this.productType,
      });
    },

    /**
     * Decreases the product count by one and updates the product price.
     *
     * @param {type} none - This function does not take any parameters.
     * @return {type} undefined - This function does not return a value.
     */
    minusProductCount() {
      if (this.count <= 1) {
        this.count = 1;
      } else {
        this.count--;
      }
      this.$emit("updateProductPrice", {
        count: this.count,
        productIndex: this.productIndex,
        productType: this.productType,
      });
    },
  },
  mounted() {
    this.count = this.selectCount;
  },
};
</script>
