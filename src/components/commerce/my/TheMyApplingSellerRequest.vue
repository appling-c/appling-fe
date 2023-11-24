<template>
	<!-- Comment Form -->
	<div class=" ">
		<div class="mx-auto max-w-2xl">
			<div class="bg-white rounded-xl shadow p-4 sm:p-7 dark:bg-slate-900">
				<div class="mb-8">
					<h2 class="text-xl font-bold text-gray-800 dark:text-gray-200">
						판매자 권한 요청하기
					</h2>
					<p class="text-sm text-gray-600 dark:text-gray-400">
						구매자에게 공개될 판매 정보를 입력해 주세요. 모든 항목은 필수 입력
						항목입니다.
					</p>
				</div>
				<form>
					<!-- Grid -->
					<div class="grid sm:grid-cols-12 gap-2 sm:gap-6">
						<div class="sm:col-span-3">
							<label
								for="af-account-full-name"
								class="inline-block text-sm text-gray-800 mt-2.5 dark:text-gray-200"
							>
								판매장명
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
									구매자에게 노출되는 농장(판매장)의 이름입니다.
								</span>
							</div>
						</div>
						<!-- End Col -->

						<div class="sm:col-span-9">
							<div class="sm:flex">
								<input
									type="text"
									v-model="company"
									class="py-2 px-3 pr-11 block w-full border-gray-200 shadow-sm -mt-px -ml-px first:rounded-t-lg last:rounded-b-lg sm:first:rounded-l-lg sm:mt-0 sm:first:ml-0 sm:first:rounded-tr-none sm:last:rounded-bl-none sm:last:rounded-r-lg text-sm relative focus:z-10 focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
									placeholder="김시월"
								/>
							</div>
						</div>
						<!-- End Col -->

						<div class="sm:col-span-3">
							<label
								for="af-account-full-name"
								class="inline-block text-sm text-gray-800 mt-2.5 dark:text-gray-200"
							>
								판매장 연락처
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
									구매자에게 노출되는 농장(판매장)의 연락처입니다.
								</span>
							</div>
						</div>
						<!-- End Col -->

						<div class="sm:col-span-9">
							<div class="sm:flex">
								<input
									type="text"
									v-model="tel"
									class="py-2 px-3 pr-11 block w-full border-gray-200 shadow-sm -mt-px -ml-px first:rounded-t-lg last:rounded-b-lg sm:first:rounded-l-lg sm:mt-0 sm:first:ml-0 sm:first:rounded-tr-none sm:last:rounded-bl-none sm:last:rounded-r-lg text-sm relative focus:z-10 focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
									placeholder="01012345678"
								/>
							</div>
						</div>
						<!-- End Col -->

						<div class="sm:col-span-3">
							<label
								for="af-account-full-name"
								class="inline-block text-sm text-gray-800 mt-2.5 dark:text-gray-200"
							>
								판매장 주소
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
									구매자에게 노출되는 판매지 주소입니다.
								</span>
							</div>
						</div>
						<!-- End Col -->

						<div class="sm:col-span-9">
							<div class="sm:flex">
								<button
									@click="showAddresspopup"
									type="button"
									class="inline-flex flex-shrink-0 justify-center items-center h-[2.875rem] w-[2.875rem] rounded-l-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:z-10 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all text-sm"
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
								<input
									@click="showAddresspopup"
									type="text"
									readonly
									v-model="address"
									class="py-2 px-3 pr-11 block w-full border-gray-200 shadow-sm -mt-px -ml-px first:rounded-t-lg last:rounded-b-lg sm:first:rounded-l-lg sm:mt-0 sm:first:ml-0 sm:first:rounded-tr-none sm:last:rounded-bl-none sm:last:rounded-r-lg text-sm relative focus:z-10 focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
									placeholder=""
								/>
							</div>
						</div>

						<div class="sm:col-span-3">
							<label
								for="af-account-full-name"
								class="inline-block text-sm text-gray-800 mt-2.5 dark:text-gray-200"
							>
								판매장 상세 주소
							</label>
						</div>
						<!-- End Col -->

						<div class="sm:col-span-9">
							<div class="sm:flex">
								<input
									type="text"
									v-model="address_detail"
									class="py-2 px-3 pr-11 block w-full border-gray-200 shadow-sm -mt-px -ml-px first:rounded-t-lg last:rounded-b-lg sm:first:rounded-l-lg sm:mt-0 sm:first:ml-0 sm:first:rounded-tr-none sm:last:rounded-bl-none sm:last:rounded-r-lg text-sm relative focus:z-10 focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
								/>
							</div>
						</div>

						<div class="sm:col-span-3">
							<label
								for="af-account-full-name"
								class="inline-block text-sm text-gray-800 mt-2.5 dark:text-gray-200"
							>
								판매장 주소 우편번호
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
									등록한 판매장 주소에 따라 자동으로 입력됩니다.
								</span>
							</div>
						</div>
						<!-- End Col -->

						<div class="sm:col-span-9">
							<div class="sm:flex">
								<input
									type="text"
									readonly
									disabled
									v-model="zonecode"
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
								판매장 이메일
							</label>
							<div class="hs-tooltip inline-block">
								<button type="button" class="hs-tooltip-toggle ml-1">
									<svg
										class="inline-block w-3 h-3 text-gray-400 dark:text-gray-600"
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
									구매자에게 노출되는 판매자 이메일입니다.
								</span>
							</div>
						</div>
						<!-- End Col -->

						<div class="sm:col-span-9">
							<div class="sm:flex">
								<input
									type="text"
									v-model="email"
									class="py-2 px-3 pr-11 block w-full border-gray-200 shadow-sm -mt-px -ml-px first:rounded-t-lg last:rounded-b-lg sm:first:rounded-l-lg sm:mt-0 sm:first:ml-0 sm:first:rounded-tr-none sm:last:rounded-bl-none sm:last:rounded-r-lg text-sm relative focus:z-10 focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
									placeholder="example@appling.com"
								/>
							</div>
						</div>
						<!-- End Col -->
					</div>
					<!-- End Grid -->

					<div class="mt-5 flex justify-end gap-x-2">
						<button
							@click="() => $router.history.back()"
							type="button"
							class="py-2 px-3 inline-flex justify-center items-center gap-2 rounded-md border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm dark:bg-slate-900 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800"
						>
							취소
						</button>
						<button
							@click="submit()"
							type="button"
							class="py-2 px-3 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800"
							data-hs-overlay="#hs-sign-out-alert-small-window"
						>
							저장하기
						</button>
					</div>
				</form>
			</div>
		</div>
	</div>
	<!-- End Comment Form -->
