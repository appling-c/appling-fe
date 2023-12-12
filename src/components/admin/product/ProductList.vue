<template>
	<div>
		<header class=" ">
			<h1 class="block text-2xl font-bold text-gray-800 sm:text-3xl dark:text-white">
				📦 상품 관리하기
			</h1>
			<p class="mt-2 text-lg text-gray-800 dark:text-gray-600">
				내가 등록한 상품을 관리하는 페이지 입니다.
			</p>
			<p class="mt-2 text-base text-gray-800 dark:text-gray-400">
				상품의 상태를 확인하고 상품의 판매 상태를 업데이트할 수 있습니다.
			</p>
			<div class="mt-5 flex flex-col items-center gap-2 sm:flex-row sm:gap-3">
				<router-link
					to="/admin/product/detail/0"
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
					새로운 상품 등록하기👀
				</router-link>
			</div>
		</header>

		<div>
			<div class="flex flex-col">
				<div class="-m-1.5 overflow-x-auto">
					<div class="p-1.5 min-w-full inline-block align-middle">
						<div
							class="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden dark:bg-slate-900 dark:border-gray-700"
						>
							<!-- Header -->
							<div
								class="px-6 py-4 grid gap-3 md:flex md:justify-between md:items-center border-b border-gray-200 dark:border-gray-700"
							>
								<!-- Input -->
								<ul
									class="flex-wrap hidden text-base font-medium text-center text-slate-500 md:flex dark:text-slate-400"
								>
									<li
										class="mb-4 mr-2 lg:mr-4"
										v-for="statusDP in statusList"
										:key="statusDP.key"
									>
										<a
											@click="searchproductstatus(statusDP.key)"
											:class="
												status == statusDP.key
													? 'bg-blue-600 text-white hover:bg-blue-600'
													: 'bg-primary-600 text-slate'
											"
											class="inline-block px-4 py-2 border rounded-full hover:text-slate-900 hover:bg-gray-100"
										>
											{{ statusDP.value }}
										</a>
									</li>
								</ul>

								<div class="sm:hidden flex items-center w-full space-x-4 md:w-auto">
									<select
										id="list-navigation"
										class="block w-full p-2 text-base text-slate-900 border border-gray-300 rounded-lg md:hidden bg-gray-50 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
										@change="searchproductstatus($event.target.value)"
									>
										<option
											v-for="statusDP in statusList"
											:key="statusDP"
											:value="statusDP.key"
										>
											{{ statusDP.value }}
										</option>
									</select>
								</div>

								<div
									v-if="lists.length > 0"
									class="px-6 py-4 grid gap-3 md:flex md:justify-between md:items-center"
								>
									<div class="inline-flex gap-x-2">
										<button
											@click="prev"
											type="button"
											class="py-2 px-3 inline-flex justify-center items-center gap-2 rounded-md border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm dark:bg-slate-900 dark:hover:bg-slate-800 dark:border-gray-700"
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
											이전
										</button>

										<button
											v-if="!islastpage"
											@click="next"
											type="button"
											class="py-2 px-3 inline-flex justify-center items-center gap-2 rounded-md border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm dark:bg-slate-900 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800"
										>
											다음
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
													d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
												/>
											</svg>
										</button>
									</div>
								</div>

								<div
									v-else
									class="max-w-sm w-full min-h-[400px] flex flex-col justify-center mx-auto px-6 py-4"
								>
									<div
										class="flex justify-center items-center w-[46px] h-[46px] bg-gray-100 rounded-md dark:bg-gray-800"
									>
										<svg
											class="w-6 h-6 text-gray-600 dark:text-gray-400"
											xmlns="http://www.w3.org/2000/svg"
											width="16"
											height="16"
											fill="currentColor"
											viewBox="0 0 16 16"
										>
											<path
												d="M1.92.506a.5.5 0 0 1 .434.14L3 1.293l.646-.647a.5.5 0 0 1 .708 0L5 1.293l.646-.647a.5.5 0 0 1 .708 0L7 1.293l.646-.647a.5.5 0 0 1 .708 0L9 1.293l.646-.647a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .801.13l.5 1A.5.5 0 0 1 15 2v12a.5.5 0 0 1-.053.224l-.5 1a.5.5 0 0 1-.8.13L13 14.707l-.646.647a.5.5 0 0 1-.708 0L11 14.707l-.646.647a.5.5 0 0 1-.708 0L9 14.707l-.646.647a.5.5 0 0 1-.708 0L7 14.707l-.646.647a.5.5 0 0 1-.708 0L5 14.707l-.646.647a.5.5 0 0 1-.708 0L3 14.707l-.646.647a.5.5 0 0 1-.801-.13l-.5-1A.5.5 0 0 1 1 14V2a.5.5 0 0 1 .053-.224l.5-1a.5.5 0 0 1 .367-.27zm.217 1.338L2 2.118v11.764l.137.274.51-.51a.5.5 0 0 1 .707 0l.646.647.646-.646a.5.5 0 0 1 .708 0l.646.646.646-.646a.5.5 0 0 1 .708 0l.646.646.646-.646a.5.5 0 0 1 .708 0l.646.646.646-.646a.5.5 0 0 1 .708 0l.646.646.646-.646a.5.5 0 0 1 .708 0l.509.509.137-.274V2.118l-.137-.274-.51.51a.5.5 0 0 1-.707 0L12 1.707l-.646.647a.5.5 0 0 1-.708 0L10 1.707l-.646.647a.5.5 0 0 1-.708 0L8 1.707l-.646.647a.5.5 0 0 1-.708 0L6 1.707l-.646.647a.5.5 0 0 1-.708 0L4 1.707l-.646.647a.5.5 0 0 1-.708 0l-.509-.51z"
											/>
											<path
												d="M3 4.5a.5.5 0 0 1 .5-.5h6a.5.5 0 1 1 0 1h-6a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h6a.5.5 0 1 1 0 1h-6a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h6a.5.5 0 1 1 0 1h-6a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5zm8-6a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5z"
											/>
										</svg>
									</div>

									<h2 class="mt-5 font-semibold text-gray-800 dark:text-white">
										내역이 없습니다.
									</h2>
									<p class="mt-2 text-sm text-gray-600 dark:text-gray-400">
										상품을 등록하고 관리해보세요.
									</p>

									<div class="mt-5 grid sm:flex gap-2">
										<button
											@click="movetporegist()"
											type="button"
											class="py-2 px-3 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800"
										>
											<svg
												class="w-3 h-3"
												xmlns="http://www.w3.org/2000/svg"
												width="16"
												height="16"
												viewBox="0 0 16 16"
												fill="none"
											>
												<path
													d="M2.63452 7.50001L13.6345 7.5M8.13452 13V2"
													stroke="currentColor"
													stroke-width="2"
													stroke-linecap="round"
												/>
											</svg>
											새로운 상품 등록하기👀
										</button>
									</div>
								</div>

								<!-- End Input -->
							</div>
							<!-- End Header -->
							<div v-if="lists.length > 0">
								<div
									class="sm:hidden grid grid-cols-4 border-b px-2 py-4 mx-4 text-base font-medium text-slate-500"
									v-for="(litem, index) in lists"
									:key="index"
								>
									<div class="col-span-3">
										{{ litem.main_title }}
									</div>

									<div class="col-span-1 text-right">
										<a
											@click="moveto(litem.product_id)"
											class="text-blue-500 hover:text-blue-700"
										>
											></a
										>
									</div>
								</div>
							</div>

							<!-- Table -->
							<div class="sm:block hidden">
								<table
									v-if="lists.length > 0"
									class="min-w-full divide-y divide-gray-200 dark:divide-gray-700"
								>
									<thead class="bg-gray-50 dark:bg-slate-800">
										<tr>
											<th scope="col" class="px-4 py-3 text-left">
												<div class="flex items-center gap-x-2">
													<span
														class="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-gray-200"
													>
														상품명
													</span>
												</div>
											</th>

											<th scope="col" class="px-4 py-3 text-left">
												<div class="flex items-center gap-x-2">
													<span
														class="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-gray-200"
													>
														판매가
													</span>
												</div>
											</th>

											<th scope="col" class="px-4 py-3 text-left">
												<div class="flex items-center gap-x-2">
													<span
														class="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-gray-200"
													>
														조회수
													</span>
												</div>
											</th>

											<th scope="col" class="px-4 py-3 text-left">
												<div class="flex items-center gap-x-2">
													<span
														class="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-gray-200"
													>
														상품유형
													</span>
												</div>
											</th>

											<th scope="col" class="px-4 py-3 text-left">
												<div class="flex items-center gap-x-2">
													<span
														class="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-gray-200"
													>
													</span>
												</div>
											</th>
										</tr>
									</thead>

									<tbody
										data-accordion="table-column"
										class="divide-y divide-gray-200 dark:divide-gray-700"
									>
										<template v-for="(litem, index) in lists" :key="index">
											<tr
												@click="toggle(index)"
												:id="`table-column-header-${index}`"
												area-expanded="true"
												:aria-controls="`table-column-body-${index}`"
												:data-accordion-target="`#table-column-body-${index}`"
												class="cursor-pointer transition bg-white hover:bg-gray-50 dark:bg-slate-900 dark:hover:bg-slate-800"
											>
												<td class="h-px w-72 min-w-[18rem]">
													<a class="block h-full p-4">
														<span
															class="block text-sm font-semibold text-gray-800 dark:text-gray-200"
															>{{ litem.main_title }}</span
														>
													</a>
												</td>
												<td class="h-px whitespace-nowrap">
													<a class="block h-full p-4">
														<div class="flex items-center gap-x-3">
															<div class="grow">
																<span
																	class="block text-sm font-semibold text-gray-800 dark:text-gray-200"
																>
																	{{
																		litem.type == "OPTION"
																			? "(기본가)"
																			: ""
																	}}
																	{{
																		litem.price.toLocaleString()
																	}}원</span
																>
															</div>
														</div>
													</a>
												</td>

												<td class="h-px whitespace-nowrap">
													<a class="block h-full p-4">
														<span
															class="text-sm text-gray-600 dark:text-gray-400"
															>{{ litem.view_cnt }}</span
														>
													</a>
												</td>

												<td class="h-px whitespace-nowrap">
													<a class="block h-full p-4">
														<span
															v-if="litem.type == 'NORMAL'"
															class="bg-gray-100 text-gray-800 text-sm font-semibold me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300"
															>일반상품</span
														>
														<span
															v-else
															class="bg-green-100 text-green-800 text-sm font-semibold me-2 px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300"
															>옵션상품</span
														>
													</a>
												</td>

												<td class="h-px whitespace-nowrap">
													<span
														class="block text-sm font-semibold text-gray-800 dark:text-gray-200"
														><a
															
															class="text-blue-500 hover:text-blue-700"
														>
														<svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 4">
    <path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M2.49 2h.01m6 0h.01m5.99 0h.01"/>
  </svg></a
														></span
													>
												</td>
											</tr>
											<tr
												class="hidden w-full"
												:id="`table-column-body-${index}`"
												:aria-labelledby="`table-column-header-${index}`"
											>
												<td
													class="p-4 border-b dark:border-gray-700"
													colspan="6"
												>
													<div class="grid grid-cols-4 gap-4 mt-4">
														<div
														v-if="litem.type == 'OPTION'"
															class="col-span-4 relative p-3 bg-gray-100 rounded-lg dark:bg-gray-700 flex flex-col items-start justify-between"
														>
															<h6

																class="mb-2 text-base leading-none font-medium text-gray-900 dark:text-white"
															>
																재고 상태
															</h6>
															<table
																class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400"
															>
																<thead
																	class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"
																>
																	<tr>
																		<th
																			scope="col"
																			class="px-6 py-3"
																		>
																			옵션명
																		</th>
																		<th
																			scope="col"
																			class="px-6 py-3"
																		>
																			재고
																		</th>
																		<th
																			scope="col"
																			class="px-6 py-3"
																		>
																			판매가
																		</th>
																		<th
																			scope="col"
																			class="px-6 py-3"
																		>
																			주문건수
																		</th>
																	</tr>
																</thead>
																<tbody>
																	<tr
																		v-for="option in litem.option_list"
																		:key="option.option_id"
																		class="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
																	>
																		<th
																			scope="row"
																			class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
																		>
																			{{ option.name }}
																		</th>
																		<td class="px-6 py-4">
																			{{ option.ea }}
																		</td>

																		<td class="px-6 py-4">
																			{{ option.extra_price }}
																		</td>
																		<td class="px-6 py-4">
																			15
																		</td>
																	</tr>
																</tbody>
															</table>
														</div>
														<div class="col-span-4 grid grid-cols-4 gap-4 p-3 items-start justify-between">
															<div
																class="elative p-3 bg-gray-100 rounded-lg dark:bg-gray-700 flex flex-col items-start justify-between"
															>
																<h6
																	class="mb-2 text-base leading-none font-medium text-gray-900 dark:text-white"
																>
																	정가
																</h6>
																<div
																	class="bg-primary-100 text-primary-800 text-xs font-medium px-2.5 py-0.5 rounded-md dark:bg-primary-200 dark:text-primary-800 flex items-center"
																>
																	{{ litem.origin_price }}
																</div>
															</div>
															<div
																class="col-span-1 relative p-3 bg-gray-100 rounded-lg dark:bg-gray-700 flex flex-col items-start justify-between"
															>
																<h6
																	class="mb-2 text-base leading-none font-medium text-gray-900 dark:text-white"
																>
																	판매가(기본가)
																</h6>
																<div
																	class="bg-primary-100 text-primary-800 text-xs font-medium px-2.5 py-0.5 rounded-md dark:bg-primary-200 dark:text-primary-800 flex items-center"
																>
																	{{ litem.price }}
																</div>
															</div>
															<div
																class="col-span-1 relative p-3 bg-gray-100 rounded-lg dark:bg-gray-700 flex flex-col items-start justify-between"
															>
																<h6
																	class="mb-2 text-base leading-none font-medium text-gray-900 dark:text-white"
																>
																	상품 상태
																</h6>
																<div
																	class="bg-primary-100 text-primary-800 text-xs font-medium px-2.5 py-0.5 rounded-md dark:bg-primary-200 dark:text-primary-800 flex items-center"
																>
																	{{ litem.status }}
																</div>
															</div>
															<div
																class="col-span-1 relative p-3 bg-gray-100 rounded-lg dark:bg-gray-700 flex flex-col items-start justify-between"
															>
																<h6
																	class="mb-2 text-base leading-none font-medium text-gray-900 dark:text-white"
																>
																	판매량
																</h6>
																<div
																	class="bg-primary-100 text-primary-800 text-xs font-medium px-2.5 py-0.5 rounded-md dark:bg-primary-200 dark:text-primary-800 flex items-center"
																>
																	9999
																</div>
															</div>
														</div>
													</div>

													<div class="flex items-center space-x-3 mt-4">
														<button
														@click="moveto(litem.product_id)"
															type="button"
															class="py-2 px-3 flex items-center text-sm font-medium text-center text-slate-500 bg-primary-700 rounded-lg hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 "
														>
															<svg
																xmlns="http://www.w3.org/2000/svg"
																class="h-4 w-4 mr-1"
																viewbox="0 0 20 20"
																fill="currentColor"
																aria-hidden="true"
															>
																<path
																	d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z"
																/>
																<path
																	fill-rule="evenodd"
																	d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"
																	clip-rule="evenodd"
																/>
															</svg>
															수정
														</button>
														<button
															type="button"
															class="py-2 px-3 flex items-center text-sm font-medium text-center text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-gray-200 "
														>
															판매 화면으로 이동
														</button>
														
													</div>
												</td>
											</tr>
										</template>
									</tbody>
								</table>
								<div v-else>
									<!-- Card -->
									<div class="flex flex-col">
										<div class="-m-1.5 overflow-x-auto">
											<div class="p-1.5 min-w-full inline-block align-middle">
												<div
													class="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden dark:bg-slate-900 dark:border-gray-700"
												>
													<!-- Body -->
													<div
														class="max-w-sm w-full min-h-[400px] flex flex-col justify-center mx-auto px-6 py-4"
													>
														<div
															class="flex justify-center items-center w-[46px] h-[46px] bg-gray-100 rounded-md dark:bg-gray-800"
														>
															<svg
																class="w-6 h-6 text-gray-600 dark:text-gray-400"
																xmlns="http://www.w3.org/2000/svg"
																width="16"
																height="16"
																fill="currentColor"
																viewBox="0 0 16 16"
															>
																<path
																	d="M1.92.506a.5.5 0 0 1 .434.14L3 1.293l.646-.647a.5.5 0 0 1 .708 0L5 1.293l.646-.647a.5.5 0 0 1 .708 0L7 1.293l.646-.647a.5.5 0 0 1 .708 0L9 1.293l.646-.647a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .801.13l.5 1A.5.5 0 0 1 15 2v12a.5.5 0 0 1-.053.224l-.5 1a.5.5 0 0 1-.8.13L13 14.707l-.646.647a.5.5 0 0 1-.708 0L11 14.707l-.646.647a.5.5 0 0 1-.708 0L9 14.707l-.646.647a.5.5 0 0 1-.708 0L7 14.707l-.646.647a.5.5 0 0 1-.708 0L5 14.707l-.646.647a.5.5 0 0 1-.708 0L3 14.707l-.646.647a.5.5 0 0 1-.801-.13l-.5-1A.5.5 0 0 1 1 14V2a.5.5 0 0 1 .053-.224l.5-1a.5.5 0 0 1 .367-.27zm.217 1.338L2 2.118v11.764l.137.274.51-.51a.5.5 0 0 1 .707 0l.646.647.646-.646a.5.5 0 0 1 .708 0l.646.646.646-.646a.5.5 0 0 1 .708 0l.646.646.646-.646a.5.5 0 0 1 .708 0l.646.646.646-.646a.5.5 0 0 1 .708 0l.646.646.646-.646a.5.5 0 0 1 .708 0l.509.509.137-.274V2.118l-.137-.274-.51.51a.5.5 0 0 1-.707 0L12 1.707l-.646.647a.5.5 0 0 1-.708 0L10 1.707l-.646.647a.5.5 0 0 1-.708 0L8 1.707l-.646.647a.5.5 0 0 1-.708 0L6 1.707l-.646.647a.5.5 0 0 1-.708 0L4 1.707l-.646.647a.5.5 0 0 1-.708 0l-.509-.51z"
																/>
																<path
																	d="M3 4.5a.5.5 0 0 1 .5-.5h6a.5.5 0 1 1 0 1h-6a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h6a.5.5 0 1 1 0 1h-6a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h6a.5.5 0 1 1 0 1h-6a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5zm8-6a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5z"
																/>
															</svg>
														</div>

														<h2
															class="mt-5 font-semibold text-gray-800 dark:text-white"
														>
															내역이 없습니다.
														</h2>
														<p
															class="mt-2 text-sm text-gray-600 dark:text-gray-400"
														>
															상품을 등록하고 관리해보세요.
														</p>

														<div class="mt-5 grid sm:flex gap-2">
															<button
																@click="movetporegist()"
																type="button"
																class="py-2 px-3 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800"
															>
																<svg
																	class="w-3 h-3"
																	xmlns="http://www.w3.org/2000/svg"
																	width="16"
																	height="16"
																	viewBox="0 0 16 16"
																	fill="none"
																>
																	<path
																		d="M2.63452 7.50001L13.6345 7.5M8.13452 13V2"
																		stroke="currentColor"
																		stroke-width="2"
																		stroke-linecap="round"
																	/>
																</svg>
																새로운 상품 등록하기👀
															</button>
														</div>
													</div>
													<!-- End Body -->
												</div>
											</div>
										</div>
									</div>
									<!-- End Card -->
								</div>
							</div>
							<!-- End Table -->

							<the-preview-popup :contents="contents" />
						</div>
					</div>
				</div>
			</div>
			<!-- End Card -->

			<!-- End Table Section -->
		</div>
		<!-- End Card Section -->
	</div>
