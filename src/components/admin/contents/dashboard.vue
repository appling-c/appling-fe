<script setup>
  const islogin = JSON.parse(sessionStorage.getItem('islogin'));
</script>

<template>
  
    <!-- Page Heading -->
    <!-- Card Section -->

<!-- End Card Section -->
    <header>
      <h1 class="block text-2xl font-bold text-gray-800 sm:text-3xl dark:text-white">나의 수입 한 눈에 보기👀</h1>
      <p class="mt-2 text-lg text-gray-800 dark:text-gray-400">이번달, 내가 올린 상품의 매출액과 일정을 한 눈에 확인해보세요!</p>
      <p class="mt-2 text-m text-gray-800 dark:text-gray-200">통계는 매월 1일 초기화 돼요.</p>

      <div class="mt-5 flex flex-col items-center gap-2 sm:flex-row sm:gap-3">
        <router-link to="/admin/product/list" class="w-full sm:w-auto inline-flex justify-center items-center gap-x-3 text-center bg-blue-600 hover:bg-blue-700 border border-transparent text-white text-sm font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white transition py-3 px-4 dark:focus:ring-offset-gray-800" href="https://github.com/htmlstreamofficial/preline/tree/main/examples/html" target="_blank">
          <svg class="w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"></path>
          </svg>
          상품 관리 바로가기
        </router-link>
        <router-link to="/admin/brandshop" class="w-full sm:w-auto inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold text-blue-500 hover:text-blue-700 focus:outline-none focus:ring-2 ring-offset-gray-50 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm py-3 px-4 dark:ring-offset-slate-900" href="../examples.html">
          <svg class="w-2.5 h-2.5" width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M11.2792 1.64001L5.63273 7.28646C5.43747 7.48172 5.43747 7.79831 5.63273 7.99357L11.2792 13.64" stroke="currentColor" stroke-width="2" stroke-linecap="round"></path>
          </svg>
          우리 농장 소개하기
        </router-link>
      </div>
      
    </header>

    <div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
      <!-- Grid -->
      <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        <!-- Card -->
        <div class="flex flex-col gap-y-3 lg:gap-y-5 p-4 md:p-5 bg-white border shadow-sm rounded-xl dark:bg-slate-900 dark:border-gray-800">
          <div class="inline-flex justify-center items-center">
            <span class="w-2 h-2 inline-block bg-gray-500 rounded-full mr-2"></span>
            <span class="text-base font-semibold uppercase text-gray-600 dark:text-gray-400">내가 올린 상품</span>
          </div>

          <div class="text-center">
            <h3 class="text-3xl sm:text-4xl lg:text-5xl font-semibold text-gray-800 dark:text-gray-200">
              150
            </h3>
          </div>

          <dl class="flex justify-center items-center divide-x divide-gray-200 dark:divide-gray-700">
            <dt class="pr-3">
              <span class="text-green-600">
                <svg class="inline-block w-4 h-4 self-center" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                  <path fill-rule="evenodd" d="m7.247 4.86-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z"/>
                </svg>
                <span class="inline-block text-base">
                  1.7%
                </span>
              </span>
              <span class="block text-base text-gray-500">change</span>
            </dt>
            <dd class="text-left pl-3">
              <span class="text-base font-semibold text-gray-800 dark:text-gray-200">5</span>
              <span class="block text-base text-gray-500">last week</span>
            </dd>
          </dl>
        </div>
        <!-- End Card -->

        <!-- Card -->
        <div class="flex flex-col gap-y-3 lg:gap-y-5 p-4 md:p-5 bg-white border shadow-sm rounded-xl dark:bg-slate-900 dark:border-gray-800">
          <div class="inline-flex justify-center items-center">
            <span class="w-2 h-2 inline-block bg-green-500 rounded-full mr-2"></span>
            <span class="text-base font-semibold uppercase text-gray-600 dark:text-gray-400">판매 완료</span>
          </div>

          <div class="text-center">
            <h3 class="text-3xl sm:text-4xl lg:text-5xl font-semibold text-gray-800 dark:text-gray-200">
              25
            </h3>
          </div>

          <dl class="flex justify-center items-center divide-x divide-gray-200 dark:divide-gray-700">
            <dt class="pr-3">
              <span class="text-green-600">
                <svg class="inline-block w-4 h-4 self-center" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
                  <path fill-rule="evenodd" d="m7.247 4.86-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z"/>
                </svg>
                <span class="inline-block text-base">
                  5.6%
                </span>
              </span>
              <span class="block text-base text-gray-500">change</span>
            </dt>
            <dd class="text-left pl-3">
              <span class="text-base font-semibold text-gray-800 dark:text-gray-200">7</span>
              <span class="block text-base text-gray-500">last week</span>
            </dd>
          </dl>
        </div>
        <!-- End Card -->

        <!-- Card -->
        <div class="flex flex-col gap-y-3 lg:gap-y-5 p-4 md:p-5 bg-white border shadow-sm rounded-xl dark:bg-slate-900 dark:border-gray-800">
          <div class="inline-flex justify-center items-center">
            <span class="w-2 h-2 inline-block bg-red-500 rounded-full mr-2"></span>
            <span class="text-base font-semibold uppercase text-gray-600 dark:text-gray-400">판매 완료 금액</span>
          </div>

          <div class="text-center">
            <h3 class="text-3xl sm:text-4xl lg:text-5xl font-semibold text-gray-800 dark:text-gray-200">
              65.4
            </h3>
            <span class="text-base sm:text-base lg:text-base font-semibold text-gray-800 dark:text-gray-200">
              천원
            </span>
          </div>

          <dl class="flex justify-center items-center divide-x divide-gray-200 dark:divide-gray-700">
            <dt class="pr-3">
              <span class="text-red-600">
                <svg class="inline-block w-4 h-4 self-center" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                  <path fill-rule="evenodd" d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
                </svg>
                <span class="inline-block text-base">
                  5.6%
                </span>
              </span>
              <span class="block text-base text-gray-500">change</span>
            </dt>
            <dd class="text-left pl-3">
              <span class="text-base font-semibold text-gray-800 dark:text-gray-200">7</span>
              <span class="block text-base text-gray-500">last week</span>
            </dd>
          </dl>
        </div>
        <!-- End Card -->
      </div>
      <!-- End Grid -->
      

      <div style="margin-top:2rem;" class="px-4 flex flex-col bg-white border shadow-sm rounded-xl dark:bg-gray-800 dark:border-gray-700 dark:shadow-slate-700/[.7]">
        <div class="h-80 overflow-y-auto p-4 md:p-5">
          <h3 class="text-lg font-bold text-gray-800 dark:text-white">
            최근 주문 내역
          </h3>
          <div class="flex flex-col">
          <div class="-m-1.5 overflow-x-auto">
            <div class="p-1.5 min-w-full inline-block align-middle">
              <div class="overflow-hidden">
                <table class="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                  <caption class="py-2 text-left text-base text-gray-600 dark:text-gray-500"></caption>
                  <thead>
                    <tr>
                      <th scope="col" class="px-6 py-3 text-left text-base font-medium text-gray-500 uppercase">이름</th>
                      <th scope="col" class="px-6 py-3 text-left text-base font-medium text-gray-500 uppercase">지역</th>
                      <th scope="col" class="px-6 py-3 text-left text-base font-medium text-gray-500 uppercase">주문내역</th>
                      <th scope="col" class="px-6 py-3 text-right text-base font-medium text-gray-500 uppercase">Action</th>
                    </tr>
                  </thead>
                  <tbody class="divide-y divide-gray-200 dark:divide-gray-700">
                    <tr>
                      <td class="px-6 py-4 whitespace-nowrap text-base font-medium text-gray-800 dark:text-gray-200">김루나</td>
                      <td class="px-6 py-4 whitespace-nowrap text-base text-gray-800 dark:text-gray-200">경기 안성</td>
                      <td class="px-6 py-4 whitespace-nowrap text-base text-gray-800 dark:text-gray-200">[2023-03-03 13:30] 사과 10개, 약과 20개</td>
                      <td class="px-6 py-4 whitespace-nowrap text-right text-base font-medium">
                        <a class="text-blue-500 hover:text-blue-700"  >연락하기</a>
                      </td>
                    </tr>

                    <tr>
                      <td class="px-6 py-4 whitespace-nowrap text-base font-medium text-gray-800 dark:text-gray-200">주누군</td>
                      <td class="px-6 py-4 whitespace-nowrap text-base text-gray-800 dark:text-gray-200">경기 가평</td>
                      <td class="px-6 py-4 whitespace-nowrap text-base text-gray-800 dark:text-gray-200">[2023-03-03 13:50] 사과 10개, 약과 20개</td>
                      <td class="px-6 py-4 whitespace-nowrap text-right text-base font-medium">
                        <a class="text-blue-500 hover:text-blue-700"  >연락하기</a>
                      </td>
                    </tr>

                    <tr>
                      <td class="px-6 py-4 whitespace-nowrap text-base font-medium text-gray-800 dark:text-gray-200">김시얼</td>
                      <td class="px-6 py-4 whitespace-nowrap text-base text-gray-800 dark:text-gray-200">경기 성남</td>
                      <td class="px-6 py-4 whitespace-nowrap text-base text-gray-800 dark:text-gray-200">[2023-03-23 13:30] 사과 10개, 약과 20개</td>
                      <td class="px-6 py-4 whitespace-nowrap text-right text-base font-medium">
                        <a class="text-blue-500 hover:text-blue-700"  >연락하기</a>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
        </div>
          </div>
         
        </div>
      </div>
    </div>
    
  <!-- End Tab Nav -->
  <!-- End Page Heading -->
</template>