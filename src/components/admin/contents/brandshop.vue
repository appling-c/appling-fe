<template>
    <header>
      <h1 class="block text-2xl font-bold text-gray-800 sm:text-3xl dark:text-white">우리 농장을 소개합니다.🍃</h1>
      <p class="mt-2 text-lg text-gray-800 dark:text-gray-400">우리 농장을 소개하는 글을 작성해서 홍보해보세요.</p>
      <p class="mt-2 text-m text-gray-800 dark:text-gray-200">농장 소개 화면은 상품 안내글에 노출되고, 카카오톡으로 공유할 수 있습니다.</p>

      <div class="mt-5 flex flex-col items-center gap-2 sm:flex-row sm:gap-3">
        <router-link to="/admin/dashboard" class="w-full sm:w-auto inline-flex justify-center items-center gap-x-3 text-center bg-blue-600 hover:bg-blue-700 border border-transparent text-white text-sm font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white transition py-3 px-4 dark:focus:ring-offset-gray-800" href="https://github.com/htmlstreamofficial/preline/tree/main/examples/html" target="_blank">
          <svg class="w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"></path>
          </svg>
          대시보드 바로가기
        </router-link>
        <router-link to="/admin/product/list" class="w-full sm:w-auto inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold text-blue-500 hover:text-blue-700 focus:outline-none focus:ring-2 ring-offset-gray-50 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm py-3 px-4 dark:ring-offset-slate-900" href="../examples.html">
          <svg class="w-2.5 h-2.5" width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M11.2792 1.64001L5.63273 7.28646C5.43747 7.48172 5.43747 7.79831 5.63273 7.99357L11.2792 13.64" stroke="currentColor" stroke-width="2" stroke-linecap="round"></path>
          </svg>
          상품관리 바로가기
        </router-link>
      </div>
      
    </header>

    <div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto"> 
        <div class="bg-white rounded-xl shadow p-4 sm:p-7 dark:bg-slate-900">
            <!-- Section -->
            <div class="grid sm:grid-cols-12 gap-2 sm:gap-4 py-8 first:pt-0 last:pb-0 border-t first:border-transparent border-gray-200 dark:border-gray-700">
              <div class="sm:col-span-12">
                <h2 class="text-lg font-semibold text-gray-800 dark:text-gray-200">
                  상품 정보를 입력해주세요.
                </h2>
              </div>
              <!-- End Col -->

              <div class="sm:col-span-3">
                <label class="inline-block text-base font-medium text-gray-500 mt-2.5">
                  상품 큰 제목
                </label>
              </div>
              <!-- End Col -->

              <div class="sm:col-span-9">
                <div class="sm:flex">
                  <input v-model="title" type="text" class="py-2 px-3 pr-11 block w-full border-gray-200 shadow-sm text-base rounded-lg focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400">
                </div>
              </div>
              <!-- End Col -->


              <div class="sm:col-span-3">
                <div class="inline-block">
                  <label class="inline-block text-base font-medium text-gray-500 mt-2.5">
                    메인 상품 이미지
                  </label>
                </div>
              </div>
              <!-- End Col -->


              <div class="sm:col-span-9">
                <div class="sm:col-span-9">
                     <div id="editor" class="p-1.5 min-w-full inline-block align-middle"></div>
                  <textarea  v-model="description" id="product_main_explanation" class="py-2 px-3 block w-full border-gray-200 rounded-lg text-base focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400" rows="6" ></textarea>
                </div>        
              </div>
              <!-- End Col -->

            </div>
            <!-- End Section -->
        </div>
        
    </div>

</template>

<script>
import Editor from '@toast-ui/editor';

export default {
    data(){
        return {
            editor : null, 
        }
    },
    methods:{
        submit(){
            const htmlcodes = this.editor.getHTML();
            console.log(htmlcodes)
        }
    },
    mounted(){
       this.editor = new Editor({
        el: document.querySelector('#editor'),
            height: '600px',
            initialEditType: 'wysiwyg',
            previewStyle: 'vertical'
        });
      
    }
}
</script>


<style>
   @import url('@toast-ui/editor/dist/toastui-editor.css');
</style>
