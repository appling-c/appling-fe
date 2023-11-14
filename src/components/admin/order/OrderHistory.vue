<template>
  <div>
    <header
      class="max-w-[85rem] px-4 py-5 sm:px-6 lg:px-8 lg:py-7 mx-auto flex flex-wrap md:justify-start md:flex-nowrap z-50 w-full text-sm"
    >
      <nav
        class="mt-6 relative max-w-7xl w-full bg-white border border-gray-200 rounded-[36px] mx-2 py-3 px-4 md:flex md:items-center md:justify-between md:py-0 md:px-6 lg:px-8 xl:mx-auto dark:bg-gray-800 dark:border-gray-700"
        aria-label="Global"
      >
        <div class="flex items-center justify-between">
          <select
            class="py-3 px-4 pr-9 block w-full border-gray-200 rounded-full text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
          >
            <option selected>Open this select menu</option>
            <option>1</option>
            <option>2</option>
            <option>3</option>
          </select>
          <div class="md:hidden">
            <button
              type="button"
              class="hs-collapse-toggle p-2 inline-flex justify-center items-center gap-2 rounded-full border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm dark:bg-slate-900 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800"
              data-hs-collapse="#navbar-collapse-with-animation"
              aria-controls="navbar-collapse-with-animation"
              aria-label="Toggle navigation"
            >
              <svg
                class="hs-collapse-open:hidden w-4 h-4"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
                />
              </svg>
              <svg
                class="hs-collapse-open:block hidden w-4 h-4"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path
                  d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"
                />
              </svg>
            </button>
          </div>
        </div>
        <div
          id="navbar-collapse-with-animation"
          class="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow md:block"
        >
          <div
            class="flex flex-col gap-y-4 gap-x-0 mt-5 md:flex-row md:items-center md:justify-end md:gap-y-0 md:gap-x-7 md:mt-0 md:pl-7"
          >
            <a
              class="font-medium text-blue-600 md:py-6 dark:text-blue-500"
              href="#"
              aria-current="page"
              >Landing</a
            >
            <a
              class="font-medium text-gray-500 hover:text-gray-400 md:py-6 dark:text-gray-400 dark:hover:text-gray-500"
              href="#"
              >Account</a
            >
            <a
              class="font-medium text-gray-500 hover:text-gray-400 md:py-6 dark:text-gray-400 dark:hover:text-gray-500"
              href="#"
              >Work</a
            >
            <a
              class="font-medium text-gray-500 hover:text-gray-400 md:py-6 dark:text-gray-400 dark:hover:text-gray-500"
              href="#"
              >Blog</a
            >

            <div
              class="hs-dropdown [--strategy:static] md:[--strategy:fixed] [--adaptive:none] md:[--trigger:hover] md:py-4"
            >
              <button
                type="button"
                class="flex items-center w-full text-gray-500 hover:text-gray-400 font-medium dark:text-gray-400 dark:hover:text-gray-500"
              >
                Dropdown
                <svg
                  class="ml-2 w-2.5 h-2.5 text-gray-600"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                  ></path>
                </svg>
              </button>

              <div
                class="hs-dropdown-menu transition-[opacity,margin] duration-[0.1ms] md:duration-[150ms] hs-dropdown-open:opacity-100 opacity-0 md:w-48 hidden z-10 bg-white md:shadow-md rounded-lg p-2 dark:bg-gray-800 md:dark:border dark:border-gray-700 dark:divide-gray-700 before:absolute top-full md:border before:-top-5 before:left-0 before:w-full before:h-5"
              >
                <a
                  class="flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300"
                  href="#"
                >
                  About
                </a>
                <div
                  class="hs-dropdown relative [--strategy:static] md:[--strategy:absolute] [--adaptive:none] md:[--trigger:hover]"
                >
                  <button
                    type="button"
                    class="w-full flex justify-between w-full items-center text-sm text-gray-800 rounded-md py-2 px-3 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300"
                  >
                    Sub Menu
                    <svg
                      class="md:-rotate-90 ml-2 w-2.5 h-2.5 text-gray-600"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                      ></path>
                    </svg>
                  </button>

                  <div
                    class="hs-dropdown-menu transition-[opacity,margin] duration-[0.1ms] md:duration-[150ms] hs-dropdown-open:opacity-100 opacity-0 md:w-48 hidden z-10 md:mt-2 bg-white md:shadow-md rounded-lg p-2 dark:bg-gray-800 md:dark:border dark:border-gray-700 dark:divide-gray-700 before:absolute md:border before:-right-5 before:top-0 before:h-full before:w-5 top-0 right-full !mx-[10px]"
                  >
                    <a
                      class="flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300"
                      href="#"
                    >
                      About
                    </a>
                    <a
                      class="flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300"
                      href="#"
                    >
                      Downloads
                    </a>
                    <a
                      class="flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300"
                      href="#"
                    >
                      Team Account
                    </a>
                  </div>
                </div>

                <a
                  class="flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300"
                  href="#"
                >
                  Downloads
                </a>
                <a
                  class="flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300"
                  href="#"
                >
                  Team Account
                </a>
              </div>
            </div>

            <a
              class="flex items-center gap-x-2 font-medium text-gray-500 hover:text-blue-600 md:border-l md:border-gray-300 md:my-6 md:pl-6 dark:border-gray-700 dark:text-gray-400 dark:hover:text-blue-500"
              href="#"
            >
              <svg
                class="w-4 h-4"
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path
                  d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"
                />
              </svg>
              상품등록
            </a>
          </div>
        </div>
      </nav>
    </header>
    <div class="max-w-[85rem] px-4 py-5 sm:px-6 lg:px-8 lg:py-7 mx-auto">
      <div class="bg-white rounded-xl shadow p-4 sm:p-7 dark:bg-slate-900">
        <div class="container mx-auto">
          <div class="flex flex-col">
            <div class="-m-1.5 overflow-x-auto">
              <div class="p-1.5 min-w-full inline-block align-middle">
                <div class="overflow-hidden">
                  <table class="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                    <thead>
                      <tr>
                        <th
                          scope="col"
                          class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase"
                        >
                          주문번호
                        </th>
                        <th
                          scope="col"
                          class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase"
                        >
                          주문일자
                        </th>
                        <th
                          scope="col"
                          class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase"
                        >
                          주문상품
                        </th>
                        <th
                          scope="col"
                          class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase"
                        >
                          주문인
                        </th>

                        <th
                          scope="col"
                          class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase"
                        >
                          주문금액
                        </th>
                        <th
                          scope="col"
                          class="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase"
                        >
                          배송지정보
                        </th>
                      </tr>
                    </thead>
                    <tbody
                      class="hs-accordion-group hs-accordion divide-y divide-gray-200 dark:divide-gray-700"
                      v-for="order in orders.value"
                      :key="order.order_id"
                    >
                      <tr :id="`hs-basic-with-arrow-heading-${order.order_id}`">
                        <td
                          class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200"
                        >
                          <button
                            class="hs-accordion-toggle hs-accordion-active:text-blue-600 py-3 inline-flex items-center gap-x-3 w-full font-semibold text-start text-gray-800 hover:text-gray-500 rounded-lg disabled:opacity-50 disabled:pointer-events-none dark:hs-accordion-active:text-blue-500 dark:text-gray-200 dark:hover:text-gray-400 dark:focus:outline-none dark:focus:text-gray-400"
                            :aria-controls="`hs-basic-with-arrow-collapse-${order.order_id}`"
                          >
                            #{{ order.order_number }}
                          </button>
                        </td>
                        <td
                          class="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200"
                        >
                          {{ moment(order.created_at).format("YYYY.MM.DD HH:mm") }}
                        </td>
                        <td
                          class="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200"
                        >
                          {{ order.order_item_list[0]?.main_title }}
                          <span v-if="order.order_item_list.length - 1 > 1">
                            외 {{ order.order_item_list.length - 1 }} 건
                          </span>
                        </td>
                        <td
                          class="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200"
                        >
                          {{ order.member?.name }}
                        </td>
                        <td
                          class="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200"
                        >
                          199,900원
                        </td>
                        <td
                          class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium"
                        >
                          <a class="text-blue-500 hover:text-blue-700"> 상세보기</a>
                        </td>
                      </tr>
                      <tr
                        :id="`hs-basic-with-arrow-collapse-${order.order_id}`"
                        :aria-labelledby="`hs-basic-with-arrow-heading-${order.order_id}`"
                      >
                        <td colspan="6">
                          <!-- <div
                            style="height: 0px"
                            class="hs-accordion-content w-full overflow-hidden transition-[height] duration-300"
                          > 
                        owner_address
