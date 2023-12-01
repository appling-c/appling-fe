<template>
	<section class="bg-white dark:bg-gray-900">
		<!-- Pricing Card -->

		<template v-if="currentStep === '1'">
			<TheCartlistOrder
				:order_id="order_id"
				@updateStep="updateStep"
				@setOrderId="setOrderId"
				@updateOrderNumber="updateOrderNumber"
			/>
		</template>
		<template v-if="currentStep === '2'">
			<TheCartlistDelivery
				:order_id="order_id"
				@updateStep="updateStep"
				@updateOrderNumber="updateOrderNumber"
			/>
		</template>

		<template v-if="currentStep === '3'">
			<TheCartlistComplete
				:order_id="order_id"
				:order_number="order_number"
				@updateStep="updateStep"
				@updateOrderNumber="updateOrderNumber"
			/>
		</template>
	</section>
	<!--
   -->
</template>

<script lang="ts">
	import TheCartlistOrder from "@/components/commerce/my/cartlist/MyCartlistOrder.vue";
	import TheCartlistDelivery from "@/components/commerce/my/cartlist/MyCartlistDelivery.vue";
	import TheCartlistComplete from "@/components/commerce/my/cartlist/MyCartlistComplete.vue";
	export default {
		components: {
			TheCartlistOrder,
			TheCartlistDelivery,
			TheCartlistComplete,
		},

		data() {
			return {
				currentStep: "1",
				order_id: 0,
				order_number: "",
			};
		},
		methods: {
			updateStep(step) {
				this.currentStep = step;
			},
			setOrderId(id) {
				this.order_id = id;
			},
			updateOrderNumber(order_number) {
				this.order_number = order_number;
			},
		},

		mounted() {
			this.$emit("renderTabTitle", "장바구니");
		},
	};
</script>
