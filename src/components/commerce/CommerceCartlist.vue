<template>
	<div class="max-w-2xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
		<!-- Card -->
		<div class="bg-white rounded-xl shadow p-4 sm:p-7 dark:bg-slate-900">
			<div class="text-center mb-8">
				<h2 class="text-2xl md:text-3xl font-bold text-gray-800 dark:text-gray-200">
					Payment
				</h2>
				<p class="text-base text-gray-600 dark:text-gray-400">
					Manage your payment methods.
				</p>
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
								class="inline-flex items-center gap-x-2.5 py-3 px-4 text-sm font-medium bg-white border text-gray-800 -mt-px first:rounded-t-lg first:mt-0 last:rounded-b-lg sm:-ml-px sm:mt-0 sm:first:rounded-tr-none sm:first:rounded-bl-lg sm:last:rounded-bl-none sm:last:rounded-tr-lg dark:bg-gray-800 dark:border-gray-700 dark:text-white"
							>
								<div class="relative flex items-start w-full">
									<div class="flex items-center h-5">
										<input
											id="hs-horizontal-list-group-item-radio-1"
											name="hs-horizontal-list-group-item-radio"
											type="radio"
											class="border-gray-200 rounded-full dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
											checked
										/>
									</div>
									<label
										for="hs-horizontal-list-group-item-radio-1"
										class="ml-3 block w-full text-sm text-gray-600 dark:text-gray-500"
									>
										농장 주소로 발송
									</label>
								</div>
							</li>

							<li
								class="inline-flex items-center gap-x-2.5 py-3 px-4 text-sm font-medium bg-white border text-gray-800 -mt-px first:rounded-t-lg first:mt-0 last:rounded-b-lg sm:-ml-px sm:mt-0 sm:first:rounded-tr-none sm:first:rounded-bl-lg sm:last:rounded-bl-none sm:last:rounded-tr-lg dark:bg-gray-800 dark:border-gray-700 dark:text-white"
							>
								<div class="relative flex items-start w-full">
									<div class="flex items-center h-5">
										<input
											id="hs-horizontal-list-group-item-radio-2"
											name="hs-horizontal-list-group-item-radio"
											type="radio"
											class="border-gray-200 rounded-full dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
										/>
									</div>
									<label
										for="hs-horizontal-list-group-item-radio-2"
										class="ml-3 block w-full text-sm text-gray-600 dark:text-gray-500"
									>
										새로운 주소로 발송
									</label>
								</div>
							</li>
						</ul>
						<input
							id="af-payment-billing-contact"
							type="text"
							class="py-2 px-3 pr-11 block w-full border-gray-200 shadow-sm text-base rounded-lg focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
							placeholder="이름"
						/>
						<input
							type="text"
							class="py-2 px-3 pr-11 block w-full border-gray-200 shadow-sm text-base rounded-lg focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
							placeholder="연락처"
						/>

						<div class="grid grid-cols-3 gap-2">
							<div class="col-span-2">
								<input
									type="text"
									class="py-2 px-3 pr-11 block w-full border-gray-200 shadow-sm text-base rounded-lg focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
									placeholder="상세주소"
								/>
								<button
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
								<div class="flex">
									<input
										placeholder="주소검색"
										readonly
										type="text"
										class="py-2 px-3 pr-11 block w-full border-gray-200 shadow-sm text-base rounded-lg focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
									/>
									<button
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
									type="text"
									readonly
									disabled
									class="py-2 px-3 pr-11 block w-full border-gray-200 shadow-sm text-base rounded-lg focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
									placeholder="우편번호"
								/>
							</div>
						</div>
						<input
							type="text"
							class="py-2 px-3 pr-11 block w-full border-gray-200 shadow-sm text-base rounded-lg focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
							placeholder="상세주소"
						/>
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
							id="af-payment-billing-address"
							type="text"
							class="py-2 px-3 pr-11 block w-full border-gray-200 shadow-sm text-base rounded-lg focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
							placeholder="Street Address"
						/>
						<input
							type="text"
							class="py-2 px-3 pr-11 block w-full border-gray-200 shadow-sm text-base rounded-lg focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
							placeholder="Apt, Syuite, Building (Optional)"
						/>
						<div class="sm:flex gap-3">
							<input
								type="text"
								class="py-2 px-3 pr-11 block w-full border-gray-200 shadow-sm text-base rounded-lg focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
								placeholder="Zip Code"
							/>
							<select
								class="py-2 px-3 pr-9 block w-full border-gray-200 shadow-sm text-base rounded-lg focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
							>
								<option selected="">City</option>
								<option>City 1</option>
								<option>City 2</option>
								<option>City 3</option>
							</select>
							<select
								class="py-2 px-3 pr-9 block w-full border-gray-200 shadow-sm text-base rounded-lg focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
							>
								<option selected="">State</option>
								<option>State 1</option>
								<option>State 2</option>
								<option>State 3</option>
							</select>
						</div>
					</div>
				</div>
				<!-- End Section -->

				<!-- Section -->
				<div
					class="py-6 first:pt-0 last:pb-0 border-t first:border-transparent border-gray-200 dark:border-gray-700"
				>
					<label
						for="af-payment-payment-method"
						class="inline-block text-base font-medium dark:text-white"
					>
						Payment method
					</label>

					<div class="mt-2 space-y-3">
						<input
							id="af-payment-payment-method"
							type="text"
							class="py-2 px-3 pr-11 block w-full border-gray-200 shadow-sm text-base rounded-lg focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
							placeholder="Name on Card"
						/>
						<input
							type="text"
							class="py-2 px-3 pr-11 block w-full border-gray-200 shadow-sm text-base rounded-lg focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
							placeholder="Card Number"
						/>
						<div class="sm:flex gap-3">
							<input
								type="text"
								class="py-2 px-3 pr-11 block w-full border-gray-200 shadow-sm text-base rounded-lg focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
								placeholder="Expiration Date"
							/>
							<input
								type="text"
								class="py-2 px-3 pr-11 block w-full border-gray-200 shadow-sm text-base rounded-lg focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
								placeholder="CVV Code"
							/>
						</div>
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
					type="button"
					class="py-2 px-3 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-base dark:focus:ring-offset-gray-800"
				>
					Save changes
				</button>
			</div>
		</div>
		<!-- End Card -->
	</div>
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
