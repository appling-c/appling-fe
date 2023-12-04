<template>
  <div>
    <header class=" ">
      <h1 class="block text-2xl font-bold text-gray-800 sm:text-3xl dark:text-white">
        📦 상품 {{ mode == "modify" ? "수정하기" : "등록하기" }}
      </h1>
      <template v-if="mode == 'regist'">
        <p class="mt-2 text-lg text-gray-800 dark:text-gray-600">
          판매하고자 하는 상품을 등록해주세요.
        </p>
        <p class="mt-2 text-base text-gray-800 dark:text-gray-400">
          등록 이후에도 수정이 가능합니다.
        </p>
      </template>

      <template v-else>
        <p class="mt-2 text-lg text-gray-800 dark:text-gray-600">
          등록한 상품을 수정해보세요!
        </p>
      </template>

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
          등록한 상품 보러가기👀
        </router-link>
        <a
          v-if="mode == 'regist'"
          @click="submit"
          class="w-full sm:w-auto inline-flex justify-center items-center gap-x-3 text-center bg-blue-600 hover:bg-blue-700 border border-transparent text-white text-base font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white transition py-3 px-4 dark:focus:ring-offset-gray-800"
        >
          <svg
            class="w-4 h-4"
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            viewBox="0 0 16 16"
          >
            <path
              d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"
            ></path>
          </svg>
          등록하기
        </a>
      </div>
    </header>
    <!-- Card Section -->
    <div class=" ">
      <!-- Card -->
      <div class="bg-white rounded-xl shadow p-4 sm:p-7 dark:bg-slate-900">
        <form>
          <!-- Section -->
          <div
            id="product-info-section"
            class="grid sm:grid-cols-12 gap-2 sm:gap-4 py-8 first:pt-0 last:pb-0 border-t first:border-transparent border-gray-200 dark:border-gray-700 xs:inline"
          >
            <template v-if="mode == 'modify'">
              <div class="sm:col-span-3">
                <h2 class="text-lg font-semibold text-gray-800 dark:text-gray-200">
                  상품 관리
                </h2>
              </div>
              <!-- End Col -->
              <div class="sm:col-span-9">
                <div class="inline-flex rounded-md shadow-sm" role="group">
                  <button
                    id="kakaotalk-sharing-btn"
                    type="button"
                    @click="kakaoShare()"
                    class="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-s-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white"
                  >
                    <svg
                      class="w-3 h-3 me-2"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z"
                      />
                    </svg>
                    카카오톡 공유하기
                  </button>
                  <button
                    @click="movetoCommerce()"
                    type="button"
                    class="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border-t border-b border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white"
                  >
                    <svg
                      class="w-3 h-3 me-2"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 20 20"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M4 12.25V1m0 11.25a2.25 2.25 0 0 0 0 4.5m0-4.5a2.25 2.25 0 0 1 0 4.5M4 19v-2.25m6-13.5V1m0 2.25a2.25 2.25 0 0 0 0 4.5m0-4.5a2.25 2.25 0 0 1 0 4.5M10 19V7.75m6 4.5V1m0 11.25a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5ZM16 19v-2"
                      />
                    </svg>
                    판매 화면으로 이동
                  </button>
                </div>
              </div>
            </template>
            <div class="sm:col-span-12">
              <div class="inline-block">
                <label class="inline-block text-base font-medium text-gray-500 mt-2.5">
                  <span
                    class="w-2 h-2 inline-block bg-blue-500 rounded-full mt-2.5 ml-2"
                  ></span>
                  표시된 항목은 필수 입력 항목입니다.
                </label>
              </div>
            </div>
            <div class="sm:col-span-12">
              <h2 class="text-lg font-semibold text-gray-800 dark:text-gray-200">
                01. 상품 정보
              </h2>
            </div>
            <div class="sm:col-span-3">
              <div class="inline-flex items-center">
                <span class="inline-block text-base font-medium text-gray-500 mt-2.5"
                  >상품명</span
                >
                <span
                  class="w-2 h-2 inline-block bg-blue-500 rounded-full mt-2.5 ml-2"
                ></span>
              </div>
            </div>
            <!-- End Col -->

            <div class="sm:col-span-9">
              <input
                v-model="title"
                type="text"
                class="border-gray-200 focus:border-blue-500 focus:ring-blue-500 py-2 px-3 pr-11 block w-full shadow-sm text-base rounded-lg"
              />
              <p v-if="!invalidCheck.title" class="text-sm text-red-600 mt-2">
                상품명을 입력해주세요.
              </p>
            </div>

            <!-- End Col -->
            <!-- End Col -->

            <div class="sm:col-span-3">
              <label class="inline-block text-base font-medium text-gray-500 mt-2.5">
                상품 작은 제목
              </label>
            </div>
            <!-- End Col -->

            <div class="sm:col-span-9">
              <input
                v-model="subtitle"
                type="text"
                class="border-gray-200 focus:border-blue-500 focus:ring-blue-500 py-2 px-3 pr-11 block w-full border-gray-200 shadow-sm text-base rounded-lg focus:border-blue-500 focus:ring-blue-500"
              />
            </div>
            <!-- End Col -->

            <div class="sm:col-span-3">
              <div class="inline-flex items-center">
                <span class="inline-block text-base font-medium text-gray-500 mt-2.5"
                  >상품 메인 이미지</span
                >
                <span
                  class="w-2 h-2 inline-block bg-blue-500 rounded-full mt-2.5 ml-2"
                ></span>
              </div>
            </div>
            <!-- End Col -->

            <div v-if="image_url == ''" class="sm:col-span-9">
              <label class="sr-only">파일선택</label>
              <input
                @input="fileInput"
                type="file"
                name="af-submit-application-resume-cv"
                id="af-submit-application-resume-cv"
                class="block w-full border border-gray-200 shadow-sm rounded-lg text-base focus:z-10 focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 file:bg-transparent file:border-0 file:bg-gray-100 file:mr-4 file:py-2 file:px-3 dark:file:bg-gray-700 dark:file:text-gray-400"
              />
              <p
                v-if="!invalidCheck.image_url"
                class="text-sm text-red-600 mt-2"
                id="hs-validation-name-error-helper"
              >
                상품 이미지를 등록해주세요.
              </p>
            </div>

            <div v-else class="sm:col-span-9">
              <p @click="removemainimage('image_url')">
                <span
                  id="badge-dismiss-default"
                  class="break-all inline-flex items-center px-2 py-1 mr-2 text-base font-medium text-blue-800 bg-blue-100 rounded dark:bg-blue-900 dark:text-blue-300"
                >
                  {{ image_url }}
                  <button
                    type="button"
                    class="inline-flex items-center p-1 ml-2 text-base text-blue-400 bg-transparent rounded-sm hover:bg-blue-200 hover:text-blue-900 dark:hover:bg-blue-800 dark:hover:text-blue-300"
                    data-dismiss-target="#badge-dismiss-default"
                    aria-label="Remove"
                  >
                    <svg
                      class="w-2 h-2"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 14 14"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                      />
                    </svg>
                    <span class="sr-only">Remove badge</span>
                  </button>
                </span>
              </p>
            </div>

            <!-- End Col -->

            <div class="sm:col-span-3">
              <div class="inline-block">
                <label class="inline-block text-base font-medium text-gray-500 mt-2.5">
                  상품 이미지
                </label>
              </div>
            </div>
            <!-- End Col -->

            <div v-if="image1 == ''" class="sm:col-span-9">
              <label class="sr-only">파일선택</label>
              <input
                @input="onfileInput_multiple($event, 'image1')"
                type="file"
                name="af-submit-application-resume-cv"
                id="af-submit-application-resume-cv"
                class="block w-full border border-gray-200 shadow-sm rounded-lg text-base focus:z-10 focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 file:bg-transparent file:border-0 file:bg-gray-100 file:mr-4 file:py-2 file:px-3 dark:file:bg-gray-700 dark:file:text-gray-400"
              />
            </div>
            <div v-else class="sm:col-span-9">
              <p @click="removemainimage('image1')">
                <span
                  id="badge-dismiss-default"
                  class="break-all inline-flex items-center px-2 py-1 mr-2 text-base font-medium text-blue-800 bg-blue-100 rounded dark:bg-blue-900 dark:text-blue-300"
                >
                  {{ image1 }}
                  <button
                    type="button"
                    class="inline-flex items-center p-1 ml-2 text-base text-blue-400 bg-transparent rounded-sm hover:bg-blue-200 hover:text-blue-900 dark:hover:bg-blue-800 dark:hover:text-blue-300"
                    data-dismiss-target="#badge-dismiss-default"
                    aria-label="Remove"
                  >
                    <svg
                      class="w-2 h-2"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 14 14"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                      />
                    </svg>
                    <span class="sr-only">Remove badge</span>
                  </button>
                </span>
              </p>
            </div>

            <div class="sm:col-span-3">
              <div class="inline-block">
                <label class="inline-block text-base font-medium text-gray-500 mt-2.5">
                </label>
              </div>
            </div>

            <div v-if="image2 == ''" class="sm:col-span-9">
              <label class="sr-only">파일선택</label>
              <input
                @input="onfileInput_multiple($event, 'image2')"
                type="file"
                name="af-submit-application-resume-cv"
                id="af-submit-application-resume-cv"
                class="block w-full border border-gray-200 shadow-sm rounded-lg text-base focus:z-10 focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 file:bg-transparent file:border-0 file:bg-gray-100 file:mr-4 file:py-2 file:px-3 dark:file:bg-gray-700 dark:file:text-gray-400"
              />
            </div>
            <div v-else class="sm:col-span-9">
              <p @click="removemainimage('image2')">
                <span
                  id="badge-dismiss-default"
                  class="break-all inline-flex items-center px-2 py-1 mr-2 text-base font-medium text-blue-800 bg-blue-100 rounded dark:bg-blue-900 dark:text-blue-300"
                >
                  {{ image2 }}
                  <button
                    type="button"
                    class="inline-flex items-center p-1 ml-2 text-base text-blue-400 bg-transparent rounded-sm hover:bg-blue-200 hover:text-blue-900 dark:hover:bg-blue-800 dark:hover:text-blue-300"
                    data-dismiss-target="#badge-dismiss-default"
                    aria-label="Remove"
                  >
                    <svg
                      class="w-2 h-2"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 14 14"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                      />
                    </svg>
                    <span class="sr-only">Remove badge</span>
                  </button>
                </span>
              </p>
            </div>

            <div class="sm:col-span-3">
              <div class="inline-block">
                <label class="inline-block text-base font-medium text-gray-500 mt-2.5">
                </label>
              </div>
            </div>

            <div v-if="image3 == ''" class="sm:col-span-9">
              <label class="sr-only">파일선택</label>
              <input
                @input="onfileInput_multiple($event, 'image3')"
                type="file"
                name="af-submit-application-resume-cv"
                id="af-submit-application-resume-cv"
                class="block w-full border border-gray-200 shadow-sm rounded-lg text-base focus:z-10 focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 file:bg-transparent file:border-0 file:bg-gray-100 file:mr-4 file:py-2 file:px-3 dark:file:bg-gray-700 dark:file:text-gray-400"
              />
            </div>
            <div v-else class="sm:col-span-9">
              <p @click="removemainimage('image3')">
                <span
                  id="badge-dismiss-default"
                  class="break-all inline-flex items-center px-2 py-1 mr-2 text-base font-medium text-blue-800 bg-blue-100 rounded dark:bg-blue-900 dark:text-blue-300"
                >
                  {{ image3 }}
                  <button
                    type="button"
                    class="inline-flex items-center p-1 ml-2 text-base text-blue-400 bg-transparent rounded-sm hover:bg-blue-200 hover:text-blue-900 dark:hover:bg-blue-800 dark:hover:text-blue-300"
                    data-dismiss-target="#badge-dismiss-default"
                    aria-label="Remove"
                  >
                    <svg
                      class="w-2 h-2"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 14 14"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                      />
                    </svg>
                    <span class="sr-only">Remove badge</span>
                  </button>
                </span>
              </p>
            </div>

            <!-- End Col -->

            <div class="sm:col-span-3">
              <div class="inline-flex items-center">
                <span class="inline-block text-base font-medium text-gray-500 mt-2.5"
                  >상품 설명</span
                >
                <span
                  class="w-2 h-2 inline-block bg-blue-500 rounded-full mt-2.5 ml-2"
                ></span>
              </div>
            </div>
            <!-- End Col -->

            <div class="sm:col-span-9">
              <div
                id="product_main_explanation"
                class="py-2 px-3 block w-full border-gray-200 rounded-lg text-base focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
                rows="6"
              ></div>
              <p v-if="!invalidCheck.main_explanation" class="text-sm text-red-600 mt-2">
                상품 설명을 입력해주세요.
              </p>
            </div>
            <!-- End Col -->

            <div class="sm:col-span-3">
              <label class="inline-block text-base font-medium text-gray-500 mt-2.5">
                카테고리
              </label>
            </div>
            <!-- End Col -->

            <div class="sm:col-span-3">
              <div class="sm:flex">
                <div class="inline-flex rounded-md shadow-sm">
                  <button
                    v-for="(item, index) in categorys"
                    :key="index"
                    type="button"
                    @click="setTargetOptionStatus(item.category_id)"
                    :class="
                      category == item.category_id
                        ? 'bg-blue-400 text-white hover:bg-blue-700'
                        : 'bg-white text-gray-700 hover:bg-gray-50'
                    "
                    class="py-3 px-4 inline-flex justify-center items-center gap-2 -ml-px first:rounded-l-lg first:ml-0 last:rounded-r-lg border font-medium align-middle focus:z-10 focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all"
                  >
                    {{ item.name }}
                  </button>
                </div>
              </div>
            </div>

            <div class="sm:col-span-3">
              <label class="inline-block text-base font-medium text-gray-500 mt-2.5">
                상품 노출 상태
              </label>
            </div>
            <!-- End Col -->

            <div class="sm:col-span-3">
              <div class="sm:flex">
                <div class="inline-flex rounded-md shadow-sm">
                  <button
                    v-for="(sitem, sindex) in statusList"
                    :key="sindex"
                    type="button"
                    @click="setProductStatus(item.key)"
                    :class="
                      status == sitem.key
                        ? 'bg-blue-400 text-white hover:bg-blue-700'
                        : 'bg-white text-gray-700 hover:bg-gray-50'
                    "
                    class="py-3 px-4 inline-flex justify-center items-center gap-2 -ml-px first:rounded-l-lg first:ml-0 last:rounded-r-lg border font-medium align-middle focus:z-10 focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all"
                  >
                    {{ sitem.name }}
                  </button>
                </div>
              </div>
            </div>
          </div>
          <!-- End Section -->

          <!-- Section -->
          <div
            class="grid sm:grid-cols-12 gap-2 sm:gap-4 py-8 first:pt-0 last:pb-0 border-t first:border-transparent border-gray-200 dark:border-gray-700 xs:inline"
          >
            <div class="sm:col-span-12">
              <h2 class="text-lg font-semibold text-gray-800 dark:text-gray-200">
                02. 상품 유형
              </h2>
            </div>
            <!-- End Col -->
            <div class="sm:col-span-3">
              <label class="inline-block text-base font-medium text-gray-500 mt-2.5">
                상품 유형
              </label>
            </div>
            <!-- End Col -->

            <div class="sm:col-span-9">
              <div class="sm:flex">
                <label
                  @click="setProductType(pitem.key)"
                  v-for="(pitem, pIndex) in productTypeList"
                  :key="pIndex"
                  for="af-account-gender-checkbox"
                  class="flex py-2 px-3 block w-full border border-gray-200 shadow-sm -mt-px -ml-px first:rounded-t-lg last:rounded-b-lg sm:first:rounded-l-lg sm:mt-0 sm:first:ml-0 sm:first:rounded-tr-none sm:last:rounded-bl-none sm:last:rounded-r-lg text-base relative focus:z-10 focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
                >
                  <input
                    :checked="pType == pitem.key"
                    type="radio"
                    name="af-account-gender-checkbox2"
                    class="shrink-0 mt-0.5 border-gray-200 rounded-full text-blue-600 pointer-events-none focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                    :id="`af-account-category-checkbox-${pitem.key}`"
                  />
                  <span class="text-base text-gray-500 ml-3 dark:text-gray-400">{{
                    pitem.name
                  }}</span>
                </label>
              </div>
            </div>
            <!-- End Col -->

            <!--단일상품-->
            <template v-if="pType == 'NORMAL'">
              <div class="sm:col-span-2">
                <label class="inline-block text-base font-medium text-gray-500 mt-2.5">
                  수량
                </label>
              </div>
              <!-- End Col -->

              <div class="sm:col-span-2">
                <input
                  v-model="ea"
                  type="text"
                  class="py-2 px-3 pr-11 block w-full border-gray-200 shadow-sm text-base rounded-lg focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
                />
              </div>

              <div class="sm:col-span-2">
                <label
                  for="af-submit-application-resume-cv"
                  class="inline-block text-base font-medium text-gray-500 mt-2.5"
                >
                  원가
                </label>
              </div>
              <!-- End Col -->
              <div class="sm:col-span-2">
                <div
                  class="py-6 first:pt-0 last:pb-0 border-t first:border-transparent border-gray-200 dark:border-gray-700"
                >
                  <div class="relative">
                    <input
                      v-model="origin_price"
                      type="text"
                      id="hs-input-with-leading-and-trailing-icon"
                      name="hs-input-with-leading-and-trailing-icon"
                      class="py-3 px-4 pl-9 pr-16 block w-full border-gray-200 shadow-sm rounded-md text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
                      placeholder="0.00"
                    />
                    <div
                      class="absolute inset-y-0 left-0 flex items-center pointer-events-none z-20 pl-4"
                    >
                      <span class="text-gray-500">₩</span>
                    </div>
                    <div
                      class="absolute inset-y-0 right-0 flex items-center pointer-events-none z-20 pr-4"
                    >
                      <span class="text-gray-500">원</span>
                    </div>
                  </div>
                </div>
              </div>
              <!-- End Col -->

              <div class="sm:col-span-2">
                <label
                  for="af-submit-application-resume-cv"
                  class="inline-block text-base font-medium text-gray-500 mt-2.5"
                >
                  판매가
                </label>
              </div>
              <!-- End Col -->

              <div class="sm:col-span-2">
                <div
                  class="py-6 first:pt-0 last:pb-0 border-t first:border-transparent border-gray-200 dark:border-gray-700"
                >
                  <div>
                    <div class="relative">
                      <input
                        v-model="price"
                        type="text"
                        id="hs-input-with-leading-and-trailing-icon"
                        name="hs-input-with-leading-and-trailing-icon"
                        class="py-3 px-4 pl-9 pr-16 block w-full border-gray-200 shadow-sm rounded-md text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
                        placeholder="0.00"
                      />
                      <div
                        class="absolute inset-y-0 left-0 flex items-center pointer-events-none z-20 pl-4"
                      >
                        <span class="text-gray-500">₩</span>
                      </div>
                      <div
                        class="absolute inset-y-0 right-0 flex items-center pointer-events-none z-20 pr-4"
                      >
                        <span class="text-gray-500">원</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <!-- End Col -->
            </template>

            <template v-else>
              <div class="sm:col-span-3">
                <div class="inline-flex items-center">
                  <span class="inline-block text-base font-medium text-gray-500 mt-2.5"
                    >기본가(원가)</span
                  >
                </div>
              </div>
              <!-- End Col -->

              <div class="sm:col-span-3">
                <input
                  v-model="origin_price"
                  type="text"
                  class="py-2 px-3 pr-11 block w-full border-gray-200 shadow-sm text-base rounded-lg focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
                />
              </div>
              <!-- End Col -->

              <div class="sm:col-span-3">
                <div class="inline-flex items-center">
                  <span class="inline-block text-base font-medium text-gray-500 mt-2.5"
                    >기본가(판매가)</span
                  >
                </div>
              </div>
              <!-- End Col -->

              <div class="sm:col-span-3">
                <input
                  v-model="price"
                  type="text"
                  class="py-2 px-3 pr-11 block w-full border-gray-200 shadow-sm text-base rounded-lg focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
                />
                <p v-if="!invalidCheck.producer" class="text-sm text-red-600 mt-2">
                  생산자(수입자) 정보를 입력해주세요.
                </p>
              </div>
              <div class="sm:col-span-3">
                <label
                  for="af-submit-application-resume-cv"
                  class="inline-block text-base font-medium text-gray-500 mt-2.5"
                >
                  옵션
                </label>
              </div>
              <div class="sm:col-span-9 pt-6 pb-5">
                <the-product-option-table
                  @updateOptionList="updateOptionList"
                  :optionList="optionList"
                />
              </div>
            </template>
          </div>
          <!-- End Section -->

          <!-- Section -->
          <div
            class="grid sm:grid-cols-12 gap-2 sm:gap-4 py-8 first:pt-0 last:pb-0 border-t first:border-transparent border-gray-200 dark:border-gray-700 xs:inline"
          >
            <div class="sm:col-span-12">
              <h2 class="text-lg font-semibold text-gray-800 dark:text-gray-200">
                03. 구매 관련 정보, 상품 취급 정보
              </h2>
            </div>
            <!-- End Col -->

            <div class="sm:col-span-3">
              <label class="inline-block text-base font-medium text-gray-500 mt-2.5">
                보관방법 및 취급방법
              </label>
            </div>
            <!-- End Col -->

            <div class="sm:col-span-9">
              <div
                id="product_sub_explanation"
                class="py-2 px-3 block w-full border-gray-200 rounded-lg text-base focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
                rows="6"
              ></div>
            </div>
            <!-- End Col -->

            <div class="sm:col-span-3">
              <label class="inline-block text-base font-medium text-gray-500 mt-2.5">
                소비자 안전을 위한 주의사항
              </label>
            </div>
            <!-- End Col -->

            <div class="sm:col-span-9">
              <div
                id="purchase_inquiry"
                class="py-2 px-3 block w-full border-gray-200 rounded-lg text-base focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
                rows="6"
              ></div>
            </div>
            <!-- End Col -->

            <div class="sm:col-span-3">
              <div class="inline-flex items-center">
                <span class="inline-block text-base font-medium text-gray-500 mt-2.5"
                  >원산지</span
                >
                <span
                  class="w-2 h-2 inline-block bg-blue-500 rounded-full mt-2.5 ml-2"
                ></span>
              </div>
            </div>
            <!-- End Col -->

            <div class="sm:col-span-3">
              <input
                v-model="origin"
                type="text"
                class="py-2 px-3 pr-11 block w-full border-gray-200 shadow-sm text-base rounded-lg focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
              />
              <p v-if="!invalidCheck.origin" class="text-sm text-red-600 mt-2">
                원산지 정보를 입력해주세요.
              </p>
            </div>
            <!-- End Col -->

            <div class="sm:col-span-3">
              <div class="inline-flex items-center">
                <span class="inline-block text-base font-medium text-gray-500 mt-2.5"
                  >생산자(수입자)</span
                >
                <span
                  class="w-2 h-2 inline-block bg-blue-500 rounded-full mt-2.5 ml-2"
                ></span>
              </div>
            </div>
            <!-- End Col -->

            <div class="sm:col-span-3">
              <input
                v-model="producer"
                type="text"
                class="py-2 px-3 pr-11 block w-full border-gray-200 shadow-sm text-base rounded-lg focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
              />
              <p v-if="!invalidCheck.producer" class="text-sm text-red-600 mt-2">
                생산자(수입자) 정보를 입력해주세요.
              </p>
            </div>
            <!-- End Col -->
          </div>
          <!-- End Section -->

          <!-- Section -->
          <div
            class="py-8 first:pt-0 last:pb-0 border-t first:border-transparent border-gray-200 dark:border-gray-700"
          >
            <h2 class="text-lg font-semibold text-gray-800 dark:text-gray-200">
              개인정보의 수집 및 이용에 대한 동의 (필수)
            </h2>
            <p class="mt-3 text-base text-gray-600 dark:text-gray-400">
              이용자 참여와 이용통계 분석 등의 서비스를 위해 회원 가입시 아래의 개인정보를
              수집하고 있습니다. 가. 필수정보: 아이디, 이름, 성별, 출생년도, 비밀번호,
              이메일 나. 서비스 이용 과정에서 아래와 같은 정보들이 자동으로 생성되어
              수집될 수 있습니다. (접속로그, 접속IP정보, 쿠키, 방문 일시, 서비스 이용기록,
              불량 이용 기록)
            </p>

            <div class="mt-5 flex">
              <input
                type="checkbox"
                class="shrink-0 mt-0.5 border-gray-200 rounded text-blue-600 pointer-events-none focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                id="af-submit-application-privacy-check"
              />
              <label
                for="af-submit-application-privacy-check"
                class="text-base text-gray-500 ml-2 dark:text-gray-400"
              >
                개인정보의 수집 및 이용에 대해 동의합니다.
              </label>
            </div>
          </div>
          <!-- End Section -->

          <button
            @click="submit()"
            type="button"
            class="py-3 px-4 w-full inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-base dark:focus:ring-offset-gray-800"
          >
            {{ mode == "modify" ? "수정하기" : "등록하기" }}
          </button>
        </form>
      </div>
      <!-- End Card -->
    </div>
    <!-- End Card Section -->
  </div>
