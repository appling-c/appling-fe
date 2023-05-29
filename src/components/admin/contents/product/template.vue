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
                            <h2 class="text-2xl font-bold md:text-3xl dark:text-white">해남 퍽퍽한 밤고구마 꿀밤고구마 베니하루카 특상 3kg 5kg 10kg</h2>
                        </div>

                        <p class="text-lg text-gray-800 dark:text-gray-200">큐어링 숙성으로 최고의 맛과 숙성을 보장합니다.</p>

                        <figure>
                            <img class="w-full object-cover rounded-xl" src="data:image/jpeg;base64,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" alt="Image Description">

                        </figure>

                        <blockquote class="text-center p-4 sm:px-7">
                            <p class="text-xl font-medium text-gray-800 md:text-xl md:leading-normal xl:text-xl xl:leading-normal dark:text-gray-200">
                            안녕하세요 윤순희 농부입니다.<br/>
                    진짜 정성다해 키웠어요<br/>
                    고구마는 섬유질과
                    칼륨이 풍부합니다.<br/>

                    다이어트식품으로 단원 으뜸입니다.<br/>
                    가장 좋은 것으로 선별하여
                    산지직송합니다.<br/>

                    ** 크기는 특상, 중상, 한입크기로 배송 됩니다 **
                            </p>
                            <p class="mt-5 text-gray-800 dark:text-gray-200">
                            상품에 대한 자세한 문의사항은 아래의 연락처로 문의주세요.
                            </p>
                        </blockquote>

                        <ul class="list-disc list-outside space-y-5 pl-5 text-lg text-gray-800 dark:text-gray-200">
                            <li class="pl-2"> 판매가 <a class="text-blue-600 decoration-2 hover:underline font-medium" href="#">12,060원(100g당 402원)</a> </li>
                            <li class="pl-2"> 구매문의 <a class="text-blue-600 decoration-2 hover:underline font-medium" href="#">010-9999-9999</a>.</li>
                            <li class="pl-2"> 보관방법,취급방법 <a class="text-blue-600 decoration-2 hover:underline font-medium" href="#">수령후 박스에서 꺼낸 후 펴서 수분을 날려주세요. 여름철 고구마는 겨울용 고구마와 다르게 보관시 싹이 날 수 있고 2주이상 보관시 썪을수 있습니다. 자연스러운 현상입니다.</a></li>
                            <li class="pl-2"> 소비자안전을 위한 주의사항 <a class="text-blue-600 decoration-2 hover:underline font-medium" href="#">고구마 알러지 있으신분은 섭취를 삼가해 주시기바랍니다.</a></li>
                            <li class="pl-2"> 생산자(수입자) <a class="text-blue-600 decoration-2 hover:underline font-medium" href="#">시어리네 해남고구마</a></li>
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
                            <button type="button" id="blog-article-share-dropdown" class="hs-dropdown-toggle flex items-center gap-x-2 text-sm text-gray-500 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200">
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
                <div class="p-4 sm:p-7">
                    <div class="mt-5">
                        <!-- Form -->
                        <form>
                            <div class="grid gap-y-4">
                            <!-- Form Group -->
                            <div>
                                <label for="email" class="block text-sm mb-2 dark:text-white">상단 큰 제목</label>
                                <div class="relative">
                                <input type="email" id="email" name="email" class="py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400" required="" aria-describedby="email-error">
                                <div class="hidden absolute inset-y-0 right-0 flex items-center pointer-events-none pr-3">
                                    <svg class="h-5 w-5 text-red-500" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" aria-hidden="true">
                                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"></path>
                                    </svg>
                                </div>
                                </div>
                                <p class="hidden text-xs text-red-600 mt-2" id="email-error">Please include a valid email address so we can get back to you</p>
                            </div>
                            <div>
                                <label for="email" class="block text-sm mb-2 dark:text-white">상단 큰 제목 작은 설명</label>
                                <div class="relative">
                                <input type="email" id="email" name="email" class="py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400" required="" aria-describedby="email-error">
                                <div class="hidden absolute inset-y-0 right-0 flex items-center pointer-events-none pr-3">
                                    <svg class="h-5 w-5 text-red-500" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" aria-hidden="true">
                                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"></path>
                                    </svg>
                                </div>
                                </div>
                                <p class="hidden text-xs text-red-600 mt-2" id="email-error">Please include a valid email address so we can get back to you</p>
                            </div>
                            <div>
                                <label for="email" class="block text-sm mb-2 dark:text-white">큰 상품 설명</label>
                                <div class="relative">
                                <input type="email" id="email" name="email" class="py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400" required="" aria-describedby="email-error">
                                <div class="hidden absolute inset-y-0 right-0 flex items-center pointer-events-none pr-3">
                                    <svg class="h-5 w-5 text-red-500" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" aria-hidden="true">
                                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"></path>
                                    </svg>
                                </div>
                                </div>
                                <p class="hidden text-xs text-red-600 mt-2" id="email-error">Please include a valid email address so we can get back to you</p>
                            </div>
                            <div>
                                <label for="email" class="block text-sm mb-2 dark:text-white">작은 상품 설명</label>
                                <div class="relative">
                                <input type="email" id="email" name="email" class="py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400" required="" aria-describedby="email-error">
                                <div class="hidden absolute inset-y-0 right-0 flex items-center pointer-events-none pr-3">
                                    <svg class="h-5 w-5 text-red-500" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" aria-hidden="true">
                                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"></path>
                                    </svg>
                                </div>
                                </div>
                                <p class="hidden text-xs text-red-600 mt-2" id="email-error">Please include a valid email address so we can get back to you</p>
                            </div>

                            <div>
                                <label for="email" class="block text-sm mb-2 dark:text-white">판매가</label>
                                <div class="relative">
                                <input type="email" id="email" name="email" class="py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400" required="" aria-describedby="email-error">
                                <div class="hidden absolute inset-y-0 right-0 flex items-center pointer-events-none pr-3">
                                    <svg class="h-5 w-5 text-red-500" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" aria-hidden="true">
                                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"></path>
                                    </svg>
                                </div>
                                </div>
                                <p class="hidden text-xs text-red-600 mt-2" id="email-error">Please include a valid email address so we can get back to you</p>
                            </div>
                            <div>
                                <label for="email" class="block text-sm mb-2 dark:text-white">구매문의</label>
                                <div class="relative">
                                <input type="email" id="email" name="email" class="py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400" required="" aria-describedby="email-error">
                                <div class="hidden absolute inset-y-0 right-0 flex items-center pointer-events-none pr-3">
                                    <svg class="h-5 w-5 text-red-500" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" aria-hidden="true">
                                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"></path>
                                    </svg>
                                </div>
                                </div>
                                <p class="hidden text-xs text-red-600 mt-2" id="email-error">Please include a valid email address so we can get back to you</p>
                            </div>
                            <div>
                                <label for="email" class="block text-sm mb-2 dark:text-white">보관방법, 취급방법</label>
                                <div class="relative">
                                <input type="email" id="email" name="email" class="py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400" required="" aria-describedby="email-error">
                                <div class="hidden absolute inset-y-0 right-0 flex items-center pointer-events-none pr-3">
                                    <svg class="h-5 w-5 text-red-500" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" aria-hidden="true">
                                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"></path>
                                    </svg>
                                </div>
                                </div>
                                <p class="hidden text-xs text-red-600 mt-2" id="email-error">Please include a valid email address so we can get back to you</p>
                            </div>
                            <div>
                                <label for="email" class="block text-sm mb-2 dark:text-white">원산지</label>
                                <div class="relative">
                                <input type="email" id="email" name="email" class="py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400" required="" aria-describedby="email-error">
                                <div class="hidden absolute inset-y-0 right-0 flex items-center pointer-events-none pr-3">
                                    <svg class="h-5 w-5 text-red-500" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" aria-hidden="true">
                                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"></path>
                                    </svg>
                                </div>
                                </div>
                                <p class="hidden text-xs text-red-600 mt-2" id="email-error">Please include a valid email address so we can get back to you</p>
                            </div>
                            <div>
                                <label for="email" class="block text-sm mb-2 dark:text-white">생산자</label>
                                <div class="relative">
                                <input type="email" id="email" name="email" class="py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400" required="" aria-describedby="email-error">
                                <div class="hidden absolute inset-y-0 right-0 flex items-center pointer-events-none pr-3">
                                    <svg class="h-5 w-5 text-red-500" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" aria-hidden="true">
                                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"></path>
                                    </svg>
                                </div>
                                </div>
                                <p class="hidden text-xs text-red-600 mt-2" id="email-error">Please include a valid email address so we can get back to you</p>
                            </div>
                            <!-- End Form Group -->

                            <button type="submit" class="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800">
                                팜플렛 미리보기
                            </button>
                            </div>
                        </form>
                        <!-- End Form -->
                    </div>
                </div>
            </div>

            <!-- End Col -->
        </div>
        <!-- End Grid -->
    </div>
    <!-- End Card Blog -->
</template>