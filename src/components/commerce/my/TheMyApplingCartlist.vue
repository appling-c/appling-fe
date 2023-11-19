<template>
  

<ol class="flex items-center w-full text-sm font-medium text-center text-gray-500 dark:text-gray-400 sm:text-base">
    <li class="flex md:w-full items-center text-blue-600 dark:text-blue-500 sm:after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-200 after:border-1 after:hidden sm:after:inline-block after:mx-6 xl:after:mx-10 dark:after:border-gray-700">
        <span class="flex items-center after:content-['/'] sm:after:hidden after:mx-2 after:text-gray-200 dark:after:text-gray-500">
            <svg class="w-3.5 h-3.5 sm:w-4 sm:h-4 me-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
            </svg>
            Personal <span class="hidden sm:inline-flex sm:ms-2">Info</span>
        </span>
    </li>
    <li class="flex md:w-full items-center after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-200 after:border-1 after:hidden sm:after:inline-block after:mx-6 xl:after:mx-10 dark:after:border-gray-700">
        <span class="flex items-center after:content-['/'] sm:after:hidden after:mx-2 after:text-gray-200 dark:after:text-gray-500">
            <span class="me-2">2</span>
            Account <span class="hidden sm:inline-flex sm:ms-2">Info</span>
        </span>
    </li>
    <li class="flex items-center">
        <span class="me-2">3</span>
        Confirmation
    </li>
</ol>


  <template v-if="currentStep === '1'">
    <TheCartlistOrder
      :order_id="order_id"
      @updateStep="updateStep"
      @setOrderId="setOrderId"
      @updateOrderNumber="updateOrderNumber"
    />
  </template>

  <template v-if="currentStep === '2'">
    <TheCartlistDelivery
      :order_id="order_id"
      @updateStep="updateStep"
      @updateOrderNumber="updateOrderNumber"
    />
  </template>

  <template v-if="currentStep === '3'">
    <TheCartlistComplete
      :order_id="order_id"
      :order_number="order_number"
      @updateStep="updateStep"
      @updateOrderNumber="updateOrderNumber"
    />
  </template>
</template>

<script lang="ts">
import TheCartlistOrder from "@/components/commerce/my/cartlist/MyCartlistOrder.vue";
import TheCartlistDelivery from "@/components/commerce/my/cartlist/MyCartlistDelivery.vue";
import TheCartlistComplete from "@/components/commerce/my/cartlist/MyCartlistComplete.vue";
export default {
  components: {
    TheCartlistOrder,
    TheCartlistDelivery,
    TheCartlistComplete,
  },

  data() {
    return {
      currentStep: "1",
      order_id: 0,
      order_number: "",
    };
  },
  methods: {
    updateStep(step) {
      this.currentStep = step;
    },
    setOrderId(id) {
      this.order_id = id;
    },
    updateOrderNumber(order_number) {
      this.order_number = order_number;
    },
  },

  mounted() {},
};
</script>
