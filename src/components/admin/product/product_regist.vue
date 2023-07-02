<template>
    <div>
      <header>
        <h1 class="block text-2xl font-bold text-gray-800 sm:text-3xl dark:text-white">📦 상품 {{mode =='modify' ? '수정하기' : '등록하기'}}</h1>
        <template v-if="mode == 'regist'">
          <p class="mt-2 text-lg text-gray-800 dark:text-gray-600">상품 정보를 등록한 후 한장짜리 <span class="text-blue-600">팜플렛</span>을 만들어 홍보해보세요!</p>
          <p class="mt-2 text-base text-gray-800 dark:text-gray-400">등록 이후에도 수정이 가능합니다.</p>
        </template>

        <template v-else>
          <p class="mt-2 text-lg text-gray-800 dark:text-gray-600">등록한 상품을 수정해보세요!</p>
        </template>

        <div class="mt-5 flex flex-col items-center gap-2 sm:flex-row sm:gap-3">
            <router-link to="/admin/product/regist/detail" class="w-full sm:w-auto inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold text-blue-500 hover:text-blue-700 focus:outline-none focus:ring-2 ring-offset-gray-50 focus:ring-blue-500 focus:ring-offset-2 transition-all text-base py-3 px-4 dark:ring-offset-slate-900" href="../examples.html">
            <svg class="w-2.5 h-2.5" width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M11.2792 1.64001L5.63273 7.28646C5.43747 7.48172 5.43747 7.79831 5.63273 7.99357L11.2792 13.64" stroke="currentColor" stroke-width="2" stroke-linecap="round"></path>
            </svg>
            등록했던 상품 보러가기👀
            </router-link>
            <a v-if="mode == 'regist'" @click="submit" class="w-full sm:w-auto inline-flex justify-center items-center gap-x-3 text-center bg-blue-600 hover:bg-blue-700 border border-transparent text-white text-base font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white transition py-3 px-4 dark:focus:ring-offset-gray-800" >
            <svg class="w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"></path>
            </svg>
            등록하기
            </a>
        </div>
      </header>
      <!-- Card Section -->
      <div class="max-w-[85rem]  px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        <!-- Card -->
        <div class="bg-white rounded-xl shadow p-4 sm:p-7 dark:bg-slate-900">
          <form>
            <!-- Section -->
            <div class="grid sm:grid-cols-12 gap-2 sm:gap-4 py-8 first:pt-0 last:pb-0 border-t first:border-transparent border-gray-200 dark:border-gray-700">
              <div class="sm:col-span-12">
                <h2 class="text-lg font-semibold text-gray-800 dark:text-gray-200">
                  상품 정보를 입력해주세요.
                </h2>
              </div>
              <!-- End Col -->

              <div class="sm:col-span-3">
                <label for="af-submit-application-full-name" class="inline-block text-base font-medium text-gray-500 mt-2.5">
                  상품 큰 제목
                </label>
              </div>
              <!-- End Col -->

              <div class="sm:col-span-9">
                <div class="sm:flex">
                  <input v-model="title"  id="af-submit-application-email" type="text" class="py-2 px-3 pr-11 block w-full border-gray-200 shadow-sm text-base rounded-lg focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400">
                </div>
              </div>
              <!-- End Col -->

              <div class="sm:col-span-3">
                <label for="af-submit-application-email" class="inline-block text-base font-medium text-gray-500 mt-2.5">
                  상품 작은 제목
                </label>
              </div>
              <!-- End Col -->

              <div class="sm:col-span-9">
                <input v-model="subtitle"  id="af-submit-application-email" type="text" class="py-2 px-3 pr-11 block w-full border-gray-200 shadow-sm text-base rounded-lg focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400">
              </div>
              <!-- End Col -->

              <div v-if="mode == 'regist'" class="sm:col-span-3">
                <div class="inline-block">
                  <label for="af-submit-application-phone" class="inline-block text-base font-medium text-gray-500 mt-2.5">
                    상품 이미지
                  </label>
                </div>
              </div>
              <!-- End Col -->

              <div   v-if="mode == 'regist'" class="sm:col-span-9">
                <label for="af-submit-application-resume-cv" class="sr-only">파일선택</label>
                <input  @input="fileInput" type="file" name="af-submit-application-resume-cv" id="af-submit-application-resume-cv" class="block w-full border border-gray-200 shadow-sm rounded-lg text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400
                  file:bg-transparent file:border-0 file:bg-gray-100 file:mr-4 file:py-2 file:px-3 dark:file:bg-gray-700 dark:file:text-gray-400">
              </div>        
              <!-- End Col -->

              <div class="sm:col-span-3">
                <div class="inline-block">
                  <label for="af-submit-application-current-company" class="inline-block text-base font-medium text-gray-500 mt-2.5">
                    상품 설명
                  </label>
                </div>
              </div>
              <!-- End Col -->

              <div class="sm:col-span-9">
                <div class="sm:col-span-9">
                  <textarea  v-html="description"  id="af-submit-application-bio" class="py-2 px-3 block w-full border-gray-200 rounded-lg text-base focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400" rows="6" ></textarea>
                </div>        
              </div>
              <!-- End Col -->

              <div class="sm:col-span-3">
                <label for="af-submit-application-resume-cv" class="inline-block text-base font-medium text-gray-500 mt-2.5">
                  카테고리
                </label>
              </div>
              <!-- End Col -->

              <div class="sm:col-span-9">
                <div class="sm:flex">
                    <label @click="setCategory(item.value)" v-for="(item, index) in categorys" :key="index" for="af-account-gender-checkbox" class="flex py-2 px-3 block w-full border border-gray-200 shadow-sm -mt-px -ml-px first:rounded-t-lg last:rounded-b-lg sm:first:rounded-l-lg sm:mt-0 sm:first:ml-0 sm:first:rounded-tr-none sm:last:rounded-bl-none sm:last:rounded-r-lg text-base relative focus:z-10 focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400">
                      <input :checked="category == item.value" type="radio" name="af-account-gender-checkbox" class="shrink-0 mt-0.5 border-gray-200 rounded-full text-blue-600 pointer-events-none focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800" :id="`af-account-category-checkbox-${item.value}`">
                      <span class="text-base text-gray-500 ml-3 dark:text-gray-400">{{item.text}}</span>
                    </label>

                  </div>
                
              </div>
              <!-- End Col -->
            </div>
            <!-- End Section -->

            <!-- Section -->
            <div class="grid sm:grid-cols-12 gap-2 sm:gap-4 py-8 first:pt-0 last:pb-0 border-t first:border-transparent border-gray-200 dark:border-gray-700">
              <div class="sm:col-span-12">
                <h2 class="text-lg font-semibold text-gray-800 dark:text-gray-200">
                  원가와 판매가격을 입력해주세요.
                </h2>
              </div>
              <!-- End Col -->

              <div class="sm:col-span-3">
                <label for="af-submit-application-resume-cv" class="inline-block text-base font-medium text-gray-500 mt-2.5">
                  가격 정보
                </label>
              </div>
              <!-- End Col -->

              <div class="sm:col-span-9">
                <div class="py-6 first:pt-0 last:pb-0 border-t first:border-transparent border-gray-200 dark:border-gray-700">
                  <div class="mt-2 space-y-3">
                    <div class="sm:flex gap-3">
                      <input v-model="origin_price" type="text" class="py-2 px-3 pr-11 block w-full border-gray-200 shadow-sm text-base rounded-lg focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400" placeholder="원가">
                      <input v-model="price"  type="text" class="py-2 px-3 pr-11 block w-full border-gray-200 shadow-sm text-base rounded-lg focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400" placeholder="판매가">
                    </div>
                  </div>
                </div>
                
              </div>
              <!-- End Col -->
            </div>
            <!-- End Section -->

            <!-- Section -->
            <div class="grid sm:grid-cols-12 gap-2 sm:gap-4 py-8 first:pt-0 last:pb-0 border-t first:border-transparent border-gray-200 dark:border-gray-700">
              <div class="sm:col-span-12">
                <h2 class="text-lg font-semibold text-gray-800 dark:text-gray-200">
                  구매, 취급 관련 정보를 입력해주세요.
                </h2>
              </div>
              <!-- End Col -->

              <div class="sm:col-span-3">
                <label for="af-submit-application-twitter-url" class="inline-block text-base font-medium text-gray-500 mt-2.5">
                  보관방법 및 취급방법
                </label>
              </div>
              <!-- End Col -->

              <div class="sm:col-span-9">
                <textarea v-model="notice1" id="af-submit-application-bio" class="py-2 px-3 block w-full border-gray-200 rounded-lg text-base focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400" rows="6" placeholder="Add a cover letter or anything else you want to share."></textarea>
              </div>
              <!-- End Col -->

              <div class="sm:col-span-3">
                <label for="af-submit-application-github-url" class="inline-block text-base font-medium text-gray-500 mt-2.5">
                  소비자 안전을 위한 주의사항
                </label>
              </div>
              <!-- End Col -->

              <div class="sm:col-span-9">
                <textarea  v-model="notice2" id="af-submit-application-bio" class="py-2 px-3 block w-full border-gray-200 rounded-lg text-base focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400" rows="6" placeholder="Add a cover letter or anything else you want to share."></textarea>
              </div>
              <!-- End Col -->

              <div class="sm:col-span-3">
                <label for="af-submit-application-portfolio-url" class="inline-block text-base font-medium text-gray-500 mt-2.5">
                  원산지
                </label>
              </div>
              <!-- End Col -->

              <div class="sm:col-span-9">
                <input v-model="origin" id="af-submit-application-portfolio-url" type="text" class="py-2 px-3 pr-11 block w-full border-gray-200 shadow-sm text-base rounded-lg focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400">
              </div>
              <!-- End Col -->

              <div class="sm:col-span-3">
                <label for="af-submit-application-portfolio-url" class="inline-block text-base font-medium text-gray-500 mt-2.5">
                  생산자(수입자)
                </label>
              </div>
              <!-- End Col -->

              <div class="sm:col-span-9">
                <input v-model="producer" id="af-submit-application-portfolio-url" type="text" class="py-2 px-3 pr-11 block w-full border-gray-200 shadow-sm text-base rounded-lg focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400">
              </div>
              <!-- End Col -->
            </div>
            <!-- End Section -->

          

            <!-- Section -->
            <div class="py-8 first:pt-0 last:pb-0 border-t first:border-transparent border-gray-200 dark:border-gray-700">
              <h2 class="text-lg font-semibold text-gray-800 dark:text-gray-200">
                개인정보의 수집 및 이용에 대한 동의 (필수)
              </h2>
              <p class="mt-3 text-base text-gray-600 dark:text-gray-400">
                이용자 참여와 이용통계 분석 등의 서비스를 위해 회원 가입시 아래의 개인정보를 수집하고 있습니다.

                가. 필수정보: 아이디, 이름, 성별, 출생년도, 비밀번호, 이메일
                나. 서비스 이용 과정에서 아래와 같은 정보들이 자동으로 생성되어 수집될 수 있습니다.
                (접속로그, 접속IP정보, 쿠키, 방문 일시, 서비스 이용기록, 불량 이용 기록)
              </p>
             

              <div class="mt-5 flex">
                <input type="checkbox" class="shrink-0 mt-0.5 border-gray-200 rounded text-blue-600 pointer-events-none focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800" id="af-submit-application-privacy-check">
                <label for="af-submit-application-privacy-check" class="text-base text-gray-500 ml-2 dark:text-gray-400">
                 개인정보의 수집 및 이용에 대해 동의합니다.
                  </label>
              </div>
            </div>
            <!-- End Section -->

            <button @click="submit()" type="button" class="py-3 px-4 w-full inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-base dark:focus:ring-offset-gray-800">
              {{mode == 'modify' ? '수정하기' : '등록하기'}}
            </button>
          </form>
        </div>
        <!-- End Card -->
      </div>
      <!-- End Card Section -->
    </div>
