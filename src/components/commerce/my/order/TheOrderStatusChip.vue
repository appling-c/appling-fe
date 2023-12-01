<template>
	<span
		:class="`bg-${dataColorSet[status]}-100 text-${dataColorSet[status]}-800 
        text-base font-semibold me-2 px-2.5 py-0.5 rounded`"
		>{{ type == "seller" ? orderSellerStatus[status] : orderMemberStatus[status] }}</span
	>
</template>

<script setup lang="ts">
	import { defineProps } from "vue";
	import { orderSellerStatus, orderMemberStatus } from "@/types/order";
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
</script>
