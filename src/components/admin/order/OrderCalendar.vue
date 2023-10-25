<template>
	<header class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
		<h1 class="block text-2xl font-bold text-gray-800 sm:text-3xl dark:text-white">
			📦 상품 달력
		</h1>
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
	<div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
		<!-- Card -->
		<div class="bg-white rounded-xl shadow p-4 sm:p-7 dark:bg-slate-900">
			<div class="container mx-auto mt-10">
				<div id="calendarMenu">
					<span id="menu-navi">
						<button
							@click="today()"
							type="button"
							class="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold text-blue-500 hover:bg-blue-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm"
						>
							Today
						</button>
						<button
							@click="prev()"
							type="button"
							class="calendar-btn calendar-move-day py-3 px-4 inline-flex justify-center items-center"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								stroke-width="1.5"
								stroke="currentColor"
								class="w-4 h-4"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									d="M15.75 19.5L8.25 12l7.5-7.5"
								/>
							</svg></button
						><span class="calendar-render-range">{{ currentDate }}</span>
						<button
							@click="next()"
							type="button"
							class="calendar-btn calendar-move-day py-3 px-4 inline-flex justify-center items-center"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								stroke-width="1.5"
								stroke="currentColor"
								class="w-4 h-4"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									d="M8.25 4.5l7.5 7.5-7.5 7.5"
								/>
							</svg></button
					></span>
				</div>
				<div id="calendar" style="height: 600px"></div>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
	import Calendar from "@toast-ui/calendar";
	import moment from "moment";
	import ProductService from "@/services/ProductService";
	import { mapActions } from "vuex";

	export default {
		data() {
			return {
				currentDate: "",
				calendar: null,
				productList: [],
			};
		},
		methods: {
			...mapActions("cart", ["updateSpinnerStatus"]),

			prev() {
				this.calendar.prev();

				this.setCurrentDate();
			},
			next() {
				this.calendar.next();

				this.setCurrentDate();
			},
			today() {
				this.calendar.today();

				this.setCurrentDate();
			},
			setCurrentDate() {
				this.currentDate = moment(new Date(this.calendar.getDate()?.d)).format("YYYY.MM");
			},
			async getproductlists() {
				const payload = {};

				this.updateSpinnerStatus(true);
				await ProductService.getproductlist(payload).then((response) => {
					if (response.data.code !== "0000") {
						return (this.productList = []);
					}

					this.productList = response.data.data.list;

					let calenarTaskArr = [];
					this.productList.map((x) => {
						calenarTaskArr.push({
							id: x.product_id,
							calendarId: `cal1`,
							title: x.main_title,
							start: x.created_at,
							end: x.modified_at,
						});
					});
					this.calendar.createEvents(calenarTaskArr);

					this.updateSpinnerStatus(false);
				});
			},
		},
		mounted() {
			const container = document.getElementById("calendar");
			const options = {
				defaultView: "month",
				timezone: {
					zones: [
						{
							timezoneName: "Asia/Seoul",
							displayLabel: "Seoul",
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

			this.calendar = new Calendar(container, options);
			// this.calendar.createEvents([
			// 	{
			// 		id: "event1",
			// 		calendarId: "cal2",
			// 		title: "주간 회의",
			// 		start: "2023-10-07T09:00:00",
			// 		end: "2023-10-07T10:00:00",
			// 	},
			// 	{
			// 		id: "event2",
			// 		calendarId: "cal1",
			// 		title: "점심 약속",
			// 		start: "2023-10-08T12:00:00",
			// 		end: "2023-10-08T13:00:00",
			// 	},
			// 	{
			// 		id: "event3",
			// 		calendarId: "cal2",
			// 		title: "휴가",
			// 		start: "2023-10-08",
			// 		end: "2023-10-10",
			// 		isAllday: true,
			// 		category: "allday",
			// 	},
			// ]);

			this.calendar.setOptions({
				useFormPopup: true,
				useDetailPopup: true,
				
			});

			this.getproductlists();

			this.setCurrentDate();
		},
	};
</script>

<style>
	@import url(https://uicdn.toast.com/calendar/latest/toastui-calendar.min.css);
</style>
