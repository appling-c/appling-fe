<template>
  <div class="md:items-center md:gap-12 xl:gap-32">
    <div>
      <div class="text-center mb-8">
        <h2 class="text-2xl md:text-3xl font-bold text-gray-800 dark:text-gray-200">
          장바구니
        </h2>
        <p class="text-base text-gray-600 dark:text-gray-400">
          주문 수량을 수정, 삭제할 수 있어요.
        </p>
      </div>
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
                      colspan="2"
                      scope="col"
                      class="px-6 py-3 text-left text-base font-medium text-slate-500 uppercase"
                    >
                      가격
                    </th>
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
                    <td
                      class="px-6 py-4 text-base font-medium text-slate-800 dark:text-slate-200"
                    >
                      <span
                        >{{ invent.productName }}
                        <span v-if="invent?.productType == 'OPTION'">
                          / {{ invent.targetOption?.name }} (+{{
                            invent.targetOption?.extra_price.toLocaleString()
                          }}원)
                        </span>
                        <span class="text-xs"
                          ><br />1EA : (할인가) ₩{{
                            invent.sellingPriceDP.toLocaleString()
                          }}
                        </span>
                      </span>
                    </td>
                    <td class="px-6 py-4 text-base text-slate-800 dark:text-slate-200">
                      <select
                        class="py-2 px-3 pr-9 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
                        v-model="invent.count"
                        @change="updateCartList(invent)"
                      >
                        <option
                          v-for="(opt, index) in optionList"
                          :key="index"
                          :value="opt.value"
                        >
                          {{ opt.value }}
                        </option>
                      </select>
                    </td>
                    <td class="px-6 py-4 text-base text-slate-800 dark:text-slate-200">
                      {{ invent?.productTotalPrice?.toLocaleString() }}
                    </td>
                    <td class="px-6 py-4 text-right text-base font-medium">
                      <a
                        @click="deleteItem(index)"
                        class="text-blue-500 hover:text-blue-700"
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
      <div class="max-w-[85rem] px-4 py-5 sm:px-6 lg:px-8 lg:py-7 mx-auto">
        <!-- Card Section -->
        <div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
          <!-- Grid -->
          <div class="grid sm:grid-cols-3 border-y border-gray-200 dark:border-gray-800">
            <!-- Card -->
            <div
              class="p-4 md:p-5 relative before:absolute before:top-0 before:left-0 before:w-full before:h-px sm:before:w-px sm:before:h-full before:bg-gray-200 before:first:bg-transparent dark:before:bg-gray-700"
            >
              <div>
                <svg
                  class="flex-shrink-0 w-6 h-6 text-gray-500"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1h8Zm-7.978-1A.261.261 0 0 1 7 12.996c.001-.264.167-1.03.76-1.72C8.312 10.629 9.282 10 11 10c1.717 0 2.687.63 3.24 1.276.593.69.758 1.457.76 1.72l-.008.002a.274.274 0 0 1-.014.002H7.022ZM11 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM6.936 9.28a5.88 5.88 0 0 0-1.23-.247A7.35 7.35 0 0 0 5 9c-4 0-5 3-5 4 0 .667.333 1 1 1h4.216A2.238 2.238 0 0 1 5 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816ZM4.92 10A5.493 5.493 0 0 0 4 13H1c0-.26.164-1.03.76-1.724.545-.636 1.492-1.256 3.16-1.275ZM1.5 5.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0Zm3-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4Z"
                  />
                </svg>

                <div class="mt-3">
                  <div class="flex items-center gap-x-2">
                    <p class="text-base uppercase tracking-wide text-gray-500">
                      선택한 상품 금액
                    </p>
                  </div>
                  <div class="mt-1 lg:flex lg:justify-between lg:items-center">
                    <h3
                      class="text-xl sm:text-2xl font-semibold text-gray-800 dark:text-gray-200"
                    >
                      {{ totalPrice.toLocaleString() }}원
                    </h3>
                  </div>
                </div>
              </div>
            </div>
            <!-- End Card -->

            <!-- Card -->
            <div
              class="p-4 md:p-5 relative before:absolute before:top-0 before:left-0 before:w-full before:h-px sm:before:w-px sm:before:h-full before:bg-gray-200 before:first:bg-transparent dark:before:bg-gray-700"
            >
              <div>
                <svg
                  class="flex-shrink-0 w-6 h-6 text-gray-500"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M2 1.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-1v1a4.5 4.5 0 0 1-2.557 4.06c-.29.139-.443.377-.443.59v.7c0 .213.154.451.443.59A4.5 4.5 0 0 1 12.5 13v1h1a.5.5 0 0 1 0 1h-11a.5.5 0 1 1 0-1h1v-1a4.5 4.5 0 0 1 2.557-4.06c.29-.139.443-.377.443-.59v-.7c0-.213-.154-.451-.443-.59A4.5 4.5 0 0 1 3.5 3V2h-1a.5.5 0 0 1-.5-.5zm2.5.5v1a3.5 3.5 0 0 0 1.989 3.158c.533.256 1.011.791 1.011 1.491v.702c0 .7-.478 1.235-1.011 1.491A3.5 3.5 0 0 0 4.5 13v1h7v-1a3.5 3.5 0 0 0-1.989-3.158C8.978 9.586 8.5 9.052 8.5 8.351v-.702c0-.7.478-1.235 1.011-1.491A3.5 3.5 0 0 0 11.5 3V2h-7z"
                  />
                </svg>

                <div class="mt-3">
                  <div class="flex items-center gap-x-2">
                    <p class="text-base uppercase tracking-wide text-gray-500">배송비</p>
                  </div>
                  <div class="mt-1 lg:flex lg:justify-between lg:items-center">
                    <h3
                      class="text-xl sm:text-2xl font-semibold text-gray-800 dark:text-gray-200"
                    >
                      0 원
                    </h3>
                  </div>
                </div>
              </div>
            </div>
            <!-- End Card -->

            <!-- Card -->
            <div
              class="p-4 md:p-5 relative before:absolute before:top-0 before:left-0 before:w-full before:h-px sm:before:w-px sm:before:h-full before:bg-gray-200 before:first:bg-transparent dark:before:bg-gray-700"
            >
              <div>
                <svg
                  class="flex-shrink-0 w-6 h-6 text-gray-500"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M6.75 1a.75.75 0 0 1 .75.75V8a.5.5 0 0 0 1 0V5.467l.086-.004c.317-.012.637-.008.816.027.134.027.294.096.448.182.077.042.15.147.15.314V8a.5.5 0 1 0 1 0V6.435a4.9 4.9 0 0 1 .106-.01c.316-.024.584-.01.708.04.118.046.3.207.486.43.081.096.15.19.2.259V8.5a.5.5 0 0 0 1 0v-1h.342a1 1 0 0 1 .995 1.1l-.271 2.715a2.5 2.5 0 0 1-.317.991l-1.395 2.442a.5.5 0 0 1-.434.252H6.035a.5.5 0 0 1-.416-.223l-1.433-2.15a1.5 1.5 0 0 1-.243-.666l-.345-3.105a.5.5 0 0 1 .399-.546L5 8.11V9a.5.5 0 0 0 1 0V1.75A.75.75 0 0 1 6.75 1zM8.5 4.466V1.75a1.75 1.75 0 1 0-3.5 0v5.34l-1.2.24a1.5 1.5 0 0 0-1.196 1.636l.345 3.106a2.5 2.5 0 0 0 .405 1.11l1.433 2.15A1.5 1.5 0 0 0 6.035 16h6.385a1.5 1.5 0 0 0 1.302-.756l1.395-2.441a3.5 3.5 0 0 0 .444-1.389l.271-2.715a2 2 0 0 0-1.99-2.199h-.581a5.114 5.114 0 0 0-.195-.248c-.191-.229-.51-.568-.88-.716-.364-.146-.846-.132-1.158-.108l-.132.012a1.26 1.26 0 0 0-.56-.642 2.632 2.632 0 0 0-.738-.288c-.31-.062-.739-.058-1.05-.046l-.048.002zm2.094 2.025z"
                  />
                </svg>

                <div class="mt-3">
                  <div class="flex items-center gap-x-2">
                    <p class="text-base uppercase tracking-wide text-gray-500">
                      최종 주문 금액
                    </p>
                  </div>
                  <div class="mt-1 lg:flex lg:justify-between lg:items-center">
                    <h3
                      class="text-xl sm:text-2xl font-semibold text-gray-800 dark:text-gray-200"
                    >
                      {{ totalPrice.toLocaleString() }}원
                    </h3>
                  </div>
                </div>
              </div>
            </div>
            <!-- End Card -->
          </div>
          <!-- End Grid -->
        </div>
        <!-- End Card Section -->
        <div class="max-w-2xl mx-auto">
          <!-- Grid -->
          <div class="grid gap-12">
            <div>
              <h5
                v-if="inventoryList.length == 0"
                class="text-2xl text-slate-600 font-bold lg:text-2xl dark:text-white"
              >
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

