<template>
	<!-- Invoice -->
	<div>
		<header class=" ">
			<h1 class="block text-2xl font-bold text-gray-800 sm:text-3xl dark:text-white">
				📦 주문 상세보기
			</h1>
			<div class="mt-5 flex flex-col items-center gap-2 sm:flex-row sm:gap-3">
				<router-link
					to="/admin/order/history"
					class="w-full sm:w-auto inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold text-blue-500 hover:text-blue-700 focus:outline-none focus:ring-2 ring-offset-gray-50 focus:ring-blue-500 focus:ring-offset-2 transition-all text-base py-3 px-4 dark:ring-offset-slate-900"
				>
					<svg class="w-2.5 h-2.5" width="16" height="16" viewBox="0 0 16 16" fill="none">
						<path
							d="M11.2792 1.64001L5.63273 7.28646C5.43747 7.48172 5.43747 7.79831 5.63273 7.99357L11.2792 13.64"
							stroke="currentColor"
							stroke-width="2"
							stroke-linecap="round"
						></path>
					</svg>
					주문내역으로 돌아가기
				</router-link>
			</div>
		</header>
		<!-- Card Section -->
		<!-- Table Section -->

		<!-- End Table Section -->
		<div class=" ">
			<!-- Table Section -->

			<!-- Card -->
			<div class="flex flex-col">
				<div class="-m-1.5 overflow-x-auto">
					<div class="p-1.5 min-w-full inline-block align-middle">
						<div
							class="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden dark:bg-slate-900 dark:border-gray-700"
						>
							<div class="p-10">
								<!-- Grid -->
								<div
									class="mb-5 pb-5 flex justify-between items-center border-b border-gray-200 dark:border-gray-700"
								>
									<div>
										<h2
											class="text-2xl font-semibold text-gray-800 dark:text-gray-200"
										>
											{{ orderNumber }}
										</h2>
									</div>
									<!-- Col -->

									<div class="inline-flex gap-x-2">
										<a
											class="py-2 px-3 inline-flex justify-center items-center gap-2 rounded-lg border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm dark:bg-gray-800 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800"
											href="#"
										>
											<svg
												class="flex-shrink-0 w-4 h-4"
												xmlns="http://www.w3.org/2000/svg"
												width="24"
												height="24"
												viewBox="0 0 24 24"
												fill="none"
												stroke="currentColor"
												stroke-width="2"
												stroke-linecap="round"
												stroke-linejoin="round"
											>
												<path
													d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"
												/>
												<polyline points="7 10 12 15 17 10" />
												<line x1="12" x2="12" y1="15" y2="3" />
											</svg>
											Invoice PDF
										</a>
										<a
											class="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
											data-modal-target="crud-modal"
											data-modal-toggle="crud-modal"
										>
											<svg
												class="w-3.5 h-3.5 me-2"
												aria-hidden="true"
												xmlns="http://www.w3.org/2000/svg"
												fill="currentColor"
												viewBox="0 0 18 21"
											>
												<path
													d="M15 12a1 1 0 0 0 .962-.726l2-7A1 1 0 0 0 17 3H3.77L3.175.745A1 1 0 0 0 2.208 0H1a1 1 0 0 0 0 2h.438l.6 2.255v.019l2 7 .746 2.986A3 3 0 1 0 9 17a2.966 2.966 0 0 0-.184-1h2.368c-.118.32-.18.659-.184 1a3 3 0 1 0 3-3H6.78l-.5-2H15Z"
												/>
											</svg>
											주문 상태 변경
										</a>
									</div>
									<!-- Col -->
								</div>
								<!-- End Grid -->

								<!-- Grid -->
								<div class="grid md:grid-cols-2 gap-3">
									<div>
										<div class="grid space-y-3">
											<dl class="grid sm:flex gap-x-3 text-sm">
												<dt
													class="min-w-[150px] max-w-[200px] text-gray-500"
												>
													주문자 정보:
												</dt>
												<dd class="text-gray-800 dark:text-gray-200">
													<!-- <a
														class="inline-flex items-center gap-x-1.5 text-blue-600 decoration-2 hover:underline font-medium"
														href="#"
													>
														{{ orderUser.name }} ({{ orderUser.email }})
													</a> -->
												</dd>
											</dl>

											<dl class="grid sm:flex gap-x-3 text-sm">
												<dt
													class="min-w-[150px] max-w-[200px] text-gray-500"
												>
													발송지 정보:
												</dt>
												<dd
													class="font-medium text-gray-800 dark:text-gray-200"
												>
													<span class="block font-semibold">최준호</span>
													<address class="not-italic font-normal">
														45603, 경기도 안성시 내정로 54<br />
														안성여자고등학교 430-1<br />
													</address>
												</dd>
											</dl>

											<dl class="grid sm:flex gap-x-3 text-sm">
												<dt
													class="min-w-[150px] max-w-[200px] text-gray-500"
												>
													배송지 정보:
												</dt>
												<dd
													class="font-medium text-gray-800 dark:text-gray-200"
												>
													<span class="block font-semibold">김시얼</span>
													<address class="not-italic font-normal">
														43203, 경기도 성남시 분당구 분당동<br />
														106동 301호<br />
													</address>
												</dd>
											</dl>
										</div>
									</div>
									<!-- Col -->

									<div>
										<div class="grid space-y-3">
											<dl class="grid sm:flex gap-x-3 text-sm">
												<dt
													class="min-w-[150px] max-w-[200px] text-gray-500"
												>
													주문상태:
												</dt>
												<dd
													class="font-medium text-gray-800 dark:text-gray-200"
												>
													<the-order-status-chip color="blue" />
												</dd>
											</dl>
											<dl class="grid sm:flex gap-x-3 text-sm">
												<dt
													class="min-w-[150px] max-w-[200px] text-gray-500"
												>
													주문일:
												</dt>
												<dd
													class="font-medium text-gray-800 dark:text-gray-200"
												>
													2023.12.21
												</dd>
											</dl>

											<dl class="grid sm:flex gap-x-3 text-sm">
												<dt
													class="min-w-[150px] max-w-[200px] text-gray-500"
												>
													상세정보1:
												</dt>
												<dd
													class="font-medium text-gray-800 dark:text-gray-200"
												>
													상세정보1의 내용
												</dd>
											</dl>

											<dl class="grid sm:flex gap-x-3 text-sm">
												<dt
													class="min-w-[150px] max-w-[200px] text-gray-500"
												>
													결제수단:
												</dt>
												<dd
													class="font-medium text-gray-800 dark:text-gray-200"
												>
													무통장 입금
												</dd>
											</dl>
										</div>
									</div>
									<!-- Col -->
								</div>
								<!-- End Grid -->

								<!-- Table -->
								<div
									class="mt-6 border border-gray-200 p-4 rounded-lg space-y-4 dark:border-gray-700"
								>
									<div class="hidden sm:grid sm:grid-cols-5">
										<div
											class="sm:col-span-2 text-xs font-medium text-gray-500 uppercase"
										>
											상품명
										</div>
										<div
											class="text-start text-xs font-medium text-gray-500 uppercase"
										>
											옵션
										</div>
										<div
											class="text-start text-xs font-medium text-gray-500 uppercase"
										>
											수량
										</div>
										<div
											class="text-end text-xs font-medium text-gray-500 uppercase"
										>
											금액
										</div>
									</div>

									<div
										class="hidden sm:block border-b border-gray-200 dark:border-gray-700"
									></div>

									<div class="grid grid-cols-3 sm:grid-cols-5 gap-2">
										<div class="col-span-full sm:col-span-2">
											<h5
												class="sm:hidden text-xs font-medium text-gray-500 uppercase"
											>
												상품명
											</h5>
											<p class="font-medium text-gray-800 dark:text-gray-200">
												시나노 골드
											</p>
										</div>
										<div>
											<h5
												class="sm:hidden text-xs font-medium text-gray-500 uppercase"
											>
												옵션
											</h5>
											<p class="text-gray-800 dark:text-gray-200">
												가정용홈과
											</p>
										</div>
										<div>
											<h5
												class="sm:hidden text-xs font-medium text-gray-500 uppercase"
											>
												수량
											</h5>
											<p class="text-gray-800 dark:text-gray-200">5</p>
										</div>
										<div>
											<h5
												class="sm:hidden text-xs font-medium text-gray-500 uppercase"
											>
												금액
											</h5>
											<p class="sm:text-end text-gray-800 dark:text-gray-200">
												₩ 5,000
											</p>
										</div>
									</div>

									<div
										class="sm:hidden border-b border-gray-200 dark:border-gray-700"
									></div>

									<div class="grid grid-cols-3 sm:grid-cols-5 gap-2">
										<div class="col-span-full sm:col-span-2">
											<h5
												class="sm:hidden text-xs font-medium text-gray-500 uppercase"
											>
												상품명
											</h5>
											<p class="font-medium text-gray-800 dark:text-gray-200">
												감홍
											</p>
										</div>
										<div>
											<h5
												class="sm:hidden text-xs font-medium text-gray-500 uppercase"
											>
												옵션
											</h5>
											<p class="text-gray-800 dark:text-gray-200"></p>
										</div>
										<div>
											<h5
												class="sm:hidden text-xs font-medium text-gray-500 uppercase"
											>
												수량
											</h5>
											<p class="text-gray-800 dark:text-gray-200">2</p>
										</div>
										<div>
											<h5
												class="sm:hidden text-xs font-medium text-gray-500 uppercase"
											>
												금액
											</h5>
											<p class="sm:text-end text-gray-800 dark:text-gray-200">
												₩ 2,000
											</p>
										</div>
									</div>

									<div
										class="sm:hidden border-b border-gray-200 dark:border-gray-700"
									></div>

									<div class="grid grid-cols-3 sm:grid-cols-5 gap-2">
										<div class="col-span-full sm:col-span-2">
											<h5
												class="sm:hidden text-xs font-medium text-gray-500 uppercase"
											>
												Item
											</h5>
											<p class="font-medium text-gray-800 dark:text-gray-200">
												SEO
											</p>
										</div>
										<div>
											<h5
												class="sm:hidden text-xs font-medium text-gray-500 uppercase"
											>
												Qty
											</h5>
											<p class="text-gray-800 dark:text-gray-200">1</p>
										</div>
										<div>
											<h5
												class="sm:hidden text-xs font-medium text-gray-500 uppercase"
											>
												Rate
											</h5>
											<p class="text-gray-800 dark:text-gray-200">6</p>
										</div>
										<div>
											<h5
												class="sm:hidden text-xs font-medium text-gray-500 uppercase"
											>
												Amount
											</h5>
											<p class="sm:text-end text-gray-800 dark:text-gray-200">
												$2000
											</p>
										</div>
									</div>
								</div>
								<!-- End Table -->

								<!-- Flex -->
								<div class="mt-8 flex sm:justify-end">
									<div class="w-full max-w-2xl sm:text-end space-y-2">
										<!-- Grid -->
										<div class="grid grid-cols-2 sm:grid-cols-1 gap-3 sm:gap-2">
											<dl class="grid sm:grid-cols-5 gap-x-3 text-sm">
												<dt class="col-span-3 text-gray-500">주문금액:</dt>
												<dd
													class="col-span-2 font-medium text-gray-800 dark:text-gray-200"
												>
													10,000원
												</dd>
											</dl>

											<dl class="grid sm:grid-cols-5 gap-x-3 text-sm">
												<dt class="col-span-3 text-gray-500">세부항목:</dt>
												<dd
													class="col-span-2 font-medium text-gray-800 dark:text-gray-200"
												>
													$2750.00
												</dd>
											</dl>

											<dl class="grid sm:grid-cols-5 gap-x-3 text-sm">
												<dt class="col-span-3 text-gray-500">세부항목:</dt>
												<dd
													class="col-span-2 font-medium text-gray-800 dark:text-gray-200"
												>
													$39.00
												</dd>
											</dl>

											<dl class="grid sm:grid-cols-5 gap-x-3 text-sm">
												<dt class="col-span-3 text-gray-500">세부항목:</dt>
												<dd
													class="col-span-2 font-medium text-gray-800 dark:text-gray-200"
												>
													$2789.00
												</dd>
											</dl>

											<dl class="grid sm:grid-cols-5 gap-x-3 text-sm">
												<dt class="col-span-3 text-gray-500">세부항목:</dt>
												<dd
													class="col-span-2 font-medium text-gray-800 dark:text-gray-200"
												>
													$0.00
												</dd>
											</dl>
										</div>
										<!-- End Grid -->
									</div>
								</div>
								<!-- End Flex -->
							</div>
						</div>
					</div>
				</div>
			</div>
			<!-- End Card -->

			<!-- End Table Section -->
		</div>
		<!-- End Card Section -->

		<!-- Main modal -->
		<div
			id="crud-modal"
			tabindex="-1"
			aria-hidden="true"
			class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"
		>
			<div class="relative p-4 w-full max-w-md max-h-full">
				<!-- Modal content -->
				<div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
					<!-- Modal header -->
					<div
						class="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600"
					>
						<h3 class="text-lg font-semibold text-gray-900 dark:text-white">
							주문 상태 변경
						</h3>
						<button
							type="button"
							class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
							data-modal-toggle="crud-modal"
						>
							<svg
								class="w-3 h-3"
								aria-hidden="true"
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 14 14"
							>
								<path
									stroke="currentColor"
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
								/>
							</svg>
							<span class="sr-only">Close modal</span>
						</button>
					</div>
					<!-- Modal body -->
					<form class="p-4 md:p-5">
						<div class="grid gap-4 mb-4 grid-cols-2">
							<div class="col-span-2">
								<label
									for="name"
									class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
									>주문번호</label
								>
								<input
									type="text"
									name="name"
									id="name"
									class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
									placeholder="order-3213123"
									readonly
									disabled
								/>
							</div>
							<div class="col-span-2 sm:col-span-1">
								<label
									for="price"
									class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
									>현재 주문 상태</label
								>
								<input
									readonly
									disabled
									name="price"
									id="price"
									class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
									placeholder="배송준비중"
									required=""
								/>
							</div>
							<div class="col-span-2 sm:col-span-1">
								<label
									for="category"
									class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
									>변경상태</label
								>
								<select
									id="category"
									class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
								>
									<option selected="">Select category</option>
									<option value="TV">배송준비중</option>
									<option value="PC">주문취소</option>
									<option value="GA">배송완료</option>
								</select>
							</div>
						</div>
						<p class="mt-2 mb-2 text-base text-gray-800 dark:text-gray-400">
							* 변경하면 바로 소비자한테 현재 상태가 노출되니까 한번 더 확인하세요 ! !
							!
						</p>
						<div class="inline-flex gap-x-2">
							<a
								class="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
							>
								<svg
									class="me-1 -ms-1 w-5 h-5"
									fill="currentColor"
									viewBox="0 0 20 20"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										fill-rule="evenodd"
										d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
										clip-rule="evenodd"
									></path>
								</svg>
								변경하기
							</a>
							<a
								class="py-2 px-3 inline-flex justify-center items-center gap-2 rounded-lg border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm dark:bg-gray-800 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800"
								href="#"
							>
								<svg
									class="flex-shrink-0 w-4 h-4"
									xmlns="http://www.w3.org/2000/svg"
									width="24"
									height="24"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									stroke-width="2"
									stroke-linecap="round"
									stroke-linejoin="round"
								>
									<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
									<polyline points="7 10 12 15 17 10" />
									<line x1="12" x2="12" y1="15" y2="3" />
								</svg>
								닫기
							</a>
						</div>
					</form>
				</div>
			</div>
		</div>
	</div>

	<!-- End Invoice -->
</template>

<script setup lang="ts">
	import { ref, onMounted, getCurrentInstance, computed } from "vue";
	import OrderService from "@/services/OrderService";
	import TheOrderStatusChip from "@/components/commerce/my/order/TheOrderStatusChip.vue";

	const order_id = ref(0);
	const orders = ref([]);
	const { proxy }: any = getCurrentInstance();

	const orderNumber = computed(() => orders.value?.order_number);

	const orderUser = computed(() => orders.value?.member);

	console.log(orderUser);

	const getRecentOrderSellerDetail = async () => {
		await OrderService.getRecentOrderSellerDetail(order_id.value).then((response) => {
			orders.value = response.data.data;
		});
	};

	onMounted(async () => {
		order_id.value = proxy.$route.params.id;
		await getRecentOrderSellerDetail();
	});
</script>
