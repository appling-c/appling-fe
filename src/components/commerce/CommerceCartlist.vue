<template>
	<div class="max-w-2xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
		<!-- Card -->
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

		<!-- End Card -->
	</div>
	<template v-if="currentStep === '3'">
		<TheCartlistComplete
			:order_id="order_id"
			:order_number="order_number"
			@updateStep="updateStep"
			@updateOrderNumber="updateOrderNumber"
		/>
	</template>
</template>

<script lang="ts">
	import { mapActions, mapGetters } from "vuex";
	import TheCartlistOrder from "./cartlist/cartlistOrder.vue";
	import TheCartlistDelivery from "./cartlist/cartlistDelivery.vue";
	import TheCartlistComplete from "./cartlist/cartlistComplete.vue";
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

		mounted() {},
	};
</script>
