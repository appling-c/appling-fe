<template>
  <div class="md:items-center md:gap-12 xl:gap-32">
    <div>
      <div class="flex flex-col">
        <div class="-m-1.5 overflow-x-auto">
          <div class="p-1.5 min-w-full inline-block align-middle">
            <div class="border rounded-lg overflow-hidden dark:border-gray-700">
              <table
                v-if="inventoryList.length > 0"
                class="min-w-full divide-y divide-gray-200 dark:divide-gray-700"
              >
                <colgroup>
                  <col />
                  <col width="20%" />
                  <col width="10%" />
                  <col width="15%" />
                </colgroup>

                <thead class="bg-gray-50 dark:bg-gray-700">
                  <tr>
                    <!-- <th scope="col" class="py-3 pl-4">
                        <div class="flex items-center h-5">
                          <input
                            id="hs-table-checkbox-all"
                            type="checkbox"
                            class="border-gray-200 rounded text-blue-600 focus:ring-blue-500"
                          />
                          <label for="hs-table-checkbox-all" class="sr-only">Checkbox</label>
                        </div>
                      </th> -->
                    <th
                      scope="col"
                      class="px-6 py-3 text-left text-base font-medium text-slate-500 uppercase"
                    >
                      상품명
                    </th>
                    <th
                      scope="col"
                      class="px-6 py-3 text-left text-base font-medium text-slate-500 uppercase"
                    >
                      수량
                    </th>
                    <th
                      scope="col"
                      class="px-6 py-3 text-left text-base font-medium text-slate-500 uppercase"
                    >
                      가격
                    </th>
                    <th
                      scope="col"
                      class="px-6 py-3 text-right text-xs font-medium text-slate-500 uppercase"
                    ></th>
                  </tr>
                </thead>
                <tbody class="divide-y divide-gray-200 dark:divide-gray-700">
                  <tr v-for="(invent, index) in inventoryList" :key="index">
                    <!-- <td class="py-3 pl-4">
                        <div class="flex items-center h-5">
                          <input
                            id="hs-table-checkbox-1"
                            type="checkbox"
                            class="border-gray-200 rounded text-blue-600 focus:ring-blue-500"
                          />
                          <label for="hs-table-checkbox-1" class="sr-only">Checkbox</label>
                        </div>
                      </td> -->
                    <td class="px-6 py-4 text-base font-medium text-slate-800 dark:text-slate-200">
                      {{ invent.productName }}
                    </td>
                    <td class="px-6 py-4 text-base text-slate-800 dark:text-slate-200">
                      <select
                        class="py-2 px-3 pr-9 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
                        v-model="invent.count"
                        @change="updateCartList(invent)"
                      >
                        <option v-for="(opt, index) in optionList" :key="index" :value="opt.value">
                          {{ opt.value }}
                        </option>
                      </select>
                    </td>
                    <td class="px-6 py-4 text-base text-slate-800 dark:text-slate-200">
                      {{ invent?.price?.toLocaleString() }}
                    </td>
                    <td class="px-6 py-4 text-right text-base font-medium">
                      <a @click="deleteItem(index)" class="text-blue-500 hover:text-blue-700"
                        >삭제</a
                      >
                    </td>
                  </tr>
                </tbody>
              </table>
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
              <h5
                v-if="inventoryList.length > 0"
                class="text-2xl text-slate-600 font-bold lg:text-2xl dark:text-white"
              >
                최종 주문 금액 : {{ totalPrice.toLocaleString() }}원
              </h5>

              <h5 v-else class="text-2xl text-slate-600 font-bold lg:text-2xl dark:text-white">
                장바구니 내역이 없습니다.
              </h5>

              <!-- <p class="mt-3 text-slate-800 dark:text-slate-400">
                  구매할 상품과 수량을 한 번 더 확인해주세요!<br />
                  아래 주문하기 버튼을 눌러 주문을 진행할 수 있습니다.
                </p> -->
            </div>

            <div v-if="inventoryList.length > 0" class="flex gap-2">
              <!-- Icon Block -->

              <button
                @click="movetocartlist()"
                type="button"
                class="w-full py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent text-indigo-500 text-base border-2 border-blue-200 font-semibold text-blue-500 hover:text-white hover:bg-blue-500 hover:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800"
              >
                계속 쇼핑하기
              </button>
              <button
                @click="updateNextStep"
                type="button"
                class="w-full py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md bg-indigo-100 border border-transparent font-semibold text-indigo-500 hover:text-white hover:bg-indigo-100 focus:outline-none focus:ring-2 ring-offset-white focus:ring-indigo-500 focus:ring-offset-2 transition-all text-base dark:focus:ring-offset-gray-800"
              >
                배송정보 입력하기
              </button>
              <!-- End Icon Block -->
            </div>

            <div v-else>
              <button
                @click="movetocartlist()"
                type="button"
                class="w-full py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent text-indigo-500 text-base border-2 border-blue-200 font-semibold text-blue-500 hover:text-white hover:bg-blue-500 hover:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800"
              >
                계속 쇼핑하기
              </button>
            </div>
          </div>
          <!-- End Grid -->
        </div>
      </div>
    </div>
    <!-- End Col -->
    <!-- End Col -->
  </div>
</template>

<script lang="ts">
import { mapActions, mapGetters } from "vuex";
import OrderService from "@/services/OrderService";

export default {
  props: {
    currentStep: String,
  },
  computed: {
    ...mapGetters("cart", ["inventory"]),
    ...mapGetters("auth", ["userInfoInterface"]),
  },
  data() {
    return {
      inventoryList: [],
      isLogin: false,
      optionList: [],
      totalPrice: 0,
    };
  },
  methods: {
    ...mapActions("cart", ["updateCartItem", "deleteCartItem"]),
    deleteItem(index) {
      this.deleteCartItem(index);
      this.setTotalPrice();
      this.inventoryList = this.inventory;
    },
    updateCartList(invent) {
      const { count, productID, productName, originPrice } = invent;

      const addCartItem = {
        count,
        productID,
        productName,
        price: originPrice * count,
      };

      this.updateCartItem(addCartItem);
      this.setTotalPrice();
    },

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
    moveto(path) {
      return this.$router.push(path);
    },
    async updateNextStep() {
      let order_list = [];
      for (let i = 0; i < this.inventory.length; i++) {
        order_list.push({
          ea: Number(this.inventory[i].count),
          product_id: Number(this.inventory[i].productID),
        });
      }
      let order_id = 0;
      await OrderService.saveTempOrderList(order_list).then((response) => {
        order_id = response.data.data.order_id;
        this.$emit("setOrderId", order_id);
        this.$emit("updateStep", "2");
      });

      // this.$emit("setOrderId", 19);
      // this.$emit("updateStep", "2");
    },
    movetocartlist() {
      this.$router.push("/commerce/main");
    },
  },
  mounted() {
    this.inventoryList = this.inventory;
    this.isLogin = this.userInfoInterface.islogin;

    for (let i = 0; i < 10; i++) {
      this.optionList.push({
        value: i + 1,
      });
    }

    console.log(this.inventory);

    this.setTotalPrice();
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
    width: initial;
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

  colgroup col {
    width: 100%;
  }

  table th {
    display: block;
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
