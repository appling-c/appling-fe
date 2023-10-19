<template>
	<div>
		<header class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
			<h1 class="block text-2xl font-bold text-gray-800 sm:text-3xl dark:text-white">
				📦 상품 달력
			</h1>
			<p class="mt-2 text-lg text-gray-800 dark:text-gray-600">
				등록한 상품들의 판매 현황을 확인하고 상세보기를 눌러 상품을 관리하세요!
			</p>
			<p class="mt-2 text-base text-gray-800 dark:text-gray-400">
				등록 이후에도 수정이 가능합니다.
			</p>

			<div class="mt-5 flex flex-col items-center gap-2 sm:flex-row sm:gap-3">
				<router-link
					to="/admin/product/list"
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
					등록했던 상품 보러가기👀
				</router-link>
			</div>
		</header>
		<!-- Card Section -->
		<div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
			<!-- Card -->
			<div class="bg-white rounded-xl shadow p-4 sm:p-7 dark:bg-slate-900">
				<div id="calendar" style="height: 600px"></div>
			</div>
			<!-- End Card -->
		</div>
		<!-- End Card Section -->
	</div>
</template>
<script lang="ts">
	import Calendar from "@toast-ui/calendar";

	export default {
		data() {
			return {
				calendar: null,
			};
		},
		async mounted() {
			const container = document.getElementById("calendar");
			const options = {
				defaultView: "month",
				usageStatistics: false,
				timezone: {
					zones: [
						{
							timezoneName: "Asia/Seoul",
							displayLabel: "Seoul",
						},
						{
							timezoneName: "Europe/London",
							displayLabel: "London",
						},
					],
				},
				calendars: [
					{
						id: "cal1",
						name: "개인",
						backgroundColor: "#03bd9e",
					},
					{
						id: "cal2",
						name: "직장",
						backgroundColor: "#00a9ff",
					},
				],
			};

			const calendar = new Calendar(container, options);
			console.log(calendar);

			calendar.createEvent([
				{
					id: "event1",
					calendarId: "cal2",
					title: "주간 회의",
					start: "2023-10-07T09:00:00",
					end: "2023-10-07T10:00:00",
				},
				{
					id: "event2",
					calendarId: "cal1",
					title: "점심 약속",
					start: "2023-10-08T12:00:00",
					end: "2023-10-08T13:00:00",
				},
				{
					id: "event3",
					calendarId: "cal2",
					title: "휴가",
					start: "2023-10-08",
					end: "2023-10-10",
					isAllday: true,
					category: "allday",
				},
			]);
		},
	};
</script>

<style>
	@import url(https://uicdn.toast.com/calendar/latest/toastui-calendar.min.css);
</style>