</template>

<script>
import { mapActions } from "vuex";
import ProductService from "@/services/ProductService";
import CommonService from "@/services/CommonService";
import TheProductOptionTable from "@/components/admin/product/ProductOptionTable.vue";
import Editor from "@toast-ui/editor";

export default {
  components: {
    TheProductOptionTable,
  },
  props: {
    confirm: Boolean,
  },
  async created() {
    if (!Kakao) {
      await Kakao.init("bfdc56a39210639e056f66e470d11426");
    }
  },
  data() {
    return {
      id: 0,
      title: "",
      subtitle: "",
      description: "",
      price: "",
      notice1: "",
      notice2: "",
      producer: "",
      imagesrc: "",
      image_url: "",
      origin_price: "",
      origin: "",
      categorys: [],
      category: 1,
      mode: "regist",
      image1: "",
      image2: "",
      image3: "",
      statusList: [
        { key: "NORMAL", name: "판매중" },
        { key: "HIDDEN", name: "판매 종료" },
      ],
      status: "NORMAL",
      ea: 0,
      pType: "NORMAL",
      productTypeList: [
        { key: "NORMAL", name: "옵션이 없는 단일 상품이예요." },
        { key: "OPTION", name: "옵션이 있는 상품이예요." },
      ],
      optionList: [],
      invalidCheck: {
        title: true, // 상품명
        description: true, // 상품설명
        producer: true, // 생산자
        origin: true, // 원산지
        image_url: true, // 메인 상품 이미지
        main_explanation: true, // 메인 상품 설명
      },
    };
  },
  watch: {
    confirm() {
      // 등록 -> 확인
      this.$router.push("/admin/product/detail/detail");
    },
  },

  methods: {
    kakaoShare() {
      // 카카오톡 공유하기
      const main_title = this.title;
      const sub_title = this.subtitle;
      const regularPrice = this.origin_price;
      const discountPrice = this.price;
      const imageUrl = this.image_url;
      const productID = this.id;

      Kakao.Share.sendDefault({
        objectType: "commerce",
        content: {
          title: main_title,
          imageUrl: imageUrl,
          link: {
            mobileWebUrl: `http://www.appling.me/commerce/detail/${productID}`,
            webUrl: `http://www.appling.me/commerce/detail/${productID}`,
          },
        },
        commerce: {
          productName: main_title,
          regularPrice,
          discountRate: 10,
          discountPrice,
        },
        buttons: [
          {
            title: "상품 구매하러 가기!",
            link: {
              mobileWebUrl: `http://www.appling.me/commerce/detail/${productID}`,
              webUrl: `http://www.appling.me/commerce/detail/${productID}`,
            },
          },
        ],
      });
    },
    movetoCommerce() {
      this.$router.push(`/commerce/detail/${this.id}`);
    },
    setTargetOptionStatus(key) {
      this.category = key;
    },
    /**
     * Update the option list with a new set of options.
     *
     * @param {Array} optionList - The new list of options.
     */
    updateOptionList(optionList) {
      this.optionList = optionList;
    },
    /**
     * Sets the product type.
     *
     * @param {string} key - The key of the product type.
     */
    setProductType(key) {
      this.pType = key;
    },
    ...mapActions("cart", ["updateSpinnerStatus"]),
    /**
     * Set the product status.
     *
     * @param {type} status - The new status of the product.
     */
    setProductStatus(status) {
      this.status = status;
    },
    /**
     * Removes the main image for the given file name.
     *
     * @param {string} fname - The file name of the main image to be removed.
     */
    removemainimage(fname) {
      this[`${fname}`] = "";
    },
    async onfileInput_multiple(event, fname) {
      const imageFormData = new FormData();
      imageFormData.append("image", event.target.files[0]);

      await this.imageonserver(imageFormData).then((url) => {
        this[`${fname}`] = url;
      });
    },
    setCategory(value) {
      this.category = value;
    },
    async imageonserver(imageFormData) {
      return await CommonService.imageonserver(imageFormData).then((response) => {
        if (response.data.code == "0000") {
          return response.data.data.url;
        } else {
          alert(response.data.message);
          return "";
        }
      });
    },
    async getcategorylist() {
      return await ProductService.categorylist().then((response) => {
        if (response.data.code == "0000") {
          this.categorys = response.data.data.list;
        } else {
          this.categorys = [];
        }
      });
    },
    async fileInput(event) {
      const imageFormData = new FormData();
      imageFormData.append("image", event.target.files[0]);

      imageFormData.append("filename", "main_image");
      const size = event.target.files[0].size;
      const limit_size = 1000000;
      if (size >= limit_size) {
        alert("이미지 사이즈를 확인해주세요.");
        event.preventDefault();
        document.getElementById("af-submit-application-resume-cv").value = "";
        return false;
      } else {
        await this.imageonserver(imageFormData).then((url) => {
          this.image_url = url;
        });
      }
    },
    dataInvalidCheck() {
      // invalid check parameter string
      const checkStr = [
        "title",
        "description",
        "producer",
        "origin",
        "image_url",
        "main_explanation",
      ];
      let isInvalid = true;
      let self = this;
      // search checkStr in this.invalidCheck is empty
      for (let i = 0; i < checkStr.length; i++) {
        this.invalidCheck[`${checkStr[i]}`] = self[checkStr[i]] == "" ? false : true;
      }

      // invalid check
      if (
        this.invalidCheck.title &&
        this.invalidCheck.description &&
        this.invalidCheck.producer &&
        this.invalidCheck.origin &&
        this.invalidCheck.image_url &&
        this.invalidCheck.main_explanation
      ) {
        return true;
      } else {
        return false;
      }
    },
    async getproductitemlist(id) {
      // 상품 수정
      this.updateSpinnerStatus(true);

      return await ProductService.getproductlistbyid(id).then((response) => {
        if (response.data.code == "0000") {
          const userdata = response.data.data;
          this.title = userdata.main_title;
          this.subtitle = userdata.main_explanation;
          this.description = userdata.product_main_explanation;
          this.notice1 = userdata.product_sub_explanation;
          this.origin_price = userdata.origin_price;
          this.price = userdata.price;
          this.notice2 = userdata.purchase_inquiry;
          this.image_url = userdata.main_image;
          this.origin = userdata.origin;
          this.producer = userdata.producer;
          this.category = userdata.category.category_id;
          this.image1 = userdata.image1;
          this.image2 = userdata.image2;
          this.image3 = userdata.image3;
          this.status = userdata.status;
          this.ea = userdata.ea;
          this.pType = userdata.type;
          this.optionList = userdata?.option_list;
          this.editor.setHTML(userdata.product_main_explanation); //this.editor.setHTML',`${userdata.product_main_explanation}`); //initialValue = userdata.product_main_explanation;
          this.editor2.setHTML(userdata.product_sub_explanation);
          this.editor3.setHTML(userdata.purchase_inquiry);
          this.updateSpinnerStatus(false);
        }
      });
    },
    async submit() {
      // 상품 등록 submit

      this.description = this.editor.getHTML();
      this.notice1 = this.editor2.getHTML();
      this.notice2 = this.editor3.getHTML();

      // data invalidation check
      if (!this.dataInvalidCheck()) {
        return (location.href = `#product-info-section`);
      }

      const params = {
        price: Number(this.price),
        origin: this.origin,
        producer: this.producer,
        image1: this.image1,
        image2: this.image2,
        image3: this.image3,
        main_title: this.title,
        main_explanation: this.subtitle,
        product_main_explanation: this.description,
        product_sub_explanation: this.notice1,
        origin_price: Number(this.origin_price),
        purchase_inquiry: this.notice2,
        main_image: this.image_url,
        category_id: this.category,
        status: this.status,
        ea: this.ea,
        type: this.pType,
      };

      if (this.pType == "OPTION") {
        params["option_list"] = this.optionList;
      }

      if (this.id > 0) {
        // 수정
        params["product_id"] = Number(this.id);
      }
      this.updateSpinnerStatus(true);
      await ProductService.submittemplate(params, this.mode).then((response) => {
        this.updateSpinnerStatus(false);
        if (response.data.code === "0001" || response.data.code === "0000") {
          alert(
            `${this.mode == "regist" ? "등록" : "수정"}되었습니다.
          <br/>등록한 상품은 상품 내역에서 확인할 수 있습니다.
          <br/>등록한 상품을 공유하여 상품을 홍보해보세요!`
          );
        } else {
          alert(
            `오류가 발생했습니다.<br/> ${response.data.code} 잠시후 다시 시도해 주세요.`
          );
        }
        this.$router.push("/admin/product/list");
      });
    },
  },
  mounted() {
    this.getcategorylist();
    this.id = this.$route.params.id;
    if (this.id > 0) {
      this.mode = "modify";
      this.getproductitemlist(this.id);
    } else {
      this.mode = "regist";
    }

    var self = this;
    this.editor = new Editor({
      el: document.querySelector("#product_main_explanation"),
      height: "300px",
      initialEditType: "wysiwyg",
      previewStyle: "vertical",
    });

    this.editor2 = new Editor({
      el: document.querySelector("#product_sub_explanation"),
      height: "300px",
      initialEditType: "wysiwyg",
      previewStyle: "vertical",
    });

    this.editor3 = new Editor({
      el: document.querySelector("#purchase_inquiry"),
      height: "300px",
      initialEditType: "wysiwyg",
      previewStyle: "vertical",
    });
  },
};
</script>

<style>
@import url("@toast-ui/editor/dist/toastui-editor.css");
.inherit {
  display: inherit;
}

@media (max-width: 767px) {
  .xs\:inline {
    display: inline !important;
  }
}
</style>
