<script>
export default {
    data() { 
        return {
            title: "", 
            subtitle: "", 
            description: "", 
            price: "", 
            phonenumber: "", 
            notice1: "", 
            notice2: "", 
            producer: "", 
            imagesrc : "", 
        }
    }, 
    mounted() {
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
}
</script>
<template>
    <!-- Card Blog -->
    <header>
      <h1 class="block text-2xl font-bold text-gray-800 sm:text-3xl dark:text-white">홍보용 한장 팜플렛 만들기👀</h1>
      <p class="mt-2 text-lg text-gray-800 dark:text-gray-400">내 상품 홍보용 한장짜리 팜플렛을 만들어 공유해보세요!</p>
        <p class="mt-2 text-m text-gray-800 dark:text-gray-200">'저장하기'를 누르면 내 컴퓨터에 저장됩니다.</p>
    </header>
    <div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        <!-- Grid -->
        <div class="grid sm:grid-cols-2 sm:items-center gap-8">

            <div class="sm:order-2">
                <div class="relative rounded-lg">
                    <!-- Blog Article -->
                    <div class="bg-white border border-gray-200 rounded-xl shadow-sm max-w-3xl px-4 pt-6 lg:pt-10 pb-12 sm:px-6 lg:px-8 mx-auto">
                    <div class="max-w-2xl">
                        <!-- Content -->
                        <div class="space-y-5 md:space-y-8">
                        <div class="space-y-3">
                            <h2 class="text-2xl font-bold md:text-3xl dark:text-white">{{ title }}</h2>
                        </div>

                        <p class="text-lg text-gray-800 dark:text-gray-200">{{ subtitle }}</p>

                        <figure>
                            <img class="w-full object-cover rounded-xl" :src="imagesrc" alt="Image Description">
                        </figure>

                        <blockquote class="text-center p-4 sm:px-7">
                            <p v-html="description" class="text-xl font-medium text-gray-800 md:text-xl md:leading-normal xl:text-xl xl:leading-normal dark:text-gray-200"></p>
                            <p class="mt-5 text-gray-800 dark:text-gray-200">
                            상품에 대한 자세한 문의사항은 아래의 연락처로 문의주세요.
                            </p>
                        </blockquote>

                        <ul class="list-disc list-outside space-y-5 pl-5 text-lg text-gray-800 dark:text-gray-200">
                            <li class="pl-2"> 판매가 <a class="text-blue-600 decoration-2 hover:underline font-medium">{{ price }}</a> </li>
                            <li class="pl-2"> 구매문의 <a class="text-blue-600 decoration-2 hover:underline font-medium" >{{ phonenumber }}</a>.</li>
                            <li class="pl-2"> 보관방법,취급방법 <a class="text-blue-600 decoration-2 hover:underline font-medium" >{{ notice1 }}</a></li>
                            <li class="pl-2"> 소비자안전을 위한 주의사항 <a class="text-blue-600 decoration-2 hover:underline font-medium" >{{ notice2 }}</a></li>
                            <li class="pl-2"> 생산자(수입자) <a class="text-blue-600 decoration-2 hover:underline font-medium" >{{ producer }}</a></li>
                        </ul>

                        </div>
                        <!-- End Content -->
                    </div>
                    </div>
                    <!-- End Blog Article -->

                    <!-- Sticky Share Group -->
                    <div class="sticky bottom-6 inset-x-0 text-center">
                    <div class="inline-block bg-white shadow-md rounded-full py-3 px-4 dark:bg-gray-800">
                        <div class="flex items-center gap-x-1.5">
                        
                        <!-- Button -->
                        <div class="hs-dropdown relative inline-flex">
                            <button type="button" id="blog-article-share-dropdown" class="hs-dropdown-toggle flex items-center gap-x-2 text-base text-gray-500 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200">
                            <svg class="w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M3.5 6a.5.5 0 0 0-.5.5v8a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5v-8a.5.5 0 0 0-.5-.5h-2a.5.5 0 0 1 0-1h2A1.5 1.5 0 0 1 14 6.5v8a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 14.5v-8A1.5 1.5 0 0 1 3.5 5h2a.5.5 0 0 1 0 1h-2z"/>
                                <path fill-rule="evenodd" d="M7.646.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 1.707V10.5a.5.5 0 0 1-1 0V1.707L5.354 3.854a.5.5 0 1 1-.708-.708l3-3z"/>
                            </svg>
                            저장하기
                            </button>
                            
                        </div>
                        <!-- Button -->
                        </div>
                    </div>
                    </div>
                    <!-- End Sticky Share Group -->
                </div>
            </div>
            <!-- End Col -->

            <div class="mt-7 bg-white border border-gray-200 rounded-xl shadow-sm dark:bg-gray-800 dark:border-gray-700">
                <div class="p-4 sm:p-7 max-w-2xl">
                    <div class="mt-5">
                        <div class="grid gap-y-2">
                        <!-- Form Group -->
                        <div class="pb-6">
                            <h4 class="block text-lg mb-2 font-bold dark:text-white">상단 큰 제목</h4>
                            <div class="relative">
                            <input v-model="title" id="title" class="py-3 px-4 block w-full border-gray-200 rounded-md text-base focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400" required="" aria-describedby="email-error">
                            <div class="hidden absolute inset-y-0 right-0 flex items-center pointer-events-none pr-3">
                                <svg class="h-5 w-5 text-red-500" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" aria-hidden="true">
                                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"></path>
                                </svg>
                            </div>
                            </div>
                        </div>
                        <div class="pb-6">
                            <h4 class="block text-lg mb-2 font-bold dark:text-white">작은 설명</h4>
                            <div class="relative">
                                <input v-model="subtitle" id="subtitle" class="py-3 px-4 block w-full border-gray-200 rounded-md text-base focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400" required="" aria-describedby="email-error">
                                <div class="hidden absolute inset-y-0 right-0 flex items-center pointer-events-none pr-3">
                                    <svg class="h-5 w-5 text-red-500" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" aria-hidden="true">
                                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"></path>
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <div class="pb-6">
                            <h4 class="block text-lg mb-2 font-bold dark:text-white">상품 이미지</h4>
                            <div class="relative">
                                <label for="file-input" class="sr-only">파일선택</label>
                                <input type="file" name="file-input" id="file-input" class="block w-full border border-gray-200 shadow-sm rounded-md text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400
                                    file:bg-transparent file:border-0
                                    file:bg-gray-100 file:mr-4
                                    file:py-3 file:px-4
                                    dark:file:bg-gray-700 dark:file:text-gray-400">
                            </div>
                        </div>
                        <div class="pb-6">
                            <h4 class="block text-lg mb-2 font-bold dark:text-white">상품 설명</h4>
                            <div class="relative">
                                <textarea row="5" v-model="description" class="py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"></textarea>
                            
                            <div class="hidden absolute inset-y-0 right-0 flex items-center pointer-events-none pr-3">
                                <svg class="h-5 w-5 text-red-500" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" aria-hidden="true">
                                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"></path>
                                </svg>
                            </div>
                            </div>
                            <p class="hidden text-base text-red-600 mt-2" id="email-error">Please include a valid email address so we can get back to you</p>
                        </div>
                        <div class="pb-6">
                            <h4 class="block text-lg mb-2 font-bold dark:text-white">판매가</h4>
                            <div class="relative">
                            <input v-model="price" class="py-3 px-4 block w-full border-gray-200 rounded-md text-base focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400" required="" aria-describedby="email-error">
                            <div class="hidden absolute inset-y-0 right-0 flex items-center pointer-events-none pr-3">
                                <svg class="h-5 w-5 text-red-500" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" aria-hidden="true">
                                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"></path>
                                </svg>
                            </div>
                            </div>
                            <p class="hidden text-base text-red-600 mt-2" id="email-error">Please include a valid email address so we can get back to you</p>
                        </div>
                        <div class="pb-6">
                            <h4 class="block text-lg mb-2 font-bold dark:text-white">구매문의</h4>
                            <div class="relative">
                            <input v-model="phonenumber" class="py-3 px-4 block w-full border-gray-200 rounded-md text-base focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400" required="" aria-describedby="email-error">
                            <div class="hidden absolute inset-y-0 right-0 flex items-center pointer-events-none pr-3">
                                <svg class="h-5 w-5 text-red-500" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" aria-hidden="true">
                                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"></path>
                                </svg>
                            </div>
                            </div>
                            <p class="hidden text-base text-red-600 mt-2" id="email-error">Please include a valid email address so we can get back to you</p>
                        </div>
                        <div class="pb-6">
                            <h4 class="block text-lg mb-2 font-bold dark:text-white">보관방법, 취급방법</h4>
                            <div class="relative">
                                <textarea row="5" v-model="notice1" class="py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"></textarea>
                            <div class="hidden absolute inset-y-0 right-0 flex items-center pointer-events-none pr-3">
                                <svg class="h-5 w-5 text-red-500" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" aria-hidden="true">
                                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"></path>
                                </svg>
                            </div>
                            </div>
                            <p class="hidden text-base text-red-600 mt-2" id="email-error">Please include a valid email address so we can get back to you</p>
                        </div>
                        <div class="pb-6">
                            <h4 class="block text-lg mb-2 font-bold dark:text-white">소비자 안전을 위한 주의사항</h4>
                            <div class="relative">
                            <input v-model="notice2" class="py-3 px-4 block w-full border-gray-200 rounded-md text-base focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400" required="" aria-describedby="email-error">
                            <div class="hidden absolute inset-y-0 right-0 flex items-center pointer-events-none pr-3">
                                <svg class="h-5 w-5 text-red-500" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" aria-hidden="true">
                                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"></path>
                                </svg>
                            </div>
                            </div>
                            <p class="hidden text-base text-red-600 mt-2" id="email-error">Please include a valid email address so we can get back to you</p>
                        </div>
                        <div class="pb-6">
                            <h4 class="block text-lg mb-2 font-bold dark:text-white">생산자(수입자)</h4>
                            <div class="relative">
                            <input v-model="producer" class="py-3 px-4 block w-full border-gray-200 rounded-md text-base focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400" required="" aria-describedby="email-error">
                            <div class="hidden absolute inset-y-0 right-0 flex items-center pointer-events-none pr-3">
                                <svg class="h-5 w-5 text-red-500" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" aria-hidden="true">
                                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"></path>
                                </svg>
                            </div>
                            </div>
                            <p class="hidden text-base text-red-600 mt-2" id="email-error">Please include a valid email address so we can get back to you</p>
                        </div>
                        <!-- End Form Group -->

                        <button type="submit" class="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-base dark:focus:ring-offset-gray-800">
                            팜플렛 미리보기
                        </button>
                        </div>
                    </div>
                </div>
            </div>

            <!-- End Col -->
        </div>
        <!-- End Grid -->
    </div>
    <!-- End Card Blog -->
</template>