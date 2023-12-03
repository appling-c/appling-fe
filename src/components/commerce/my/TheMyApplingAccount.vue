<template>
	<div class="px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
		<!-- Card -->
		<div class="">
			<div class="sm:hidden">
				<label for="tabs" class="sr-only">Select your country</label>
				<select
					@onChange="setCurrentTab"
					id="tabs"
					class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
				>
					<option v-for="tab in tabList" :key="tab.key" :value="tab.key">
						{{ tab.value }}
					</option>
				</select>
			</div>
			<ul
				class="hidden text-sm font-medium text-center text-gray-500 rounded-lg shadow sm:flex dark:divide-gray-700 dark:text-gray-400"
			>
				<li class="w-full" v-for="tab in tabList" :key="tab.key">
					<a
						@click="setCurrentTab(tab.key)"
						:class="
							currentTab == tab.key
								? 'text-gray-900 bg-gray-100 rounded-s-lg'
								: 'bg-white'
						"
						class="inline-block w-full p-4 border-r border-gray-200 hover:text-gray-700 hover:bg-gray-50 focus:ring-4 focus:ring-blue-300 focus:outline-none"
						>{{ tab.value }}</a
					>
				</li>
			</ul>

			<div class="mb-8">
				<div class="mt-3">
					<div
						id="tabs-with-icons-1"
						:class="currentTab == '1' ? '' : 'hidden'"
						role="tabpanel"
					>
						<!-- Grid -->
						<div class="grid sm:grid-cols-12 gap-2 sm:gap-6">
							<div class="sm:col-span-3">
								<label
									for="af-account-full-name"
									class="inline-block text-sm text-gray-800 mt-2.5 dark:text-gray-200"
								>
									이름
								</label>
								<div class="hs-tooltip inline-block">
									<button type="button" class="hs-tooltip-toggle ml-1">
										<svg
											class="inline-block w-3 h-3 text-gray-400 dark:text-gray-600"
											xmlns="http://www.w3.org/2000/svg"
											width="16"
											height="16"
											fill="currentColor"
											viewBox="0 0 16 16"
										>
											<path
												d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"
											/>
											<path
												d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"
											/>
										</svg>
									</button>
									<span
										class="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 transition-opacity inline-block absolute invisible w-40 text-center z-10 py-1 px-2 bg-gray-900 text-xs font-medium text-white rounded-md shadow-sm dark:bg-slate-700"
										role="tooltip"
									>
										Displayed on public forums, such as Preline
									</span>
								</div>
							</div>
							<!-- End Col -->

							<div class="sm:col-span-9">
								<div class="sm:flex">
									<input
										type="text"
										v-model="name"
										class="py-2 px-3 pr-11 block w-full border-gray-200 shadow-sm -mt-px -ml-px first:rounded-t-lg last:rounded-b-lg sm:first:rounded-l-lg sm:mt-0 sm:first:ml-0 sm:first:rounded-tr-none sm:last:rounded-bl-none sm:last:rounded-r-lg text-sm relative focus:z-10 focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
									/>
								</div>
							</div>
							<!-- End Col -->

							<div class="sm:col-span-3">
								<label
									for="af-account-full-name"
									class="inline-block text-sm text-gray-800 mt-2.5 dark:text-gray-200"
								>
									SNS 계정연동
								</label>
							</div>
							<!-- End Col -->

							<div class="sm:col-span-9">
								<button
									v-if="sns_type !== 'KAKAO'"
									type="button"
									class="py-2 px-3 inline-flex justify-center items-center gap-2 rounded-md border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm dark:bg-slate-900 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800"
								>
									카카오톡 계정 연결하기
								</button>
								<div v-else class="sm:flex">
									<input
										type="text"
										v-model="sns_type"
										disabled
										readonly
										class="disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none py-2 px-3 pr-11 block w-full border-gray-200 shadow-sm -mt-px -ml-px first:rounded-t-lg last:rounded-b-lg sm:first:rounded-l-lg sm:mt-0 sm:first:ml-0 sm:first:rounded-tr-none sm:last:rounded-bl-none sm:last:rounded-r-lg text-sm relative focus:z-10 focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
									/>
								</div>
							</div>
							<!-- End Col -->

							<div class="sm:col-span-3">
								<label
									for="af-account-full-name"
									class="inline-block text-sm text-gray-800 mt-2.5 dark:text-gray-200"
								>
									닉네임
								</label>
							</div>
							<!-- End Col -->

							<div class="sm:col-span-9">
								<div class="sm:flex">
									<input
										type="text"
										v-model="nickname"
										class="py-2 px-3 pr-11 block w-full border-gray-200 shadow-sm -mt-px -ml-px first:rounded-t-lg last:rounded-b-lg sm:first:rounded-l-lg sm:mt-0 sm:first:ml-0 sm:first:rounded-tr-none sm:last:rounded-bl-none sm:last:rounded-r-lg text-sm relative focus:z-10 focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
									/>
								</div>
							</div>
							<!-- End Col -->

							<div class="sm:col-span-3">
								<label
									for="af-account-email"
									class="inline-block text-sm text-gray-800 mt-2.5 dark:text-gray-200"
								>
									Email
								</label>
							</div>
							<!-- End Col -->

							<div class="sm:col-span-9">
								<input
									readonly
									disabled
									v-model="email"
									type="email"
									class="disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500 py-2 px-3 pr-11 block w-full border-gray-200 shadow-sm text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
									placeholder="maria@site.com"
								/>
							</div>
							<!-- End Col -->

							<div class="sm:col-span-3">
								<label
									for="af-account-email"
									class="inline-block text-sm text-gray-800 mt-2.5 dark:text-gray-200"
								>
									권한
								</label>
							</div>
							<!-- End Col -->

							<div class="sm:col-span-9">
								<input
									readonly
									disabled
									v-model="role"
									type="email"
									class="disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500 py-2 px-3 pr-11 block w-full border-gray-200 shadow-sm text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
									placeholder="maria@site.com"
								/>
							</div>
							<!-- End Col -->
						</div>
						<!-- End Grid -->
					</div>
					<div
						id="tabs-with-icons-2"
						:class="currentTab == '2' ? '' : 'hidden'"
						role="tabpanel"
					>
						<!-- Grid -->
						<form>
							<div class="grid sm:grid-cols-12 gap-2 sm:gap-6">
								<div class="sm:col-span-3">
									<label
										for="af-account-full-name"
										class="inline-block text-sm text-gray-800 mt-2.5 dark:text-gray-200"
									>
										현재 비밀번호
									</label>
								</div>
								<!-- End Col -->
								<div class="sm:col-span-9">
									<div class="sm:flex">
										<input
											type="password"
											autocomplete="false"
											v-model="currentpassword"
											class="py-2 px-3 pr-11 block w-full border-gray-200 shadow-sm -mt-px -ml-px first:rounded-t-lg last:rounded-b-lg sm:first:rounded-l-lg sm:mt-0 sm:first:ml-0 sm:first:rounded-tr-none sm:last:rounded-bl-none sm:last:rounded-r-lg text-sm relative focus:z-10 focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
										/>
									</div>
								</div>
								<!-- End Col -->

								<div class="sm:col-span-3">
									<label
										for="af-account-full-name"
										class="inline-block text-sm text-gray-800 mt-2.5 dark:text-gray-200"
									>
										새로운 비밀번호
									</label>
								</div>
								<!-- End Col -->
								<div class="sm:col-span-9">
									<div class="sm:flex">
										<input
											type="password"
											autocomplete="false"
											v-model="password"
											class="py-2 px-3 pr-11 block w-full border-gray-200 shadow-sm -mt-px -ml-px first:rounded-t-lg last:rounded-b-lg sm:first:rounded-l-lg sm:mt-0 sm:first:ml-0 sm:first:rounded-tr-none sm:last:rounded-bl-none sm:last:rounded-r-lg text-sm relative focus:z-10 focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
										/>
									</div>
								</div>
								<!-- End Col -->

								<div class="sm:col-span-3">
									<label
										for="af-account-full-name"
										class="inline-block text-sm text-gray-800 mt-2.5 dark:text-gray-200"
									>
										새로운 비밀번호 확인
									</label>
								</div>
								<!-- End Col -->
								<div class="sm:col-span-9">
									<div class="sm:flex">
										<input
											type="password"
											autocomplete="false"
											v-model="password2"
											class="py-2 px-3 pr-11 block w-full border-gray-200 shadow-sm -mt-px -ml-px first:rounded-t-lg last:rounded-b-lg sm:first:rounded-l-lg sm:mt-0 sm:first:ml-0 sm:first:rounded-tr-none sm:last:rounded-bl-none sm:last:rounded-r-lg text-sm relative focus:z-10 focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
										/>
									</div>
								</div>
								<!-- End Col -->

								<!-- End Col -->
							</div>
						</form>
						<!-- End Grid -->
					</div>
					<div
						id="tabs-with-icons-3"
						:class="currentTab == '3' ? '' : 'hidden'"
						role="tabpanel"
					>
						<div class="grid sm:grid-cols-12 gap-2 sm:gap-6">
							<template v-if="role == 'SELLER'">
								<div class="sm:col-span-3">
									<label
										for="af-account-email"
										class="inline-block text-sm text-gray-800 mt-2.5 dark:text-gray-200"
									>
										판매자 정보
									</label>
								</div>
								<!-- End Col -->
								<div class="sm:col-span-9">
									<div class="space-y-2" v-if="seller.company">
										<div class="space-y-2">
											<div>
												<div class="flex rounded-md shadow-sm">
													<span
														class="px-4 inline-flex items-center min-w-fit rounded-l-md border border-r-0 border-gray-200 bg-gray-50 text-sm text-gray-500 dark:bg-gray-700 dark:border-gray-700 dark:text-gray-400"
														>이름</span
													>
													<input
														v-model="seller.company"
														type="text"
														readonly
														disabled
														class="py-2 px-3 pr-11 block w-full border-gray-200 shadow-sm rounded-r-md text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
													/>
												</div>
											</div>
											<div>
												<div class="flex rounded-md shadow-sm">
													<span
														class="px-4 inline-flex items-center min-w-fit rounded-l-md border border-r-0 border-gray-200 bg-gray-50 text-sm text-gray-500 dark:bg-gray-700 dark:border-gray-700 dark:text-gray-400"
														>주소</span
													>
													<input
														v-model="seller.address"
														type="text"
														readonly
														disabled
														class="py-2 px-3 pr-11 block w-full border-gray-200 shadow-sm rounded-r-md text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
													/>
												</div>
											</div>

											<div>
												<div class="flex rounded-md shadow-sm">
													<span
														class="px-4 inline-flex items-center min-w-fit rounded-l-md border border-r-0 border-gray-200 bg-gray-50 text-sm text-gray-500 dark:bg-gray-700 dark:border-gray-700 dark:text-gray-400"
														>상세주소</span
													>
													<input
														v-model="seller.address_detail"
														readonly
														disabled
														type="text"
														class="py-2 px-3 pr-11 block w-full border-gray-200 shadow-sm rounded-r-md text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
													/>
												</div>
											</div>
											<div>
												<div class="flex rounded-md shadow-sm">
													<span
														class="px-4 inline-flex items-center min-w-fit rounded-l-md border border-r-0 border-gray-200 bg-gray-50 text-sm text-gray-500 dark:bg-gray-700 dark:border-gray-700 dark:text-gray-400"
														>우편번호</span
													>
													<input
														v-model="seller.zonecode"
														type="text"
														class="py-2 px-3 pr-11 block w-full border-gray-200 shadow-sm rounded-r-md text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
													/>
												</div>
											</div>
											<div>
												<div class="flex rounded-md shadow-sm">
													<span
														class="px-4 inline-flex items-center min-w-fit rounded-l-md border border-r-0 border-gray-200 bg-gray-50 text-sm text-gray-500 dark:bg-gray-700 dark:border-gray-700 dark:text-gray-400"
														>연락처</span
													>
													<input
														v-model="seller.tel"
														readonly
														disabled
														type="text"
														class="py-2 px-3 pr-11 block w-full border-gray-200 shadow-sm rounded-r-md text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
													/>
												</div>
											</div>
											<div>
												<div class="flex rounded-md shadow-sm">
													<span
														class="px-4 inline-flex items-center min-w-fit rounded-l-md border border-r-0 border-gray-200 bg-gray-50 text-sm text-gray-500 dark:bg-gray-700 dark:border-gray-700 dark:text-gray-400"
														>이메일 주소</span
													>
													<input
														v-model="seller.email"
														readonly
														disabled
														type="text"
														class="py-2 px-3 pr-11 block w-full border-gray-200 shadow-sm rounded-r-md text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
													/>
												</div>
											</div>
										</div>
										<div class="sm:col-span-9">
											<button
												@click="movetosellerregist"
												type="button"
												class="py-2 px-3 inline-flex justify-center items-center gap-2 rounded-md border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm dark:bg-slate-900 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800"
											>
												판매자 정보 수정
											</button>
										</div>
									</div>
									<div class="space-y-2" v-else>
										<button
											@click="movetosellerregist"
											type="button"
											class="py-2 px-3 inline-flex justify-center items-center gap-2 rounded-md border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm dark:bg-slate-900 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800"
										>
											판매자 정보 등록하기
										</button>
									</div>
								</div>
							</template>
						</div>
					</div>
				</div>
			</div>

			<div class="mt-5 flex justify-end gap-x-2">
				<button
					@click="cancel"
					type="button"
					class="py-2 px-3 inline-flex justify-center items-center gap-2 rounded-md border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm dark:bg-slate-900 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800"
				>
					취소
				</button>
				<button
					type="button"
					class="py-2 px-3 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800"
					data-hs-overlay="#hs-sign-out-alert-small-window"
				>
					저장하기
				</button>
			</div>
		</div>
		<!-- End Card -->
	</div>

	<div
		id="hs-sign-out-alert-small-window"
		class="hs-overlay hidden w-full h-full fixed top-0 left-0 z-[60] overflow-x-hidden overflow-y-auto"
	>
		<div
			class="hs-overlay-open:mt-7 hs-overlay-open:opacity-100 hs-overlay-open:duration-500 mt-0 opacity-0 ease-out transition-all sm:max-w-xs sm:w-full m-3 sm:mx-auto"
		>
			<div class="relative flex flex-col bg-white shadow-lg rounded-xl dark:bg-gray-800">
				<div class="absolute top-2 right-2">
					<button
						type="button"
						class="inline-flex flex-shrink-0 justify-center items-center h-8 w-8 rounded-md text-gray-500 hover:text-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-white transition-all text-sm dark:focus:ring-gray-700 dark:focus:ring-offset-gray-800"
						data-hs-overlay="#hs-sign-out-alert-small-window"
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

				<div class="p-4 sm:p-10 text-center overflow-y-auto">
					<!-- Icon -->
					<span
						class="mb-4 inline-flex justify-center items-center w-[62px] h-[62px] rounded-full border-4 border-yellow-50 bg-yellow-100 text-yellow-500 dark:bg-yellow-700 dark:border-yellow-600 dark:text-yellow-100"
					>
						<svg
							class="w-5 h-5"
							xmlns="http://www.w3.org/2000/svg"
							width="16"
							height="16"
							fill="currentColor"
							viewBox="0 0 16 16"
						>
							<path
								d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"
							/>
						</svg>
					</span>
					<!-- End Icon -->

					<h3 class="mb-2 text-2xl font-bold text-gray-800 dark:text-gray-200">
						내 정보 수정하기
					</h3>
					<p class="text-gray-500">변경 사항을 저장하시겠습니까?</p>
					<div class="mt-6 grid gap-y-2">
						<a
							@click="submit"
							class="py-2.5 px-4 w-full inline-flex justify-center items-center gap-2 rounded-md border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm dark:bg-gray-800 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800"
							data-hs-overlay="#hs-sign-out-alert-small-window"
							>저장하기</a
						>
						<button
							type="button"
							class="py-2.5 px-4 w-full inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800"
							data-hs-overlay="#hs-sign-out-alert-small-window"
						>
							취소
						</button>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import { mapActions, mapGetters } from "vuex";
	import MemberService from "@/services/MemberService";
	import UserAthendicateService from "@/services/UserAthendicateService";
	export default {
		computed: {
			...mapGetters("auth", ["userInfoInterface"]),
		},
		data() {
			return {
				currentpassword: "",
				password: "",
				password2: "",

				email: "",
				name: "",
				nickname: "",
				role: "",
				sns_type: "",

				seller: {
					tel: "",
					company: "",
					address: "",
					email: "",
					zonecode: "",
					address_detail: "",
				},
				currentTab: "1",

				tabList: [
					{ key: "1", value: "내 계정 정보" },
					{ key: "2", value: "비밀번호 변경" },
					{ key: "3", value: "판매자 정보" },
				],
			};
		},
		methods: {
			...mapActions("cart", ["updateSpinnerStatus"]),
			setCurrentTab(tab) {
				this.currentTab = tab;
			},

			getmemeberinfo() {
				const userobj = this.userInfoInterface;
				const { email, name, nickname, role, sns_type } = userobj;
				this.email = email;
				this.name = name;
				this.nickname = nickname;
				this.sns_type = sns_type;
				this.role = role;

				if (role == "SELLER") {
					this.getsellerinfo();
				}
			},
			async getsellerinfo() {
				// 판매자 정보 가져오기
				await MemberService.getsellerinfo().then((response) => {
					const memberinfo = response.data.data;
					this.seller.company = memberinfo.company;
					if (this.seller.company) {
						this.ismodify = true;
					}
					this.seller.tel = memberinfo.tel;
					this.seller.address = memberinfo.address;
					this.seller.email = memberinfo.email;
					this.seller.zonecode = memberinfo?.zonecode;
					this.seller.address_detail = memberinfo?.address_detail;
				});
			},

			async submit() {
				// 저장하기 이벤트 핸들러
				this.updateSpinnerStatus(true);

				let payload = {
					name: this.name,
					nickname: this.nickname,
				};

				if (this.currentTab == "2") {
					if (this.currentpassword == "") {
						this.updateSpinnerStatus(false);
						return alert("비밀번호를 입력해주세요.");
					}

					if (this.password !== this.password2) {
						this.updateSpinnerStatus(false);
						return alert("새로운 비밀번호와 일치하지 않습니다.");
					}
					let targetPassword =
						this.currentTab == "2" ? this.password2 : this.currentpassword;
					payload["password"] = targetPassword;
				}

				await UserAthendicateService.updatememberinfo(payload).then((response) => {
					this.updateSpinnerStatus(false);
					alert(response?.data.data.message);
				});

				return this.$router.push("/commerce");
			},

			cancel() {
				this.$router.go(-1);
			},
			movetosellerregist() {
				this.$router.push("/commerce/regist");
			},
		},
		mounted() {
			// 회원정보
			this.getmemeberinfo();
			this.updateSpinnerStatus(false);

			this.$emit("renderTabTitle", "내 정보");
		},
	};
</script>
