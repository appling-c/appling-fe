<script>
import api from '../../plugins/api'
import common from '../../plugins/common'
import {mapActions} from 'vuex'

export default {
    data(){
        return{
          id : 0, 
          main_title: "", 
          main_explanation: "", 
          description: "", 
          product_main_explanation : "", 
          product_sub_explanation : "", 
          purchase_inquiry : "", 
          price: "", 
          producer: "", 
          main_image : "",
          origin_price : "", 
          image1 : "", 
          image2 : "", 
          image3 :"", 
          origin : "", 
          seller : null, 
          created_at : "", 
          modified_at : ""
        }
    },
    methods:{
          ...mapActions('cart', ['updateSpinnerStatus']), 
      back(){
        this.$router.push("/commerce/search")
      },
      won_filter(num){
            return common.comma(num)
        },
        async getproductitemlist(id) {
        // 상품 수정
        this.updateSpinnerStatus(true);
        await api.getproductlistbyid(id).then((response)=> {
            if(response.data.code == '0000'){
                
                const userdata = response.data.data;
                this.created_at = userdata.created_at;
                this.modified_at = userdata.modified_at;
                this.image1 = userdata.image1;
                this.image2 = userdata.image2;
                this.image3 = userdata.image3;
                this.main_title = userdata.main_title;
                this.main_explanation = userdata.main_explanation;
                this.product_main_explanation = userdata.product_main_explanation;
                this.product_sub_explanation = userdata.product_sub_explanation;
                this.origin_price = userdata.origin_price;
                this.price = userdata.price;
                this.purchase_inquiry = userdata.purchase_inquiry;
                this.main_image = userdata.main_image;
                this.origin = userdata.origin;
                this.producer = userdata.producer;
                this.category = userdata.category.name;
                this.seller = userdata.seller;

                this.seller_id = userdata.seller.seller_id;

                api.getproductlistbysellerid(this.seller_id).then((response)=> {
                  console.log(response)
                })

                this.updateSpinnerStatus(false);
            }
            })
        },
    },
    async mounted(){
        this.id = this.$route.params.id;
        if(this.id > 0){
            await this.getproductitemlist(this.id)
        }
    }
}
</script>
<template>
    <!-- Blog Article -->
    <!-- Blog Article -->
