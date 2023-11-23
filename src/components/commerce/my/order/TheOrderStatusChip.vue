<template>
	<span
		:class="`bg-${color}-100 text-${color}-800 
        text-base font-semibold me-2 px-2.5 py-0.5 rounded`"
		>{{ dataColorSet[color] }}</span
	>
</template>

<script setup lang="ts">
	import { defineProps } from "vue";

	const props = defineProps({
		color: {
			type: String,
			required: true,
		},
	});

	const dataColorSet = {
		blue: "주문완료",
		green: "배송중",
		yellow: "배송완료",
		pink: "취소완료",
	};
</script>