: 
"자혜로 17번길 16"
owner_address_detail
: 
"101 1404"
owner_name
: 
"최준호"
owner_tel
: 
"01093008039"
owner_zonecode
: 
"1232"
                        -->
                          <div
                            class="hs-accordion-content w-full overflow-hidden transition-[height] duration-300"
                          >
                            <div class="p-4 sm:p-7 overflow-y-auto">
                              <div class="text-center">
                                <h3
                                  class="text-lg font-semibold text-gray-800 dark:text-gray-200"
                                >
                                  Invoice from Preline
                                </h3>
                                <p class="text-sm text-gray-500">Invoice #3682303</p>
                              </div>

                              <!-- Grid -->
                              <div
                                class="mt-5 sm:mt-10 grid grid-cols-2 sm:grid-cols-3 gap-5"
                              >
                                <div>
                                  <span class="block text-xs uppercase text-gray-500"
                                    >Amount paid:</span
                                  >
                                  <span
                                    class="block text-sm font-medium text-gray-800 dark:text-gray-200"
                                    >$316.8</span
                                  >
                                </div>
                                <!-- End Col -->

                                <div>
                                  <span class="block text-xs uppercase text-gray-500"
                                    >Date paid:</span
                                  >
                                  <span
                                    class="block text-sm font-medium text-gray-800 dark:text-gray-200"
                                    >April 22, 2020</span
                                  >
                                </div>
                                <!-- End Col -->

                                <div>
                                  <span class="block text-xs uppercase text-gray-500"
                                    >Payment method:</span
                                  >
                                  <div class="flex items-center gap-x-2">
                                    <svg
                                      class="w-5 h-5"
                                      width="400"
                                      height="248"
                                      viewBox="0 0 400 248"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <g clip-path="url(#clip0)">
                                        <path
                                          d="M254 220.8H146V26.4H254V220.8Z"
                                          fill="#FF5F00"
                                        />
                                        <path
                                          d="M152.8 123.6C152.8 84.2 171.2 49 200 26.4C178.2 9.2 151.4 0 123.6 0C55.4 0 0 55.4 0 123.6C0 191.8 55.4 247.2 123.6 247.2C151.4 247.2 178.2 238 200 220.8C171.2 198.2 152.8 163 152.8 123.6Z"
                                          fill="#EB001B"
                                        />
                                        <path
                                          d="M400 123.6C400 191.8 344.6 247.2 276.4 247.2C248.6 247.2 221.8 238 200 220.8C228.8 198.2 247.2 163 247.2 123.6C247.2 84.2 228.8 49 200 26.4C221.8 9.2 248.6 0 276.4 0C344.6 0 400 55.4 400 123.6Z"
                                          fill="#F79E1B"
                                        />
                                      </g>
                                      <defs>
                                        <clipPath id="clip0">
                                          <rect width="400" height="247.2" fill="white" />
                                        </clipPath>
                                      </defs>
                                    </svg>
                                    <span
                                      class="block text-sm font-medium text-gray-800 dark:text-gray-200"
                                      >•••• 4242</span
                                    >
                                  </div>
                                </div>
                                <!-- End Col -->
                              </div>
                              <!-- End Grid -->

                              <div class="mt-5 sm:mt-10">
                                <h4
                                  class="text-xs font-semibold uppercase text-gray-800 dark:text-gray-200"
                                >
                                  Summary
                                </h4>

                                <ul class="mt-3 flex flex-col">
                                  <li
                                    class="inline-flex items-center gap-x-2 py-3 px-4 text-sm border text-gray-800 -mt-px first:rounded-t-lg first:mt-0 last:rounded-b-lg dark:border-gray-700 dark:text-gray-200"
                                  >
                                    <div class="flex items-center justify-between w-full">
                                      <span>Payment to Front</span>
                                      <span>$264.00</span>
                                    </div>
                                  </li>
                                  <li
                                    class="inline-flex items-center gap-x-2 py-3 px-4 text-sm border text-gray-800 -mt-px first:rounded-t-lg first:mt-0 last:rounded-b-lg dark:border-gray-700 dark:text-gray-200"
                                  >
                                    <div class="flex items-center justify-between w-full">
                                      <span>Tax fee</span>
                                      <span>$52.8</span>
                                    </div>
                                  </li>
                                  <li
                                    class="inline-flex items-center gap-x-2 py-3 px-4 text-sm font-semibold bg-gray-50 border text-gray-800 -mt-px first:rounded-t-lg first:mt-0 last:rounded-b-lg dark:bg-slate-800 dark:border-gray-700 dark:text-gray-200"
                                  >
                                    <div class="flex items-center justify-between w-full">
                                      <span>Amount paid</span>
                                      <span>$316.8</span>
                                    </div>
                                  </li>
                                </ul>
                              </div>

                              <!-- Button -->
                              <div class="mt-5 flex justify-end gap-x-2">
                                <a
                                  class="py-2 px-3 inline-flex justify-center items-center gap-2 rounded-lg border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm dark:bg-gray-800 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800"
                                  href="#"
                                >
                                  <svg
                                    class="flex-shrink-0 w-4 h-4"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                  >
                                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                                    <polyline points="7 10 12 15 17 10" />
                                    <line x1="12" x2="12" y1="15" y2="3" />
                                  </svg>
                                  Invoice PDF
                                </a>
                                <a
                                  class="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                                  href="#"
                                >
                                  <svg
                                    class="flex-shrink-0 w-4 h-4"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                  >
                                    <polyline points="6 9 6 2 18 2 18 9" />
                                    <path
                                      d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"
                                    />
                                    <rect width="12" height="8" x="6" y="14" />
                                  </svg>
                                  Print
                                </a>
                              </div>
                              <!-- End Buttons -->

                              <div class="mt-5 sm:mt-10">
                                <p class="text-sm text-gray-500">
                                  If you have any questions, please contact us at
                                  <a
                                    class="inline-flex items-center gap-x-1.5 text-blue-600 decoration-2 hover:underline font-medium"
                                    href="#"
                                    >example@site.com</a
                                  >
                                  or call at
                                  <a
                                    class="inline-flex items-center gap-x-1.5 text-blue-600 decoration-2 hover:underline font-medium"
                                    href="tel:+1898345492"
                                    >+1 898-34-5492</a
                                  >
                                </p>
                              </div>
                            </div>
                            <!-- End Body -->
                            <p class="text-gray-800 dark:text-gray-200">
                              <em>{{ order?.delivery }}</em>
                            </p>
                          </div>
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
  </div>
</template>

<script setup lang="ts">
import OrderService from "@/services/OrderService";
import moment from "moment";
import { reactive } from "vue";

const orderTotalCount = 20;

let orders = reactive([]);

async function getRecentOrderList() {
  const reqestStr = `?search=&page=0&size=5&status=complete`;
  await OrderService.getRecentOrderList(reqestStr).then((response) => {
    orders.value = response.data.data?.list;
    console.log(orders);
  });
}

getRecentOrderList();
</script>
