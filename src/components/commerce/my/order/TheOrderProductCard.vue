<template>
	<div class="p-4 mx-4 grid grid-cols-5 gap-4 border-b-2">
		<div class="col-span-1">
			<img
				class="md:h-40 sm:h-16 w-full rounded-lg object-scale-down"
				src="https://appling-s3-bucket.s3.ap-northeast-2.amazonaws.com/image/2/20231026/105017_0.png"
				alt="image description"
			/>
		</div>
		<div class="col-span-4">
			<div>
				<p
					class="mb-4 text-base font-extrabold leading-none text-gray-900 md:text-2xl dark:text-white"
				>
					티피링크 미니 스마트 Wi-Fi P100
				</p>

				<div class="block sm:hidden mx-4 grid grid-cols-3 gap-4">
					<div class="col-span-1 border-r-2 pr-2 w-max">10kg</div>

					<div class="col-span-1 border-r-2 pr-2 w-max">4개</div>

					<div class="col-span-1 w-max">139,000원</div>
				</div>

				<dl class="sm:flex hidden flex items-center space-x-6">
					<div>
						<dt class="mb-2 font-semibold leading-none text-gray-900 dark:text-white">
							수량
						</dt>
						<dd class="mb-4 font-light text-slate-900 sm:mb-5 dark:text-gray-400">4</dd>
					</div>
					<div>
						<dt class="mb-2 font-semibold leading-none text-gray-900 dark:text-white">
							선택 옵션
						</dt>
						<dd class="mb-4 font-light text-slate-900 sm:mb-5 dark:text-gray-400">
							12kg
						</dd>
					</div>
					<div>
						<dt class="mb-2 font-semibold leading-none text-gray-900 dark:text-white">
							가격
						</dt>
						<dd class="mb-4 font-light text-slate-900 sm:mb-5 dark:text-gray-400">
							183,000원
						</dd>
					</div>
				</dl>
				<div v-if="isShowButtonArea" class="sm:block hidden flex items-center space-x-4">
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
						재구매
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
		<div
			v-if="isShowButtonArea"
			class="col-span-5 sm:hidden grid grid-cols-3 items-center space-x-4"
		>
			<button
				type="button"
				class="w-max text-gray-900 bg-white inline-flex items-center border border-gray-200 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200"
			>
				배송조회
			</button>
			<button
				type="button"
				class="w-max text-gray-900 bg-white inline-flex items-center border border-gray-200 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200"
			>
				재구매
			</button>
			<button
				type="button"
				class="w-max inline-flex items-center text-white bg-red-600 hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-red-500 dark:hover:bg-red-600 dark:focus:ring-red-900"
			>
				주문취소
			</button>
		</div>
	</div>
</template>

<script setup lang="ts">
	import defineProps from "vue";

	const props = defineProps({
		isShowButtonArea: {
			type: Boolean,
			default: false,
		},
	});
</script>
