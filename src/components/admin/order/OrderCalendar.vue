<template>
  <header class=" ">
    <h1 class="block text-2xl font-bold text-gray-800 sm:text-3xl dark:text-white">
      📦 상품 달력
    </h1>
    <p class="mt-2 text-base text-gray-800 dark:text-gray-400">
     주문 내역을 달력으로 확인해보세요!
    </p>

    <div class="mt-5 flex flex-col items-center gap-2 sm:flex-row sm:gap-3">
      <router-link
        to="/admin/order/history"
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
        표로 보기🗓️
      </router-link>
    </div>
  </header>
  <div class=" ">
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
              이번달
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
            ><span class="calendar-render-range">{{ currentDate }} </span>
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
        <div id="calendar" style="height: 150vh"></div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Calendar from "@toast-ui/calendar";
import moment from "moment";
import ProductService from "@/services/ProductService";
import { mapActions, useStore } from "vuex";
import { ref, computed, onMounted, reactive } from "vue";
import OrderService from "@/services/OrderService";

const store = useStore();

let currentDate = ref("");
let orderTotalCount = ref(0);
let calendar: Calendar = null;
let productList: Array<Object> = [];
let orders = reactive([]);
const updateSpinnerStatus = () => store.getters["cart/updateSpinnerStatus"];

const prev = () => {
  calendar!.prev();
  setCurrentDate();
};

const next = () => {
  calendar!.next();
  setCurrentDate();
};

const setCurrentDate = () => {
  currentDate.value = moment(new Date(calendar.getDate()?.d)).format("YYYY.MM");

  getRecentOrderList();
};

async function getRecentOrderList() {
  let reqestStr = `?search=&page=0&size=500`;

  calendar.clear();

  await OrderService.getRecentOrderList(reqestStr).then(async (response) => {
    orders.value = response.data.data?.list;

    orderTotalCount = response.data.data.total_elements;

    if (response.data.code == "0000") {
      productList = response.data.data.list;
    }

    if (productList) {
      const calendarTaskArr = productList.map((x: any) => {
        return {
          id: x.order_number,
          title: x.order_name,
          calendarId: "cal1",
          start: x.created_at,
          end: x.created_at,
        };
      });
      await Promise.all([
        calendar!.createEvents(calendarTaskArr),
        updateSpinnerStatus(false),
      ]);
    }
  });
}

const today = () => {
  calendar!.today();
  setCurrentDate();
};

onMounted(() => {
  const container: HTMLElement | null = document.getElementById("calendar");
  const options: Calendar.Options = {
    defaultView: "month",
    timezone: {
      timezonName: "Asis/Seoul",
      displayLabel: "Seoul",
    },
    calendars: [
      {
        id: "cal1",
        name: "개인",
        backgroundColor: "#03bd9e",
      },
    ],
  };

  calendar = new Calendar(container!, options);

  setCurrentDate();
});
</script>

<style>
@import url(https://uicdn.toast.com/calendar/latest/toastui-calendar.min.css);
</style>