</template>


<script>
import api from '/src/plugins/api.js'
export default {
  props: {
    confirm: Boolean,
  },
  data(){
      return {
        id : 0, 
        title: "", 
        subtitle: "", 
        description: "", 
        price: "", 
        phonenumber: "", 
        notice1: "", 
        notice2: "", 
        producer: "", 
        imagesrc : "", image_url : "", 
        origin_price : "", 
        origin : "", 
        categorys : [
          {text : "과일", value : 1}, 
          {text : "육류", value : 2},
          {text : "기타", value : 3}
        ], 
        category : 1, 
        mode : "regist"
      }
  },
  watch:{
    confirm(){
      // 등록 -> 확인 
      this.$router.push('/admin/product/regist/detail');
    }, 
    
  },
  
  methods: {
    setCategory(value){
      this.category = value;
    },
    async imageonserver(imageFormData) { 
        return await api.imageonserver(imageFormData).then((response) => { 
          if(response.data.code == '0000'){
              return response.data.data.image_url
          }else{
              alert(response.data.message)
              return ''
          }
        })
    },
    async fileInput(event){
      const imageFormData = new FormData()
      imageFormData.append('image',event.target.files[0])

      await this.imageonserver(imageFormData).then((url)=> {
          this.image_url = url;
      })
    },
    async getproductitemlist(id){
       return await api.getproductlistbyid(id).then((response)=> {
          if(response.data.code == '0000'){
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
          }
        })
    },
    async submit(){

        const params =  {
            "price" : Number(this.price), 
            "origin" : this.origin,
            "producer" : this.producer,
            "image1" : "https://image1",
            "image2" : "https://image2",
            "image3" : "https://image3",
            "main_title" : this.title,
            "main_explanation" : this.subtitle,
            "product_main_explanation" : this.description,
            "product_sub_explanation" : this.notice1,
            "origin_price" : Number(this.origin_price),
            "purchase_inquiry" : this.notice2,
            "main_image" : this.image_url
        }
      

      await api.submittemplate(params).then((response)=> {
          if(response.data.code === "0001"){
            this.$emit("openModal", {
              title : "등록되었습니다.", 
              subtitle : "등록한 상품은 상품내역에서 확인할 수 있습니다. <br/> 등록한 상품으로 템플릿을 만들어 상품을 홍보해보세요!", 
              btn: {
                  confirmText : "확인", 
                  cancelText : "취소"
              }
            })
          }else{
            this.$emit("openModal", {
              title : "오류가 발생했습니다.", 
              subtitle : `${response.data.code}: 잠시후 다시 시도해 주세요.`, 
              btn: {
                  confirmText : "확인", 
                  cancelText : "취소"
              }
            })
          }
      })
  }, 
  mounted(){
    this.origin = "시어리"
    this.title = "해남 퍽퍽한 밤고구마 꿀밤고구마 베니하루카 특상 3kg 5kg 10kg";
    this.subtitle = "큐어링 숙성으로 최고의 맛과 숙성을 보장합니다.";
    this.description = `안녕하세요 윤순희 농부입니다.<br/>진짜 정성다해 키웠어요<br/>고구마는 섬유질과칼륨이 풍부합니다.<br/>다이어트식품으로 단원 으뜸입니다.<br/>가장 좋은 것으로 선별하여 산지직송합니다.<br/> ** 크기는 특상, 중상, 한입크기로 배송 됩니다 **`
    this.price = "12,060원(100g당 402원)"
    this.phonenumber = "010-9999-9999"
    this.notice1 = "수령후 박스에서 꺼낸 후 펴서 수분을 날려주세요. 여름철 고구마는 겨울용 고구마와 다르게 보관시 싹이 날 수 있고 2주이상 보관시 썪을수 있습니다. 자연스러운 현상입니다.";
    this.notice2 = "고구마 알러지 있으신분은 섭취를 삼가해 주시기바랍니다.";
    this.producer = "시어리네 해남고구마";
    this.imagesrc = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTT146adSwcAtPQGdM6AAKh9BJjybJBhnbxbA&usqp=CAU'
  }
  }, 
  mounted(){
    console.log(this.$route.params)
    this.id = this.$route.params.id;
    if(this.id > 0){
      this.mode = 'modify'
      this.getproductitemlist(this.id)
    }else{
      this.mode = 'regist'
    }
  }
}
</script>

<style>
   
</style>
