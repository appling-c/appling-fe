<template>
	<!-- Blog Article -->
	<!-- Blog Article -->

	<div class="max-w-[85rem] px-4 sm:px-6 lg:px-8 mx-auto">
		<div class="grid lg:grid-cols-3 gap-y-8 lg:gap-y-0 lg:gap-x-6 lg:gap-x-12">
			<!-- Content -->
			<div class="lg:col-span-2">
				<div class="py-8 lg:pr-4 lg:pr-8">
					<div class="space-y-5 lg:space-y-8">
						<a
							@click="back()"
							class="inline-flex items-center gap-x-1.5 text-sm text-gray-600 decoration-2 hover:underline dark:text-blue-400"
						>
							<svg
								class="w-3 h-3"
								xmlns="http://www.w3.org/2000/svg"
								width="16"
								height="16"
								fill="currentColor"
								viewBox="0 0 16 16"
							>
								<path
									fill-rule="evenodd"
									d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
								/>
							</svg>
							상품 리스트로 돌아가기
						</a>

						<h2 class="text-3xl font-bold lg:text-4xl lg:text-5xl dark:text-white">
							{{ productDetailItem?.main_title }}
						</h2>

						<ul class="text-xs text-gray-500">
							<li
								class="inline-block relative pr-6 last:pr-0 last-of-type:before:hidden before:absolute before:top-1/2 before:right-2 before:-translate-y-1/2 before:w-1 before:h-1 before:bg-gray-300 before:rounded-full dark:text-gray-400 dark:before:bg-gray-600"
							>
								{{ productDetailItem?.created_at }}
							</li>
							<li
								class="inline-block relative pr-6 last:pr-0 last-of-type:before:hidden before:absolute before:top-1/2 before:right-2 before:-translate-y-1/2 before:w-1 before:h-1 before:bg-gray-300 before:rounded-full dark:text-gray-400 dark:before:bg-gray-600"
							>
								{{ productDetailItem?.modified_at }} (수정됨)
							</li>
						</ul>
						<div class="text-center p-4 sm:px-7">
							<h2
								v-html="productDetailItem?.main_explanation"
								class="text-2xl font-semibold dark:text-white"
							></h2>
							<h5
								class="py-10 mx-4 text-3xl font-extrabold leading-none tracking-tight text-gray-900 md:text-3xl lg:text-3xl dark:text-white"
							>
								애플링 특가
								<span
									class="underline underline-offset-3 decoration-8 decoration-blue-400 dark:decoration-blue-600"
								>
									{{ productDetailItem?.price?.toLocaleString() }}원</span
								>에 구매해보세요!
							</h5>
						</div>

						<figure>
							<img
								class="w-full object-cover rounded-xl"
								:src="productDetailItem?.main_image"
								:alt="productDetailItem?.main_image"
							/>
						</figure>

						<blockquote class="text-center p-4 sm:px-7">
							<p
								class="text-xl font-medium text-gray-800 lg:text-2xl lg:leading-normal xl:text-2xl xl:leading-normal dark:text-gray-200"
								v-html="productDetailItem?.product_main_explanation"
							></p>
						</blockquote>
						<div class="space-y-3">
							<div class="text-center">
								<!-- Slider main container -->
								<div class="grid gap-3">
									<div class="grid grid-cols-1 lg:grid-cols-1 gap-3">
										<div class="swiper">
											<!-- Additional required wrapper -->
											<div class="swiper-wrapper">
												<!-- Slides -->
												<div class="swiper-slide">
													<img
														class="w-full h-full top-0 left-0 object-cover rounded-xl"
														:src="productDetailItem?.image1"
													/>
												</div>
												<div class="swiper-slide">
													<img
														class="w-full h-full top-0 left-0 object-cover rounded-xl"
														:src="productDetailItem?.image2"
													/>
												</div>
												<div class="swiper-slide">
													<img
														class="w-full h-full top-0 left-0 object-cover rounded-xl"
														:src="productDetailItem?.image3"
													/>
												</div>
												...
											</div>
											<!-- If we need pagination -->
											<div class="swiper-pagination"></div>

											<!-- If we need navigation buttons -->
											<div class="swiper-button-prev"></div>
											<div class="swiper-button-next"></div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div class="space-y-3">
							<h3 class="text-2xl font-semibold dark:text-white">
								보관방법 및 취급방법
							</h3>
							<p
								class="text-lg text-gray-800 dark:text-gray-200"
								v-html="productDetailItem.product_sub_explanation"
							></p>
						</div>

						<div class="space-y-3">
							<h3 class="text-2xl font-semibold dark:text-white">
								소비자 안전을 위한 주의사항
							</h3>
							<p
								class="text-lg text-gray-800 dark:text-gray-200"
								v-html="productDetailItem?.purchase_inquiry"
							></p>
						</div>

						<!-- Icon Blocks -->
						<div class="space-y-3">
							<h3 class="text-2xl font-semibold dark:text-white">상품정보</h3>

							<div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
								<div class="max-w-4xl mx-auto">
									<!-- Grid -->
									<div class="grid md:grid-cols-2 gap-6 lg:gap-12">
										<div class="space-y-6 lg:space-y-10">
											<!-- Icon Block -->
											<div class="flex">
												<svg
													class="flex-shrink-0 mt-2 h-8 w-8 text-gray-800 dark:text-white"
													xmlns="http://www.w3.org/2000/svg"
													width="16"
													height="16"
													fill="currentColor"
													viewBox="0 0 16 16"
												>
													<path
														d="M6 12.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5ZM3 8.062C3 6.76 4.235 5.765 5.53 5.886a26.58 26.58 0 0 0 4.94 0C11.765 5.765 13 6.76 13 8.062v1.157a.933.933 0 0 1-.765.935c-.845.147-2.34.346-4.235.346-1.895 0-3.39-.2-4.235-.346A.933.933 0 0 1 3 9.219V8.062Zm4.542-.827a.25.25 0 0 0-.217.068l-.92.9a24.767 24.767 0 0 1-1.871-.183.25.25 0 0 0-.068.495c.55.076 1.232.149 2.02.193a.25.25 0 0 0 .189-.071l.754-.736.847 1.71a.25.25 0 0 0 .404.062l.932-.97a25.286 25.286 0 0 0 1.922-.188.25.25 0 0 0-.068-.495c-.538.074-1.207.145-1.98.189a.25.25 0 0 0-.166.076l-.754.785-.842-1.7a.25.25 0 0 0-.182-.135Z"
													/>
													<path
														d="M8.5 1.866a1 1 0 1 0-1 0V3h-2A4.5 4.5 0 0 0 1 7.5V8a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1v1a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-1a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1v-.5A4.5 4.5 0 0 0 10.5 3h-2V1.866ZM14 7.5V13a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V7.5A3.5 3.5 0 0 1 5.5 4h5A3.5 3.5 0 0 1 14 7.5Z"
													/>
												</svg>
												<div class="ml-5 sm:ml-8">
													<h3
														class="text-base sm:text-lg font-semibold text-gray-800 dark:text-gray-200"
													>
														원산지
													</h3>
													<p
														class="mt-1 text-gray-600 dark:text-gray-400"
													>
														{{ productDetailItem?.origin }}
													</p>
												</div>
											</div>
											<!-- End Icon Block -->

											<!-- Icon Block -->
											<div class="flex">
												<svg
													class="flex-shrink-0 mt-2 h-8 w-8 text-gray-800 dark:text-white"
													xmlns="http://www.w3.org/2000/svg"
													width="16"
													height="16"
													fill="currentColor"
													viewBox="0 0 16 16"
												>
													<path
														d="M11.251.068a.5.5 0 0 1 .227.58L9.677 6.5H13a.5.5 0 0 1 .364.843l-8 8.5a.5.5 0 0 1-.842-.49L6.323 9.5H3a.5.5 0 0 1-.364-.843l8-8.5a.5.5 0 0 1 .615-.09zM4.157 8.5H7a.5.5 0 0 1 .478.647L6.11 13.59l5.732-6.09H9a.5.5 0 0 1-.478-.647L9.89 2.41 4.157 8.5z"
													/>
												</svg>
												<div class="ml-5 sm:ml-8">
													<h3
														class="text-base sm:text-lg font-semibold text-gray-800 dark:text-gray-200"
													>
														상품 분류
													</h3>
													<p
														class="mt-1 text-gray-600 dark:text-gray-400"
													>
														{{ productDetailItem?.category?.name }}
													</p>
												</div>
											</div>
											<!-- End Icon Block -->
										</div>
										<!-- End Col -->

										<div class="space-y-6 lg:space-y-10">
											<!-- Icon Block -->
											<div class="flex">
												<svg
													class="flex-shrink-0 mt-2 h-8 w-8 text-gray-800 dark:text-white"
													xmlns="http://www.w3.org/2000/svg"
													width="16"
													height="16"
													fill="currentColor"
													viewBox="0 0 16 16"
												>
													<path
														d="M8.186 1.113a.5.5 0 0 0-.372 0L1.846 3.5l2.404.961L10.404 2l-2.218-.887zm3.564 1.426L5.596 5 8 5.961 14.154 3.5l-2.404-.961zm3.25 1.7-6.5 2.6v7.922l6.5-2.6V4.24zM7.5 14.762V6.838L1 4.239v7.923l6.5 2.6zM7.443.184a1.5 1.5 0 0 1 1.114 0l7.129 2.852A.5.5 0 0 1 16 3.5v8.662a1 1 0 0 1-.629.928l-7.185 2.874a.5.5 0 0 1-.372 0L.63 13.09a1 1 0 0 1-.63-.928V3.5a.5.5 0 0 1 .314-.464L7.443.184z"
													/>
												</svg>
												<div class="ml-5 sm:ml-8">
													<h3
														class="text-base sm:text-lg font-semibold text-gray-800 dark:text-gray-200"
													>
														생산자(수입자)
													</h3>
													<p
														class="mt-1 text-gray-600 dark:text-gray-400"
													>
														{{ productDetailItem?.producer }}
													</p>
												</div>
											</div>
											<!-- End Icon Block -->
										</div>
										<!-- End Col -->
									</div>
									<!-- End Grid -->
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<!-- End Content -->

			<the-product-detail-sidebar
				:productDetailItem="productDetailItem"
				:sellerProductList="sellerProductList"
				@updateProductCount="updateProductCount"
			/>
		</div>
	</div>

	<!-- Sticky Share Group -->
	<div class="sticky bottom-6 inset-x-0 text-center">
		<div class="inline-block bg-white shadow-md rounded-full py-3 px-4 dark:bg-gray-800">
			<div class="flex items-center gap-x-1.5">
				<!-- Button -->
				<div class="inline-block">
					<button
						type="button"
						data-hs-overlay="#hs-modal-signin"
						class="flex items-center gap-x-2 text-sm text-gray-500 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200"
					>
						<svg
							class="w-4 h-4"
							xmlns="http://www.w3.org/2000/svg"
							width="16"
							height="16"
							fill="currentColor"
							viewBox="0 0 16 16"
						>
							<path
								d="M2.678 11.894a1 1 0 0 1 .287.801 10.97 10.97 0 0 1-.398 2c1.395-.323 2.247-.697 2.634-.893a1 1 0 0 1 .71-.074A8.06 8.06 0 0 0 8 14c3.996 0 7-2.807 7-6 0-3.192-3.004-6-7-6S1 4.808 1 8c0 1.468.617 2.83 1.678 3.894zm-.493 3.905a21.682 21.682 0 0 1-.713.129c-.2.032-.352-.176-.273-.362a9.68 9.68 0 0 0 .244-.637l.003-.01c.248-.72.45-1.548.524-2.319C.743 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7-3.582 7-8 7a9.06 9.06 0 0 1-2.347-.306c-.52.263-1.639.742-3.468 1.105z"
							/>
						</svg>
						구매하기
					</button>
				</div>
				<!-- Button -->

				<div class="block h-3 border-r border-gray-300 mx-3 dark:border-gray-600"></div>

				<!-- Button -->
				<div class="inline-flex">
					<button
						type="button"
						id="kakao-article-share"
						class="flex items-center gap-x-2 text-sm text-gray-500 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200"
					>
						<svg
							class="w-4 h-4"
							xmlns="http://www.w3.org/2000/svg"
							width="16"
							height="16"
							fill="currentColor"
							viewBox="0 0 16 16"
						>
							<path
								fill-rule="evenodd"
								d="M3.5 6a.5.5 0 0 0-.5.5v8a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5v-8a.5.5 0 0 0-.5-.5h-2a.5.5 0 0 1 0-1h2A1.5 1.5 0 0 1 14 6.5v8a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 14.5v-8A1.5 1.5 0 0 1 3.5 5h2a.5.5 0 0 1 0 1h-2z"
							/>
							<path
								fill-rule="evenodd"
								d="M7.646.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 1.707V10.5a.5.5 0 0 1-1 0V1.707L5.354 3.854a.5.5 0 1 1-.708-.708l3-3z"
							/>
						</svg>
						공유하기
					</button>
				</div>
				<!-- Button -->
			</div>
		</div>
	</div>
	<!-- End Sticky Share Group -->

	<div
		id="hs-modal-signin"
		class="hs-overlay hidden w-full h-full fixed top-0 left-0 z-[60] overflow-x-hidden overflow-y-auto"
	>
		<div
			class="hs-overlay-open:mt-7 hs-overlay-open:opacity-100 hs-overlay-open:duration-500 mt-0 opacity-0 ease-out transition-all sm:max-w-lg sm:w-full m-3 sm:mx-auto"
		>
			<div
				class="bg-white border border-gray-200 rounded-xl shadow-sm dark:bg-gray-800 dark:border-gray-700"
			>
				<div class="p-4 sm:p-7">
					<div class="text-center">
						<h2 class="block text-2xl font-bold text-gray-800 dark:text-gray-200">
							장바구니에 담기
						</h2>
						<p class="mt-2 text-sm text-gray-600 dark:text-gray-400">
							수량을 선택해주세요.
						</p>
					</div>

					<div class="mt-5">
						<div class="grid gap-y-4">
							<div>
								<label for="email" class="block text-sm mb-2 dark:text-white"
									>구매가능수량 : {{ productDetailItem?.ea }}</label
								>
								<select
									class="py-3 px-4 pr-9 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
									v-model="count"
								>
									<option selected disabled>수량을 선택해주세요.</option>
									<option v-for="(opt, index) in countOptionList" :key="index">
										{{ opt.value }}
									</option>
									<option value="direct">직접입력</option>
								</select>
								<div v-if="count == 'direct'" class="relative">
									<input
										type="email"
										id="email"
										name="email"
										class="py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400"
										required
										aria-describedby="email-error"
										v-model="countdirect"
									/>
									<div
										class="hidden absolute inset-y-0 right-0 flex items-center pointer-events-none pr-3"
									>
										<svg
											class="h-5 w-5 text-red-500"
											width="16"
											height="16"
											fill="currentColor"
											viewBox="0 0 16 16"
											aria-hidden="true"
										>
											<path
												d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"
											/>
										</svg>
									</div>
								</div>
								<p class="hidden text-xs text-red-600 mt-2" id="email-error">
									Please include a valid email address so we can get back to you
								</p>
							</div>

							<button
								id="add-cart-item"
								class="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800"
								data-hs-overlay="#hs-task-created-alert"
								@click="saveCartList()"
							>
								담기
							</button>
							<button
								type="button"
								class="py-2.5 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800"
								data-hs-overlay="#hs-modal-signin"
							>
								Cancel
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>

	<div
		id="hs-task-created-alert"
		class="hs-overlay hidden w-full h-full fixed top-0 left-0 z-[60] overflow-x-hidden overflow-y-auto"
	>
		<div
			class="hs-overlay-open:mt-7 hs-overlay-open:opacity-100 hs-overlay-open:duration-500 mt-0 opacity-0 ease-out transition-all sm:max-w-lg sm:w-full m-3 sm:mx-auto"
		>
			<div class="relative flex flex-col bg-white shadow-lg rounded-xl dark:bg-gray-800">
				<div class="absolute top-2 right-2">
					<button
						type="button"
						class="inline-flex flex-shrink-0 justify-center items-center h-8 w-8 rounded-md text-gray-500 hover:text-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-white transition-all text-sm dark:focus:ring-gray-700 dark:focus:ring-offset-gray-800"
						data-hs-overlay="#hs-task-created-alert"
					>
						<span class="sr-only">Close</span>
						<svg
							class="w-3.5 h-3.5"
							width="8"
							height="8"
							viewBox="0 0 8 8"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M0.258206 1.00652C0.351976 0.912791 0.479126 0.860131 0.611706 0.860131C0.744296 0.860131 0.871447 0.912791 0.965207 1.00652L3.61171 3.65302L6.25822 1.00652C6.30432 0.958771 6.35952 0.920671 6.42052 0.894471C6.48152 0.868271 6.54712 0.854471 6.61352 0.853901C6.67992 0.853321 6.74572 0.865971 6.80722 0.891111C6.86862 0.916251 6.92442 0.953381 6.97142 1.00032C7.01832 1.04727 7.05552 1.1031 7.08062 1.16454C7.10572 1.22599 7.11842 1.29183 7.11782 1.35822C7.11722 1.42461 7.10342 1.49022 7.07722 1.55122C7.05102 1.61222 7.01292 1.6674 6.96522 1.71352L4.31871 4.36002L6.96522 7.00648C7.05632 7.10078 7.10672 7.22708 7.10552 7.35818C7.10442 7.48928 7.05182 7.61468 6.95912 7.70738C6.86642 7.80018 6.74102 7.85268 6.60992 7.85388C6.47882 7.85498 6.35252 7.80458 6.25822 7.71348L3.61171 5.06702L0.965207 7.71348C0.870907 7.80458 0.744606 7.85498 0.613506 7.85388C0.482406 7.85268 0.357007 7.80018 0.264297 7.70738C0.171597 7.61468 0.119017 7.48928 0.117877 7.35818C0.116737 7.22708 0.167126 7.10078 0.258206 7.00648L2.90471 4.36002L0.258206 1.71352C0.164476 1.61976 0.111816 1.4926 0.111816 1.36002C0.111816 1.22744 0.164476 1.10028 0.258206 1.00652Z"
								fill="currentColor"
							/>
						</svg>
					</button>
				</div>

				<div class="p-4 sm:p-14 text-center overflow-y-auto">
					<svg
						class="mb-4 w-20 h-auto mx-auto"
						width="72"
						height="63"
						viewBox="0 0 72 63"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M15.5174 56.1528C16.2903 57.6825 16.929 61.4559 14.8118 60.9459C13.5013 60.5381 11.4445 57.6213 12.493 56.1528C12.661 55.8468 13.2189 55.2757 14.106 55.4389"
							class="stroke-gray-800 dark:stroke-gray-200"
							stroke="currentColor"
							stroke-width="2"
							stroke-linecap="round"
						/>
						<path
							d="M15.5173 49.6263L14.0262 48.5579C13.5346 48.2056 12.8477 48.3707 12.658 48.945C12.3456 49.8907 12.1258 51.1463 12.462 52.2324C12.5336 52.4636 12.7127 52.6466 12.9449 52.7146C13.8342 52.9751 15.2568 52.9048 15.8197 51.054"
							class="stroke-gray-800 dark:stroke-gray-200"
							stroke="currentColor"
							stroke-width="2"
							stroke-linecap="round"
						/>
						<mask id="path-3-inside-1_4542_101166" fill="white">
							<ellipse
								rx="1.09811"
								ry="0.738034"
								transform="matrix(0.921654 0.388014 -0.38048 0.924789 14.2069 43.4055)"
							/>
						</mask>
						<path
							d="M13.3756 43.0555C13.6288 42.4402 14.1378 42.259 14.3273 42.2214C14.5316 42.1809 14.6503 42.223 14.687 42.2384L13.1651 45.9376C13.7607 46.1884 14.4484 46.2907 15.1206 46.1574C15.7781 46.0269 16.654 45.5999 17.0622 44.6076L13.3756 43.0555ZM14.687 42.2384C14.7237 42.2539 14.8369 42.3094 14.9524 42.4846C15.0596 42.6471 15.2913 43.1401 15.0381 43.7554L11.3515 42.2034C10.9432 43.1957 11.261 44.1253 11.6329 44.689C12.0131 45.2654 12.5694 45.6868 13.1651 45.9376L14.687 42.2384ZM15.0381 43.7554C14.7849 44.3708 14.2759 44.552 14.0864 44.5895C13.8821 44.6301 13.7634 44.588 13.7267 44.5725L15.2486 40.8734C14.653 40.6226 13.9653 40.5203 13.2931 40.6536C12.6357 40.784 11.7597 41.2111 11.3515 42.2034L15.0381 43.7554ZM13.7267 44.5725C13.69 44.5571 13.5768 44.5015 13.4613 44.3264C13.3541 44.1638 13.1225 43.6709 13.3756 43.0555L17.0622 44.6076C17.4705 43.6153 17.1527 42.6857 16.7809 42.1219C16.4007 41.5455 15.8443 41.1241 15.2486 40.8734L13.7267 44.5725Z"
							class="fill-gray-800 dark:fill-gray-200"
							fill="currentColor"
							mask="url(#path-3-inside-1_4542_101166)"
						/>
						<mask id="path-5-inside-2_4542_101166" fill="white">
							<ellipse
								rx="1.00988"
								ry="1.0181"
								transform="matrix(0.921654 0.388014 -0.38048 0.924789 21.3702 57.2201)"
							/>
						</mask>
						<path
							d="M20.4576 56.8359C20.6581 56.3486 21.2257 56.094 21.7438 56.312L20.2219 60.0112C21.768 60.6621 23.5159 59.9153 24.1442 58.388L20.4576 56.8359ZM21.7438 56.312C22.2618 56.5301 22.4832 57.1169 22.2827 57.6043L18.5961 56.0522C17.9677 57.5795 18.6757 59.3603 20.2219 60.0112L21.7438 56.312ZM22.2827 57.6043C22.0822 58.0916 21.5146 58.3462 20.9966 58.1281L22.5185 54.429C20.9724 53.7781 19.2245 54.5249 18.5961 56.0522L22.2827 57.6043ZM20.9966 58.1281C20.4785 57.9101 20.2571 57.3233 20.4576 56.8359L24.1442 58.388C24.7726 56.8607 24.0646 55.0799 22.5185 54.429L20.9966 58.1281Z"
							class="fill-gray-800 dark:fill-gray-200"
							fill="currentColor"
							mask="url(#path-5-inside-2_4542_101166)"
						/>
						<mask id="path-7-inside-3_4542_101166" fill="white">
							<ellipse
								rx="1.00988"
								ry="1.0181"
								transform="matrix(0.921654 0.388014 -0.38048 0.924789 6.75397 38.8236)"
							/>
						</mask>
						<path
							d="M5.84142 38.4394C6.04192 37.9521 6.60952 37.6975 7.12756 37.9156L5.60564 41.6147C7.15177 42.2656 8.89966 41.5188 9.52804 39.9915L5.84142 38.4394ZM7.12756 37.9156C7.6456 38.1337 7.86701 38.7205 7.66651 39.2078L3.9799 37.6557C3.35152 39.1831 4.05951 40.9638 5.60564 41.6147L7.12756 37.9156ZM7.66651 39.2078C7.46601 39.6951 6.89842 39.9498 6.38037 39.7317L7.90229 36.0325C6.35616 35.3816 4.60827 36.1284 3.9799 37.6557L7.66651 39.2078ZM6.38037 39.7317C5.86233 39.5136 5.64092 38.9268 5.84142 38.4394L9.52804 39.9915C10.1564 38.4642 9.44843 36.6834 7.90229 36.0325L6.38037 39.7317Z"
							class="fill-gray-800 dark:fill-gray-200"
							fill="currentColor"
							mask="url(#path-7-inside-3_4542_101166)"
						/>
						<path
							d="M31.6479 50.2383C31.5807 51.2241 32.1721 53.053 35.0756 52.4819"
							class="stroke-gray-800 dark:stroke-gray-200"
							stroke="currentColor"
							stroke-width="2"
							stroke-linecap="round"
						/>
						<path
							d="M50.9903 34.6769C50.1699 34.1428 48.3973 33.5907 47.8709 35.6552"
							class="stroke-gray-800 dark:stroke-gray-200"
							stroke="currentColor"
							stroke-width="2"
							stroke-linecap="round"
						/>
						<path
							d="M40.9087 17.4562C40.0882 16.9221 38.3156 16.37 37.7892 18.4345"
							class="stroke-gray-800 dark:stroke-gray-200"
							stroke="currentColor"
							stroke-width="2"
							stroke-linecap="round"
						/>
						<path
							d="M27.8502 29.3345C27.1279 29.998 26.1419 31.587 27.977 32.6357"
							class="stroke-gray-800 dark:stroke-gray-200"
							stroke="currentColor"
							stroke-width="2"
							stroke-linecap="round"
						/>
						<path
							d="M62.1917 19.585C62.4894 18.6451 62.5577 16.7703 60.4502 16.7902"
							class="stroke-gray-800 dark:stroke-gray-200"
							stroke="currentColor"
							stroke-width="2"
							stroke-linecap="round"
						/>
						<ellipse
							cx="51.2061"
							cy="22.3973"
							rx="3.02446"
							ry="3.05945"
							class="fill-gray-800 dark:fill-gray-200"
							fill="currentColor"
						/>
						<path
							d="M67.7398 29.6361C68.8249 31.2826 67.6381 32.6215 66.8281 33.1457C66.7645 33.1869 66.695 33.2184 66.6214 33.2363C65.0504 33.618 63.6063 31.5388 63.6063 30.0441C63.6064 28.8034 66.3283 27.4945 67.7398 29.6361Z"
							class="fill-gray-800 dark:fill-gray-200"
							fill="currentColor"
						/>
						<path
							d="M58.868 38.6126C57.9809 36.4914 54.6002 37.7288 53.0207 38.6126C51.7101 39.2284 52.0126 41.4681 53.6256 43.3038C54.9161 44.7723 56.5157 44.1196 57.1542 43.6097C58.0951 42.8279 59.7552 40.7339 58.868 38.6126Z"
							class="fill-gray-800 dark:fill-gray-200"
							fill="currentColor"
						/>
						<path
							d="M5.85665 41.8048C5.21042 40.2694 2.74791 41.1651 1.59743 41.8048C0.642774 42.2505 0.863078 43.8717 2.03804 45.2004C2.978 46.2634 4.14317 45.7909 4.60826 45.4219C5.29365 44.8559 6.50288 43.3402 5.85665 41.8048Z"
							class="stroke-gray-800 dark:stroke-gray-200"
							stroke="currentColor"
							stroke-width="2"
							stroke-linecap="round"
						/>
						<path
							d="M45.4596 49.2172C40.9431 47.667 40.2844 51.6987 40.5196 53.9083C40.8221 55.3361 42.4351 55.54 43.4433 55.2341C45.5677 54.5894 51.1052 51.1548 45.4596 49.2172Z"
							class="fill-gray-800 dark:fill-gray-200"
							fill="currentColor"
						/>
						<ellipse
							rx="2.96295"
							ry="3.45694"
							transform="matrix(0.855131 0.518411 -0.509711 0.860345 30.4996 41.3871)"
							class="fill-gray-800 dark:fill-gray-200"
							fill="currentColor"
						/>
						<path
							d="M38.5032 29.1282C39.471 27.8228 37.8983 26.0687 36.991 25.3549C36.0836 24.6411 34.8335 24.8654 33.8657 26.1707C32.7567 27.6664 37.2934 30.7599 38.5032 29.1282Z"
							class="fill-gray-800 dark:fill-gray-200"
							fill="currentColor"
						/>
						<path
							d="M19.2476 18.9295C16.4247 18.2768 15.7862 19.8813 15.8198 20.7652C16.0215 23.8246 20.5582 24.4365 21.6672 23.6207C22.4364 23.0548 22.7761 19.7453 19.2476 18.9295Z"
							class="fill-gray-800 dark:fill-gray-200"
							fill="currentColor"
						/>
						<path
							d="M36.6888 6.79381C35.6403 4.67259 33.2947 5.02613 32.2529 5.46805C28.7042 6.61025 29.3292 8.52749 30.1358 9.13938C31.3456 10.1252 34.2289 12.0153 36.0839 11.6889C38.4027 11.281 37.9994 9.44533 36.6888 6.79381Z"
							class="fill-gray-800 dark:fill-gray-200"
							fill="currentColor"
						/>
						<path
							d="M56.9526 54.9284C57.7592 53.5006 60.2795 51.0735 65.1187 49.9313C66.0596 49.7953 67.9818 48.5647 68.1431 44.7302C68.3448 39.9371 73.5872 32.9003 69.3529 28.1072C67.5382 26.053 68.4456 23.2121 67.5382 17.7051"
							class="stroke-gray-800 dark:stroke-gray-200"
							stroke="currentColor"
							stroke-width="2"
							stroke-linecap="round"
						/>
						<path
							d="M66.7316 16.176C65.1521 14.2383 60.6625 9.8939 55.3394 8.01743C48.703 5.67797 55.8063 4.55591 44.1399 4.75246C44.0816 4.75344 44.0194 4.76029 43.9617 4.76836C43.019 4.90008 40.5102 4.51266 37.2614 1.95295C37.2161 1.91728 37.1681 1.88406 37.1153 1.86091C36.6 1.63502 35.1744 1.43154 32.9584 2.2045C30.6195 3.02036 24.0531 5.46791 21.0622 6.58971C20.4237 6.92965 19.0056 8.05825 18.441 9.85312C17.7353 12.0967 5.93991 23.5187 9.56927 28.9237"
							class="stroke-gray-800 dark:stroke-gray-200"
							stroke="currentColor"
							stroke-width="2"
							stroke-linecap="round"
						/>
						<path
							d="M10.4768 30.1484C11.9084 30.3333 14.621 31.3895 15.0562 34.1372C15.1369 34.6464 15.5068 35.0847 16.0079 35.2063C18.8253 35.8904 22.6446 38.4014 20.8122 44.4603C20.7218 44.7592 20.7652 45.0847 20.9158 45.3583C21.7327 46.8422 22.367 49.4462 20.6725 51.7386C20.1262 52.4776 20.4167 53.842 21.2912 54.1243C23.3727 54.7962 25.8398 55.985 27.2662 57.833C27.5533 58.2049 28.0338 58.3932 28.4956 58.3062C30.4142 57.9446 33.9492 57.9776 37.2937 60.233C42.1328 63.4964 42.3345 60.0291 48.6858 60.7429C53.7669 61.314 55.7765 58.3294 56.1462 56.7656"
							class="stroke-gray-800 dark:stroke-gray-200"
							stroke="currentColor"
							stroke-width="2"
							stroke-linecap="round"
						/>
					</svg>

					<h3 class="mb-2 text-2xl font-bold text-gray-800 dark:text-gray-200">
						장바구니에 담았어요!
					</h3>
					<p class="text-gray-500">
						장바구니 페이지로 주문을 진행하거나<br />
						상품을 더 둘러볼 수 있어요.
					</p>
				</div>

				<div class="flex items-center">
					<button
						type="button"
						class="p-4 w-full inline-flex justify-center items-center gap-2 rounded-bl-xl bg-gray-100 border border-transparent font-semibold text-gray-800 hover:text-blue-600 focus:outline-none focus:ring-2 ring-offset-white focus:ring-gray-100 focus:ring-offset-2 transition-all text-sm dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-600 dark:text-white dark:focus:ring-offset-gray-800"
						data-hs-overlay="#hs-task-created-alert"
					>
						상품 더 둘러보기
					</button>
					<button
						type="button"
						@click="movetocartlist()"
						class="p-4 w-full inline-flex justify-center items-center gap-2 rounded-br-xl border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800"
						data-hs-overlay="#hs-task-created-alert"
					>
						장바구니 페이지로 가기
					</button>
				</div>
			</div>
		</div>
	</div>
