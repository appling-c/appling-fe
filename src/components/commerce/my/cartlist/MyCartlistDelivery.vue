<template>
  <div
    class="bg-white rounded-lg divide-y divide-gray-200 shadow dark:divide-gray-700 lg:divide-y-0 lg:divide-x lg:grid lg:grid-cols-3 dark:bg-gray-800"
  >
    <div class="sm:col-span-2 p-6 lg:p-8">
      <div class="flex flex-center">
        <div class="flex-1 rounded-xl p-4 sm:p-7 border-r border-gray-200">
          <!-- Section -->
          <div
            class="py-6 first:pt-0 last:pb-0 border-t first:border-transparent border-gray-200 dark:border-gray-700"
          >
            <label
              for="af-payment-billing-contact"
              class="inline-block text-lg font-bold"
            >
              구매자 정보
            </label>

            <div class="mt-2 space-y-3">
              <ul class="flex flex-col sm:flex-row">
                <li
                  v-for="type in sellerAddressTypeList"
                  :key="type.key"
                  class="inline-flex items-center gap-x-2.5 py-3 px-4 text-sm font-medium bg-white border text-gray-800 -mt-px first:rounded-t-lg first:mt-0 last:rounded-b-lg sm:-ml-px sm:mt-0 sm:first:rounded-tr-none sm:first:rounded-bl-lg sm:last:rounded-bl-none sm:last:rounded-tr-lg dark:bg-gray-800 dark:border-gray-700 dark:text-white"
                >
                  <div class="relative flex items-start w-full">
                    <div class="flex items-center h-5">
                      <input
                        :id="`hs-horizontal-list-group-item-radio-${type.key}`"
                        name="hs-horizontal-list-group-item-radio"
                        type="radio"
                        :value="type.key"
                        class="border-gray-200 rounded-full dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                        v-model="sellerAddressType"
                      />
                    </div>
                    <label
                      :for="`hs-horizontal-list-group-item-radio-${type.key}`"
                      class="ml-3 block w-full text-sm text-gray-600 dark:text-gray-500"
                    >
                      {{ type.text }}
                    </label>
                  </div>
                </li>
              </ul>
              <template v-if="sellerAddressType == '1'">
                <input
                  v-model="ownerAddressInfoFixed.name"
                  readonly
                  disabled
                  id="af-payment-billing-contact"
                  type="text"
                  class="disabled:bg-slate-200 disabled:opacity-75 py-2 px-3 pr-11 block w-full border-gray-200 shadow-sm text-base rounded-lg focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
                  placeholder="이름"
                />
                <input
                  v-model="ownerAddressInfoFixed.tel"
                  readonly
                  disabled
                  type="text"
                  class="disabled:bg-slate-200 disabled:opacity-75 py-2 px-3 pr-11 block w-full border-gray-200 shadow-sm text-base rounded-lg focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
                  placeholder="연락처"
                />
                <input
                  v-model="ownerAddressInfoFixed.address"
                  readonly
                  disabled
                  type="text"
                  class="disabled:bg-slate-200 disabled:opacity-75 py-2 px-3 pr-11 block w-full border-gray-200 shadow-sm text-base rounded-lg focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
                />
              </template>
              <template v-if="sellerAddressType == '2'">
                <input
                  v-model="ownerInfo.name"
                  id="af-payment-billing-contact"
                  type="text"
                  class="py-2 px-3 pr-11 block w-full border-gray-200 shadow-sm text-base rounded-lg focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
                  placeholder="이름"
                />
                <input
                  type="text"
                  v-model="ownerInfo.tel"
                  class="py-2 px-3 pr-11 block w-full border-gray-200 shadow-sm text-base rounded-lg focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
                  placeholder="연락처"
                />

                <div class="grid grid-cols-3 gap-2">
                  <div class="col-span-2">
                    <div class="flex">
                      <input
                        @click="showAddresspopup(ownerInfo)"
                        v-model="ownerInfo.address"
                        placeholder="주소검색"
                        readonly
                        type="text"
                        class="py-2 px-3 pr-11 block w-full border-gray-200 shadow-sm text-base rounded-lg focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
                      />
                      <button
                        @click="showAddresspopup(ownerInfo)"
                        type="button"
                        class="inline-flex flex-shrink-0 justify-center items-center h-[2.875rem] w-[2.875rem] rounded-r-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:z-10 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all text-sm"
                      >
                        <svg
                          class="h-4 w-4"
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          viewBox="0 0 16 16"
                        >
                          <path
                            d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                  <div>
                    <input
                      v-model="ownerInfo.zonecode"
                      type="text"
                      readonly
                      disabled
                      class="py-2 px-3 pr-11 block w-full border-gray-200 shadow-sm text-base rounded-lg focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
                      placeholder="우편번호"
                    />
                  </div>
                </div>
                <input
                  v-model="ownerInfo.address_detail"
                  type="text"
                  class="py-2 px-3 pr-11 block w-full border-gray-200 shadow-sm text-base rounded-lg focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
                  placeholder="상세주소"
                />
              </template>
            </div>
          </div>
          <!-- End Section -->
        </div>
        <div class="flex-1 rounded-xl p-4 sm:p-7">
          <!-- Section -->
          <div
            class="py-6 first:pt-0 last:pb-0 border-t first:border-transparent border-gray-200 dark:border-gray-700"
          >
            <label
              for="af-payment-billing-address"
              class="inline-block text-lg font-bold dark:text-white"
            >
              배송지 정보
            </label>

            <div class="mt-2 space-y-3">
              <input
                id="af-payment-billing-contact"
                type="text"
                class="py-2 px-3 pr-11 block w-full border-gray-200 shadow-sm text-base rounded-lg focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
                placeholder="이름"
                v-model="recipientInfo.name"
              />
              <input
                type="text"
                class="py-2 px-3 pr-11 block w-full border-gray-200 shadow-sm text-base rounded-lg focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
                placeholder="연락처"
                v-model="recipientInfo.tel"
              />

              <div class="grid grid-cols-3 gap-2">
                <div class="col-span-2">
                  <div class="flex">
                    <input
                      @click="showAddresspopup(recipientInfo)"
                      placeholder="주소검색"
                      :value="recipientInfo.address"
                      readonly
                      type="text"
                      class="py-2 px-3 pr-11 block w-full border-gray-200 shadow-sm text-base rounded-lg focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
                    />
                    <button
                      @click="showAddresspopup(recipientInfo)"
                      readonly
                      type="button"
                      class="inline-flex flex-shrink-0 justify-center items-center h-[2.875rem] w-[2.875rem] rounded-r-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:z-10 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all text-sm"
                    >
                      <svg
                        class="h-4 w-4"
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        viewBox="0 0 16 16"
                      >
                        <path
                          d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
                <div>
                  <input
                    :value="recipientInfo.zonecode"
                    type="text"
                    readonly
                    disabled
                    class="py-2 px-3 pr-11 block w-full border-gray-200 shadow-sm text-base rounded-lg focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
                    placeholder="우편번호"
                  />
                </div>
              </div>
              <input
                v-model="recipientInfo.address_detail"
                type="text"
                class="py-2 px-3 pr-11 block w-full border-gray-200 shadow-sm text-base rounded-lg focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
                placeholder="상세주소"
              />
            </div>
          </div>
          <!-- End Section -->
        </div>
      </div>
    </div>
    <div class="flex p-6 lg:p-8">
      <div id="starter-plan" class="self-center w-full text-gray-900">
        <div class="mb-4 text-2xl font-semibold text-gray-900">
          <div class="col-span-2 p-6 lg:p-8">
            <h2 class="mb-1 text-2xl font-bold text-gray-900 dark:text-white">
              배송 정보 입력하기
            </h2>
            <p class="text-lg font-light text-gray-500 dark:text-gray-400">
              주문상품과 배송정보를 확인해주세요.
            </p>
            <div class="grid gap-4 mt-4 lg:mt-6">
              <!-- List -->
              <ul role="list" class="space-y-4 dark:text-white">
                <li
                  class="flex space-x-2.5"
                  v-for="(cItem, cIndex) in cartList"
                  :key="cIndex"
                >
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
                  <span class="text-base leading-tight text-gray-500 dark:text-gray-400"
                    >{{ cItem?.productName }}
                    <span v-if="cItem?.targetOption">
                      / {{ cItem?.targetOption?.name }} </span
                    >/ {{ cItem?.count }} BOX</span
                  >
                </li>
              </ul>
            </div>
          </div>
        </div>
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
          href="#"
          class="mt-4 flex items-center mb-4 font-medium text-primary-600 hover:text-primary-700 dark:text-primary-500"
        >
          뒤로가기
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
</template>

