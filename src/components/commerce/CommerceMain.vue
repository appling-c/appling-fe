<script>
	import TheSearchBar from "./common/TheSearchBar.vue";
	import { mapActions, mapGetters } from "vuex";

	export default {
		components: { TheSearchBar },
		data() {
			return {
				categorys: [],
				keyword: "",
				products: [],
			};
		},
		methods: {
			gotoproducts(category_id) {
				this.$router.push(`/commerce/search?categoryid=${category_id}`);
			},

			gopricing() {
				this.$router.push("/commerce/pricing");
			},

			async gotodetail(id) {
				// 조회수 증가
				const payload = {
					product_id: id,
				};
				await this.addProducetViewCount(payload).then(() => {
					this.$router.push(`/commerce/detail/${id}`);
				});
			},
			...mapActions("cart", [
				"getproductlist",
				"addProducetViewCount",
				"updateSpinnerStatus",
			]),
		},
		mounted() {
			this.getproductlist().then((response) => {
				this.updateSpinnerStatus(false);
				if (response.data.code !== "0000") {
					return (this.products = []);
				}
				const { list } = response?.data.data;

				this.products = list;
			});
		},
	};
</script>
<template>
	<div>
		<!-- Testimonials -->
		<div
			class="border-b-2 border-gray-200 relative max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto"
		>
			<!-- Blockquote -->
			<blockquote class="text-center lg:mx-auto lg:w-3/5">
				<span
					class="inline-flex items-center gap-1.5 py-1.5 px-3 rounded-full text-xs font-medium bg-red-500 text-white"
					>New Season!</span
				>

				<div class="mt-6 lg:mt-10">
					<p
						class="relative text-xl sm:text-2xl md:text-3xl md:leading-normal font-medium text-gray-800"
					>
						<svg
							class="absolute top-0 left-0 transform -translate-x-8 -translate-y-8 h-16 w-16 text-gray-200 sm:h-24 sm:w-24 dark:text-gray-700"
							width="16"
							height="13"
							viewBox="0 0 16 13"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
							aria-hidden="true"
						>
							<path
								d="M7.18079 9.25611C7.18079 10.0101 6.93759 10.6211 6.45119 11.0891C5.96479 11.5311 5.35039 11.7521 4.60799 11.7521C3.71199 11.7521 2.96958 11.4531 2.38078 10.8551C1.81758 10.2571 1.53598 9.39911 1.53598 8.28111C1.53598 7.08511 1.86878 5.91511 2.53438 4.77111C3.22559 3.60111 4.18559 2.67811 5.41439 2.00211L6.29759 3.36711C5.63199 3.83511 5.09439 4.35511 4.68479 4.92711C4.30079 5.49911 4.04479 6.16211 3.91679 6.91611C4.14719 6.81211 4.41599 6.76011 4.72319 6.76011C5.43999 6.76011 6.02879 6.99411 6.48959 7.46211C6.95039 7.93011 7.18079 8.52811 7.18079 9.25611ZM14.2464 9.25611C14.2464 10.0101 14.0032 10.6211 13.5168 11.0891C13.0304 11.5311 12.416 11.7521 11.6736 11.7521C10.7776 11.7521 10.0352 11.4531 9.44639 10.8551C8.88319 10.2571 8.60159 9.39911 8.60159 8.28111C8.60159 7.08511 8.93439 5.91511 9.59999 4.77111C10.2912 3.60111 11.2512 2.67811 12.48 2.00211L13.3632 3.36711C12.6976 3.83511 12.16 4.35511 11.7504 4.92711C11.3664 5.49911 11.1104 6.16211 10.9824 6.91611C11.2128 6.81211 11.4816 6.76011 11.7888 6.76011C12.5056 6.76011 13.0944 6.99411 13.5552 7.46211C14.016 7.93011 14.2464 8.52811 14.2464 9.25611Z"
								fill="currentColor"
							/>
						</svg>
						<span
							class="mt-3 font-bold relative z-10 italic text-gray-800 dark:text-gray-200"
							>둘이 먹다 하나 죽어도 모를, 그런 시나노골드</span
						>
					</p>
				</div>
				<figure>
					<img
						class="w-full object-cover rounded-xl"
						src="/src/assets/apples.jpeg"
						alt="Image Description"
					/>
				</figure>

				<footer class="mt-6">
					<div class="font-semibold text-gray-800 dark:text-gray-200">₩40,000 원부터</div>
					<!-- Buttons -->
					<div class="mt-8 grid gap-3 w-full sm:inline-flex sm:justify-center">
						<!-- End Buttons -->
						<div class="hs-accordion-group">
							<div class="hs-accordion" id="hs-basic-no-arrow-heading-one">
								<button
									class="hs-accordion-toggle inline-flex justify-center items-center gap-x-3 text-center bg-blue-600 hover:bg-blue-700 border border-transparent text-white text-sm font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white transition py-3 px-4 dark:focus:ring-offset-gray-800"
									aria-controls="hs-basic-no-arrow-collapse-one"
								>
									구매하기
									<svg
										class="w-3 h-3"
										width="16"
										height="16"
										viewBox="0 0 16 16"
										fill="none"
									>
										<path
											d="M5.27921 2L10.9257 7.64645C11.1209 7.84171 11.1209 8.15829 10.9257 8.35355L5.27921 14"
											stroke="currentColor"
											stroke-width="2"
											stroke-linecap="round"
										/>
									</svg>
								</button>
								<button
									class="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold text-gray-800 hover:bg-gray-800 hover:text-white focus:outline-none focus:ring-2 focus:ring-gray-800 focus:ring-offset-2 transition-all text-sm dark:text-white dark:hover:bg-gray-800 dark:hover:border-gray-900 dark:focus:ring-gray-900 dark:focus:ring-offset-gray-800"
									href="#"
								>
									<svg
										class="w-4 h-4"
										width="19"
										height="18"
										viewBox="0 0 19 18"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											d="M6.875 18C8.531 18 9.875 16.656 9.875 15V12H6.875C5.219 12 3.875 13.344 3.875 15C3.875 16.656 5.219 18 6.875 18Z"
											fill="#0ACF83"
										></path>
										<path
											d="M3.875 9C3.875 7.344 5.219 6 6.875 6H9.875V12H6.875C5.219 12 3.875 10.656 3.875 9Z"
											fill="#A259FF"
										></path>
										<path
											d="M3.875 3C3.875 1.344 5.219 0 6.875 0H9.875V6H6.875C5.219 6 3.875 4.656 3.875 3Z"
											fill="#F24E1E"
										></path>
										<path
											d="M9.87501 0H12.875C14.531 0 15.875 1.344 15.875 3C15.875 4.656 14.531 6 12.875 6H9.87501V0Z"
											fill="#FF7262"
										></path>
										<path
											d="M15.875 9C15.875 10.656 14.531 12 12.875 12C11.219 12 9.87501 10.656 9.87501 9C9.87501 7.344 11.219 6 12.875 6C14.531 6 15.875 7.344 15.875 9Z"
											fill="#1ABCFE"
										></path>
									</svg>
									자세히 알아보기
								</button>

								<div
									id="hs-basic-no-arrow-collapse-one"
									class="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
									aria-labelledby="hs-basic-no-arrow-heading-one"
								>
									<div class="mt-8 max-w-2xl mx-auto text-center mb-10 lg:mb-14">
										<h2
											class="text-2xl font-bold md:text-4xl md:leading-tight dark:text-white"
										>
											신선한 시나노 골드를 구입해볼까요?
										</h2>
									</div>
									<div
										class="mt-12 relative before:absolute before:inset-0 before:-z-[1] before:bg-[radial-gradient(closest-side,#cbd5e1,transparent)] dark:before:bg-[radial-gradient(closest-side,#334155,transparent)]"
									>
										<div
											class="grid gap-px sm:grid-cols-2 lg:grid-cols-4 lg:items-center"
										>
											<!-- Card -->
											<div class="flex flex-col h-full text-center">
												<div
													class="bg-white pt-8 pb-5 px-8 dark:bg-slate-900"
												>
													<h4
														class="font-medium text-lg text-gray-800 dark:text-gray-200"
													>
														11~12과
													</h4>
												</div>

												<div
													class="h-full bg-white lg:mt-px lg:py-5 px-8 dark:bg-slate-900"
												>
													<span
														class="mt-7 font-bold text-3xl text-gray-800 dark:text-gray-200"
													>
														<span class="font-bold text-xl -mr-2"
															>₩</span
														>
														85,000
													</span>
												</div>

												<div
													class="bg-white flex justify-center lg:mt-px pt-7 px-8 dark:bg-slate-900"
												>
													<ul class="space-y-2.5 text-center text-sm">
														<li
															class="text-gray-800 dark:text-gray-400"
														>
															1BOX 10개
														</li>

														<li
															class="text-gray-800 dark:text-gray-400"
														>
															5kg
														</li>

														<li
															class="text-gray-800 dark:text-gray-400"
														>
															당일배송
														</li>
													</ul>
												</div>

												<div class="bg-white py-8 px-8 dark:bg-slate-900">
													<a
														href="/commerce/detail/75"
														class="inline-flex justify-center items-center gap-2 rounded-md border-2 border-blue-600 font-semibold text-blue-600 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm py-3 px-6 dark:text-blue-500 dark:border-blue-500 dark:hover:border-blue-700"
													>
														선택
													</a>
												</div>
											</div>
											<!-- End Card -->

											<!-- Card -->
											<div class="flex flex-col h-full text-center">
												<div
													class="bg-white pt-8 pb-5 px-8 dark:bg-slate-900"
												>
													<h4
														class="font-medium text-lg text-gray-800 dark:text-gray-200"
													>
														13~14과
													</h4>
												</div>

												<div
													class="h-full bg-white lg:mt-px lg:py-5 px-8 dark:bg-slate-900"
												>
													<span
														class="mt-7 font-bold text-3xl text-gray-800 dark:text-gray-200"
													>
														<span class="font-bold text-xl -mr-2"
															>₩</span
														>
														75,000
													</span>
												</div>

												<div
													class="bg-white flex justify-center lg:mt-px pt-7 px-8 dark:bg-slate-900"
												>
													<ul class="space-y-2.5 text-center text-sm">
														<li
															class="text-gray-800 dark:text-gray-400"
														>
															1BOX 10개
														</li>

														<li
															class="text-gray-800 dark:text-gray-400"
														>
															5kg
														</li>

														<li
															class="text-gray-800 dark:text-gray-400"
														>
															2~3일 소요
														</li>
													</ul>
												</div>

												<div class="bg-white py-8 px-8 dark:bg-slate-900">
													<a
														class="inline-flex justify-center items-center gap-2 rounded-md border-2 border-blue-600 font-semibold text-blue-600 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm py-3 px-6 dark:text-blue-500 dark:border-blue-500 dark:hover:border-blue-700"
													>
														선택
													</a>
												</div>
											</div>
											<!-- End Card -->

											<!-- Card -->
											<div class="flex flex-col h-full text-center">
												<div
													class="bg-white pt-8 pb-5 px-8 dark:bg-slate-900"
												>
													<h4
														class="font-medium text-lg text-gray-800 dark:text-gray-200"
													>
														15~16과
													</h4>
												</div>

												<div
													class="h-full bg-white lg:mt-px lg:py-5 px-8 dark:bg-slate-900"
												>
													<span
														class="mt-7 font-bold text-3xl text-gray-800 dark:text-gray-200"
													>
														<span class="font-bold text-xl -mr-2"
															>₩</span
														>
														65,000
													</span>
												</div>

												<div
													class="bg-white flex justify-center lg:mt-px pt-7 px-8 dark:bg-slate-900"
												>
													<ul class="space-y-2.5 text-center text-sm">
														<li
															class="text-gray-800 dark:text-gray-400"
														>
															1BOX 20개
														</li>

														<li
															class="text-gray-800 dark:text-gray-400"
														>
															5kg
														</li>

														<li
															class="text-gray-800 dark:text-gray-400"
														>
															2~3일 소요
														</li>
													</ul>
												</div>

												<div class="bg-white py-8 px-8 dark:bg-slate-900">
													<a
														class="inline-flex justify-center items-center gap-2 rounded-md border-2 border-blue-600 font-semibold text-blue-600 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm py-3 px-6 dark:text-blue-500 dark:border-blue-500 dark:hover:border-blue-700"
													>
														선택
													</a>
												</div>
											</div>
											<!-- End Card -->

											<!-- Card -->
											<div class="flex flex-col h-full text-center">
												<div
													class="bg-white pt-8 pb-5 px-8 dark:bg-slate-900"
												>
													<h4
														class="font-medium text-lg text-gray-800 dark:text-gray-200"
													>
														가정용(흠과)
													</h4>
												</div>

												<div
													class="h-full bg-white lg:mt-px lg:py-5 px-8 dark:bg-slate-900"
												>
													<span
														class="mt-7 font-bold text-3xl text-gray-800 dark:text-gray-200"
													>
														<span class="font-bold text-xl -mr-2"
															>₩</span
														>
														40,000
													</span>
												</div>

												<div
													class="bg-white flex justify-center lg:mt-px pt-7 px-8 dark:bg-slate-900"
												>
													<ul class="space-y-2.5 text-center text-sm">
														<li
															class="text-gray-800 dark:text-gray-400"
														>
															1BOX 10개
														</li>

														<li
															class="text-gray-800 dark:text-gray-400"
														>
															5kg
														</li>

														<li
															class="text-gray-800 dark:text-gray-400"
														>
															2~3일 소요
														</li>
													</ul>
												</div>

												<div class="bg-white py-8 px-8 dark:bg-slate-900">
													<a
														class="inline-flex justify-center items-center gap-2 rounded-md border-2 border-blue-600 font-semibold text-blue-600 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm py-3 px-6 dark:text-blue-500 dark:border-blue-500 dark:hover:border-blue-700"
													>
														선택
													</a>
												</div>
											</div>
											<!-- End Card -->
										</div>
									</div>
									<!-- End Grid -->
								</div>
							</div>
						</div>
					</div>
				</footer>
			</blockquote>
			<!-- End Blockquote -->
		</div>

		<div class="relative max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
			<!-- Blockquote -->
			<blockquote class="text-center lg:mx-auto lg:w-3/5">
				<span
					class="inline-flex items-center gap-1.5 py-1.5 px-3 rounded-full text-xs font-medium bg-red-500 text-white"
				>
					New Season!</span
				>

				<div class="mt-6 lg:mt-10">
					<p
						class="relative text-xl sm:text-2xl md:text-3xl md:leading-normal font-medium text-gray-800"
					>
						<svg
							class="absolute top-0 left-0 transform -translate-x-8 -translate-y-8 h-16 w-16 text-gray-200 sm:h-24 sm:w-24 dark:text-gray-700"
							width="16"
							height="13"
							viewBox="0 0 16 13"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
							aria-hidden="true"
						>
							<path
								d="M7.18079 9.25611C7.18079 10.0101 6.93759 10.6211 6.45119 11.0891C5.96479 11.5311 5.35039 11.7521 4.60799 11.7521C3.71199 11.7521 2.96958 11.4531 2.38078 10.8551C1.81758 10.2571 1.53598 9.39911 1.53598 8.28111C1.53598 7.08511 1.86878 5.91511 2.53438 4.77111C3.22559 3.60111 4.18559 2.67811 5.41439 2.00211L6.29759 3.36711C5.63199 3.83511 5.09439 4.35511 4.68479 4.92711C4.30079 5.49911 4.04479 6.16211 3.91679 6.91611C4.14719 6.81211 4.41599 6.76011 4.72319 6.76011C5.43999 6.76011 6.02879 6.99411 6.48959 7.46211C6.95039 7.93011 7.18079 8.52811 7.18079 9.25611ZM14.2464 9.25611C14.2464 10.0101 14.0032 10.6211 13.5168 11.0891C13.0304 11.5311 12.416 11.7521 11.6736 11.7521C10.7776 11.7521 10.0352 11.4531 9.44639 10.8551C8.88319 10.2571 8.60159 9.39911 8.60159 8.28111C8.60159 7.08511 8.93439 5.91511 9.59999 4.77111C10.2912 3.60111 11.2512 2.67811 12.48 2.00211L13.3632 3.36711C12.6976 3.83511 12.16 4.35511 11.7504 4.92711C11.3664 5.49911 11.1104 6.16211 10.9824 6.91611C11.2128 6.81211 11.4816 6.76011 11.7888 6.76011C12.5056 6.76011 13.0944 6.99411 13.5552 7.46211C14.016 7.93011 14.2464 8.52811 14.2464 9.25611Z"
								fill="currentColor"
							/>
						</svg>
						<span
							class="font-bold relative z-10 italic text-gray-800 dark:text-gray-200"
							>감홍 너, 눈 감홍</span
						>
					</p>
				</div>
				<figure>
					<img
						class="w-full object-cover rounded-xl"
						src="https://appling-s3-bucket.s3.ap-northeast-2.amazonaws.com/image/2/20231026/105017_0.png"
						alt="Image Description"
					/>
				</figure>

				<footer class="mt-6">
					<div class="font-semibold text-gray-800 dark:text-gray-200">₩40,000 원부터</div>
					<!-- Buttons -->
					<div class="mt-8 grid gap-3 w-full sm:inline-flex sm:justify-center">
						<a
							class="inline-flex justify-center items-center gap-x-3 text-center bg-blue-600 hover:bg-blue-700 border border-transparent text-white text-sm font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white transition py-3 px-4 dark:focus:ring-offset-gray-800"
							href="javascript:;"
						>
							구매하기
							<svg
								class="w-3 h-3"
								width="16"
								height="16"
								viewBox="0 0 16 16"
								fill="none"
							>
								<path
									d="M5.27921 2L10.9257 7.64645C11.1209 7.84171 11.1209 8.15829 10.9257 8.35355L5.27921 14"
									stroke="currentColor"
									stroke-width="2"
									stroke-linecap="round"
								/>
							</svg>
						</a>
						<a
							class="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold text-gray-800 hover:bg-gray-800 hover:text-white focus:outline-none focus:ring-2 focus:ring-gray-800 focus:ring-offset-2 transition-all text-sm dark:text-white dark:hover:bg-gray-800 dark:hover:border-gray-900 dark:focus:ring-gray-900 dark:focus:ring-offset-gray-800"
							href="#"
						>
							<svg
								class="w-4 h-4"
								width="19"
								height="18"
								viewBox="0 0 19 18"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M6.875 18C8.531 18 9.875 16.656 9.875 15V12H6.875C5.219 12 3.875 13.344 3.875 15C3.875 16.656 5.219 18 6.875 18Z"
									fill="#0ACF83"
								></path>
								<path
									d="M3.875 9C3.875 7.344 5.219 6 6.875 6H9.875V12H6.875C5.219 12 3.875 10.656 3.875 9Z"
									fill="#A259FF"
								></path>
								<path
									d="M3.875 3C3.875 1.344 5.219 0 6.875 0H9.875V6H6.875C5.219 6 3.875 4.656 3.875 3Z"
									fill="#F24E1E"
								></path>
								<path
									d="M9.87501 0H12.875C14.531 0 15.875 1.344 15.875 3C15.875 4.656 14.531 6 12.875 6H9.87501V0Z"
									fill="#FF7262"
								></path>
								<path
									d="M15.875 9C15.875 10.656 14.531 12 12.875 12C11.219 12 9.87501 10.656 9.87501 9C9.87501 7.344 11.219 6 12.875 6C14.531 6 15.875 7.344 15.875 9Z"
									fill="#1ABCFE"
								></path>
							</svg>
							자세히 알아보기
						</a>
					</div>
					<!-- End Buttons -->
				</footer>
			</blockquote>
			<!-- End Blockquote -->
		</div>
	</div>
</template>
