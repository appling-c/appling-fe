<template>
    <div>
      <header>
        <h1 class="block text-2xl font-bold text-gray-800 sm:text-3xl dark:text-white">📦 상품 관리하기</h1>
        <p class="mt-2 text-lg text-gray-800 dark:text-gray-600">상품 정보를 등록한 후 한장짜리 <span class="text-blue-600">팜플렛</span>을 만들어 홍보해보세요!</p>
        <p class="mt-2 text-base text-gray-800 dark:text-gray-400">등록 이후에도 수정이 가능합니다.</p>
        <div class="mt-5 flex flex-col items-center gap-2 sm:flex-row sm:gap-3">
            <router-link to="/admin/product/regist/detail" class="w-full sm:w-auto inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold text-blue-500 hover:text-blue-700 focus:outline-none focus:ring-2 ring-offset-gray-50 focus:ring-blue-500 focus:ring-offset-2 transition-all text-base py-3 px-4 dark:ring-offset-slate-900" href="../examples.html">
            <svg class="w-2.5 h-2.5" width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M11.2792 1.64001L5.63273 7.28646C5.43747 7.48172 5.43747 7.79831 5.63273 7.99357L11.2792 13.64" stroke="currentColor" stroke-width="2" stroke-linecap="round"></path>
            </svg>
            새로운 상품 등록하기👀
            </router-link>
           
        </div>
      </header>
      <!-- Card Section -->
      <!-- Table Section -->
<div v-if="lists.length == 0" class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
  <!-- Card -->
  <div class="flex flex-col">
    <div class="-m-1.5 overflow-x-auto">
      <div class="p-1.5 min-w-full inline-block align-middle">
        <div class="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden dark:bg-slate-900 dark:border-gray-700">
          

          <!-- Body -->
          <div class="max-w-sm w-full min-h-[400px] flex flex-col justify-center mx-auto px-6 py-4">
            <div class="flex justify-center items-center w-[46px] h-[46px] bg-gray-100 rounded-md dark:bg-gray-800">
              <svg class="w-6 h-6 text-gray-600 dark:text-gray-400" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                <path d="M1.92.506a.5.5 0 0 1 .434.14L3 1.293l.646-.647a.5.5 0 0 1 .708 0L5 1.293l.646-.647a.5.5 0 0 1 .708 0L7 1.293l.646-.647a.5.5 0 0 1 .708 0L9 1.293l.646-.647a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .801.13l.5 1A.5.5 0 0 1 15 2v12a.5.5 0 0 1-.053.224l-.5 1a.5.5 0 0 1-.8.13L13 14.707l-.646.647a.5.5 0 0 1-.708 0L11 14.707l-.646.647a.5.5 0 0 1-.708 0L9 14.707l-.646.647a.5.5 0 0 1-.708 0L7 14.707l-.646.647a.5.5 0 0 1-.708 0L5 14.707l-.646.647a.5.5 0 0 1-.708 0L3 14.707l-.646.647a.5.5 0 0 1-.801-.13l-.5-1A.5.5 0 0 1 1 14V2a.5.5 0 0 1 .053-.224l.5-1a.5.5 0 0 1 .367-.27zm.217 1.338L2 2.118v11.764l.137.274.51-.51a.5.5 0 0 1 .707 0l.646.647.646-.646a.5.5 0 0 1 .708 0l.646.646.646-.646a.5.5 0 0 1 .708 0l.646.646.646-.646a.5.5 0 0 1 .708 0l.646.646.646-.646a.5.5 0 0 1 .708 0l.646.646.646-.646a.5.5 0 0 1 .708 0l.509.509.137-.274V2.118l-.137-.274-.51.51a.5.5 0 0 1-.707 0L12 1.707l-.646.647a.5.5 0 0 1-.708 0L10 1.707l-.646.647a.5.5 0 0 1-.708 0L8 1.707l-.646.647a.5.5 0 0 1-.708 0L6 1.707l-.646.647a.5.5 0 0 1-.708 0L4 1.707l-.646.647a.5.5 0 0 1-.708 0l-.509-.51z"/>
                <path d="M3 4.5a.5.5 0 0 1 .5-.5h6a.5.5 0 1 1 0 1h-6a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h6a.5.5 0 1 1 0 1h-6a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h6a.5.5 0 1 1 0 1h-6a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5zm8-6a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5z"/>
              </svg>
            </div>

            <h2 class="mt-5 font-semibold text-gray-800 dark:text-white">
              등록된 상품이 없습니다.
            </h2>
            <p class="mt-2 text-sm text-gray-600 dark:text-gray-400">
              상품을 등록하고 관리해보세요.
            </p>
            

            <div class="mt-5 grid sm:flex gap-2">
              <button type="button" class="py-2 px-3 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800">
                <svg class="w-3 h-3" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" >
                  <path d="M2.63452 7.50001L13.6345 7.5M8.13452 13V2" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                </svg>
                상품 등록하기
              </button>
              
            </div>
          </div>
          <!-- End Body -->
        </div>
      </div>
    </div>
  </div>
  <!-- End Card -->
</div>
<!-- End Table Section -->
<div v-else class="max-w-[85rem]  px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
<!-- Table Section -->

