<script>
import { mapGetters } from "vuex";
import { initFlowbite } from "flowbite";
export default {
  computed: {
    ...mapGetters("cart", ["spinnerStatus"]),
  },
  mounted() {
    initFlowbite();
  },
};
</script>

<template>
  <div>
    <router-view />
    <template v-if="spinnerStatus">
      <div
        class="absolute top-0 left-0 w-full h-full bg-white/[.5] rounded-md dark:bg-gray-800/[.4]"
      ></div>
      <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <div
          class="animate-spin inline-block w-6 h-6 border-[3px] border-current border-t-transparent text-blue-600 rounded-full"
          role="status"
          aria-label="loading"
        >
          <span class="sr-only">Loading...</span>
        </div>
      </div>
    </template>
    <footer id="common-footer" class="bg-gray-50 dark:bg-gray-800">
      <div class="p-4 py-6 mx-auto max-w-screen-xl md:p-8 lg:p-10">
        <div class="gap-8 space-y-12 sm:grid sm:grid-cols-2 lg:grid-cols-2 sm:space-y-0">
          <address class="not-italic">
            <p class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
              자연 햇살 농원
            </p>
            <p class="mb-3 text-gray-500 dark:text-gray-400">
              강원도 평창군 대화면 장미산길 132-10
            </p>
            <ul class="space-y-3 text-gray-500 dark:text-gray-400">
              <li class="flex items-center">
                <svg
                  class="mr-2 w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M7 2a2 2 0 00-2 2v12a2 2 0 002 2h6a2 2 0 002-2V4a2 2 0 00-2-2H7zm3 14a1 1 0 100-2 1 1 0 000 2z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                연락처: 010-8522-3376
              </li>
              <li class="flex items-center">
                <svg
                  class="mr-2 w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"
                  ></path>
                  <path
                    d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"
                  ></path>
                </svg>
                농협:
                <a class="ml-2 hover:underline">352-1117-5671-23 (최학래)</a>
              </li>
            </ul>
          </address>
          <address class="not-italic">
            <p class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
              애플링
            </p>

            <ul class="space-y-3 text-gray-500 dark:text-gray-400">
              <li class="flex items-center">
                <svg
                  class="mr-2 w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M7 2a2 2 0 00-2 2v12a2 2 0 002 2h6a2 2 0 002-2V4a2 2 0 00-2-2H7zm3 14a1 1 0 100-2 1 1 0 000 2z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                연락처: 010-9300-8039
              </li>
              <li class="flex items-center">
                <svg
                  class="mr-2 w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"
                  ></path>
                  <path
                    d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"
                  ></path>
                </svg>
                제휴문의:
                <a href="mailto:juno@appling.com" class="ml-2 hover:underline"
                  >juno@appling.com</a
                >
              </li>
            </ul>
          </address>
        </div>

        <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <div class="flex flex-col justify-between items-center lg:flex-row">
          <a
            href="#"
            class="flex items-center mb-6 text-2xl font-semibold text-gray-900 lg:mb-0 dark:text-white"
          >
            <img
              class="mx-auto mb-4 w-16 h-16 rounded-full"
              src="/src/assets/apple-logo.png"
              alt="Micheal Avatar"
            />
            애플링
          </a>

          <span class="block mb-4 text-sm text-gray-500 dark:text-gray-400 lg:mb-0"
            >© 2024 <a href="#" class="hover:underline">Appling</a>. All Rights Reserved.
          </span>
        </div>
      </div>
    </footer>
  </div>
</template>
