<template>
  <TheCommerceHeader />
  <div class="antialiased bg-white">
    <TheMyApplingHeader />
    <main class="p-4 pb-4 md:ml-52 h-auto sm:pt-20 pt-10">
      <header>
        <p class="mb-2 text-base font-semibold text-blue-600">마이애플링</p>
        <h1
          class="pb-4 block text-2xl font-bold text-gray-800 sm:text-3xl dark:text-white"
        >
          {{ currentTabTitle }}
        </h1>
      </header>
      <div
        class="border-2 border-dashed rounded-lg border-gray-300 dark:border-gray-600 mb-4"
      >
        <router-view @renderTabTitle="renderTabTitle" />
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import TheCommerceHeader from "../components/commerce/common/TheCommerceHeader.vue";
import TheMyApplingHeader from "../components/commerce/my/TheMyApplingHeader.vue";
const currentTabTitle = ref("");
function renderTabTitle(title) {
  currentTabTitle.value = title;
  console.log(currentTabTitle.value);
}

onMounted(() => {
  document.getElementById("common-footer").style.display = "none";
});
</script>
