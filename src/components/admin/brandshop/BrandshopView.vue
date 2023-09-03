<template>
  <!-- ========== HEADER ========== -->
  <TheAdminHeader />
  <div class="w-full pt-10 px-4 sm:px-6 md:px-8">
    <header class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
      <h1 class="block text-2xl font-bold text-gray-800 sm:text-3xl dark:text-white">안녕하세요, 우리 농장을 소개합니다.🍃</h1>
      <p class="mt-2 text-lg text-gray-800 dark:text-gray-400">이 곳은 손님들이 우리 농장 소개 페이지를 보는 화면인데요. 소개 문구가 넘나 어렵네요.</p>
      <p class="mt-2 text-m text-gray-800 dark:text-gray-200">정말 좋은데, 소개페이지 정말 좋은데, 표현할 방법이 없네! 별이 다섯개~!</p>

      <div class="mt-5 flex flex-col items-center gap-2 sm:flex-row sm:gap-3">
        <router-link
          to="/admin/brandshop"
          class="
            w-full
            sm:w-auto
            inline-flex
            justify-center
            items-center
            gap-x-3
            text-center
            bg-blue-600
            hover:bg-blue-700
            border border-transparent
            text-white text-sm
            font-medium
            rounded-md
            focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white
            transition
            py-3
            px-4
            dark:focus:ring-offset-gray-800
          "
        >
          농장 소개 수정하기
        </router-link>

        <router-link
          to="/admin/brandshop"
          class="
            w-full
            sm:w-auto
            inline-flex
            justify-center
            items-center
            gap-x-3
            text-center
            bg-blue-600
            hover:bg-blue-700
            border border-transparent
            text-white text-sm
            font-medium
            rounded-md
            focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white
            transition
            py-3
            px-4
            dark:focus:ring-offset-gray-800
          "
        >
          카카오톡 공유하기
        </router-link>

        <router-link
          to="/admin/dashboard"
          class="
            w-full
            sm:w-auto
            inline-flex
            justify-center
            items-center
            gap-2
            rounded-md
            border border-transparent
            font-semibold
            text-blue-500
            hover:text-blue-700
            focus:outline-none focus:ring-2
            ring-offset-gray-50
            focus:ring-blue-500 focus:ring-offset-2
            transition-all
            text-sm
            py-3
            px-4
            dark:ring-offset-slate-900
          "
        >
          <svg class="w-2.5 h-2.5" width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path
              d="M11.2792 1.64001L5.63273 7.28646C5.43747 7.48172 5.43747 7.79831 5.63273 7.99357L11.2792 13.64"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
            ></path>
          </svg>
          메인으로 돌아가기
        </router-link>
      </div>
    </header>
    <!-- ========== END HEADER ========== -->
    <!-- Blog Article -->
    <div class="max-w-3xl px-4 pt-6 lg:pt-10 pb-12 sm:px-6 lg:px-8 mx-auto">
      <div class="max-w-2xl">
        <!-- Avatar Media -->
        <div class="flex justify-between items-center mb-6">
          <div class="flex w-full sm:items-center gap-x-5 sm:gap-x-3">
            <div class="flex-shrink-0">
              <img
                class="h-12 w-12 rounded-full"
                src="https://images.unsplash.com/photo-1669837401587-f9a4cfe3126e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80"
                alt="Image Description"
              />
            </div>

            <div class="grow">
              <div class="grid sm:flex sm:justify-between sm:items-center gap-2">
                <div>
                  <!-- Tooltip -->
                  <div class="hs-tooltip inline-block [--trigger:hover] [--placement:bottom]">
                    <div class="hs-tooltip-toggle sm:mb-1 block text-left cursor-pointer">
                      <span class="font-semibold text-gray-800 dark:text-gray-200"> Leyla Ludic </span>

                      <!-- Dropdown Card -->
                      <div
                        class="
                          hs-tooltip-content
                          hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible
                          opacity-0
                          transition-opacity
                          inline-block
                          absolute
                          invisible
                          z-10
                          max-w-xs
                          cursor-default
                          bg-gray-900
                          divide-y divide-gray-700
                          shadow-lg
                          rounded-xl
                          dark:bg-black
                        "
                        role="tooltip"
                      >
                        <!-- Body -->
                        <div class="p-4 sm:p-5">
                          <div class="mb-2 flex w-full sm:items-center gap-x-5 sm:gap-x-3">
                            <div class="flex-shrink-0">
                              <img
                                class="h-8 w-8 rounded-full"
                                src="https://images.unsplash.com/photo-1669837401587-f9a4cfe3126e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80"
                                alt="Image Description"
                              />
                            </div>

                            <div class="grow">
                              <p class="text-lg font-semibold text-gray-200">Leyla Ludic</p>
                            </div>
                          </div>
                          <p class="text-sm text-gray-400">
                            Leyla is a Customer Success Specialist at Preline and spends her time speaking to in-house recruiters all over the world.
                          </p>
                        </div>
                        <!-- End Body -->

                        <!-- Footer -->
                        <div class="flex justify-between items-center px-4 py-3 sm:px-5">
                          <ul class="text-xs space-x-3">
                            <li class="inline-block">
                              <span class="font-semibold text-gray-200">56</span>
                              <span class="text-gray-400">articles</span>
                            </li>
                            <li class="inline-block">
                              <span class="font-semibold text-gray-200">1k+</span>
                              <span class="text-gray-400">followers</span>
                            </li>
                          </ul>

                          <div>
                            <button
                              type="button"
                              class="
                                py-1.5
                                px-2.5
                                inline-flex
                                justify-center
                                items-center
                                gap-x-1.5
                                rounded-md
                                border border-transparent
                                font-semibold
                                bg-blue-600
                                text-white
                                hover:bg-blue-700
                                focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900
                                text-xs
                              "
                            >
                              <svg class="w-3.5 h-3.5" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                <path d="M1 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                                <path
                                  fill-rule="evenodd"
                                  d="M13.5 5a.5.5 0 0 1 .5.5V7h1.5a.5.5 0 0 1 0 1H14v1.5a.5.5 0 0 1-1 0V8h-1.5a.5.5 0 0 1 0-1H13V5.5a.5.5 0 0 1 .5-.5z"
                                />
                              </svg>
                              Follow
                            </button>
                          </div>
                        </div>
                        <!-- End Footer -->
                      </div>
                      <!-- End Dropdown Card -->
                    </div>
                  </div>
                  <!-- End Tooltip -->

                  <ul class="text-xs text-gray-500">
                    <li
                      class="
                        inline-block
                        relative
                        pr-6
                        last:pr-0
                        last-of-type:before:hidden
                        before:absolute before:top-1/2 before:right-2 before:-translate-y-1/2 before:w-1 before:h-1 before:bg-gray-300 before:rounded-full
                        dark:text-gray-400 dark:before:bg-gray-600
                      "
                    >
                      Jan 18
                    </li>
                    <li
                      class="
                        inline-block
                        relative
                        pr-6
                        last:pr-0
                        last-of-type:before:hidden
                        before:absolute before:top-1/2 before:right-2 before:-translate-y-1/2 before:w-1 before:h-1 before:bg-gray-300 before:rounded-full
                        dark:text-gray-400 dark:before:bg-gray-600
                      "
                    >
                      8 min read
                    </li>
                  </ul>
                </div>

                <!-- Button Group -->
                <div>
                  <button
                    type="button"
                    class="
                      py-1.5
                      px-2.5
                      sm:py-2 sm:px-3
                      inline-flex
                      justify-center
                      items-center
                      gap-x-1.5
                      sm:gap-x-2
                      rounded-md
                      border
                      font-medium
                      bg-white
                      text-gray-700
                      shadow-sm
                      align-middle
                      hover:bg-gray-50
                      focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600
                      transition-all
                      text-xs
                      sm:text-sm
                      dark:bg-slate-900 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800
                    "
                  >
                    <svg class="w-3.5 h-3.5" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                      <path
                        d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"
                      />
                    </svg>
                    Tweet
                  </button>
                </div>
                <!-- End Button Group -->
              </div>
            </div>
          </div>
        </div>
        <!-- End Avatar Media -->

        <!-- Content -->
        <div class="space-y-5 md:space-y-8">
          <div id="viewer" class="p-1.5 min-w-full inline-block align-middle"></div>
        </div>
        <!-- End Content -->
      </div>
    </div>
    <!-- End Blog Article -->
  </div>
