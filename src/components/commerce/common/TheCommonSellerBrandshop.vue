<template>
  <!-- Team -->
  <div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
    <!-- Title -->
    <div class="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
      <h2 class="text-2xl font-bold md:text-4xl md:leading-tight dark:text-white">
        주누네 농장 쇼핑하기
      </h2>
    </div>
    <!-- End Title -->
    <nav class="flex space-x-2" aria-label="Tabs" role="tablist">
      <button
        type="button"
        class="hs-tab-active:bg-blue-600 hs-tab-active:text-white basis-0 grow py-3 px-4 inline-flex justify-center items-center gap-2 bg-transparent text-center text-sm font-medium text-center text-gray-500 rounded-lg hover:text-blue-600 dark:hover:text-gray-400 active"
        id="equal-width-elements-item-1"
        data-hs-tab="#equal-width-elements-1"
        aria-controls="equal-width-elements-1"
        role="tab"
      >
        모두보기
      </button>
      <button
        type="button"
        class="hs-tab-active:bg-blue-600 hs-tab-active:text-white basis-0 grow py-3 px-4 inline-flex justify-center items-center gap-2 bg-transparent text-center text-sm font-medium text-center text-gray-500 rounded-lg hover:text-blue-600 dark:hover:text-gray-400 dark:hover:text-gray-300"
        id="equal-width-elements-item-2"
        data-hs-tab="#equal-width-elements-2"
        aria-controls="equal-width-elements-2"
        role="tab"
      >
        과일
      </button>
      <button
        type="button"
        class="hs-tab-active:bg-blue-600 hs-tab-active:text-white basis-0 grow py-3 px-4 inline-flex justify-center items-center gap-2 bg-transparent text-center text-sm font-medium text-center text-gray-500 rounded-lg hover:text-blue-600 dark:hover:text-gray-400 dark:hover:text-gray-300"
        id="equal-width-elements-item-3"
        data-hs-tab="#equal-width-elements-3"
        aria-controls="equal-width-elements-3"
        role="tab"
      >
        채소
      </button>
    </nav>

    <div class="mt-3">
      <div
        id="equal-width-elements-1"
        role="tabpanel"
        aria-labelledby="equal-width-elements-item-1"
      ></div>
      <div
        id="equal-width-elements-2"
        class="hidden"
        role="tabpanel"
        aria-labelledby="equal-width-elements-item-2"
      >
        <!-- Grid -->
        <div class="grid grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          <!-- End Col -->

          <div class="grid sm:flex sm:items-center gap-y-3 gap-x-4">
            <div
              class="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 relative gap-5"
            >
              <div
                class="flex justify-start items-start flex-grow-0 flex-shrink-0 relative gap-2.5"
              >
                <div
                  class="flex-grow-0 flex-shrink-0 w-[400px] h-[300px] relative bg-[url(&#x27;image-#1.jpeg&#x27;)] bg-cover bg-no-repeat bg-center"
                >
                  <div class="grid sm:flex sm:items-center gap-y-3 gap-x-4">
                    <div
                      class="flex flex-col bg-white border shadow-sm rounded-xl dark:bg-gray-800 dark:border-gray-700 dark:shadow-slate-700/[.7]"
                    >
                      <img
                        class="w-full h-auto rounded-t-xl"
                        src="https://appling-s3.s3.ap-northeast-2.amazonaws.com/image/2/20230701/163321_0.jpeg"
                        alt="Image Description"
                      />
                      <div class="p-4 md:p-5">
                        <h3 class="text-lg font-bold text-gray-800 dark:text-white">
                          Card title
                        </h3>
                        <p class="mt-1 text-gray-800 dark:text-gray-400">
                          Some quick example text to build on the card title and make up
                          the bulk of the card's content.
                        </p>
                        <p class="mt-5 text-xs text-gray-500 dark:text-gray-500">
                          Last updated 5 mins ago
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  class="flex-grow-0 flex-shrink-0 w-[400px] h-[300px] relative overflow-hidden bg-[url(&#x27;image-#2.jpeg&#x27;)] bg-cover bg-no-repeat bg-center"
                ></div>
                <div
                  class="flex-grow-0 flex-shrink-0 w-[400px] h-[300px] relative overflow-hidden bg-[url(&#x27;image-#3.jpeg&#x27;)] bg-cover bg-no-repeat bg-center"
                ></div>
              </div>
              <div
                class="flex justify-start items-start flex-grow-0 flex-shrink-0 absolute left-5 top-[127px]"
              >
                <div
                  class="flex justify-center items-center flex-grow-0 flex-shrink-0 w-[46px] h-[46px] relative overflow-hidden rounded-[999px] bg-white border border-gray-200"
                  style="box-shadow: 0px 1px 2px 0 rgba(0, 0, 0, 0.05)"
                >
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    class="flex-grow-0 flex-shrink-0 w-3.5 h-3.5 relative"
                    preserveAspectRatio="none"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M9.9348 1.44025C9.97554 1.48089 10.0079 1.52917 10.0299 1.58232C10.052 1.63548 10.0633 1.69246 10.0633 1.75C10.0633 1.80755 10.052 1.86453 10.0299 1.91768C10.0079 1.97084 9.97554 2.01911 9.9348 2.05975L4.99367 7L9.9348 11.9403C10.017 12.0224 10.0631 12.1338 10.0631 12.25C10.0631 12.3662 10.017 12.4776 9.9348 12.5598C9.85265 12.6419 9.74123 12.6881 9.62505 12.6881C9.50887 12.6881 9.39745 12.6419 9.3153 12.5598L4.0653 7.30975C4.02456 7.26911 3.99223 7.22083 3.97018 7.16768C3.94812 7.11453 3.93677 7.05755 3.93677 7C3.93677 6.94246 3.94812 6.88548 3.97018 6.83232C3.99223 6.77917 4.02456 6.73089 4.0653 6.69025L9.3153 1.44025C9.35594 1.39951 9.40422 1.36719 9.45737 1.34513C9.51052 1.32307 9.5675 1.31172 9.62505 1.31172C9.6826 1.31172 9.73958 1.32307 9.79273 1.34513C9.84588 1.36719 9.89416 1.39951 9.9348 1.44025Z"
                      fill="#1F2937"
                    ></path>
                  </svg>
                </div>
              </div>
              <div
                class="flex justify-start items-start flex-grow-0 flex-shrink-0 absolute left-[1154px] top-[127px]"
              >
                <div
                  class="flex justify-center items-center flex-grow-0 flex-shrink-0 w-[46px] h-[46px] relative overflow-hidden rounded-[999px] bg-white border border-gray-200"
                  style="box-shadow: 0px 1px 2px 0 rgba(0, 0, 0, 0.05)"
                >
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    class="flex-grow-0 flex-shrink-0 w-3.5 h-3.5 relative"
                    preserveAspectRatio="none"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M4.06506 1.44025C4.1057 1.39951 4.15397 1.36719 4.20713 1.34513C4.26028 1.32307 4.31726 1.31172 4.37481 1.31172C4.43235 1.31172 4.48933 1.32307 4.54248 1.34513C4.59564 1.36719 4.64392 1.39951 4.68456 1.44025L9.93456 6.69025C9.9753 6.73089 10.0076 6.77917 10.0297 6.83232C10.0517 6.88548 10.0631 6.94246 10.0631 7C10.0631 7.05755 10.0517 7.11453 10.0297 7.16768C10.0076 7.22083 9.9753 7.26911 9.93456 7.30975L4.68456 12.5598C4.6024 12.6419 4.49098 12.6881 4.37481 12.6881C4.25863 12.6881 4.14721 12.6419 4.06506 12.5598C3.9829 12.4776 3.93675 12.3662 3.93675 12.25C3.93675 12.1338 3.9829 12.0224 4.06506 11.9403L9.00618 7L4.06506 2.05975C4.02431 2.01911 3.99199 1.97084 3.96993 1.91768C3.94788 1.86453 3.93652 1.80755 3.93652 1.75C3.93652 1.69246 3.94788 1.63548 3.96993 1.58232C3.99199 1.52917 4.02431 1.48089 4.06506 1.44025Z"
                      fill="#1F2937"
                    ></path>
                  </svg>
                </div>
              </div>
              <div
                class="flex flex-col justify-start items-center flex-grow-0 flex-shrink-0 absolute left-[475.5px] top-[122px] gap-3"
              >
                <div
                  class="flex justify-start items-start flex-grow-0 flex-shrink-0 w-[270px] h-14 gap-[15px] pt-2.5"
                ></div>
              </div>
            </div>
            <!-- <img
              class="rounded-lg w-20 h-20"
              src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=900&h=900&q=80"
              alt="Image Description"
            /> -->
          </div>
          <!-- End Col -->

          <div class="grid sm:flex sm:items-center gap-y-3 gap-x-4">
            <img
              class="rounded-lg w-20 h-20"
              src="https://images.unsplash.com/photo-1548142813-c348350df52b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=900&h=900&q=80"
              alt="Image Description"
            />

            <div class="sm:flex sm:flex-col sm:h-full">
              <div>
                <h3 class="font-medium text-gray-800 dark:text-gray-200">Ebele Egbuna</h3>
                <p class="mt-1 text-xs uppercase text-gray-500">Support Consultant</p>
              </div>

              <!-- Social Brands -->
              <div class="mt-2 sm:mt-auto space-x-2.5">
                <a
                  class="inline-flex justify-center items-center text-gray-500 hover:text-gray-800 dark:hover:text-gray-200"
                  href="#"
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
                      d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"
                    />
                  </svg>
                </a>
                <a
                  class="inline-flex justify-center items-center text-gray-500 hover:text-gray-800 dark:hover:text-gray-200"
                  href="#"
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
                      d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"
                    />
                  </svg>
                </a>
                <a
                  class="inline-flex justify-center items-center text-gray-500 hover:text-gray-800 dark:hover:text-gray-200"
                  href="#"
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
                      d="M3.362 10.11c0 .926-.756 1.681-1.681 1.681S0 11.036 0 10.111C0 9.186.756 8.43 1.68 8.43h1.682v1.68zm.846 0c0-.924.756-1.68 1.681-1.68s1.681.756 1.681 1.68v4.21c0 .924-.756 1.68-1.68 1.68a1.685 1.685 0 0 1-1.682-1.68v-4.21zM5.89 3.362c-.926 0-1.682-.756-1.682-1.681S4.964 0 5.89 0s1.68.756 1.68 1.68v1.682H5.89zm0 .846c.924 0 1.68.756 1.68 1.681S6.814 7.57 5.89 7.57H1.68C.757 7.57 0 6.814 0 5.89c0-.926.756-1.682 1.68-1.682h4.21zm6.749 1.682c0-.926.755-1.682 1.68-1.682.925 0 1.681.756 1.681 1.681s-.756 1.681-1.68 1.681h-1.681V5.89zm-.848 0c0 .924-.755 1.68-1.68 1.68A1.685 1.685 0 0 1 8.43 5.89V1.68C8.43.757 9.186 0 10.11 0c.926 0 1.681.756 1.681 1.68v4.21zm-1.681 6.748c.926 0 1.682.756 1.682 1.681S11.036 16 10.11 16s-1.681-.756-1.681-1.68v-1.682h1.68zm0-.847c-.924 0-1.68-.755-1.68-1.68 0-.925.756-1.681 1.68-1.681h4.21c.924 0 1.68.756 1.68 1.68 0 .926-.756 1.681-1.68 1.681h-4.21z"
                    />
                  </svg>
                </a>
              </div>
              <!-- End Social Brands -->
            </div>
          </div>
          <!-- End Col -->
        </div>
        <!-- End Grid -->
      </div>
      <div
        id="equal-width-elements-3"
        class="hidden"
        role="tabpanel"
        aria-labelledby="equal-width-elements-item-3"
      >
        <div
          class="min-h-[15rem] flex flex-col bg-white border shadow-sm rounded-xl dark:bg-gray-800 dark:border-gray-700 dark:shadow-slate-700/[.7]"
        >
          <div class="flex flex-auto flex-col justify-center items-center p-4 md:p-5">
            <svg
              class="max-w-[5rem]"
              viewBox="0 0 375 428"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M254.509 253.872L226.509 226.872"
                class="stroke-gray-400 dark:stroke-white"
                stroke="currentColor"
                stroke-width="7"
                stroke-linecap="round"
              />
              <path
                d="M237.219 54.3721C254.387 76.4666 264.609 104.226 264.609 134.372C264.609 206.445 206.182 264.872 134.109 264.872C62.0355 264.872 3.60864 206.445 3.60864 134.372C3.60864 62.2989 62.0355 3.87207 134.109 3.87207C160.463 3.87207 184.993 11.6844 205.509 25.1196"
                class="stroke-gray-400 dark:stroke-white"
                stroke="currentColor"
                stroke-width="7"
                stroke-linecap="round"
              />
              <rect
                x="270.524"
                y="221.872"
                width="137.404"
                height="73.2425"
                rx="36.6212"
                transform="rotate(40.8596 270.524 221.872)"
                class="fill-gray-400 dark:fill-white"
                fill="currentColor"
              />
              <ellipse
                cx="133.109"
                cy="404.372"
                rx="121.5"
                ry="23.5"
                class="fill-gray-400 dark:fill-white"
                fill="currentColor"
              />
              <path
                d="M111.608 188.872C120.959 177.043 141.18 171.616 156.608 188.872"
                class="stroke-gray-400 dark:stroke-white"
                stroke="currentColor"
                stroke-width="7"
                stroke-linecap="round"
              />
              <ellipse
                cx="96.6084"
                cy="116.872"
                rx="9"
                ry="12"
                class="fill-gray-400 dark:fill-white"
                fill="currentColor"
              />
              <ellipse
                cx="172.608"
                cy="117.872"
                rx="9"
                ry="12"
                class="fill-gray-400 dark:fill-white"
                fill="currentColor"
              />
              <path
                d="M194.339 147.588C189.547 148.866 189.114 142.999 189.728 138.038C189.918 136.501 191.738 135.958 192.749 137.131C196.12 141.047 199.165 146.301 194.339 147.588Z"
                class="fill-gray-400 dark:fill-white"
                fill="currentColor"
              />
            </svg>
            <p class="mt-5 text-sm text-gray-500 dark:text-gray-500">No data to show</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
