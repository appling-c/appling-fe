<script>
import api from '../../plugins/api'
export default {
  data(){
    return {
      categorys : [], 
      keyword : "", 
    }
  },
  methods: {

    gotoproducts(category_id){
      this.$router.push(`/commerce/search`)
    },
    
    gopricing(){
      this.$router.push('/commerce/pricing')
    }, 
    async getcategorylist(){
      await api.categorylist().then(response=> {
        this.categorys = response.data.data.list;
        
      })
    },
  },
  mounted(){
    this.getcategorylist();
  },
  
}
</script>
<template>
    <div>

    <div style="padding-top:13rem" class="max-w-2xl mx-auto text-center pt-20 pb-6 lg:pb-32">
      <h2 class="text-2xl font-bold sm:text-3xl md:text-4xl dark:text-white">판매자와 소비자의 연결고리,<br/> 
      어서오세요, 애플링입니다.🍎</h2>   

      <!-- Grid -->
              <div class="mt-7 grid grid-cols-12 sm:flex sm:justify-center gap-6 sm:gap-x-12 lg:gap-x-20">
              <div class="col-span-6 text-center">
              <h4 class="text-xl md:text-3xl font-semibold text-gray-800 dark:text-gray-200">
                  250+
              </h4>
              <h4 class="text-base text-gray-600 dark:text-gray-400">
                  개의 상품! 
              </h4>
              </div>
              <!-- End Col -->

              <div class="col-span-6 text-center">
              <h4 class="text-xl md:text-3xl font-semibold text-gray-800 dark:text-gray-200">
                  160+
              </h4>
              <h4 class="text-base text-gray-600 dark:text-gray-400">
                건 이상의 안전한 거래
              </h4>
              </div>
              <!-- End Col -->

              <div class="col-start-4 col-span-6 text-center">
              <h4 class="text-xl md:text-3xl font-semibold text-gray-800 dark:text-gray-200">
                  100+
              </h4>
              <h4 class="text-base text-gray-600 dark:text-gray-400">
                  명 이상 애플링 이용중!
              </h4>
              </div>
              <!-- End Col -->
          </div>    
          <!-- End Grid -->  
    </div>
   
      <!-- End Clients -->
      <!-- Hero -->
      <div class="relative overflow-hidden">
        <div class="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-24">
          <div class="text-center">
            <h1 class="text-4xl sm:text-6xl font-bold text-gray-800 dark:text-gray-200">
              둘러보기👀
            </h1>
            

            <p class="mt-3 text-gray-600 dark:text-gray-400">
              아래의 키워드를 눌러 상품을 둘러보세요!
            </p>

            <div class="mt-7 sm:mt-12 mx-auto max-w-xl relative">
              <!-- Form -->
              <form>
                <div class="relative z-10 flex space-x-3 p-3 bg-white border rounded-lg shadow-lg shadow-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:shadow-gray-900/[.2]">
                  <div class="flex-[1_0_0%]">
                    <label for="hs-search-article-1" class="block text-base text-gray-700 font-medium dark:text-white"><span class="sr-only">키워드 검색하기!</span></label>
                    <input type="text" v-model="keyword" name="hs-search-article-1" id="hs-search-article-1" class="p-3 block w-full border-transparent rounded-md focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-800 dark:text-gray-400" placeholder="엄마손맛 간장게장">
                  </div>
                  <div class="flex-[0_0_auto]">
                    <a class="p-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-base dark:focus:ring-offset-gray-800"  >
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </form>
              <!-- End Form -->

              <!-- SVG Element -->
              <div class="hidden md:block absolute top-0 right-0 -translate-y-12 translate-x-20">
                <svg class="w-16 h-auto text-orange-500" width="121" height="135" viewBox="0 0 121 135" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 16.4754C11.7688 27.4499 21.2452 57.3224 5 89.0164" stroke="currentColor" stroke-width="10" stroke-linecap="round"/>
                  <path d="M33.6761 112.104C44.6984 98.1239 74.2618 57.6776 83.4821 5" stroke="currentColor" stroke-width="10" stroke-linecap="round"/>
                  <path d="M50.5525 130C68.2064 127.495 110.731 117.541 116 78.0874" stroke="currentColor" stroke-width="10" stroke-linecap="round"/>
                </svg>
              </div>
              <!-- End SVG Element -->

              <!-- SVG Element -->
              <div class="hidden md:block absolute bottom-0 left-0 translate-y-10 -translate-x-32">
                <svg class="w-40 h-auto text-cyan-500" width="347" height="188" viewBox="0 0 347 188" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4 82.4591C54.7956 92.8751 30.9771 162.782 68.2065 181.385C112.642 203.59 127.943 78.57 122.161 25.5053C120.504 2.2376 93.4028 -8.11128 89.7468 25.5053C85.8633 61.2125 130.186 199.678 180.982 146.248L214.898 107.02C224.322 95.4118 242.9 79.2851 258.6 107.02C274.299 134.754 299.315 125.589 309.861 117.539L343 93.4426" stroke="currentColor" stroke-width="7" stroke-linecap="round"/>
                </svg>
              </div>
              <!-- End SVG Element -->
            </div>

            <div class="mt-10 sm:mt-20">
              <a @click="gotoproducts(citem.category_id)" v-for="(citem, index) in categorys" :key="index" class="m-1 py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-base dark:bg-slate-900 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800"  >
                <svg class="w-3 h-auto" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M6.5 1A1.5 1.5 0 0 0 5 2.5V3H1.5A1.5 1.5 0 0 0 0 4.5v8A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-8A1.5 1.5 0 0 0 14.5 3H11v-.5A1.5 1.5 0 0 0 9.5 1h-3zm0 1h3a.5.5 0 0 1 .5.5V3H6v-.5a.5.5 0 0 1 .5-.5zm1.886 6.914L15 7.151V12.5a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5V7.15l6.614 1.764a1.5 1.5 0 0 0 .772 0zM1.5 4h13a.5.5 0 0 1 .5.5v1.616L8.129 7.948a.5.5 0 0 1-.258 0L1 6.116V4.5a.5.5 0 0 1 .5-.5z"/>
                </svg>
                {{citem.name}}
              </a>
             
            </div>
          </div>
        </div>
      </div>
      <!-- End Hero -->
      <!-- Card Blog -->