</template>

<script>
import Viewer from "@toast-ui/editor/dist/toastui-editor-viewer";
import TheAdminHeader from "@/components/admin/TheAdminHeader.vue";
import MemberService from "@/services/MemberService";

export default {
  components: {
    TheAdminHeader,
  },
  data() {
    return {
      content: "",
      viewer: null,
    };
  },
  mounted() {
    this.content = `<h1><img src="https://appling-s3.s3.ap-northeast-2.amazonaws.com/image/4/20230710/150542_0.jpeg" alt="b3911f649e325b7be6991ae7a67bf876.jpeg" contenteditable="false">햇살을 가득 담은 평창 자연 햇살 농원 입니다.</h1><div contenteditable="false"><hr></div><h4>평창 700 고지에서 무공해 사과를 직접 재배하여 판매합니다.</h4><p><br></p><p>모든 주문은 카카오톡, 문자, 전화로 가능합니다.</p><p>아래의 번호로 문의를 남겨주세요.</p><p>010-1234-1222</p><h1>🚘 농원 둘러보기</h1><h5><strong>✔️ 영상으로 구경하기</strong></h5><p><a href="https://youtu.be/wgelJ8zYmFc?t=219">[평창시그니처5] 봉황마을 캠핑 (feat.평창사과)</a></p><p><br></p><h5><strong>✔️ 사진으로 둘러보기</strong></h5><p><br></p><h1>🚘 이런것들을 판매해요.</h1><h5><strong>✔️ 설 특집, 부사 구경하기</strong></h5><p><br></p><h5><strong>✔️ 9월 중순, 시나노 골드</strong></h5><p><br></p>`;
    const id = this.$router.param;

    //console.log('111')
    this.readhtmlfile();
  },
  methods: {
    async readhtmlfile() {
      await MemberService.getsellerintroduce().then((response) => {
        this.content = response.data;
        this.viewer = new Viewer({
          el: document.querySelector("#viewer"),
          initialValue: this.content,
        });
      });
    },
  },
};
</script>

<style>
@import url("@toast-ui/editor/dist/toastui-editor-viewer.css");
</style>
