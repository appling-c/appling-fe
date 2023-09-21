<template>
  <!-- Subscribe -->
  <div class="max-w-6xl py-10 px-4 sm:px-6 lg:px-8 lg:py-16 mx-auto">
    <div class="max-w-xl text-center mx-auto">
      <div class="mb-5">
        <h2 class="text-2xl font-bold md:text-3xl md:leading-tight dark:text-white">
          주문이 완료되었어요.
        </h2>

        <h6 class="text-2xl font-bold md:text-3xl md:leading-tight dark:text-white">
          반박시 니말이 맞음...
        </h6>
      </div>

      <div class="mt-5 lg:mt-8 flex flex-col items-center gap-2 sm:flex-row sm:gap-3">
        <div class="w-full">
          <label for="hero-input" class="sr-only">Search</label>
        </div>
      </div>

      <div class="flex gap-2">
        <button
          type="button"
          class="
            w-1/2
            py-3
            px-4
            rounded-md
            border
            font-medium
            bg-white
            text-slate-700
            shadow-sm
            align-middle
            hover:bg-gray-50
            focus:outline-none
            focus:ring-2
            focus:ring-offset-2
            focus:ring-offset-white
            focus:ring-blue-600
            transition-all
            text-base
          "
        >
          주문 내역 확인하기
        </button>
        <button
          @click="moveto('/commerce/main')"
          type="button"
          class="
            w-1/2
            py-3
            px-4
            rounded-md
            border border-transparent
            font-semibold
            bg-blue-500
            text-white
            hover:bg-blue-600
            focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2
            transition-all
            text-base
            dark:focus:ring-offset-gray-800
          "
        >
          메인으로 돌아가기
        </button>
      </div>
    </div>
  </div>
  <!-- End Subscribe -->
</template>

<script>
export default {
  methods: {
    moveto(path) {
      return (location.href = path);
    },
  },
};
</script>
