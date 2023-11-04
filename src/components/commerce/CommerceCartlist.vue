<template>
  <div class="max-w-2xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
    <!-- Card -->

    <div class="bg-white rounded-xl shadow p-4 sm:p-7 dark:bg-slate-900">
      <div
        class="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 relative gap-[15px]"
      >
        <div class="flex-grow-0 flex-shrink-0 w-[300px] h-[17px] relative">
          <p
            class="w-[300px] absolute left-0 top-0 text-[15px] font-medium text-left text-slate-600"
          >
            Base Active
          </p>
        </div>
        <div class="flex justify-start items-start flex-grow-0 flex-shrink-0 w-[459px]">
          <div class="flex flex-col justify-center items-start flex-grow gap-2">
            <div
              class="flex justify-start items-center self-stretch flex-grow-0 flex-shrink-0 relative gap-5"
            >
              <div class="flex-grow h-px opacity-0 bg-gray-200"></div>
              <div
                class="flex flex-col justify-start items-center self-stretch flex-grow-0 flex-shrink-0 gap-[5px]"
              >
                <div class="flex justify-start items-start flex-grow-0 flex-shrink-0">
                  <div
                    class="flex justify-center items-center flex-grow-0 flex-shrink-0 w-[38px] h-[38px] relative overflow-hidden rounded-[999px] bg-blue-500"
                  >
                    <p
                      class="flex-grow-0 flex-shrink-0 text-sm font-semibold text-center text-white"
                    >
                      1
                    </p>
                  </div>
                </div>
              </div>
              <div class="flex-grow h-px bg-gray-200"></div>
            </div>
            <div
              class="flex flex-col justify-start items-center self-stretch flex-grow-0 flex-shrink-0 relative"
            >
              <p
                class="flex-grow-0 flex-shrink-0 text-base font-semibold text-center text-gray-800"
              >
                Title
              </p>
            </div>
          </div>
          <div class="flex flex-col justify-center items-start flex-grow gap-2">
            <div
              class="flex justify-start items-center self-stretch flex-grow-0 flex-shrink-0 relative gap-5"
            >
              <div class="flex-grow h-px bg-gray-200"></div>
              <div
                class="flex flex-col justify-start items-center self-stretch flex-grow-0 flex-shrink-0 gap-[5px]"
              >
                <div class="flex justify-start items-start flex-grow-0 flex-shrink-0">
                  <div
                    class="flex justify-center items-center flex-grow-0 flex-shrink-0 w-[38px] h-[38px] relative overflow-hidden rounded-[999px] bg-white border border-gray-200"
                    style="box-shadow: 0px 1px 2px 0 rgba(0, 0, 0, 0.05)"
                  >
                    <p
                      class="flex-grow-0 flex-shrink-0 text-sm font-semibold text-center text-gray-800"
                    >
                      2
                    </p>
                  </div>
                </div>
              </div>
              <div class="flex-grow h-px bg-gray-200"></div>
            </div>
            <div
              class="flex flex-col justify-start items-center self-stretch flex-grow-0 flex-shrink-0 relative"
            >
              <p
                class="flex-grow-0 flex-shrink-0 text-base font-semibold text-center text-gray-800"
              >
                Title
              </p>
            </div>
          </div>
          <div class="flex flex-col justify-center items-start flex-grow gap-2">
            <div
              class="flex justify-start items-center self-stretch flex-grow-0 flex-shrink-0 relative gap-5"
            >
              <div class="flex-grow h-px bg-gray-200"></div>
              <div
                class="flex flex-col justify-start items-center self-stretch flex-grow-0 flex-shrink-0 gap-[5px]"
              >
                <div class="flex justify-start items-start flex-grow-0 flex-shrink-0">
                  <div
                    class="flex justify-center items-center flex-grow-0 flex-shrink-0 w-[38px] h-[38px] relative overflow-hidden rounded-[999px] bg-white border border-gray-200"
                    style="box-shadow: 0px 1px 2px 0 rgba(0, 0, 0, 0.05)"
                  >
                    <p
                      class="flex-grow-0 flex-shrink-0 text-sm font-semibold text-center text-gray-800"
                    >
                      3
                    </p>
                  </div>
                </div>
              </div>
              <div class="flex-grow h-px opacity-0 bg-gray-200"></div>
            </div>
            <div
              class="flex flex-col justify-start items-center self-stretch flex-grow-0 flex-shrink-0 relative"
            >
              <p
                class="flex-grow-0 flex-shrink-0 text-base font-semibold text-center text-gray-800"
              >
                Title
              </p>
            </div>
          </div>
        </div>
      </div>
      <template v-if="currentStep == '1'">
        <TheCartlistOrder
          :currentStep="currentStep"
          @updateOrderNumber="updateOrderNumber"
          @setOrderId="setOrderId"
          @updateStep="updateStep"
        />
      </template>
      <template v-if="currentStep == '2'">
        <TheCartlistDelivery
          :currentStep="currentStep"
          :order_id="order_id"
          @updateStep="updateStep"
        />
      </template>
    </div>
    <!-- End Card -->
  </div>
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
      currentStep: "2",
      order_id: 0,
      order_number: "",
      senderInfoTypeList: [
        { key: "1", value: "농장 주소로 발송" },
        { key: "2", value: "새로운 주소로 발송" },
      ],
      senderInfoType: "1",
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
