<template>
  <!-- Blog Article -->
  <!-- Features -->
  <div class="bg-white rounded-xl shadow p-4 sm:p-7 dark:bg-slate-900">
    <div class="text-center mb-8">
      <h2 class="text-2xl md:text-3xl font-bold text-gray-800 dark:text-gray-200">
        배송 정보 입력하기
      </h2>
      <p class="text-base text-gray-600 dark:text-gray-400">배송 정보를 입력해주세요.</p>
    </div>

    <form>
      <!-- Section -->
      <div
        class="py-6 first:pt-0 last:pb-0 border-t first:border-transparent border-gray-200 dark:border-gray-700"
      >
        <label
          for="af-payment-billing-contact"
          class="inline-block text-base font-medium dark:text-white"
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
                    id="hs-horizontal-list-group-item-radio-1"
                    name="hs-horizontal-list-group-item-radio"
                    type="radio"
                    :value="type.key"
                    class="border-gray-200 rounded-full dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                    v-model="sellerAddressType"
                  />
                </div>
                <label
                  for="hs-horizontal-list-group-item-radio-1"
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
                    @click="showAddresspopup('ownerInfo')"
                    v-model="ownerInfo.address"
                    placeholder="주소검색"
                    readonly
                    type="text"
                    class="py-2 px-3 pr-11 block w-full border-gray-200 shadow-sm text-base rounded-lg focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
                  />
                  <button
                    @click="showAddresspopup('ownerInfo')"
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

      <!-- Section -->
      <div
        class="py-6 first:pt-0 last:pb-0 border-t first:border-transparent border-gray-200 dark:border-gray-700"
      >
        <label
          for="af-payment-billing-address"
          class="inline-block text-base font-medium dark:text-white"
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
    </form>

    <div class="mt-5 flex justify-end gap-x-2">
      <button
        type="button"
        class="py-2 px-3 inline-flex justify-center items-center gap-2 rounded-md border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-base dark:bg-slate-900 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800"
      >
        Cancel
      </button>
      <button
        @click="updateNextStep()"
        type="button"
        class="py-2 px-3 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-base dark:focus:ring-offset-gray-800"
      >
        Save changes
      </button>
    </div>
  </div>
  <!-- End Blog Article -->
</template>

<script setup lang="ts">
import { computed, ref, watch, onMounted, defineProps, defineEmits, reactive } from "vue";
import { useStore } from "vuex";

import TheDeliveryAddressForm from "../cartlist/TheDeliveryAddressForm.vue";
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

const totalPrice = ref(0);
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

function initializeInfo() {
  return {
    name: "",
    address: "",
    tel: "",
    zonecode: "",
    address_detail: "",
  };
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

  if (this.sellerAddressType == "1") {
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
  if (!this.addressFormInvalidCheck()) {
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
