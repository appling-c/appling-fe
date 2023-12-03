<template>
  <div class="min-h-[15rem] flex flex-col bg-white border shadow-sm rounded-xl">
    <div class="flex flex-auto flex-col justify-center items-center p-4 md:p-5">
      <img
        class="mx-auto mb-4 w-36 h-36 rounded-full"
        src="/src/assets/no-results-found.png"
        alt="Micheal Avatar"
      />
      <p class="mt-5 text-sm text-gray-500 dark:text-gray-500">{{ message }} 없습니다.</p>
    </div>
  </div>
</template>
<script setup lang="ts">
import { defineProps } from "vue";

const props = defineProps({
  message: {
    type: String,
  },
});
</script>