</template>

<script>
	import moment from "moment";
	import ThePreviewPopup from "../template/TemplatePreviewPopup.vue";
	import { mapActions } from "vuex";
	import ProductService from "@/services/ProductService";

	export default {
		components: {
			ThePreviewPopup,
		},
		async created() {
			await this.getproductlists();
		},
		data() {
			return {
				lists: [],
				size: 5,
				page: 0,
				keyword: "",
				total_page: 1,
				islastpage: false,
				contents: null,
				status: "",
				statusList: [
					{ key: "", value: "전체" },
					{ key: "NORMAL", value: "판매중" },
					{ key: "HIDDEN", value: "판매종료" },
				],
				toggleIndex: "",
			};
		},
		methods: {
			toggle(index) {
				this.toggleIndex = index;
				document.getElementById(`table-column-body-${index}`).classList.toggle("hidden");
			},
			...mapActions("cart", ["updateSpinnerStatus"]),

			movetporegist() {
				this.$router.push("/admin/product/detail/0");
			},
			searchproductstatus(status) {
				this.status = status;
				this.page = 0;
				this.getproductlists();
			},

			async getproductlists() {
				const payload = { size: 8, page: this.page, keyword: this.keyword };
				if (this.status) {
					payload["status"] = this.status;
				}
				this.updateSpinnerStatus(true);
				await ProductService.getproductlist(payload).then((response) => {
					if (response.data.code !== "0000") {
						return (this.lists = []);
					}
					this.total_page = response.data.data.total_page;
					this.lists = response.data.data.list;
					this.islastpage = response.data.data.last;
					this.updateSpinnerStatus(false);
				});
			},
			date_format(date) {
				return moment(date).format("YYYY/MM/DD");
			},
			prev() {
				if (this.page == 0) {
					this.page = 0;
				} else {
					this.page = this.page - 1;
				}

				this.getproductlists();
			},
			next() {
				this.page = this.page + 1;
				this.getproductlists();
			},
			moveto(id) {
				this.$router.push(`/admin/product/detail/${id}`);
			},
		},
	};
</script>
