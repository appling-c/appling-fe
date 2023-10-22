<template>
  <div class="bg-gray-200">
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
          <button @click="prev()" type="button" class="calendar-btn calendar-move-day">
            prev</button
          ><button @click="next()" type="button" class="calendar-btn calendar-move-day">
            next
          </button></span
        ><span class="calendar-render-range">{{ currentDate }}</span>
      </div>
      <div id="calendar" style="height: 600px"></div>
    </div>
  </div>
</template>

<script lang="ts">
import Calendar from "@toast-ui/calendar";
import moment from "moment";
export default {
  data() {
    return {
      currentDate: "",
      calendar: null,
    };
  },
  methods: {
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
    this.calendar.createEvents([
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

    this.calendar.setOptions({
      useFormPopup: true,
      useDetailPopup: true,
    });

    this.setCurrentDate();
  },
};
</script>

<style>
@import url(https://uicdn.toast.com/calendar/latest/toastui-calendar.min.css);
</style>