<!-- Card -->
<div class="flex flex-col">
<div class="-m-1.5 overflow-x-auto">
    <div class="p-1.5 min-w-full inline-block align-middle">
    <div class="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden dark:bg-slate-900 dark:border-gray-700">
        <!-- Header -->
        <div class="px-6 py-4 grid gap-3 md:flex md:justify-between md:items-center border-b border-gray-200 dark:border-gray-700">
        <!-- Input -->
        <div class="sm:col-span-1">
            <label for="hs-as-table-product-review-search" class="sr-only">Search</label>
            <div class="relative">
            <input type="text" id="hs-as-table-product-review-search" name="hs-as-table-product-review-search" class="py-2 px-3 pl-11 block w-full border-gray-200 shadow-sm rounded-md text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400" placeholder="Search">
            <div class="absolute inset-y-0 left-0 flex items-center pointer-events-none pl-4">
                <svg class="h-4 w-4 text-gray-400" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                </svg>
            </div>
            </div>
        </div>
        <!-- End Input -->

        
        </div>
        <!-- End Header -->

        <!-- Table -->
        <table class="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
        <thead class="bg-gray-50 dark:bg-slate-800">
            <tr>
            

            <th scope="col" class="px-6 py-3 text-left">
                <div class="flex items-center gap-x-2">
                <span class="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-gray-200">
                    가격
                </span>
                </div>
            </th>

            <th scope="col" class="px-6 py-3 text-left">
                <div class="flex items-center gap-x-2">
                <span class="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-gray-200">
                    상품명
                </span>
                </div>
            </th>

            <th scope="col" class="px-6 py-3 text-left">
                <div class="flex items-center gap-x-2">
                <span class="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-gray-200">
                    등록일
                </span>
                </div>
            </th>

            <th scope="col" class="px-6 py-3 text-left">
                <div class="flex items-center gap-x-2">
                <span class="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-gray-200">
                    작성
                </span>
                </div>
            </th>
            </tr>
        </thead>

        <tbody class="divide-y divide-gray-200 dark:divide-gray-700">
            <tr v-for="(litem, index) in lists" :key="index" class="bg-white hover:bg-gray-50 dark:bg-slate-900 dark:hover:bg-slate-800">
            
            <td class="h-px w-px whitespace-nowrap">
                <a class="block h-full p-6" href="#">
                <div class="flex items-center gap-x-3">
                    <div class="grow">
                    <span class="block text-sm text-gray-500">{{litem.price}}원</span>
                    <span class="block text-sm font-semibold text-gray-800 dark:text-gray-200">{{litem.origin_price}}원</span>
                    </div>
                </div>
                </a>
            </td>
            <td class="h-px w-72 min-w-[18rem]">
                <a class="block h-full p-6" href="#">
                
                <span class="block text-sm font-semibold text-gray-800 dark:text-gray-200">{{litem.main_title}}</span>
                <span class="block text-sm text-gray-500">{{litem.main_explanation}}</span>
                </a>
            </td>
            <td class="h-px w-px whitespace-nowrap">
                <a class="block h-full p-6" href="#">
                <span class="text-sm text-gray-600 dark:text-gray-400">{{date_format(litem.create_at)}}</span>
                </a>
            </td>
           
            <td class="h-px w-px whitespace-nowrap">
                <a class="block h-full p-6" href="#">
                <span class="inline-flex items-center gap-1.5 py-0.5 px-2 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
                    <svg class="w-2.5 h-2.5" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
                    </svg>
                    {{litem.seller.nickname}}
                </span>
                </a>
            </td>
            </tr>

        </tbody>
        </table>
        <!-- End Table -->

        <!-- Footer -->
        <div class="px-6 py-4 grid gap-3 md:flex md:justify-between md:items-center border-t border-gray-200 dark:border-gray-700">
        <div class="max-w-sm space-y-3">
            <select @change="getproductlists" v-model="size" class="py-2 px-3 pr-9 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400">
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
            <option>6</option>
            </select>
        </div>

        <div>
            <div class="inline-flex gap-x-2">
            <button @click="prev" type="button" class="py-2 px-3 inline-flex justify-center items-center gap-2 rounded-md border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm dark:bg-slate-900 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800">
                <svg class="w-3 h-3" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
                </svg>
                Prev
            </button>

            <button v-if="!islastpage" @click="next" type="button" class="py-2 px-3 inline-flex justify-center items-center gap-2 rounded-md border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm dark:bg-slate-900 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800">
                Next
                <svg class="w-3 h-3" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
                </svg>
            </button>
            </div>
        </div>
        </div>
        <!-- End Footer -->
    </div>
    </div>
</div>
</div>
<!-- End Card -->

<!-- End Table Section -->
</div>
<!-- End Card Section -->
    </div>
</template>


<script>
import api from '/src/plugins/api.js'
import moment from 'moment'
export default {
    async created(){
        await this.getproductlists()
    },
    data(){
        return {
            lists : [], 
            size : 5, 
            page:0, 
            keyword : "", 
            total_page : 1, 
            islastpage : false
        }
    }, 
    methods: {
        async getproductlists(){
            
            await api.getproductlist({size : this.size, page : this.page, keyword : this.keyword }).then(response=> {
                if(response.data.code !== "0000"){
                    return this.lists = [];
                }
                this.total_page = response.data.data.total_page
                this.lists = response.data.data.list;
                this.islastpage = response.data.data.last
            })
        },
        date_format(date){
            return moment(date).format('YYYY-MM-DD, h:mm:ss');
        }, 
        prev(){
            if(this.page == 0){
                this.page = 0;
            }else{
                this.page = this.page-1;
            }

            this.getproductlists()
        }, 
        next(){
            this.page = this.page+1;
            this.getproductlists();
        }, 
        
    }
}
</script>