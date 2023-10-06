<template>
  <div class="border-b border-gray-200 dark:border-gray-700">
    <nav class="-mb-0.5 flex justify-center space-x-6" aria-label="Tabs" role="tablist">
      <button
        type="button"
        disabled
        class="
          hs-tab-active:font-semibold hs-tab-active:border-blue-600 hs-tab-active:text-blue-600
          py-4
          px-1
          inline-flex
          items-center
          gap-2
          border-b-[3px] border-transparent
          text-sm
          whitespace-nowrap
          text-gray-500
          hover:text-blue-600
        "
        :class="currentStep == 1 ? 'active' : ''"
        id="horizontal-alignment-item-1"
        data-hs-tab="#horizontal-alignment-1"
        aria-controls="horizontal-alignment-1"
        role="tab"
      >
        01. 옵션선택
      </button>
      <button
        type="button"
        disabled
        class="
          hs-tab-active:font-semibold hs-tab-active:border-blue-600 hs-tab-active:text-blue-600
          py-4
          px-1
          inline-flex
          items-center
          gap-2
          border-b-[3px] border-transparent
          text-sm
          whitespace-nowrap
          text-gray-500
          hover:text-blue-600
        "
        :class="currentStep == 2 ? 'active' : ''"
        id="horizontal-alignment-item-2"
        data-hs-tab="#horizontal-alignment-2"
        aria-controls="horizontal-alignment-2"
        role="tab"
      >
        02. 배송지 입력
      </button>
      <button
        type="button"
        class="
          hs-tab-active:font-semibold hs-tab-active:border-blue-600 hs-tab-active:text-blue-600
          py-4
          px-1
          inline-flex
          items-center
          gap-2
          border-b-[3px] border-transparent
          text-sm
          whitespace-nowrap
          text-gray-500
          hover:text-blue-600
        "
        disabled
        :class="currentStep == 3 ? 'active' : ''"
        id="horizontal-alignment-item-3"
        data-hs-tab="#horizontal-alignment-3"
        aria-controls="horizontal-alignment-3"
        role="tab"
      >
        03. 주문완료
      </button>
    </nav>
  </div>

  <div class="mt-3">
    <div
      id="horizontal-alignment-1"
      :class="currentStep == '1' ? '' : 'hidden'"
      role="tabpanel"
      aria-labelledby="horizontal-alignment-item-1"
    >
      <div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        <the-cartlist-order
          :currentStep="currentStep"
          @updateStep="updateStep"
          @setOrderId="setOrderId"
        />
      </div>
    </div>
    <div
      id="horizontal-alignment-2"
      :class="currentStep == '2' ? '' : 'hidden'"
      role="tabpanel"
      aria-labelledby="horizontal-alignment-item-2"
    >
      <div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        <the-cartlist-delivery
          :currentStep="currentStep"
          :order_id="order_id"
          @updateOrderNumber="updateOrderNumber"
          @updateStep="updateStep"
        />
      </div>
    </div>
    <div
      id="horizontal-alignment-3"
      role="tabpanel"
      :class="currentStep == '3' ? '' : 'hidden'"
      aria-labelledby="horizontal-alignment-item-3"
    >
      <the-cartlist-complete :order_number="order_number" />
    </div>
  </div>
  <!-- <div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
    <the-cartlist-order :currentStep="currentStep" @updateStep="updateStep" />
    <the-cartlist-delivery :currentStep="currentStep" @updateStep="updateStep" />
  </div> -->
</template>

<script lang="ts">
import { mapActions, mapGetters } from "vuex";
import TheCartlistOrder from "./cartlist/cartlistOrder.vue";
import TheCartlistDelivery from "./cartlist/cartlistDelivery.vue";
import TheCartlistComplete from "./cartlist/cartlistComplete.vue";
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
