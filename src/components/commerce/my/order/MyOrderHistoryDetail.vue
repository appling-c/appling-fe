<template>
	<div class="p-10 mx-auto w-full">
		<div class="pb-10 mx-4 grid grid-cols-4 gap-4 mb-7 border-b border-gray-200">
			<div class="col-span-4">
				<h2
					class="mb-2 text-xl font-semibold leading-none text-gray-900 md:text-2xl dark:text-white"
				>
					<span>주문정보</span>
				</h2>
			</div>
			<div class="col-span-1">주문번호</div>
			<div class="col-span-3">32100019973292</div>
			<div class="col-span-1">주문일</div>
			<div class="col-span-3">2023.11.19</div>
			<div class="col-span-1">주문 상태</div>
			<div class="col-span-3">
				<span
					class="bg-blue-100 text-blue-800 text-base font-semibold me-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300"
					>배송 준비중</span
				>
			</div>
		</div>

		<div class="pb-10 mx-4 grid grid-cols-4 gap-4 mb-7 border-b border-gray-200">
			<div class="col-span-4">
				<h2
					class="mb-2 text-xl font-semibold leading-none text-gray-900 md:text-2xl dark:text-white"
				>
					<span>상품정보</span>
				</h2>
			</div>
			<div class="col-span-4">
				<div class="p-2 mx-4 grid grid-cols-4 gap-4">
                    <div class="col-span-1">
						<img
							class="h-full w-1/2 rounded-lg"
							src="https://appling-s3-bucket.s3.ap-northeast-2.amazonaws.com/image/2/20231026/105017_0.png"
							alt="image description"
						/>
					</div>

					<div class="col-span-3">
						<p
							class="mb-4 text-xl font-extrabold leading-none text-gray-900 md:text-2xl dark:text-white"
						>
							티피링크 미니 스마트 Wi-Fi 플러그 P100
						</p>

						<dl class="flex items-center space-x-6">
							<div>
								<dt
									class="mb-2 font-semibold leading-none text-gray-900 dark:text-white"
								>
									수량
								</dt>
								<dd
									class="mb-4 font-light text-slate-900 sm:mb-5 dark:text-gray-400"
								>
									4
								</dd>
							</div>
							<div>
								<dt
									class="mb-2 font-semibold leading-none text-gray-900 dark:text-white"
								>
									선택 옵션
								</dt>
								<dd
									class="mb-4 font-light text-slate-900 sm:mb-5 dark:text-gray-400"
								>
									12kg
								</dd>
							</div>
							<div>
								<dt
									class="mb-2 font-semibold leading-none text-gray-900 dark:text-white"
								>
									가격
								</dt>
								<dd
									class="mb-4 font-light text-slate-900 sm:mb-5 dark:text-gray-400"
								>
									183,000원
								</dd>
							</div>
						</dl>
						<div class="flex items-center space-x-4">
							<button
								type="button"
								class="text-gray-900 bg-white inline-flex items-center border border-gray-200 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200"
							>
								배송조회
							</button>
							<button
								type="button"
								class="text-gray-900 bg-white inline-flex items-center border border-gray-200 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200"
							>
								장바구니 담기
							</button>
							<button
								type="button"
								class="inline-flex items-center text-white bg-red-600 hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-red-500 dark:hover:bg-red-600 dark:focus:ring-red-900"
							>
								주문취소
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>

		<div class="pb-10 p-2 mx-4 grid grid-cols-4 gap-4 mb-7 border-b border-gray-200">
			<div class="col-span-4">
				<h2
					class="mb-2 text-xl font-semibold leading-none text-gray-900 md:text-2xl dark:text-white"
				>
					<span>배송지 정보</span>
				</h2>
			</div>
			<div class="col-span-1">받는사람</div>
			<div class="col-span-3">한솔주공505</div>

			<div class="col-span-1">연락처</div>
			<div class="col-span-3">010-1231-1231</div>

			<div class="col-span-1">받는주소</div>
			<div class="col-span-3">(12384) 경기도 성남시 분당구 정자동 177 드람맘맘마 에스파</div>
		</div>

		<div class="pb-10 mx-4 grid grid-cols-4 gap-4 mb-7 border-b border-gray-200">
			<div class="col-span-4">
				<h2
					class="mb-2 text-xl font-semibold leading-none text-gray-900 md:text-2xl dark:text-white"
				>
					<span>주문 금액</span>
				</h2>
			</div>
			<div class="col-span-1">상품금액</div>
			<div class="col-span-3">18,6000원</div>

			<div class="col-span-1">할인금액</div>
			<div class="col-span-3">4,000원</div>

			<div class="col-span-1">배송비</div>
			<div class="col-span-3">0원</div>

			<div class="col-span-1">총 결제금액</div>
			<div class="col-span-3">14,600원</div>
		</div>

		<div class="pb-10 mx-4 grid grid-cols-4 gap-4 mb-7 border-b border-gray-200">
			<div class="col-span-4">
				<h2
					class="mb-2 text-xl font-semibold leading-none text-gray-900 md:text-2xl dark:text-white"
				>
					<span>상품처</span>
				</h2>
			</div>
			<div class="col-span-1">자연햇살농원</div>
			<div class="col-span-3">강원도 평창군 내맘은 덤더러덤더러덤덤덤</div>

			<div class="col-span-1">연락처</div>
			<div class="col-span-3">010-2332-1234</div>

			<div class="col-span-1">계좌번호</div>
			<div class="col-span-3">카카오뱅크 101-1234-333333</div>

			<div class="col-span-1"></div>
			<div class="col-span-3">* 판매자에게 직접 연락하시면 빠른 확인이 가능합니다.</div>
		</div>

		<div class="pb-10 mx-4 grid grid-cols-4 gap-4">
			<div class="col-span-4">
				<h2
					class="mb-2 text-xl font-semibold leading-none text-gray-900 md:text-2xl dark:text-white"
				>
					<span>배송상품 주문상태 안내</span>
				</h2>
			</div>
			<div class="col-span-4">
				<ol
					class="flex items-center w-full p-3 space-x-2 text-sm font-medium text-center text-gray-500 bg-white border border-gray-200 rounded-lg shadow-sm dark:text-gray-400 sm:text-base dark:bg-gray-800 dark:border-gray-700 sm:p-4 sm:space-x-4 rtl:space-x-reverse"
				>
					<li class="flex items-center text-blue-600 dark:text-blue-500">
						<span
							class="flex items-center justify-center w-5 h-5 me-2 text-xs border border-blue-600 rounded-full shrink-0 dark:border-blue-500"
						>
							1
						</span>
						주문완료 <span class="hidden sm:inline-flex sm:ms-2">Info</span>
						<svg
							class="w-3 h-3 ms-2 sm:ms-4 rtl:rotate-180"
							aria-hidden="true"
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 12 10"
						>
							<path
								stroke="currentColor"
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="m7 9 4-4-4-4M1 9l4-4-4-4"
							/>
						</svg>
					</li>
					<li class="flex items-center">
						<span
							class="flex items-center justify-center w-5 h-5 me-2 text-xs border border-gray-500 rounded-full shrink-0 dark:border-gray-400"
						>
							2
						</span>
						상품준비 <span class="hidden sm:inline-flex sm:ms-2">Info</span>
						<svg
							class="w-3 h-3 ms-2 sm:ms-4 rtl:rotate-180"
							aria-hidden="true"
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 12 10"
						>
							<path
								stroke="currentColor"
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="m7 9 4-4-4-4M1 9l4-4-4-4"
							/>
						</svg>
					</li>
					<li class="flex items-center">
						<span
							class="flex items-center justify-center w-5 h-5 me-2 text-xs border border-gray-500 rounded-full shrink-0 dark:border-gray-400"
						>
							3
						</span>
						배송완료
					</li>
				</ol>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
	import OrderService from "@/services/OrderService";
	import moment from "moment";
	import { reactive } from "vue";

	const orderTotalCount = 20;

	let orders = reactive([]);

	async function getRecentOrderListMember() {
		const reqestStr = `?search=&page=0&size=5&status=complete`;
		await OrderService.getRecentOrderListMember(reqestStr).then((response) => {
			orders.value = response.data.data?.list;
			console.log(orders);
		});
	}

	getRecentOrderListMember();
</script>

<style></style>