<div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
  <!-- Title -->
  <div class="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
    <h2 class="text-2xl font-bold md:text-4xl md:leading-tight dark:text-white">애플링 최고 인기 상품! <br/>산지에서 바로 보내는 초신선 농산물 구경하기</h2>
    <p class="mt-1 text-gray-600 dark:text-gray-400">산지에 바로 주문하는 유통 다이어트로 판매자는 더 높은 가격에,<br/> 소비자는 더 낮은 가격에 국산 농산물을 거래해보세요.</p>
  </div>
  <!-- End Title -->

  <!-- Grid -->
  <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
    <!-- Card -->
    <a class="group rounded-xl overflow-hidden"  >
      <div class="relative pt-[50%] sm:pt-[70%] rounded-xl overflow-hidden">
        <img class="w-full h-full absolute top-0 left-0 object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out rounded-xl" src="/src/assets/apple-title.png" alt="Image Description">
        <span class="absolute top-0 right-0 rounded-tr-xl rounded-bl-xl text-xs font-medium bg-gray-800 text-white py-1.5 px-3 dark:bg-gray-900">
          프리미엄
        </span>
      </div>

      <div class="mt-7">
        <h3 class="text-xl font-semibold text-gray-800 group-hover:text-gray-600 dark:text-gray-200">
          [자연 햇살 농원] 평창 700 고지에서 직접 재배한 무공해 사과
        </h3>
        <p class="mt-3 text-gray-800 dark:text-gray-200">
          #평창여행 #평창한우#평창여행 #평창사과 #평창한우
        </p>
        <p class="mt-5 inline-flex items-center gap-x-1.5 text-blue-600 decoration-2 group-hover:underline font-medium">
          더보기👀
          <svg class="w-2.5 h-2.5" width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M5.27921 2L10.9257 7.64645C11.1209 7.84171 11.1209 8.15829 10.9257 8.35355L5.27921 14" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
          </svg>
        </p>
      </div>
    </a>
    <!-- End Card -->

    <!-- Card -->
    <a class="group rounded-xl overflow-hidden"  >
      <div class="relative pt-[50%] sm:pt-[70%] rounded-xl overflow-hidden">
        <img class="w-full h-full absolute top-0 left-0 object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out rounded-xl" src="/src/assets/potato.png" alt="Image Description">
        <span class="absolute top-0 right-0 rounded-tr-xl rounded-bl-xl text-xs font-medium bg-gray-800 text-white py-1.5 px-3 dark:bg-gray-900">
          베이직
        </span>
      </div>

      <div class="mt-7">
        <h3 class="text-xl font-semibold text-gray-800 group-hover:text-gray-600 dark:text-gray-200">
          [꿀고구마맛집] 해남 베니하루카 꿀 고구마 밤고구마 호박고구마
        </h3>
        <p class="mt-3 text-gray-800 dark:text-gray-200">
          농부의 땀과 정성으로 재배 수확한 황토 고구마
        </p>
        <p class="mt-5 inline-flex items-center gap-x-1.5 text-blue-600 decoration-2 group-hover:underline font-medium">
          더보기👀
          <svg class="w-2.5 h-2.5" width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M5.27921 2L10.9257 7.64645C11.1209 7.84171 11.1209 8.15829 10.9257 8.35355L5.27921 14" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
          </svg>
        </p>
      </div>
    </a>
    <!-- End Card -->

    <!-- Card -->
    <a class="group relative flex flex-col w-full min-h-[15rem] bg-center bg-cover rounded-xl hover:shadow-lg transition bg-[url('/src/assets/back-darken.png')]"  >
      <div class="flex-auto p-4 md:p-6">
        <h3 class="text-xl text-white/[.9] group-hover:text-white"><span class="font-bold">애플링</span> 서비스에 가입하여 상품을 구매하고, 판매해보세요.</h3>
      </div>
      <div class="pt-0 p-4 md:p-6">
        <div class="inline-flex items-center gap-2 text-sm font-medium text-white group-hover:text-white/[.7]">
          자세히 보기
          <svg class="w-2.5 h-2.5" width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M5.27921 2L10.9257 7.64645C11.1209 7.84171 11.1209 8.15829 10.9257 8.35355L5.27921 14" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
          </svg>
        </div>
      </div>
    </a>
    <!-- End Card -->
  </div>
  <!-- End Grid -->
</div>
<!-- End Card Blog -->

     <div class="max-w-2xl mx-auto text-center pt-20 pb-6 lg:pb-16">
      <h2 class="text-2xl font-bold sm:text-3xl md:text-4xl dark:text-white">Blog Sections</h2>
      <p class="mt-4 md:text-lg text-gray-600 dark:text-gray-400">Quickly get a project started with any of our examples ranging from using parts of the UI to custom components and layouts using Tailwind CSS.</p>
      <div class="mt-5">
        <a @click="gopricing" class="inline-flex justify-center items-center gap-x-3 text-center bg-blue-600 hover:bg-blue-700 border border-transparent text-white text-sm font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white transition py-3 px-4 dark:focus:ring-offset-gray-800">
          멤버십 자세히 보기
        </a>
      </div>
    </div>
  </div>
</template>