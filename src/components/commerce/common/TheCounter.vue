<template>
	<div class="relative flex items-center max-w-[8rem]">
		<div class="flex rounded-md">
			<button
				type="button"
				id="decrement-button"
				@click="minusProductCount()"
				data-input-counter-decrement="quantity-input"
				class="bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 border border-gray-300 rounded-s-lg p-3 h-11 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none"
			>
				<svg
					class="w-3 h-3 text-gray-900 dark:text-white"
					aria-hidden="true"
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 18 2"
				>
					<path
						stroke="currentColor"
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M1 1h16"
					/>
				</svg>
			</button>
			<input
				type="text"
				id="quantity-input"
				data-input-counter
				data-input-counter-min="1"
				:data-input-counter-max="ea"
				aria-describedby="helper-text-explanation"
				class="bg-gray-50 border-x-0 border-gray-300 h-11 text-center text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full py-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
				placeholder="수량"
				required
				v-model="count"
			/>
			<button
				type="button"
				id="increment-button"
				@click="plusProductCount()"
				data-input-counter-increment="quantity-input"
				class="bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 border border-gray-300 rounded-e-lg p-3 h-11 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none"
			>
				<svg
					class="w-3 h-3 text-gray-900 dark:text-white"
					aria-hidden="true"
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 18 18"
				>
					<path
						stroke="currentColor"
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M9 1v16M1 9h16"
					/>
				</svg>
			</button>
		</div>
	</div>
</template>
<script>
	export default {
		props: {
			ea: [Number, String],
			selectCount: [Number, String],
			productType: String,
			product: [Object, Array],
		},
		data() {
			return {
				count: 0,
			};
		},
		compted: {
			maxCount() {
				return this.ea;
			},
		},
		watch: {
			selectCount(value) {
				this.count = value;
			},
		},
		methods: {
			/**
			 * Increments the product count and updates the product price.
			 *
			 * @param {type} paramName - description of parameter
			 * @return {type} description of return value
			 */
			plusProductCount() {
				if (this.count >= this.maxCount) {
					this.count = this.maxCount;
				} else {
					this.count++;
				}
				this.$emit("updateProductPrice", {
					count: this.count,
					productType: this.productType,
					product : this.product
				});
			},

			/**
			 * Decreases the product count by one and updates the product price.
			 *
			 * @param {type} none - This function does not take any parameters.
			 * @return {type} undefined - This function does not return a value.
			 */
			minusProductCount() {
				if (this.count <= 1) {
					this.count = 1;
				} else {
					this.count--;
				}
				this.$emit("updateProductPrice", {
					count: this.count,
					productType: this.productType,
					product : this.product
				});
			},
		},
		mounted() {
			this.count = this.selectCount;

			console.log(this.selectCount);
		},
	};
</script>
