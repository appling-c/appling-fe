<template>
  <span
    :class="`bg-${dataColorSet[status]}-100 text-${dataColorSet[status]}-800 
        text-base font-semibold me-2 px-2.5 py-0.5 rounded`"
    >{{ type == "seller" ? orderSellerStatus[status] : orderMemberStatus[status] }}</span
  >
</template>

<script setup lang="ts">
import { defineProps } from "vue";

const props = defineProps({
  status: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
});

const dataColorSet = {
  ORDERED: "blue", // ordered
  PROCESSING: "green", // processing
  CONFIRM: "yellow", // confirm
  CANCEL: "pink", // cancel
};
const orderSellerStatus = {
  ORDERED: "주문완료",
  PROCESSING: "주문확인",
  CONFIRM: "배송완료",
  CANCEL: "주문취소",
};

const orderMemberStatus = {
  ORDERED: "주문완료",
  PROCESSING: "상품준비중",
  CONFIRM: "발송완료",
  CANCEL: "주문취소",
};
</script>
