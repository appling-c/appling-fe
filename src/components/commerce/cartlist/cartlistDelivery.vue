<template>
  <!-- Blog Article -->
  <!-- Features -->
  <div class="md:items-center md:gap-12 xl:gap-32">
    <div>
      <div class="flex flex-col">
        <div class="-m-1.5 overflow-x-auto">
          <div class="p-1.5 min-w-full inline-block align-middle">
            <div class="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
              <h2 class="text-3xl text-slate-800 font-bold lg:text-4xl dark:text-white">
                최종 주문 정보
              </h2>
            </div>
            <!-- End Title -->

            <div class="max-w-5xl mx-auto">
              <!-- Grid -->
              <div class="grid sm:grid-cols-2 gap-6 md:gap-12">
                <div>
                  <h3 class="text-lg font-semibold text-slate-800 dark:text-slate-200">상품</h3>
                  <p class="mt-2 text-slate-600 dark:text-slate-400"></p>
                  <ul class="flex flex-col w-full">
                    <li
                      v-for="(iItem, iIndex) in inventory"
                      :key="iIndex"
                      class="
                        inline-flex
                        items-center
                        gap-x-2
                        py-3
                        px-4
                        text-sm
                        font-medium
                        bg-white
                        border
                        text-slate-800
                        -mt-px
                        first:rounded-t-lg first:mt-0
                        last:rounded-b-lg
                        dark:bg-gray-800 dark:border-gray-700 dark:text-white
                      "
                    >
                      <div class="flex justify-between w-full">
                        {{ iItem.main_title }} X {{ iItem.ea }}EA,
                        {{ (Number(iItem.ea) * Number(iItem.price)).toLocaleString() }}원
                      </div>
                    </li>
                  </ul>
                </div>
                <!-- End Col -->

                <div>
                  <h3 class="text-lg font-semibold text-slate-800 dark:text-slate-200">
                    배송지 입력하기
                  </h3>
                  <p class="mt-2 text-slate-600 dark:text-slate-400"></p>
                  <div class="border-b border-gray-200 dark:border-gray-700">
                    <nav class="flex space-x-2" aria-label="Tabs" role="tablist">
                      <button
                        type="button"
                        class="
                          hs-tab-active:font-semibold
                          hs-tab-active:border-blue-600
                          hs-tab-active:text-blue-600
                          py-4
                          px-1
                          inline-flex
                          items-center
                          gap-2
                          border-b-[3px] border-transparent
                          text-sm
                          whitespace-nowrap
                          text-slate-500
                          hover:text-blue-600
                          active
                        "
                        id="tabs-with-underline-item-1"
                        data-hs-tab="#tabs-with-underline-1"
                        aria-controls="tabs-with-underline-1"
                        role="tab"
                      >
                        회원가입 정보 그대로 사용
                      </button>
                      <button
                        type="button"
                        class="
                          hs-tab-active:font-semibold
                          hs-tab-active:border-blue-600
                          hs-tab-active:text-blue-600
                          py-4
                          px-1
                          inline-flex
                          items-center
                          gap-2
                          border-b-[3px] border-transparent
                          text-sm
                          whitespace-nowrap
                          text-slate-500
                          hover:text-blue-600
                        "
                        id="tabs-with-underline-item-2"
                        data-hs-tab="#tabs-with-underline-2"
                        aria-controls="tabs-with-underline-2"
                        role="tab"
                      >
                        새로운 배송지 입력
                      </button>
                    </nav>
                  </div>

                  <div class="mt-3">
                    <div
                      id="tabs-with-underline-1"
                      role="tabpanel"
                      aria-labelledby="tabs-with-underline-item-1"
                    >
                      <the-user-address-form />
                    </div>
                    <div
                      id="tabs-with-underline-2"
                      class="hidden"
                      role="tabpanel"
                      aria-labelledby="tabs-with-underline-item-2"
                    >
                      <the-user-address-form />
                    </div>
                  </div>
                </div>
                <!-- End Col -->

                <div>
                  <h3 class="text-lg font-semibold text-slate-800 dark:text-slate-200">금액</h3>
                  <p class="mt-2 text-slate-600 dark:text-slate-400 text-right">
                    {{ totalPrice.toLocaleString() }}
                  </p>
                </div>
                <!-- End Col -->

                <div>
                  <h3 class="text-lg font-semibold text-slate-800 dark:text-slate-200"></h3>
                  <p class="mt-2 text-slate-600 dark:text-slate-400"></p>
                </div>
                <!-- End Col -->

                <div>
                  <h3 class="text-lg font-semibold text-slate-800 dark:text-slate-200"></h3>
                  <p class="mt-2 text-slate-600 dark:text-slate-400"></p>
                </div>
                <!-- End Col -->

                <!-- End Col -->
              </div>
              <!-- End Grid -->
            </div>
          </div>
        </div>
      </div>

      <!-- Icon Blocks -->
      <div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        <div class="max-w-2xl mx-auto">
          <!-- Grid -->
          <div class="grid gap-12">
            <div>
              <p class="mt-3 text-slate-800 dark:text-slate-400">
                구매할 상품과 수량을 한 번 더 확인해주세요!<br />
                아래 주문하기 버튼을 눌러 주문을 확정할 수 있습니다.
              </p>
            </div>
            <div>
              <!-- Icon Block -->
              <div>
                <button
                  @click="updateNextStep"
                  type="button"
                  class="
                    w-full
                    py-3
                    px-4
                    inline-flex
                    justify-center
                    items-center
                    gap-2
                    rounded-md
                    bg-indigo-100
                    border border-transparent
                    font-semibold
                    text-indigo-500
                    hover:text-white hover:bg-indigo-100
                    focus:outline-none focus:ring-2
                    ring-offset-white
                    focus:ring-indigo-500 focus:ring-offset-2
                    transition-all
                    text-sm
                    dark:focus:ring-offset-gray-800
                  "
                >
                  주문하기
                </button>
              </div>
              <!-- End Icon Block -->
            </div>
          </div>
          <!-- End Grid -->
        </div>
      </div>
    </div>
    <!-- End Col -->
    <!-- End Col -->
  </div>
  <!-- End Blog Article -->
