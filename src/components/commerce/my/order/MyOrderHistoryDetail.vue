<template>
  <div class="p-8 sm:p-10 mx-auto w-full">
    <div class="pb-10 mx-4 grid grid-cols-4 gap-4 mb-7 border-b border-gray-200">
      <a
        @click="movetoOrderList()"
        class="col-span-4 mt-4 flex items-center mb-4 font-medium text-primary-600 hover:text-primary-700 dark:text-primary-500"
      >
        주문 내역으로 돌아가기
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
      <div class="col-span-4">
        <h2
          class="mb-2 text-xl font-semibold leading-none text-gray-900 md:text-2xl dark:text-white"
        >
          <span>주문정보</span>
        </h2>
      </div>
     
      <div class="hidden md:block col-span-1">주문번호</div>
      <div class="col-span-4 md:col-span-3">{{ orderNumber }}</div>
      <div class="hidden md:block col-span-1">주문일</div>
      <div class="col-span-4 md:col-span-3">{{ orders.created_at }}</div>
      <div class="hidden md:block col-span-1">주문 상태</div>
      <div class="col-span-4 md:col-span-3">
        <the-order-status-chip color="blue" />
      </div>
    </div>

    <div class="pb-10 mx-4 grid grid-cols-4 gap-4 mb-7 border-b border-gray-200">
      <div class="col-span-4">
        <h2
          class="mb-2 text-xl font-semibold leading-none text-gray-900 md:text-2xl dark:text-white"
        >
          <span>상품정보</span>
        </h2>
      </div>

      <div
        class="col-span-4"
        v-for="product in orderItemList"
        :key="product.order_item_id"
      >
        <the-order-product-card showButtonArea :productItem="product" />
      </div>
    </div>

    <div class="pb-10 p-2 mx-4 grid grid-cols-4 gap-4 mb-7 border-b border-gray-200">
      <div class="col-span-4">
        <h2
          class="mb-2 text-xl font-semibold leading-none text-gray-900 md:text-2xl dark:text-white"
        >
          <span>발송 정보</span>
        </h2>
      </div>
      <div class="hidden md:block col-span-1">이름</div>
      <div class="col-span-4 md:col-span-3">{{ orderDeliveryInfo?.owner_name }}</div>

      <div class="hidden md:block col-span-1">연락처</div>
      <div class="col-span-4 md:col-span-3">{{ orderDeliveryInfo?.owner_tel }}</div>

      <div class="hidden md:block col-span-1">주소</div>
      <div class="col-span-4 md:col-span-3">
        ({{ orderDeliveryInfo?.owner_zonecode }})
        {{ orderDeliveryInfo?.owner_address }}
        {{ orderDeliveryInfo?.owner_address_detail }}
      </div>
    </div>

    <div class="pb-10 p-2 mx-4 grid grid-cols-4 gap-4 mb-7 border-b border-gray-200">
      <div class="col-span-4">
        <h2
          class="mb-2 text-xl font-semibold leading-none text-gray-900 md:text-2xl dark:text-white"
        >
          <span>배송지 정보</span>
        </h2>
      </div>
      <div class="hidden md:block col-span-1">받는사람</div>
      <div class="col-span-4 md:col-span-3">{{ orderDeliveryInfo?.recipient_name }}</div>

      <div class="hidden md:block col-span-1">연락처</div>
      <div class="col-span-4 md:col-span-3">{{ orderDeliveryInfo?.recipient_tel }}</div>

      <div class="hidden md:block col-span-1">받는주소</div>
      <div class="col-span-4 md:col-span-3">
        ({{ orderDeliveryInfo?.recipient_zonecode }})
        {{ orderDeliveryInfo?.recipient_address }}
        {{ orderDeliveryInfo?.recipient_address_detail }}
      </div>
    </div>

    <div class="pb-10 mx-4 grid grid-cols-4 gap-4 mb-7 border-b border-gray-200">
      <div class="col-span-4">
        <h2
          class="mb-2 text-xl font-semibold leading-none text-gray-900 md:text-2xl dark:text-white"
        >
          <span>주문 금액</span>
        </h2>
      </div>
      <div class="col-span-1">상품금액</div>
      <div class="col-span-3">{{ orderTotalPrice }}원</div>

      <div class="col-span-1">배송비</div>
      <div class="col-span-3">0원</div>

      <div class="col-span-1">총 결제금액</div>
      <div class="col-span-3">{{ orderTotalPrice }}원</div>
    </div>

    <div class="pb-10 mx-4 grid grid-cols-4 gap-4 mb-7 border-b border-gray-200">
      <div class="col-span-4">
        <h2
          class="mb-2 text-xl font-semibold leading-none text-gray-900 md:text-2xl dark:text-white"
        >
          <span>상품처</span>
        </h2>
      </div>
      <div class="col-span-4 font-bold">자연햇살농원</div>
      <div class="col-span-4">강원도 평창군 내맘은 덤더러덤더러덤덤덤</div>
      <div class="col-span-4">010-2332-1234</div>
      <div class="col-span-4">카카오뱅크 101-1234-333333</div>
      <div class="col-span-4">* 판매자에게 직접 연락하시면 빠른 확인이 가능합니다.</div>
    </div>

    <div class="pb-10 mx-4 grid grid-cols-4 gap-4">
      <div class="col-span-4">
        <h2
          class="mb-2 text-xl font-semibold leading-none text-gray-900 md:text-2xl dark:text-white"
        >
          <span>배송상품 주문상태 안내</span>
        </h2>
      </div>
      <div class="col-span-4">
        <ol
          class="flex items-center w-full p-3 space-x-2 text-sm font-medium text-center text-gray-500 bg-white border border-gray-200 rounded-lg shadow-sm dark:text-gray-400 sm:text-base dark:bg-gray-800 dark:border-gray-700 sm:p-4 sm:space-x-4 rtl:space-x-reverse"
        >
          <li class="flex items-center text-blue-600 dark:text-blue-500">
            <span
              class="flex items-center justify-center w-5 h-5 me-2 text-xs border border-blue-600 rounded-full shrink-0 dark:border-blue-500"
            >
              1
            </span>
            주문완료 <span class="hidden sm:inline-flex sm:ms-2">Info</span>
            <svg
              class="w-3 h-3 ms-2 sm:ms-4 rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 12 10"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m7 9 4-4-4-4M1 9l4-4-4-4"
              />
            </svg>
          </li>
          <li class="flex items-center">
            <span
              class="flex items-center justify-center w-5 h-5 me-2 text-xs border border-gray-500 rounded-full shrink-0 dark:border-gray-400"
            >
              2
            </span>
            상품준비 <span class="hidden sm:inline-flex sm:ms-2">Info</span>
            <svg
              class="w-3 h-3 ms-2 sm:ms-4 rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 12 10"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m7 9 4-4-4-4M1 9l4-4-4-4"
              />
            </svg>
          </li>
          <li class="flex items-center">
            <span
              class="flex items-center justify-center w-5 h-5 me-2 text-xs border border-gray-500 rounded-full shrink-0 dark:border-gray-400"
            >
              3
            </span>
            배송완료
          </li>
        </ol>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, getCurrentInstance, computed, defineEmits } from "vue";
import OrderService from "@/services/OrderService";
import TheOrderStatusChip from "@/components/commerce/my/order/TheOrderStatusChip.vue";
import TheOrderProductCard from "./TheOrderProductCard.vue";

const emit = defineEmits(["renderTabTitle"]);

const order_id = ref(0);
const orders = ref([]);
const { proxy }: any = getCurrentInstance();

const orderNumber = computed(() => orders.value?.order_number);

const orderUser = computed(() => orders.value?.member);

const orderDeliveryInfo = computed(() => orders.value?.delivery);

const orderTotalPrice = 0;

const orderItemList = computed(() => orders.value?.order_item_list);
const getRecentOrderListMemberDetail = async () => {
  await OrderService.getRecentOrderListMemberDetail(order_id.value).then((response) => {
    orders.value = response.data.data;
  });
};
function movetoOrderList() {
  proxy.$router.push("/my/order/history");
}
onMounted(async () => {
  order_id.value = proxy.$route.params.id;
  await getRecentOrderListMemberDetail();
  emit("renderTabTitle", "주문확인/배송조회 > 주문상세");
});
</script>
