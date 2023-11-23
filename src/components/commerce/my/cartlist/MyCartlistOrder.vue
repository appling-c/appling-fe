<template>
  <div
    class="bg-white rounded-lg divide-y divide-gray-200 shadow dark:divide-gray-700 lg:divide-y-0 lg:divide-x lg:grid lg:grid-cols-3 dark:bg-gray-800"
  >
    <div class="col-span-2 p-6 lg:p-8">
      <h3 class="mb-4 text-lg font-medium text-gray-900">선택한 상품:</h3>

      <div id="starter-content" class="text-gray-900">
        <div class="flex flex-col">
          <div class="-m-1.5 overflow-x-auto">
            <div class="p-1.5 min-w-full inline-block align-middle">
              <div class="rounded-lg overflow-hidden">
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
                      <td
                        class="px-6 py-4 text-base font-medium text-slate-800 dark:text-slate-200"
                      >
                        <span
                          >{{ invent.productName }}
                          <span v-if="invent?.productType == 'OPTION'">
                            / {{ invent.targetOption?.name }}
                            <!-- (+{{
                            invent.targetOption?.extra_price.toLocaleString()
                          }}원) -->
                          </span>
                          <span class="text-base"
                            ><br /><span
                              class="bg-pink-100 text-pink-800 text-base font-medium me-2 px-2.5 py-0.5 rounded dark:bg-pink-900 dark:text-pink-300"
                              >할인가</span
                            >
                            ₩{{ invent.sellingPriceDP?.toLocaleString() }}
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
      </div>
    </div>
    <div class="flex p-6 lg:p-8">
      <div id="starter-plan" class="self-center w-full text-gray-900">
        <div class="mb-4 text-2xl font-semibold text-gray-900">
          <div class="col-span-2 p-6 lg:p-8">
            <h2 class="mb-1 text-2xl font-bold text-gray-900 dark:text-white">
              최종 주문 금액을 확인해주세요.
            </h2>
            <!-- <p class="text-lg font-light text-gray-500 dark:text-gray-400">
							Best for large scale uses and extended redistribution rights.
						</p> -->
            <div class="grid gap-4 mt-4 lg:mt-6">
              <!-- List -->
              <ul role="list" class="space-y-4 dark:text-white">
                <li class="flex space-x-2.5">
                  <!-- Icon -->
                  <svg
                    class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <span class="leading-tight text-gray-500 dark:text-gray-400"
                    >선택한 상품 금액 : {{ totalPrice?.toLocaleString() }}원</span
                  >
                </li>
                <li class="flex space-x-2.5">
                  <!-- Icon -->
                  <svg
                    class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <span class="leading-tight text-gray-500 dark:text-gray-400"
                    >배송비 : 0원</span
                  >
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="p-6 lg:p-8">
          <div class="font-light text-gray-500 dark:text-gray-400">최종 주문 금액</div>
          <div class="mb-4 text-3xl font-extrabold text-gray-900">
            {{ totalPrice?.toLocaleString() }}원
          </div>
          <a
            @click="updateNextStep()"
            class="pb-4 flex justify-center text-white w-full py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent text-indigo-500 text-base border-2 border-blue-200 font-semibold text-blue-500 hover:text-white hover:bg-blue-500 hover:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800"
            >구매하기</a
          >

          <a
            @click="movetocartlist()"
            class="mt-4 flex items-center mb-4 font-medium text-primary-600 hover:text-primary-700 dark:text-primary-500"
          >
            계속 쇼핑하기
            <svg
              class="ml-2 w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, defineProps, defineEmits, toRaw } from "vue";
import { useStore, mapActions } from "vuex";
import OrderService from "@/services/OrderService";

import router from "@/plugins/router";

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
  const { count, sellingPriceDP } = inventoryItem;
  let productTotalPrice = count * sellingPriceDP;
  const addCartItem = { ...inventoryItem, productTotalPrice };

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
    return router.push("/login?resultUrl=/my/cartlist");
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
  console.log(order_list);
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