<div class="max-w-[85rem] px-4 sm:px-6 lg:px-8 mx-auto">
  <div class="grid lg:grid-cols-3 gap-y-8 lg:gap-y-0 lg:gap-x-6 lg:gap-x-12">
    <!-- Content -->
    <div class="lg:col-span-2">
      <div class="py-8 lg:pr-4 lg:pr-8">
        <div class="space-y-5 lg:space-y-8">
          <a @click="back()" class="inline-flex items-center gap-x-1.5 text-sm text-gray-600 decoration-2 hover:underline dark:text-blue-400">
            <svg class="w-3 h-3" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
            </svg>
            상품 리스트로 돌아가기
          </a>

          <h2 class="text-3xl font-bold lg:text-4xl lg:text-5xl dark:text-white">{{main_title}}</h2>


              <ul class="text-xs text-gray-500">
                <li class="inline-block relative pr-6 last:pr-0 last-of-type:before:hidden before:absolute before:top-1/2 before:right-2 before:-translate-y-1/2 before:w-1 before:h-1 before:bg-gray-300 before:rounded-full dark:text-gray-400 dark:before:bg-gray-600">
                  {{created_at}}
                </li>
                <li class="inline-block relative pr-6 last:pr-0 last-of-type:before:hidden before:absolute before:top-1/2 before:right-2 before:-translate-y-1/2 before:w-1 before:h-1 before:bg-gray-300 before:rounded-full dark:text-gray-400 dark:before:bg-gray-600">
                  {{modified_at}} (수정됨)
                </li>
              </ul>
          <div class="text-center p-4 sm:px-7">
            <h2 v-html="main_explanation" class="text-2xl font-semibold dark:text-white">
            </h2>
            <h5 class="py-10 mx-4 text-3xl font-extrabold leading-none tracking-tight text-gray-900 md:text-3xl lg:text-3xl dark:text-white">
              애플링 특가
              <span class="underline underline-offset-3 decoration-8 decoration-blue-400 dark:decoration-blue-600">
                {{won_filter(price)}}원</span>에 구매해보세요!
            </h5>
           </div>

           <figure>
              <img class="w-full object-cover rounded-xl" 
              :src="main_image" :alt="main_image">
              <figcaption class="mt-3 text-sm text-center text-gray-500">
                A woman sitting at a table.
              </figcaption>
            </figure>


          <blockquote class="text-center p-4 sm:px-7">
            <p class="text-xl font-medium text-gray-800 lg:text-2xl lg:leading-normal xl:text-2xl xl:leading-normal dark:text-gray-200" v-html="product_main_explanation">
            </p>
            <p class="mt-5 text-gray-800 dark:text-gray-200">
              Nicole Grazioso
            </p>
          </blockquote>

          <div class="text-center">
            <div class="grid lg:grid-cols-2 gap-3">
              <div class="grid grid-cols-2 lg:grid-cols-1 gap-3">
                <figure v-if="image1 !== ''" class="relative w-full h-60">
                  <img class="w-full h-full absolute top-0 left-0 object-cover rounded-xl" :src="image1" alt="Image Description">
                </figure>
                <figure v-if="image2 !== ''"  class="relative w-full h-60">
                  <img class="w-full h-full absolute top-0 left-0 object-cover rounded-xl" :src="image2" alt="Image Description">
                </figure>
              </div>
              <figure v-if="image3 !== ''"  class="relative w-full h-72 sm:h-96 lg:h-full">
                <img class="w-full h-full absolute top-0 left-0 object-cover rounded-xl" :src="image3" alt="Image Description">
              </figure>
            </div>

            <span class="mt-3 block text-sm text-center text-gray-500">
              Working process
            </span>
          </div>


          <div class="space-y-3">
            <h3 class="text-2xl font-semibold dark:text-white">보관방법 및 취급방법</h3>
            <p class="text-lg text-gray-800 dark:text-gray-200" v-html="product_sub_explanation"></p>
          </div>

          <div class="space-y-3">
            <h3 class="text-2xl font-semibold dark:text-white">소비자 안전을 위한 주의사항</h3>
            <p class="text-lg text-gray-800 dark:text-gray-200" v-html="purchase_inquiry"></p>
          </div>

          <!-- Icon Blocks -->
       <div class="space-y-3">
        <h3 class="text-2xl font-semibold dark:text-white">상품정보</h3>

        <div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
            <div class="max-w-4xl mx-auto">
                <!-- Grid -->
                <div class="grid md:grid-cols-2 gap-6 lg:gap-12">
                <div class="space-y-6 lg:space-y-10">
                    <!-- Icon Block -->
                    <div class="flex">
                    <svg class="flex-shrink-0 mt-2 h-8 w-8 text-gray-800 dark:text-white" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M6 12.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5ZM3 8.062C3 6.76 4.235 5.765 5.53 5.886a26.58 26.58 0 0 0 4.94 0C11.765 5.765 13 6.76 13 8.062v1.157a.933.933 0 0 1-.765.935c-.845.147-2.34.346-4.235.346-1.895 0-3.39-.2-4.235-.346A.933.933 0 0 1 3 9.219V8.062Zm4.542-.827a.25.25 0 0 0-.217.068l-.92.9a24.767 24.767 0 0 1-1.871-.183.25.25 0 0 0-.068.495c.55.076 1.232.149 2.02.193a.25.25 0 0 0 .189-.071l.754-.736.847 1.71a.25.25 0 0 0 .404.062l.932-.97a25.286 25.286 0 0 0 1.922-.188.25.25 0 0 0-.068-.495c-.538.074-1.207.145-1.98.189a.25.25 0 0 0-.166.076l-.754.785-.842-1.7a.25.25 0 0 0-.182-.135Z"/>
                        <path d="M8.5 1.866a1 1 0 1 0-1 0V3h-2A4.5 4.5 0 0 0 1 7.5V8a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1v1a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-1a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1v-.5A4.5 4.5 0 0 0 10.5 3h-2V1.866ZM14 7.5V13a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V7.5A3.5 3.5 0 0 1 5.5 4h5A3.5 3.5 0 0 1 14 7.5Z"/>
                    </svg>
                    <div class="ml-5 sm:ml-8">
                        <h3 class="text-base sm:text-lg font-semibold text-gray-800 dark:text-gray-200">
                        원산지
                        </h3>
                        <p class="mt-1 text-gray-600 dark:text-gray-400">
                        {{origin}}
                        </p>
                    </div>
                    </div>
                    <!-- End Icon Block -->

                    

                    <!-- Icon Block -->
                    <div class="flex">
                    <svg class="flex-shrink-0 mt-2 h-8 w-8 text-gray-800 dark:text-white" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M11.251.068a.5.5 0 0 1 .227.58L9.677 6.5H13a.5.5 0 0 1 .364.843l-8 8.5a.5.5 0 0 1-.842-.49L6.323 9.5H3a.5.5 0 0 1-.364-.843l8-8.5a.5.5 0 0 1 .615-.09zM4.157 8.5H7a.5.5 0 0 1 .478.647L6.11 13.59l5.732-6.09H9a.5.5 0 0 1-.478-.647L9.89 2.41 4.157 8.5z"/>
                    </svg>
                    <div class="ml-5 sm:ml-8">
                        <h3 class="text-base sm:text-lg font-semibold text-gray-800 dark:text-gray-200">
                        상품 분류
                        </h3>
                        <p class="mt-1 text-gray-600 dark:text-gray-400">
                        {{category}}
                        </p>
                    </div>
                    </div>
                    <!-- End Icon Block -->
                </div>
                <!-- End Col -->

                <div class="space-y-6 lg:space-y-10">
                    <!-- Icon Block -->
                    <div class="flex">
                    <svg class="flex-shrink-0 mt-2 h-8 w-8 text-gray-800 dark:text-white" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M8.186 1.113a.5.5 0 0 0-.372 0L1.846 3.5l2.404.961L10.404 2l-2.218-.887zm3.564 1.426L5.596 5 8 5.961 14.154 3.5l-2.404-.961zm3.25 1.7-6.5 2.6v7.922l6.5-2.6V4.24zM7.5 14.762V6.838L1 4.239v7.923l6.5 2.6zM7.443.184a1.5 1.5 0 0 1 1.114 0l7.129 2.852A.5.5 0 0 1 16 3.5v8.662a1 1 0 0 1-.629.928l-7.185 2.874a.5.5 0 0 1-.372 0L.63 13.09a1 1 0 0 1-.63-.928V3.5a.5.5 0 0 1 .314-.464L7.443.184z"/>
                    </svg>
                    <div class="ml-5 sm:ml-8">
                        <h3 class="text-base sm:text-lg font-semibold text-gray-800 dark:text-gray-200">
                        생산자(수입자)
                        </h3>
                        <p class="mt-1 text-gray-600 dark:text-gray-400">
                        {{producer}}
                        </p>
                    </div>
                    </div>
                    <!-- End Icon Block -->

                    <!-- Icon Block -->
                    <div class="flex">
                    <svg class="flex-shrink-0 mt-2 h-8 w-8 text-gray-800 dark:text-white" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="m8 2.42-.717-.737c-1.13-1.161-3.243-.777-4.01.72-.35.685-.451 1.707.236 3.062C4.16 6.753 5.52 8.32 8 10.042c2.479-1.723 3.839-3.29 4.491-4.577.687-1.355.587-2.377.236-3.061-.767-1.498-2.88-1.882-4.01-.721L8 2.42Zm-.49 8.5c-10.78-7.44-3-13.155.359-10.063.045.041.089.084.132.129.043-.045.087-.088.132-.129 3.36-3.092 11.137 2.624.357 10.063l.235.468a.25.25 0 1 1-.448.224l-.008-.017c.008.11.02.202.037.29.054.27.161.488.419 1.003.288.578.235 1.15.076 1.629-.157.469-.422.867-.588 1.115l-.004.007a.25.25 0 1 1-.416-.278c.168-.252.4-.6.533-1.003.133-.396.163-.824-.049-1.246l-.013-.028c-.24-.48-.38-.758-.448-1.102a3.177 3.177 0 0 1-.052-.45l-.04.08a.25.25 0 1 1-.447-.224l.235-.468ZM6.013 2.06c-.649-.18-1.483.083-1.85.798-.131.258-.245.689-.08 1.335.063.244.414.198.487-.043.21-.697.627-1.447 1.359-1.692.217-.073.304-.337.084-.398Z"/>
                    </svg>
                    <div class="ml-5 sm:ml-8">
                        <h3 class="text-base sm:text-lg font-semibold text-gray-800 dark:text-gray-200">
                        누누 사랑해 
                        </h3>
                        <p class="mt-1 text-gray-600 dark:text-gray-400">
                        누누야 사랑해 !!!!!
                        </p>
                    </div>
                    </div>
                    <!-- End Icon Block -->
                </div>
                <!-- End Col -->
                </div>
                <!-- End Grid -->
            </div>
        </div>
      </div>

      <!-- End Icon Blocks -->
          <div class="grid lg:flex lg:justify-between lg:items-center gap-y-5 lg:gap-y-0">
            <!-- Badges/Tags -->
            <div>
              <a class="m-0.5 inline-flex items-center gap-1.5 py-2 px-3 rounded-full text-sm bg-gray-100 text-gray-800 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-gray-200"  >
                Plan
              </a>
              <a class="m-0.5 inline-flex items-center gap-1.5 py-2 px-3 rounded-full text-sm bg-gray-100 text-gray-800 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-gray-200"  >
                Web development
              </a>
              <a class="m-0.5 inline-flex items-center gap-1.5 py-2 px-3 rounded-full text-sm bg-gray-100 text-gray-800 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-gray-200"  >
                Free
              </a>
              <a class="m-0.5 inline-flex items-center gap-1.5 py-2 px-3 rounded-full text-sm bg-gray-100 text-gray-800 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-gray-200"  >
                Team
              </a>
            </div>
            <!-- End Badges/Tags -->

            <div class="flex justify-end items-center gap-x-1.5">
              

              <div class="block h-3 border-r border-gray-300 mx-1.5 dark:border-gray-600"></div>

              <!-- Button -->
              
              <div class="hs-dropdown relative inline-flex">
                <button type="button" id="blog-article-share-dropdown" class="hs-dropdown-toggle py-2 px-3 inline-flex justify-center items-center gap-x-1.5 sm:gap-x-2 rounded-md font-medium bg-white text-gray-700 align-middle hover:bg-gray-100 focus:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-gray-300 transition-all text-sm dark:bg-slate-900 dark:hover:bg-slate-800 dark:focus:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-slate-900 dark:focus:ring-offset-blue-500">
                  <svg class="w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M3.5 6a.5.5 0 0 0-.5.5v8a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5v-8a.5.5 0 0 0-.5-.5h-2a.5.5 0 0 1 0-1h2A1.5 1.5 0 0 1 14 6.5v8a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 14.5v-8A1.5 1.5 0 0 1 3.5 5h2a.5.5 0 0 1 0 1h-2z"/>
                    <path fill-rule="evenodd" d="M7.646.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 1.707V10.5a.5.5 0 0 1-1 0V1.707L5.354 3.854a.5.5 0 1 1-.708-.708l3-3z"/>
                  </svg>
                  문의하기
                </button>
              </div>
              <!-- Button -->
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- End Content -->

    <!-- Sidebar -->
    <div class="lg:col-span-1 lg:w-full lg:h-full lg:bg-gradient-to-r lg:from-gray-50 lg:via-transparent lg:to-transparent dark:from-slate-800">
      <div class="sticky top-0 left-0 py-8 lg:pl-4 lg:pl-8">
        <!-- Avatar Media -->
        <div class="group flex items-center gap-x-3 border-b border-gray-200 pb-8 mb-8 dark:border-gray-700">
          <a class="block flex-shrink-0"  >
            <img class="h-10 w-10 rounded-full" src="https://images.unsplash.com/photo-1669837401587-f9a4cfe3126e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80" alt="Image Description">
          </a>

          <a class="group grow block" >
            <h5 class="group-hover:text-gray-600 text-sm font-semibold text-gray-800 dark:group-hover:text-gray-400 dark:text-gray-200">
               {{seller?.company}}
            </h5>
            <p class="text-sm text-gray-500">
              {{seller?.address}}
            </p>
          </a>

          <div class="grow">
            <div class="flex justify-end">
              <button type="button" class="py-1.5 px-2.5 inline-flex justify-center items-center gap-x-1.5 rounded-full border border-transparent font-semibold bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900 text-xs">
                <svg class="w-3.5 h-3.5" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M1 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
                  <path fill-rule="evenodd" d="M13.5 5a.5.5 0 0 1 .5.5V7h1.5a.5.5 0 0 1 0 1H14v1.5a.5.5 0 0 1-1 0V8h-1.5a.5.5 0 0 1 0-1H13V5.5a.5.5 0 0 1 .5-.5z"/>
                </svg>
                Follow
              </button>
            </div>
          </div>
        </div>
        <!-- End Avatar Media -->

        <div class="space-y-6">
          <p class="text-xl font-extrabold leading-none tracking-tight text-gray-900 md:text-xl lg:text-xl dark:text-white">
              {{seller?.company}}에서 판매중인 상품 모음
            </p>
          <!-- Media -->
          <a class="group flex items-center gap-x-6"  >
            <div class="grow">
              <span class="text-sm font-bold text-gray-800 group-hover:text-blue-600 dark:text-gray-200 dark:group-hover:text-blue-500">
                [시얼이네 농원] 바른곡물 국산 현미 1kg
              </span>
            </div>

            <div class="flex-shrink-0 relative rounded-lg overflow-hidden w-20 h-20">
              <img class="w-full h-full absolute top-0 left-0 object-cover rounded-lg" src="https://images.unsplash.com/photo-1567016526105-22da7c13161a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80" alt="Image Description">
            </div>
          </a>
          <!-- End Media -->

          <!-- Media -->
          <a class="group flex items-center gap-x-6"  >
            <div class="grow">
              <span class="text-sm font-bold text-gray-800 group-hover:text-blue-600 dark:text-gray-200 dark:group-hover:text-blue-500">
                유니드마이요거트 유기가공식품 인증 드링크 가당 180g, 3개
              </span>
            </div>

            <div class="flex-shrink-0 relative rounded-lg overflow-hidden w-20 h-20">
              <img class="w-full h-full absolute top-0 left-0 object-cover rounded-lg" src="https://images.unsplash.com/photo-1542125387-c71274d94f0a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80" alt="Image Description">
            </div>
          </a>
          <!-- End Media -->

          <!-- Media -->
          <a class="group flex items-center gap-x-6"  >
            <div class="grow">
              <span class="text-sm font-bold text-gray-800 group-hover:text-blue-600 dark:text-gray-200 dark:group-hover:text-blue-500">
                그라놀로지 시그니처 시리얼

              </span>
            </div>

            <div class="flex-shrink-0 relative rounded-lg overflow-hidden w-20 h-20">
              <img class="w-full h-full absolute top-0 left-0 object-cover rounded-lg" src="https://images.unsplash.com/photo-1586232702178-f044c5f4d4b7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80" alt="Image Description">
            </div>
          </a>
          <!-- End Media -->
        </div>
      </div>
    </div>
    <!-- End Sidebar -->
  </div>