<script setup lang="ts">
import { computed, ref, watch, onMounted, defineProps, defineEmits, reactive } from "vue";
import { useStore } from "vuex";

import TheDeliveryAddressForm from "./TheDeliveryAddressForm.vue";
import OrderService from "@/services/OrderService";

const props = defineProps({
  currentStep: {
    type: String,
  },
  order_id: {
    type: Number,
  },
});

const sellerAddressTypeList = ref([
  {
    key: "1",
    text: "농장 주소로 발송",
  },
  {
    key: "2",
    text: "새로운 주소로 발송",
  },
]);

const sellerAddressType = ref("1");
var self = this;
const store = useStore();
const cartList = computed(() => {
  return store.getters["cart/inventory"];
});

const totalPrice = computed(() => {
  return cartList.value.reduce((total, item) => total + item.productTotalPrice, 0);
});

//const totalPrice = ref(0);
const inventory = ref([]);
let ownerInfo = reactive({
  name: "",
  address: "",
  tel: "",
  zonecode: "",
  address_detail: "",
});
let recipientInfo = reactive({
  name: "",
  address: "",
  tel: "",
  zonecode: "",
  address_detail: "",
});

const ownerAddressInfoFixed = ref({
  name: "자연햇살농원",
  tel: "010-1234-5678",
  address: "서울특별시",
  zonecode: "99999",
  address_detail: "일이삼 사오육",
});

