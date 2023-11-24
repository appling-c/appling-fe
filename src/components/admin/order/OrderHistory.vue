<template>
	<div>
		<div>
			<header class=" ">
				<h1 class="block text-2xl font-bold text-gray-800 sm:text-3xl dark:text-white">
					📦 주문 내역
				</h1>
				<p class="mt-2 text-lg text-gray-800 dark:text-gray-600">
					상품 정보를 등록한 후 한장짜리 <span class="text-blue-600">팜플렛</span>을
					만들어 홍보해보세요!
				</p>

				<div class="mt-5 flex flex-col items-center gap-2 sm:flex-row sm:gap-3">
					<router-link
						to="/admin/product/detail/0"
						class="w-full sm:w-auto inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold text-blue-500 hover:text-blue-700 focus:outline-none focus:ring-2 ring-offset-gray-50 focus:ring-blue-500 focus:ring-offset-2 transition-all text-base py-3 px-4 dark:ring-offset-slate-900"
					>
						<svg
							class="w-2.5 h-2.5"
							width="16"
							height="16"
							viewBox="0 0 16 16"
							fill="none"
						>
							<path
								d="M11.2792 1.64001L5.63273 7.28646C5.43747 7.48172 5.43747 7.79831 5.63273 7.99357L11.2792 13.64"
								stroke="currentColor"
								stroke-width="2"
								stroke-linecap="round"
							></path>
						</svg>
						새로운 상품 등록하기👀
					</router-link>
				</div>
			</header>
		</div>
		<div class="relative bg-white shadow-md dark:bg-gray-800 sm:rounded-lg">
			<div
				class="flex flex-col items-start justify-between p-4 space-y-3 dark:bg-gray-800 md:flex-row md:items-center md:space-y-0 md:space-x-4"
			>
				<div class="flex items-center">
					<h5 class="mr-3 font-semibold dark:text-white">Compare Products</h5>
					<div data-tooltip-target="info-tooltip">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							class="w-4 h-4 text-gray-400"
							viewbox="0 0 20 20"
							fill="currentColor"
							aria-hidden="true"
						>
							<path
								fill-rule="evenodd"
								clip-rule="evenodd"
								d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
							/>
						</svg>
						<span class="sr-only">More info</span>
					</div>
					<div
						id="info-tooltip"
						role="tooltip"
						class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
					>
						Selected Xbox Series S, PlayStation 5, and Xbox Series X
						<div class="tooltip-arrow" data-popper-arrow=""></div>
					</div>
				</div>
				<div class="flex flex-row items-center justify-end flex-shrink-0 w-auto space-x-3">
					<button
						type="button"
						class="flex items-center justify-center flex-shrink-0 px-4 py-2 text-sm font-medium text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800"
					>
						<svg
							class="h-3.5 w-3.5 mr-2"
							fill="currentColor"
							viewBox="0 0 20 20"
							xmlns="http://www.w3.org/2000/svg"
							aria-hidden="true"
						>
							<path
								clip-rule="evenodd"
								fill-rule="evenodd"
								d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
							></path>
						</svg>
						Add new product
					</button>
					<button
						type="button"
						class="flex items-center justify-center flex-shrink-0 px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg focus:outline-none hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							class="w-4 h-4 mr-2 text-gray-400"
							viewBox="0 0 20 20"
							fill="currentColor"
							aria-hidden="true"
						>
							<path
								fill-rule="evenodd"
								clip-rule="evenodd"
								d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z"
							/>
						</svg>
						Reset all
					</button>
				</div>
			</div>
			<div class="mx-4 border-t dark:mx-0 dark:border-gray-700 dark:bg-gray-800"></div>
			<div
				class="flex flex-col items-center justify-between px-4 pb-4 space-y-3 md:pb-0 md:mt-4 dark:bg-gray-800 md:flex-row md:space-y-0 md:space-x-4"
			>
				<ul
					class="flex-wrap hidden text-sm font-medium text-center text-gray-500 md:flex dark:text-gray-400"
				>
					<li class="mb-4 mr-2 lg:mr-4">
						<a
							href="#"
							class="inline-block px-4 py-2 border rounded-full dark:bg-gray-700 dark:border-gray-600 hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-white"
						>
							주문완료
						</a>
					</li>
					<li class="mb-4 mr-2 lg:mr-4">
						<a
							href="#"
							class="inline-block px-4 py-2 border rounded-full dark:bg-gray-700 dark:border-gray-600 hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-white"
							aria-current="page"
						>
							배송준비중
						</a>
					</li>
					<li class="mb-4 mr-2 lg:mr-4">
						<a
							href="#"
							class="inline-block px-4 py-2 text-white rounded-full bg-primary-600 active"
						>
							배송완료
						</a>
					</li>
					<li class="mb-4 mr-2 lg:mr-4">
						<a
							href="#"
							class="inline-block px-4 py-2 border rounded-full dark:bg-gray-700 dark:border-gray-600 hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-white"
						>
							주문취소
						</a>
					</li>
				</ul>

				<div class="flex items-center w-full space-x-4 md:w-auto">
					<select
						id="list-navigation"
						class="block w-full p-2 text-sm text-gray-900 border border-gray-300 rounded-lg md:hidden bg-gray-50 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
					>
						<option selected>주문완료</option>
						<option value="general">배송준비중</option>
						<option value="technical">배송완료</option>
						<option value="delivery">주문취소</option>
					</select>

					<div>
						<button
							id="actionsDropdownButton"
							data-dropdown-toggle="actionsDropdown"
							class="flex items-center justify-center w-full px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg md:mb-4 md:w-auto focus:outline-none hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
							type="button"
						>
							Actions
							<svg
								class="-mr-1 ml-1.5 w-5 h-5"
								fill="currentColor"
								viewbox="0 0 20 20"
								xmlns="http://www.w3.org/2000/svg"
								aria-hidden="true"
							>
								<path
									clip-rule="evenodd"
									fill-rule="evenodd"
									d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
								/>
							</svg>
						</button>
						<div
							id="actionsDropdown"
							class="z-10 hidden bg-white divide-y divide-gray-100 rounded shadow w-44 dark:bg-gray-700 dark:divide-gray-600"
						>
							<ul
								class="py-1 text-sm text-gray-700 dark:text-gray-200"
								aria-labelledby="actionsDropdownButton"
							>
								<li>
									<a
										href="#"
										class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
										>Mass Edit</a
									>
								</li>
							</ul>
							<div class="py-1">
								<a
									href="#"
									class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
									>Delete all</a
								>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="bg-white rounded-xl shadow p-4 sm:p-7 dark:bg-slate-900">
			<div class="container">
				<div class="flex flex-col">
					<div class="-m-1.5 overflow-x-auto">
						<div class="p-1.5 min-w-full inline-block align-middle">
							<div class="overflow-hidden">
								<table
									class="min-w-full divide-y divide-gray-200 dark:divide-gray-700"
								>
									<thead>
										<tr>
											<th
												scope="col"
												class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase"
											>
												주문번호
											</th>
											<th
												scope="col"
												class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase"
											>
												주문일자
											</th>
											<th
												scope="col"
												class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase"
											>
												주문상품
											</th>
											<th
												scope="col"
												class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase"
											>
												주문인
											</th>

											<th
												scope="col"
												class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase"
											>
												주문금액
											</th>
											<th
												scope="col"
												class="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase"
											>
												배송지정보
											</th>
										</tr>
									</thead>
									<tbody
										class="hs-accordion-group hs-accordion divide-y divide-gray-200 dark:divide-gray-700"
										v-for="order in orders.value"
										:key="order.order_id"
									>
										<tr :id="`hs-basic-with-arrow-heading-${order.order_id}`">
											<td
												class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200"
											>
												#{{ order.order_number }}
											</td>
											<td
												class="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200"
											>
												{{
													moment(order.created_at).format(
														"YYYY.MM.DD HH:mm"
													)
												}}
											</td>
											<td
												class="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200"
											>
												{{ order.order_item_list[0]?.main_title }}
												<span v-if="order.order_item_list.length - 1 > 1">
													외 {{ order.order_item_list.length - 1 }} 건
												</span>
											</td>
											<td
												class="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200"
											>
												{{ order.member?.name }}
											</td>
											<td
												class="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200"
											>
												199,900원
											</td>
											<td
												class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium"
											>
												<a
													@click="orderDetail(order.order_id)"
													class="text-blue-500 hover:text-blue-700"
												>
													상세보기</a
												>
											</td>
										</tr>
									</tbody>
								</table>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
	import OrderService from "@/services/OrderService";
	import moment from "moment";
	import { reactive } from "vue";
	import { mapActions, useStore } from "vuex";

  import router from "../../../plugins/router";

	const orderTotalCount = 20;

	let orders = reactive([]);
	const store = useStore();

	const updateSpinnerStatus = () => store.getters["cart/updateSpinnerStatus"];

	async function getRecentOrderList() {
		const reqestStr = `?search=&page=0&size=5&status=complete`;
		await OrderService.getRecentOrderList(reqestStr).then((response) => {
			orders.value = response.data.data?.list;
			console.log(orders);
			updateSpinnerStatus(false);
		});
	}

	function orderDetail(orderID) {
		router.push("/admin/order/history/detail/" + orderID);
	}

	getRecentOrderList();
</script>