</template>
<script lang="ts">
	import { mapActions } from "vuex";
	import ProductService from "@/services/ProductService";
	import productDetailInterface from "../../types/auth";
	import TheProductDetailSidebar from "./productDetail/TheProductDetailSidebar.vue";
	import Swiper from "https://cdn.jsdelivr.net/npm/swiper@10/swiper-bundle.min.mjs";
	export default {
		components: {
			TheProductDetailSidebar,
		},
		data() {
			return {
				productDetailItem: {} as productDetailInterface,
				sellerProductList: [],
				countOptionList: [],
				count: "1",
				countdirect: "",
			};
		},
		async created() {
			if (!Kakao?.isInitialized()) {
				Kakao.init("bfdc56a39210639e056f66e470d11426");
			}

			this.id = this.$route.params.id;
			if (this.id > 0) {
				// 상품정보 가져오기
				await this.getproductitemlist(this.id);

				// 판매자가 판매중인 상품 리스트 가져오기
				await this.getSellerProductList(this.seller_id);
			}
		},
		methods: {
      ...mapActions("cart", ["updateSpinnerStatus"]),
      ...mapActions("cart", ["addProductToCart"]),
			getSellerProductList(id) {
				ProductService.getproductlistbysellerid(id).then((response) => {
					this.sellerProductList = response.data.data.list;
					if (this.sellerProductList.length > 0) {
						this.sellerProductList = this.sellerProductList.slice(0, 5);
					}
				});
			},

			saveCartList() {
				if (this.count == "direct" && this.countdirect == "") {
					return alert("수량을 입력해주세요.");
				}
				let count = this.count;
				if (this.count == "direct") {
					count = this.countdirect;
				}

				const addCartItem = {
					originPrice: this.productDetailItem.price,
					count,
					productID: this.productDetailItem.product_id,
					productName: this.productDetailItem.main_title,
					price: this.productDetailItem.price * count,
				};

				this.addProductToCart(addCartItem);
			},
			back() {
				this.$router.push("/commerce/search");
			},

			async getproductitemlist(id) {
				// 상품 정보 가져오기
				this.updateSpinnerStatus(true);
				await ProductService.getproductlistbyid(id).then((response) => {
					if (response.data.code == "0000") {
						const userdata = response.data.data;
						this.productDetailItem = { ...userdata };
						this.seller_id = userdata.seller.seller_id;

						this.updateSpinnerStatus(false);
					}
				});
			},
			updateProductCount(count) {
				this.count = count;

				//this.saveCartList();
				document.getElementById("add-cart-item").click();
			},
			movetodetail(id: number) {
				return (location.href = `/commerce/detail/${id}`);
			},
			movetoIntroduct(id) {
				return this.$router.push(`/brandshop/preview/${id}`);
			},
			movetocartlist() {
				//window.HSOverlay.close("#hs-task-created-alert");
				return (location.href = `/commerce/cartlist`);
			},
			setKakaoShareCustomButton() {
				let item = this.productDetailItem;
				const main_title = item.main_title;
				const regularPrice = item.origin_price;
				const discountPrice = item.price;
				const imageUrl = item.main_image;
				const productID = item.id;

				Kakao.Share.createDefaultButton({
					container: "#kakao-article-share",
					objectType: "commerce",
					content: {
						title: `🍎애플링 특가 ${discountPrice?.toLocaleString()}원에 구매해보세요!`,
						imageUrl,
						link: {
							mobileWebUrl: `http://www.appling.me/commerce/detail/${productID}`,
							webUrl: `http://www.appling.me/commerce/detail/${productID}`,
						},
					},
					commerce: {
						productName: main_title,
						regularPrice,
						discountRate: 10,
						discountPrice,
					},
					buttons: [
						{
							title: "상품 구매하러 가기",
							link: {
								mobileWebUrl: `http://www.appling.me/commerce/detail/${productID}`,
								webUrl: `http://www.appling.me/commerce/detail/${productID}`,
							},
						},
					],
				});
			},
			setSwiper() {
				new Swiper(".swiper", {
					// Optional parameters
					direction: "horizontal",
					loop: true,

					// If we need pagination
					pagination: {
						el: ".swiper-pagination",
						dynamicBullets: "true",
					},

					// Navigation arrows
					navigation: {
						nextEl: ".swiper-button-next",
						prevEl: ".swiper-button-prev",
					},
				});
			},
		},
		async mounted() {
			for (var i = 0; i < 10; i++) {
				this.countOptionList.push({
					key: i + 1,
					value: i + 1,
				});
			}

			// 카카오톡 공유하기 버튼 세팅
			this.setKakaoShareCustomButton();

			// 이미지 스와이퍼 세팅
			this.setSwiper();
		},
	};
</script>

<style>
	@import url(https://cdn.jsdelivr.net/npm/swiper@10/swiper-bundle.min.css);
	.swiper {
		width: 100%;
		height: 100%;
	}

	.swiper-slide {
		text-align: center;
		font-size: 18px;
		background: #fff;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.swiper-slide img {
		display: block;
		width: 100%;
		height: 100%;
		/* object-fit: cover; */
	}
</style>
