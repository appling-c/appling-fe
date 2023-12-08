<template>
	<div>
		<!-- ========== HEADER ========== -->
		<TheCommerceHeader />
		<!-- ========== END HEADER ========== -->

		<!-- ========== MAIN CONTENT ========== -->
		<!-- Sidebar Toggle -->
		<div class="sticky top-0 inset-x-0 z-20 bg-white border-y px-4 sm:px-6 md:px-8 lg:hidden">
			<div class="flex items-center py-4">
				<!-- Navigation Toggle -->
				<button
					type="button"
					class="text-gray-500 hover:text-gray-600"
					data-hs-overlay="#application-sidebar"
					aria-controls="application-sidebar"
					aria-label="Toggle navigation"
				>
					<span class="sr-only">Toggle Navigation</span>
					<svg
						class="w-5 h-5"
						width="16"
						height="16"
						fill="currentColor"
						viewBox="0 0 16 16"
					>
						<path
							fill-rule="evenodd"
							d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
						/>
					</svg>
				</button>
				<!-- End Navigation Toggle -->

				<!-- Breadcrumb -->
				<ol
					class="ml-3 flex items-center whitespace-nowrap min-w-0"
					aria-label="Breadcrumb"
				>
					<li class="flex items-center text-sm text-gray-800">
						{{ depth1 }}
					</li>
				</ol>
				<!-- End Breadcrumb -->
			</div>
		</div>
		<!-- End Sidebar Toggle -->

		<!-- Sidebar -->
		<div
			id="application-sidebar"
			class="hs-overlay hs-overlay-open:translate-x-0 -translate-x-full transition-all duration-300 transform hidden fixed top-0 left-0 bottom-0 z-[60] w-52 bg-white border-r border-gray-200 pt-7 pb-10 overflow-y-auto scrollbar-y lg:block lg:translate-x-0 lg:right-auto lg:bottom-0"
		>
			<div class="px-6">
				<a class="flex-none text-xl font-semibold" aria-label="Brand"
					><img
						class="mx-auto mb-4 w-16 h-16 rounded-full"
						src="/src/assets/apple-logo.png"
						alt="Micheal Avatar"
					/>
					판매자 애플링</a
				>
			</div>

			<nav
				class="hs-accordion-group p-6 w-full flex flex-col flex-wrap"
				data-hs-accordion-always-open
			>
				<ul class="space-y-1.5">
					<li id="users-dashboard">
						<a
							:class="currentPath == 'dashboard' ? 'bg-gray-100' : ''"
							class="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-slate-700 rounded-md hover:bg-gray-100"
							@click="moveto('/admin/dashboard', '대시보드')"
						>
							<svg
								class="w-3.5 h-3.5"
								xmlns="http://www.w3.org/2000/svg"
								width="16"
								height="16"
								fill="currentColor"
								viewBox="0 0 16 16"
							>
								<path
									fill-rule="evenodd"
									d="M2 13.5V7h1v6.5a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5V7h1v6.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5zm11-11V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z"
								/>
								<path
									fill-rule="evenodd"
									d="M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z"
								/>
							</svg>
							대시보드
						</a>
					</li>

					<li>
						<a
							@click="moveto('/admin/product/list', '상품 관리 > 상품 상세')"
							class="flex items-center gap-x-3.5 py-2 px-2.5 hs-accordion-active:text-blue-600 hs-accordion-active:hover:bg-transparent text-sm text-slate-700 rounded-md hover:bg-gray-100"
						>
							<svg
								class="w-[16px] h-[16px] text-gray-800 dark:text-white"
								aria-hidden="true"
								xmlns="http://www.w3.org/2000/svg"
								width="21"
								height="20"
								fill="none"
								viewBox="0 0 21 20"
							>
								<path
									stroke="currentColor"
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="1.5"
									d="M3.308 9a2.257 2.257 0 0 0 2.25-2.264 2.25 2.25 0 0 0 4.5 0 2.25 2.25 0 0 0 4.5 0 2.25 2.25 0 1 0 4.5 0C19.058 5.471 16.956 1 16.956 1H3.045S1.058 5.654 1.058 6.736A2.373 2.373 0 0 0 3.308 9Zm0 0a2.243 2.243 0 0 0 1.866-1h.767a2.242 2.242 0 0 0 3.733 0h.767a2.242 2.242 0 0 0 3.733 0h.767a2.247 2.247 0 0 0 1.867 1A2.22 2.22 0 0 0 18 8.649V19H9v-7H5v7H2V8.524c.37.301.83.469 1.308.476ZM12 12h3v3h-3v-3Z"
								/>
							</svg>

							상품관리
						</a>
					</li>

					<li>
						<a
							@click="moveto('/admin/order/history', '주문관리 > 주문내역')"
							class="flex items-center gap-x-3.5 py-2 px-2.5 hs-accordion-active:text-blue-600 hs-accordion-active:hover:bg-transparent text-sm text-slate-700 rounded-md hover:bg-gray-100"
						>
						<svg class="w-[16px] h-[16px] text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 20">
    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 6h6m-6 4h6m-6 4h6M1 1v18l2-2 2 2 2-2 2 2 2-2 2 2V1l-2 2-2-2-2 2-2-2-2 2-2-2Z"/>
  </svg>
							주문관리
						</a>
					</li>

					<li class="hs-accordion" id="projects-brandshop">
						<a
							class="hs-accordion-toggle flex items-center gap-x-3.5 py-2 px-2.5 hs-accordion-active:text-blue-600 hs-accordion-active:hover:bg-transparent text-sm text-slate-700 rounded-md hover:bg-gray-100"
						>
							<svg
								class="w-3.5 h-3.5"
								xmlns="http://www.w3.org/2000/svg"
								width="16"
								height="16"
								fill="currentColor"
								viewBox="0 0 16 16"
							>
								<path
									d="M1.5 0A1.5 1.5 0 0 0 0 1.5V13a1 1 0 0 0 1 1V1.5a.5.5 0 0 1 .5-.5H14a1 1 0 0 0-1-1H1.5z"
								></path>
								<path
									d="M3.5 2A1.5 1.5 0 0 0 2 3.5v11A1.5 1.5 0 0 0 3.5 16h6.086a1.5 1.5 0 0 0 1.06-.44l4.915-4.914A1.5 1.5 0 0 0 16 9.586V3.5A1.5 1.5 0 0 0 14.5 2h-11zM3 3.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 .5.5V9h-4.5A1.5 1.5 0 0 0 9 10.5V15H3.5a.5.5 0 0 1-.5-.5v-11zm7 11.293V10.5a.5.5 0 0 1 .5-.5h4.293L10 14.793z"
								></path>
							</svg>
							농장 소개하기

							<svg
								class="hs-accordion-active:block ml-auto hidden w-3 h-3 text-gray-600 group-hover:text-gray-500"
								width="16"
								height="16"
								viewBox="0 0 16 16"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M2 11L8.16086 5.31305C8.35239 5.13625 8.64761 5.13625 8.83914 5.31305L15 11"
									stroke="currentColor"
									stroke-width="2"
									stroke-linecap="round"
								></path>
							</svg>

							<svg
								class="hs-accordion-active:hidden ml-auto block w-3 h-3 text-gray-600 group-hover:text-gray-500"
								width="16"
								height="16"
								viewBox="0 0 16 16"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5"
									stroke="currentColor"
									stroke-width="2"
									stroke-linecap="round"
								></path>
							</svg>
						</a>

						<div
							id="projects-accordion-child"
							class="hs-accordion-content w-full overflow-hidden transition-[height] duration-300 hidden"
						>
							<ul class="pt-2 pl-2">
								<li>
									<a
										class="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-slate-700 rounded-md hover:bg-gray-100"
										@click="moveto('/admin/brandshop', '농장 소개페이지')"
									>
										농장 소개페이지 만들기
									</a>
								</li>
								<li>
									<a
										class="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-slate-700 rounded-md hover:bg-gray-100"
										@click="
											moveto(
												`/brandshop/preview/${userInfoInterface?.member_id}`,
												'농장 소개페이지'
											)
										"
									>
										농장 소개페이지 보러가기👀
									</a>
								</li>
							</ul>
						</div>
					</li>

					<!-- <li>
						<a
							@click="account()"
							class="flex items-center gap-x-3.5 py-2 px-2.5 hs-accordion-active:text-blue-600 hs-accordion-active:hover:bg-transparent text-sm text-slate-700 rounded-md hover:bg-gray-100"
						>
							<svg
								class="w-3.5 h-3.5"
								xmlns="http://www.w3.org/2000/svg"
								width="16"
								height="16"
								fill="currentColor"
								viewBox="0 0 16 16"
							>
								<path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
								<path
									fill-rule="evenodd"
									d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"
								/>
							</svg>
							계정관리
						</a>
					</li> -->
					<li>
						<a
							class="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-slate-700 rounded-md hover:bg-gray-100"
							@click="movetoCommerce()"
						>
						<svg class="w-[16px] h-[16px] text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 20">
    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 9V4a3 3 0 0 0-6 0v5m9.92 10H2.08a1 1 0 0 1-1-1.077L2 6h14l.917 11.923A1 1 0 0 1 15.92 19Z"/>
  </svg>
							메인으로 이동
						</a>
					</li>
				</ul>
			</nav>
		</div>
		<!-- End Sidebar -->
		<!-- ========== END MAIN CONTENT ========== -->
	</div>