</template>

<script lang="ts">
	import router from "@/plugins/router";
	import { mapActions } from "vuex";
	import UserAthendicateService from "@/services/UserAthendicateService";
	import MemberService from "@/services/MemberService";

	export default {
		data() {
			return {
				tel: "",
				company: "",
				address: "",
				email: "",
				zonecode: "",
				ismodify: false,
				address_detail: "",
			};
		},
		methods: {
			...mapActions("cart", ["updateSpinnerStatus"]),
			async submit() {
				const payload = {
					company: this.company,
					tel: this.tel,
					address: this.address,
					email: this.email,
					zonecode: this.zonecode,
					address_detail: this.address_detail,
				};

				if (this.company == "") {
					return alert("판매장명을 입력해주세요.");
				} else if (this.tel == "") {
					return alert("판매장 연락처를 입력해주세요.");
				} else if (this.address == "") {
					return alert("판매장 주소를 입력해주세요.");
				} else if (this.email == "") {
					return alert("판매장 이메일 주소를 입력해주세요.");
				}

				this.updateSpinnerStatus(true);

				if (this.ismodify) {
					// 판매자 정보 수정
					await MemberService.updatesellerinfo(payload).then((message) => {
						this.updateSpinnerStatus(false);
						alert(message.data.data.message);
						return router.push("/commerce/main");
					});
				} else {
					// 판매자 정보 등록
					await MemberService.registSellerInfo(payload).then((message) => {
						this.updateSpinnerStatus(false);
						alert(message.data.data.message);
						return router.push("/commerce/main");
					});
				}
			},

			async showAddresspopup() {
				var self = this;
				new daum.Postcode({
					oncomplete: function (data) {
						const { address, zonecode } = data;
						self.address = address;
						self.zonecode = zonecode;
					},
				}).open();
			},
		},
		async mounted() {
			// 등록한 판매자 정보 가져오기
			this.updateSpinnerStatus(true);
			try {
				await MemberService.getsellerinfo().then((response) => {
					const memberinfo = response.data.data;
					this.company = memberinfo.company;
					if (this.company) {
						this.ismodify = true;
					}
					this.tel = memberinfo.tel;
					this.address = memberinfo.address;
					this.email = memberinfo.email;
					this.zonecode = memberinfo?.zonecode;
					this.address_detail = memberinfo?.address_detail;
					this.updateSpinnerStatus(false);
				});
			} catch (e) {
				this.updateSpinnerStatus(false);
			}
		},
	};
</script>