<script setup lang="ts">
import { ref, computed, onMounted, defineProps, defineEmits, toRaw } from "vue";
import { useStore, mapActions } from "vuex";
import OrderService from "@/services/OrderService";

import router from "../../../plugins/router";

const emit = defineEmits(["updateStep", "setOrderId"]);

const store = useStore();

const props = defineProps({
  currentStep: Number,
});

const currentStep = props.currentStep;

const inventory = computed(() => {
  return store.getters["cart/inventory"];
});

const userInfoInterface = computed(() => {
  return store.getters["auth/userInfoInterface"];
});

const inventoryList = ref([]);
const isLogin = ref(false);
const optionList = Array.from({ length: 10 }, (_, i) => ({ value: i + 1 }));
const totalPrice = ref(0);

const updateCartItem = (addCartItem) => {
  store.dispatch("cart/updateCartItem", addCartItem);
};

const deleteCartItem = (deleteIndex) => {
  store.dispatch("cart/deleteCartItem", deleteIndex);
};

const { saveTempOrderList } = OrderService;

function deleteItem(index) {
  deleteCartItem(index);
  setTotalPrice();
  inventoryList.value = inventory.value;
}

function updateCartList(inventoryItem) {
  const { count, productID, productName, sellingPriceDP } = inventoryItem;

  let productTotalPrice = count * sellingPriceDP;

  const addCartItem = {
    count,
    productID,
    productName,
    productTotalPrice,
    //price: productPrice,
  };

  updateCartItem(addCartItem);
  setTotalPrice();
}

function setTotalPrice() {
  totalPrice.value = inventory.value.reduce(
    (total, item) => total + item.productTotalPrice,
    0
  );
}

async function updateNextStep() {
  const islogin = userInfoInterface?.value?.islogin;
  if (!userInfoInterface.value || !islogin) {
    return router.push("/login?resultUrl=/commerce/cartlist");
  }

  let order_list = [];
  inventory.value.map((item) => {
    let orderItem = {
      ea: Number(item.count),
      product_id: Number(item.productID),
    };
    if (item.productType == "OPTION") {
      orderItem["option_id"] = item.targetOption?.option_id;
    }
    order_list.push(orderItem);
  });

  const response = await saveTempOrderList(order_list);
  let order_id = response.data.data.order_id;

  //let order_id = 37;
  emit("setOrderId", order_id);

  emit("updateStep", "2");
}

function movetocartlist() {
  router.push("/commerce/main");
}

onMounted(() => {
  inventoryList.value = inventory.value;
  isLogin.value = userInfoInterface.value.islogin;
  setTotalPrice();
});
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
