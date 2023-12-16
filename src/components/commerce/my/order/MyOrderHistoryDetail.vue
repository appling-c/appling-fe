<template>
  <div class="p-4 sm:p-6 mx-auto w-full">
    <div class="pb-6 grid grid-cols-4 gap-4 mb-7 border-b border-gray-200">
      <a
        @click="movetoOrderList()"
        class="col-span-4 mt-4 flex items-center mb-4 font-medium text-primary-600 hover:text-primary-700 dark:text-primary-500"
      >
        <span class="hidden sm:inline">주문 내역으로 돌아가기</span>
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
      <div class="col-span-4 md:col-span-3">{{ moment(order?.created_at).format("YYYY.MM.DD HH:mm") }}</div>
      <div class="hidden md:block col-span-1">주문 상태</div>
      <div class="col-span-4 md:col-span-3">
        <TheOrderStatusChip :status="orders?.status" type="member" />
      </div>
    </div>

    <div class="pb-6 grid grid-cols-4 gap-4 mb-7 border-b border-gray-200">
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

    <div class="pb-6 p-2 grid grid-cols-4 gap-4 mb-7 border-b border-gray-200">
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

    <div class="pb-6 p-2 grid grid-cols-4 gap-4 mb-7 border-b border-gray-200">
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

    <div class="pb-6 grid grid-cols-4 gap-4 mb-7 border-b border-gray-200">
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

    <div class="pb-6 grid grid-cols-4 gap-4 mb-7">
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
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, getCurrentInstance, computed, defineEmits } from "vue";
import OrderService from "@/services/OrderService";
import TheOrderStatusChip from "@/components/commerce/my/order/TheOrderStatusChip.vue";
import TheOrderProductCard from "./TheOrderProductCard.vue";
import moment from "moment";
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