</template>

<script lang="ts">
import { mapActions, mapGetters } from "vuex";
import TheUserAddressForm from "../common/TheUserAddressForm.vue";
import OrderService from "@/services/OrderService";

export default {
  data() {
    return {
      totalPrice: 0,
      inventory: [],
    };
  },
  components: {
    TheUserAddressForm,
  },
  computed: {
    //...mapGetters("cart", ["inventory"]),
  },
  props: {
    currentStep: String,
    order_id: Number,
  },
  methods: {
    setTotalPrice() {
      this.totalPrice = 0;
      if (this.inventory.length > 0) {
        for (let i = 0; i < this.inventory.length; i++) {
          this.totalPrice += this.inventory[i].price;
        }
      } else {
        this.totalPrice = 0;
      }
    },
    updateNextStep() {
      this.$emit("updateStep", "3");
    },
    async getOrderList(id) {
      await OrderService.getTempOrderList(id).then((response) => {
        this.inventory = response.data.data.order_item_list;
      });
    },
  },
  async mounted() {
    await this.getOrderList(this.order_id).then(() => {
      this.setTotalPrice();
    });
    //this.getOrderList(this.order_id)
  },
};
</script>

<style scoped>
table {
  border-collapse: collapse;
  margin: 0;
  padding: 0;
  width: 100%;
  table-layout: fixed;
}

table caption {
  font-size: 1.5em;
  margin: 0.5em 0 0.75em;
}

@media screen and (max-width: 600px) {
  table {
    border: 0;
  }

  table caption {
    font-size: 1.3em;
  }

  table thead {
    border: none;
    clip: rect(0 0 0 0);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    width: 1px;
  }

  table tr {
    display: block;
    margin-bottom: 0.625em;
  }

  table td {
    display: block;
    text-align: right;
  }

  table td::before {
    /*
    * aria-label has no advantage, it won't be read inside a table
    content: attr(aria-label);
    */
    content: attr(data-label);
    float: left;
    font-weight: bold;
    text-transform: uppercase;
  }

  table td:last-child {
    border-bottom: 0;
  }
}
</style>
