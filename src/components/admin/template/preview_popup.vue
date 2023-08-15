<template>
    <div id="hs-scroll-inside-body-modal" class="hs-overlay hidden w-full h-full fixed top-0 left-0 z-[60] overflow-x-hidden overflow-y-auto">
        <div class="hs-overlay-open:mt-7 hs-overlay-open:opacity-100 hs-overlay-open:duration-500 mt-0 opacity-0 ease-out transition-all sm:max-w-lg sm:w-full m-3 sm:mx-auto h-[calc(100%-3.5rem)]">
            <div class="max-h-full overflow-hidden flex flex-col bg-white border shadow-sm rounded-xl dark:bg-gray-800 dark:border-gray-700 dark:shadow-slate-700/[.7]">
            <div class="flex justify-between items-center py-3 px-4 border-b dark:border-gray-700">
                <h3 class="font-bold text-gray-800 dark:text-white">
                팜플렛 미리보기
                </h3>
                <button type="button" class="hs-dropdown-toggle inline-flex flex-shrink-0 justify-center items-center h-8 w-8 rounded-md text-gray-500 hover:text-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-white transition-all text-sm dark:focus:ring-gray-700 dark:focus:ring-offset-gray-800" data-hs-overlay="#hs-scroll-inside-body-modal">
                <span class="sr-only">Close</span>
                <svg class="w-3.5 h-3.5" width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.258206 1.00652C0.351976 0.912791 0.479126 0.860131 0.611706 0.860131C0.744296 0.860131 0.871447 0.912791 0.965207 1.00652L3.61171 3.65302L6.25822 1.00652C6.30432 0.958771 6.35952 0.920671 6.42052 0.894471C6.48152 0.868271 6.54712 0.854471 6.61352 0.853901C6.67992 0.853321 6.74572 0.865971 6.80722 0.891111C6.86862 0.916251 6.92442 0.953381 6.97142 1.00032C7.01832 1.04727 7.05552 1.1031 7.08062 1.16454C7.10572 1.22599 7.11842 1.29183 7.11782 1.35822C7.11722 1.42461 7.10342 1.49022 7.07722 1.55122C7.05102 1.61222 7.01292 1.6674 6.96522 1.71352L4.31871 4.36002L6.96522 7.00648C7.05632 7.10078 7.10672 7.22708 7.10552 7.35818C7.10442 7.48928 7.05182 7.61468 6.95912 7.70738C6.86642 7.80018 6.74102 7.85268 6.60992 7.85388C6.47882 7.85498 6.35252 7.80458 6.25822 7.71348L3.61171 5.06702L0.965207 7.71348C0.870907 7.80458 0.744606 7.85498 0.613506 7.85388C0.482406 7.85268 0.357007 7.80018 0.264297 7.70738C0.171597 7.61468 0.119017 7.48928 0.117877 7.35818C0.116737 7.22708 0.167126 7.10078 0.258206 7.00648L2.90471 4.36002L0.258206 1.71352C0.164476 1.61976 0.111816 1.4926 0.111816 1.36002C0.111816 1.22744 0.164476 1.10028 0.258206 1.00652Z" fill="currentColor"/>
                </svg>
                </button>
            </div>

            <div class="p-4 overflow-y-auto">
                <div class="space-y-4">
                    <div class="sm:order-2">
                        <div class="relative rounded-lg">
                            <!-- Blog Article -->
                            <div id="preview_contents" class="bg-white border border-gray-200 rounded-xl shadow-sm max-w-3xl px-4 pt-6 lg:pt-10 pb-12 sm:px-6 lg:px-8 mx-auto">
                                <div class="max-w-2xl">
                                <!-- Content -->
                                    <div class="space-y-5 md:space-y-8">
                                        <div class="space-y-3">
                                            <h2 class="text-2xl font-bold md:text-3xl dark:text-white">{{ title }}</h2>
                                        </div>
                                        <p class="text-lg text-gray-800 dark:text-gray-200">{{ subtitle }}</p>
                                        
                                        <figure>
                                            <img class="w-full object-cover rounded-xl" :src="image_url" alt="Image Description">
                                        </figure>

                                        <blockquote class="text-center p-4 sm:px-7">
                                            <p v-html="description" class="text-xl font-medium text-gray-800 md:text-xl md:leading-normal xl:text-xl xl:leading-normal dark:text-gray-200"></p>
                                            <p class="mt-5 text-gray-800 dark:text-gray-200">
                                                상품에 대한 자세한 문의사항은 아래의 연락처로 문의주세요.
                                            </p>
                                        </blockquote>
                                        
                                        <ul class="list-disc list-outside space-y-5 pl-5 text-lg text-gray-800 dark:text-gray-200">
                                            <li class="pl-2"> 판매가 <div class="text-gray-500 decoration-2 font-medium">{{ won_filter(price) }}원 (원가 : {{ won_filter(origin_price) }}원)</div> </li>
                                            <li class="pl-2"> 보관방법,취급방법 <div  v-html="notice1" class="text-gray-500 decoration-2 font-medium" ></div></li>
                                            <li class="pl-2"> 소비자안전을 위한 주의사항 <div v-html="notice2" class="text-gray-500 decoration-2 font-medium" ></div></li>
                                            <li class="pl-2"> 생산자(수입자) <div class="text-gray-500 decoration-2 font-medium" >{{ producer }}</div></li>
                                        </ul>
                                    </div>
                                    <!-- End Content -->
                                </div>
                            </div>
                            <!-- End Blog Article -->
                        </div>
                    </div>
                </div>
            </div>
            <div class="flex justify-end items-center gap-x-2 py-3 px-4 border-t dark:border-gray-700">
                <button @click="download" type="button" class="hs-dropdown-toggle py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm dark:bg-slate-900 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800" data-hs-overlay="#hs-scroll-inside-body-modal">
                    <svg class="w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M3.5 6a.5.5 0 0 0-.5.5v8a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5v-8a.5.5 0 0 0-.5-.5h-2a.5.5 0 0 1 0-1h2A1.5 1.5 0 0 1 14 6.5v8a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 14.5v-8A1.5 1.5 0 0 1 3.5 5h2a.5.5 0 0 1 0 1h-2z"/>
                        <path fill-rule="evenodd" d="M7.646.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 1.707V10.5a.5.5 0 0 1-1 0V1.707L5.354 3.854a.5.5 0 1 1-.708-.708l3-3z"/>
                    </svg>
                    다운받기
                </button>
                
                <a lass="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800">
                    <svg class="w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M3.5 6a.5.5 0 0 0-.5.5v8a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5v-8a.5.5 0 0 0-.5-.5h-2a.5.5 0 0 1 0-1h2A1.5 1.5 0 0 1 14 6.5v8a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 14.5v-8A1.5 1.5 0 0 1 3.5 5h2a.5.5 0 0 1 0 1h-2z"/>
                        <path fill-rule="evenodd" d="M7.646.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 1.707V10.5a.5.5 0 0 1-1 0V1.707L5.354 3.854a.5.5 0 1 1-.708-.708l3-3z"/>
                    </svg>
                    카카오톡 공유하기
                </a>
            </div>
            </div>
            <a id="btn-Convert-Html2Image" ></a>
        </div>
    </div>
</template>

<script>
import common from '../../../plugins/common'
import html2canvas from 'html2canvas';
export default {
    props: {
        contents: Object, 
    },
    watch: {
        contents(value) {
            const userdata = value;
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
    },
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
            imagesrc: "",
            image_url: "", 
            origin_price : "", 
            origin: "", 
            canvas : null
        }
    },
    methods: {
        won_filter(num){
            return common.comma(num)
        },
        
        download() {
            // 팜플렛 이미지 다운로드
            const element = document.getElementById("preview_contents");
            html2canvas(element, {
                allowTaint: true, 
                useCORS : true
            }).then(canvas => {
                canvas_element = canvas;  
                const imageData = canvas_element.toDataURL("image/png", 1);
                const newData = imageData.replace(/^data:image\/png/, "data:application/octet-stream");
                document.getElementById("btn-Convert-Html2Image").setAttribute("download", "your_pic_name.png");
                document.getElementById("btn-Convert-Html2Image").setAttribute("href", newData);
                document.getElementById("btn-Convert-Html2Image").click()
            })
        }
    }, 

}
let canvas_element;
</script>

<style>
#btn-Convert-Html2Image{
    display: none;
}

</style>