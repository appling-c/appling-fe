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

            <!-- Blog Article -->
            <div class="max-w-3xl px-4 pt-6 lg:pt-10 pb-12 sm:px-6 lg:px-8 mx-auto">
              <div class="max-w-2xl">
                <!-- Content -->
                <div class="space-y-5 md:space-y-5">
                  <div class="py-6">
                    <div class="space-y-3">
                      <h6 class="text-2xl font-bold md:text-3xl dark:text-white">구매자 정보</h6>
                      <the-delivery-address-form
                        @updateUserAddressForm="ownerInfo"
                        :userAddressForm="ownerInfo"
                      />
                    </div>
                  </div>

                  <div class="py-6">
                    <div class="space-y-3">
                      <h6 class="text-2xl font-bold md:text-3xl dark:text-white">배송지 정보</h6>
                      <the-delivery-address-form
                        @updateUserAddressForm="recipientInfo"
                        :userAddressForm="recipientInfo"
                      />
                    </div>
                  </div>

                  <div class="py-6">
                    <div class="space-y-3">
                      <h4 class="text-2xl font-bold md:text-3xl dark:text-white">주문내역</h4>
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
                  </div>
                </div>
                <!-- End Content -->
              </div>
            </div>
            <!-- End Blog Article -->
          </div>
        </div>
      </div>

      <!-- Icon Blocks -->
      <div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        <div class="max-w-2xl mx-auto">
          <!-- Grid -->
          <div class="grid gap-12">
            <p class="mt-3 text-slate-800 dark:text-slate-400">
              구매할 상품과 배송지를 한 번 더 확인해주세요!<br />
              위 주문 내용을 확인 하였으며, 회원 본인은 개인정보 이용 및 제공 및 결제에 동의합니다.
            </p>

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
import TheDeliveryAddressForm from "../cartlist/TheDeliveryAddressForm.vue";
import OrderService from "@/services/OrderService";

export default {
  data() {
    return {
      totalPrice: 0,
      inventory: [],
      ownerInfo: {
        name: "",
        address: "",
        tel: "",
        zonecode: "",
        address_detail: "",
      },
      recipientInfo: {
        name: "",
        address: "",
        tel: "",
        zonecode: "",
        address_detail: "",
      },
    };
  },
  components: {
    TheDeliveryAddressForm,
  },
  watch: {
    order_id(value) {
      this.getOrderList(value).then(() => {
        this.setTotalPrice();
      });
    },
  },
  computed: {
    ...mapGetters("auth", ["userInfoInterface"]),
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
    //this.getOrderList(this.order_id)
    this.ownerInfo.name = this.userInfoInterface.name;
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