</div>

<!-- Sticky Share Group -->
<div class="sticky bottom-6 inset-x-0 text-center">
  <div class="inline-block bg-white shadow-md rounded-full py-3 px-4 dark:bg-gray-800">
    <div class="flex items-center gap-x-1.5">
      <!-- Button -->
      <div class="hs-tooltip inline-block">
        <button type="button" class="hs-tooltip-toggle flex items-center gap-x-2 text-sm text-gray-500 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200">
          <svg class="w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
            <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"/>
          </svg>
          담기
          <span class="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 transition-opacity inline-block absolute invisible z-10 py-1 px-2 bg-gray-900 text-xs font-medium text-white rounded-md shadow-sm dark:bg-black" role="tooltip">
            장바구니 담기
          </span>
        </button>
      </div>
      <!-- Button -->

      <div class="block h-3 border-r border-gray-300 mx-3 dark:border-gray-600"></div>

      <!-- Button -->
      <div class="hs-tooltip inline-block">
        <button type="button" class="hs-tooltip-toggle flex items-center gap-x-2 text-sm text-gray-500 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200">
          <svg class="w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
            <path d="M2.678 11.894a1 1 0 0 1 .287.801 10.97 10.97 0 0 1-.398 2c1.395-.323 2.247-.697 2.634-.893a1 1 0 0 1 .71-.074A8.06 8.06 0 0 0 8 14c3.996 0 7-2.807 7-6 0-3.192-3.004-6-7-6S1 4.808 1 8c0 1.468.617 2.83 1.678 3.894zm-.493 3.905a21.682 21.682 0 0 1-.713.129c-.2.032-.352-.176-.273-.362a9.68 9.68 0 0 0 .244-.637l.003-.01c.248-.72.45-1.548.524-2.319C.743 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7-3.582 7-8 7a9.06 9.06 0 0 1-2.347-.306c-.52.263-1.639.742-3.468 1.105z"/>
          </svg>
          구매하기
          <span class="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 transition-opacity inline-block absolute invisible z-10 py-1 px-2 bg-gray-900 text-xs font-medium text-white rounded-md shadow-sm dark:bg-black" role="tooltip">
            구매하기
          </span>
        </button>
      </div>
      <!-- Button -->

      <div class="block h-3 border-r border-gray-300 mx-3 dark:border-gray-600"></div>

      <!-- Button -->
      <div class="hs-dropdown relative inline-flex">
        <button type="button" id="blog-article-share-dropdown" class="hs-dropdown-toggle flex items-center gap-x-2 text-sm text-gray-500 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200">
          <svg class="w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M3.5 6a.5.5 0 0 0-.5.5v8a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5v-8a.5.5 0 0 0-.5-.5h-2a.5.5 0 0 1 0-1h2A1.5 1.5 0 0 1 14 6.5v8a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 14.5v-8A1.5 1.5 0 0 1 3.5 5h2a.5.5 0 0 1 0 1h-2z"/>
            <path fill-rule="evenodd" d="M7.646.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 1.707V10.5a.5.5 0 0 1-1 0V1.707L5.354 3.854a.5.5 0 1 1-.708-.708l3-3z"/>
          </svg>
          공유하기
        </button>
        
      </div>
      <!-- Button -->
    </div>
  </div>
</div>
<!-- End Sticky Share Group -->
</template>