</template>
<script lang="ts">
	import { defineComponent, onMounted, ref, computed } from "vue";
	import UserAthendicateService from "@/services/UserAthendicateService";
	import { useStore } from "vuex";

	import TheCommerceHeader from "../commerce/common/TheCommerceHeader.vue";

	export default defineComponent({
		components: {
			TheCommerceHeader,
		},
		setup() {
			const store = useStore();

			let depth1 = ref("");
			let depth2 = ref("");
			let currentPath = ref("");

			const userInfoInterface = computed(() => store.getters["auth/userInfoInterface"]);

			const logout = () => {
				UserAthendicateService.logout();
				location.href = "/commerce/main";
			};

			const moveto = (path: string, depth1: string, cp1: string) => {
				location.href = path;
				setItem(depth1, cp1);
			};

			const setItem = (d1: string, d2: string, cp1: string) => {
				localStorage.setItem("depth1", d1);
				localStorage.setItem("currentPath", cp1);
			};

			const account = () => {
				location.href = "/my/account";
			};

			const movetoCommerce = () => {
				location.href = "/commerce";
			};

			onMounted(() => {
				depth1.value = localStorage.getItem("depth1");
				currentPath = localStorage.getItem("currentPath");
			});

			return {
				logout,
				moveto,
				account,
				movetoCommerce,
				setItem,
				depth1,
				depth2,
				currentPath,
				userInfoInterface,
			};
		},
	});
</script>