const userInfoInterface = computed(() => store.getters["auth/userInfoInterface"]);

const emit = defineEmits(["updateOrderNumber", "updateStep"]);

async function getOrderList(id: number) {
  const { data } = await OrderService.getTempOrderList(id);
  inventory.value = data.order_item_list;
}

async function showAddresspopup(userInfoObj) {
  new daum.Postcode({
    oncomplete: function (data) {
      const { address, zonecode } = data;
      userInfoObj.address = address;
      userInfoObj.zonecode = zonecode;
    },
  }).open();
}

function addressFormInvalidCheck() {
  const targetObjectList = ["recipientInfo", "ownerInfo"];

  const targetCheckList = ["name", "address", "tel", "zonecode", "address_detail"];

  if (!recipientInfo.name) {
    alert("배송지 정보를 입력해주세요.");
    return false;
  }

  if (sellerAddressType.value == "1") {
    ownerInfo = Object.assign({}, ownerAddressInfoFixed.value); // ownerAddressInfoFixed;
  }

  for (let i = 0; i < targetObjectList.length; i++) {
    const targetObject = targetObjectList[i];
    for (let j = 0; j < targetCheckList.length; j++) {
      if (targetObject[`${targetCheckList[j]}`] == "") {
        alert("" + targetCheckList[j] + "을 입력해주세요");
        return false;
      }
    }
  }

  return true;
}

async function updateNextStep() {
  if (!addressFormInvalidCheck()) {
    return;
  }

  const ownerInfoArr = Object.keys(ownerInfo)
    .filter((key) => ownerInfo[key] !== "")
    .reduce((acc, key) => {
      acc[`owner_${key}`] = ownerInfo[key];
      return acc;
    }, {});

  const recipientArr = Object.keys(recipientInfo)
    .filter((key) => recipientInfo[key] !== "")
    .reduce((acc, key) => {
      acc[`recipient_${key}`] = recipientInfo[key];
      return acc;
    }, {});

  const payload = {
    ...ownerInfoArr,
    ...recipientArr,
    order_id: props.order_id,
  };

  const response = await OrderService.setOrder(payload);
  emit("updateOrderNumber", response.data.data.order_number);
  emit("updateStep", "3");
}

onMounted(async () => {
  //await getOrderList(props.order_id);
  ownerInfo.name = userInfoInterface.value.name;
});
</script>
