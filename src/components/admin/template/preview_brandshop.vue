<template>
    <header>
      <h1 class="block text-2xl font-bold text-gray-800 sm:text-3xl dark:text-white">우리 농장을 소개합니다.🍃</h1>
      <p class="mt-2 text-lg text-gray-800 dark:text-gray-400">우리 농장을 소개하는 글을 작성해서 홍보해보세요.</p>
      <p class="mt-2 text-m text-gray-800 dark:text-gray-200">농장 소개 화면은 상품 안내글에 노출되고, 카카오톡으로 공유할 수 있습니다.</p>

      <div class="mt-5 flex flex-col items-center gap-2 sm:flex-row sm:gap-3">
        <router-link  to="/admin/product/list" class="w-full sm:w-auto inline-flex justify-center items-center gap-x-3 text-center bg-blue-600 hover:bg-blue-700 border border-transparent text-white text-sm font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white transition py-3 px-4 dark:focus:ring-offset-gray-800"  >
          상품 등록/수정 바로가기
        </router-link>
        <router-link to="/admin/dashboard" class="w-full sm:w-auto inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold text-blue-500 hover:text-blue-700 focus:outline-none focus:ring-2 ring-offset-gray-50 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm py-3 px-4 dark:ring-offset-slate-900">
          <svg class="w-2.5 h-2.5" width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M11.2792 1.64001L5.63273 7.28646C5.43747 7.48172 5.43747 7.79831 5.63273 7.99357L11.2792 13.64" stroke="currentColor" stroke-width="2" stroke-linecap="round"></path>
          </svg>
          메인으로 돌아가기
        </router-link>
      </div>
      
    </header>

    <div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto"> 
        <div class="bg-white rounded-xl shadow p-4 sm:p-7 dark:bg-slate-900">
            <!-- Section -->
            <div class="grid sm:grid-cols-12 gap-2 sm:gap-4 py-8 first:pt-0 last:pb-0 border-t first:border-transparent border-gray-200 dark:border-gray-700">
              <div class="sm:col-span-9">
                <div class="sm:flex">
                  자연 햇살 농원입니다.
                </div>
              </div>
              <!-- End Col -->

              <div class="sm:col-span-9">
                <div class="sm:col-span-9">
                     <div id="viewer" class="p-1.5 min-w-full inline-block align-middle"></div>
                </div>        
              </div>
              <!-- End Col -->

            </div>
            <!-- End Section -->
            <!-- End Grid -->
            
        </div>
        
    </div>
</template>

<script>
import Viewer from '@toast-ui/editor/dist/toastui-editor-viewer';

import api from '../../../plugins/api';
export default {
    mounted() { 
        const content = `<h1><img src="https://appling-s3.s3.ap-northeast-2.amazonaws.com/image/4/20230710/150542_0.jpeg" alt="b3911f649e325b7be6991ae7a67bf876.jpeg" contenteditable="false">햇살을 가득 담은 평창 자연 햇살 농원 입니다.</h1><div contenteditable="false"><hr></div><h4>평창 700 고지에서 무공해 사과를 직접 재배하여 판매합니다.</h4><p><br></p><p>모든 주문은 카카오톡, 문자, 전화로 가능합니다.</p><p>아래의 번호로 문의를 남겨주세요.</p><p>010-1234-1222</p><h1>🚘 농원 둘러보기</h1><h5><strong>✔️ 영상으로 구경하기</strong></h5><p><a href="https://youtu.be/wgelJ8zYmFc?t=219">[평창시그니처5] 봉황마을 캠핑 (feat.평창사과)</a></p><p><br></p><h5><strong>✔️ 사진으로 둘러보기</strong></h5><p><br></p><h1>🚘 이런것들을 판매해요.</h1><h5><strong>✔️ 설 특집, 부사 구경하기</strong></h5><p><br></p><h5><strong>✔️ 9월 중순, 시나노 골드</strong></h5><p><br></p>`
        const id = this.$router.param;
        new Viewer({
            el: document.querySelector('#viewer'),
            initialValue : content
        });
        console.log('111')
        this.readhtmlfile();

    }, 
    methods: {
      async readhtmlfile() {
          await api.getsellerintroduce().then(response=> {
            console.log(response)
          })
        }
    }
}
</script>

<style>
@import url('@toast-ui/editor/dist/toastui-editor-viewer.css');
</style>