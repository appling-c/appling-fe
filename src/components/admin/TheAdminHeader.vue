<template>
  <!-- ========== HEADER ========== -->
  <header
    class="
      flex flex-wrap
      md:justify-start md:flex-nowrap
      z-50
      w-full
      bg-white
      text-sm
      py-3
      md:py-0
      dark:bg-gray-800
    "
  >
    <div class="max-w-[85rem] w-full mx-auto px-4 md:px-6 lg:px-8" aria-label="Global">
      <div class="relative md:flex md:items-center md:justify-between">
        <div class="flex items-center justify-between">
          <a
            @click="moveto('/admin/dashboard')"
            class="flex-none text-xl font-semibold dark:text-white"
            aria-label="Brand"
            >🍎</a
          >
          <div class="md:hidden">
            <button
              type="button"
              class="
                hs-collapse-toggle
                p-2
                inline-flex
                justify-center
                items-center
                gap-2
                rounded-md
                border
                font-medium
                bg-white
                text-gray-700
                shadow-sm
                align-middle
                hover:bg-gray-50
                focus:outline-none
                focus:ring-2
                focus:ring-offset-2
                focus:ring-offset-white
                focus:ring-blue-600
                transition-all
                text-sm
                dark:bg-slate-900
                dark:hover:bg-slate-800
                dark:border-gray-700
                dark:text-gray-400
                dark:hover:text-white
                dark:focus:ring-offset-gray-800
              "
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
          class="
            hs-collapse
            hidden
            overflow-hidden
            transition-all
            duration-300
            basis-full
            grow
            md:block
            right-0
          "
        >
          <div class="overflow-hidden overflow-y-auto max-h-[75vh] scrollbar-y">
            <div
              class="
                flex flex-col
                gap-x-0
                mt-5
                divide-y divide-dashed divide-gray-200
                md:flex-row
                md:items-center
                md:justify-end
                md:gap-x-7
                md:mt-0
                md:pl-7
                md:divide-y-0
                md:divide-solid
                dark:divide-gray-700
              "
            >
              <div
                class="
                  hs-dropdown
                  [--strategy:static]
                  md:[--strategy:absolute]
                  [--adaptive:none]
                  md:[--trigger:hover]
                  py-3
                  md:py-6
                "
              >
                <button
                  type="button"
                  class="
                    flex
                    items-center
                    w-full
                    text-gray-800
                    hover:text-gray-600
                    font-medium
                    dark:text-gray-200 dark:hover:text-gray-500
                  "
                >
                  농장 소개하기
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
                  class="
                    hs-dropdown-menu
                    transition-[opacity,margin]
                    duration-[0.1ms]
                    md:duration-[150ms]
                    hs-dropdown-open:opacity-100
                    opacity-0
                    md:w-80
                    hidden
                    z-10
                    bg-white
                    md:shadow-2xl
                    rounded-lg
                    py-2
                    md:p-2
                    dark:bg-gray-800 dark:divide-gray-700
                    before:absolute
                    top-full
                    before:-top-5 before:left-0 before:w-full before:h-5
                  "
                >
                  <a
                    @click="moveto('/admin/brandshop')"
                    class="
                      inline-flex
                      gap-x-5
                      w-full
                      p-4
                      text-gray-600
                      rounded-md
                      hover:bg-gray-100
                      focus:ring-2 focus:ring-blue-500
                      dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300
                    "
                  >
                    <svg
                      class="flex-shrink-0 w-5 h-5 mt-1"
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                    >
                      <path
                        d="M4.5 5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1zM3 4.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zm2 7a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zm-2.5.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1z"
                      />
                      <path
                        d="M2 2a2 2 0 0 0-2 2v1a2 2 0 0 0 2 2h1v2H2a2 2 0 0 0-2 2v1a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-1a2 2 0 0 0-2-2h-1V7h1a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H2zm13 2v1a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1zm0 7v1a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1v-1a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1zm-3-4v2H4V7h8z"
                      />
                    </svg>
                    <div class="grow">
                      <span class="block font-semibold mb-1 text-gray-800 dark:text-gray-200"
                        >농장 소개페이지 만들기</span
                      >
                      간편하게 농장을 소개하는 홈페이지를 만들고 소개합니다.
                    </div>
                  </a>

                  <div class="my-2 border-t border-gray-100 dark:border-gray-800"></div>

                  <a
                    @click="moveto(`/brandshop/preview/${userInfoInterface?.member_id}`)"
                    class="
                      inline-flex
                      gap-x-5
                      w-full
                      p-4
                      text-gray-600
                      rounded-md
                      hover:bg-gray-100
                      focus:ring-2 focus:ring-blue-500
                      dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300
                    "
                  >
                    <svg
                      class="flex-shrink-0 w-5 h-5 mt-1"
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                    >
                      <path
                        d="M0 2.5A1.5 1.5 0 0 1 1.5 1h11A1.5 1.5 0 0 1 14 2.5v10.528c0 .3-.05.654-.238.972h.738a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 1 1 0v9a1.5 1.5 0 0 1-1.5 1.5H1.497A1.497 1.497 0 0 1 0 13.5v-11zM12 14c.37 0 .654-.211.853-.441.092-.106.147-.279.147-.531V2.5a.5.5 0 0 0-.5-.5h-11a.5.5 0 0 0-.5.5v11c0 .278.223.5.497.5H12z"
                      />
                      <path
                        d="M2 3h10v2H2V3zm0 3h4v3H2V6zm0 4h4v1H2v-1zm0 2h4v1H2v-1zm5-6h2v1H7V6zm3 0h2v1h-2V6zM7 8h2v1H7V8zm3 0h2v1h-2V8zm-3 2h2v1H7v-1zm3 0h2v1h-2v-1zm-3 2h2v1H7v-1zm3 0h2v1h-2v-1z"
                      />
                    </svg>
                    <div class="grow">
                      <span class="block font-semibold mb-1 text-gray-800 dark:text-gray-200"
                        >농장 소개페이지 보러가기👀</span
                      >
                      판매자에게 노출될 우리 농장의 소개페이지를 구경해 보세요.
                    </div>
                  </a>
                </div>
              </div>
              <div
                class="
                  hs-dropdown
                  [--strategy:static]
                  md:[--strategy:absolute]
                  [--adaptive:none]
                  md:[--trigger:hover]
                  py-3
                  md:py-6
                "
              >
                <button
                  type="button"
                  class="
                    flex
                    items-center
                    w-full
                    text-gray-800
                    hover:text-gray-600
                    font-medium
                    dark:text-gray-200 dark:hover:text-gray-500
                  "
                >
                  상품 관리
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
                  class="
                    hs-dropdown-menu
                    transition-[opacity,margin]
                    duration-[0.1ms]
                    md:duration-[150ms]
                    hs-dropdown-open:opacity-100
                    opacity-0
                    md:w-80
                    hidden
                    z-10
                    bg-white
                    md:shadow-2xl
                    rounded-lg
                    py-2
                    md:p-2
                    dark:bg-gray-800 dark:divide-gray-700
                    before:absolute
                    top-full
                    before:-top-5 before:left-0 before:w-full before:h-5
                  "
                >
                  <a
                    @click="moveto('/admin/product/detail/0')"
                    class="
                      inline-flex
                      gap-x-5
                      w-full
                      p-4
                      text-gray-600
                      rounded-md
                      hover:bg-gray-100
                      focus:ring-2 focus:ring-blue-500
                      dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300
                    "
                  >
                    <svg
                      class="flex-shrink-0 w-5 h-5 mt-1"
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                    >
                      <path
                        d="M4.5 5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1zM3 4.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zm2 7a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zm-2.5.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1z"
                      />
                      <path
                        d="M2 2a2 2 0 0 0-2 2v1a2 2 0 0 0 2 2h1v2H2a2 2 0 0 0-2 2v1a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-1a2 2 0 0 0-2-2h-1V7h1a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H2zm13 2v1a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1zm0 7v1a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1v-1a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1zm-3-4v2H4V7h8z"
                      />
                    </svg>
                    <div class="grow">
                      <span class="block font-semibold mb-1 text-gray-800 dark:text-gray-200"
                        >상품 등록하기</span
                      >
                      우리 농장의 상품을 등록하고 애플링 서비스를 시작해 보세요.
                    </div>
                  </a>

                  <div class="my-2 border-t border-gray-100 dark:border-gray-800"></div>

                  <a
                    @click="moveto('/admin/product/list')"
                    class="
                      inline-flex
                      gap-x-5
                      w-full
                      p-4
                      text-gray-600
                      rounded-md
                      hover:bg-gray-100
                      focus:ring-2 focus:ring-blue-500
                      dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300
                    "
                  >
                    <svg
                      class="flex-shrink-0 w-5 h-5 mt-1"
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                    >
                      <path
                        d="M0 2.5A1.5 1.5 0 0 1 1.5 1h11A1.5 1.5 0 0 1 14 2.5v10.528c0 .3-.05.654-.238.972h.738a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 1 1 0v9a1.5 1.5 0 0 1-1.5 1.5H1.497A1.497 1.497 0 0 1 0 13.5v-11zM12 14c.37 0 .654-.211.853-.441.092-.106.147-.279.147-.531V2.5a.5.5 0 0 0-.5-.5h-11a.5.5 0 0 0-.5.5v11c0 .278.223.5.497.5H12z"
                      />
                      <path
                        d="M2 3h10v2H2V3zm0 3h4v3H2V6zm0 4h4v1H2v-1zm0 2h4v1H2v-1zm5-6h2v1H7V6zm3 0h2v1h-2V6zM7 8h2v1H7V8zm3 0h2v1h-2V8zm-3 2h2v1H7v-1zm3 0h2v1h-2v-1zm-3 2h2v1H7v-1zm3 0h2v1h-2v-1z"
                      />
                    </svg>
                    <div class="grow">
                      <span class="block font-semibold mb-1 text-gray-800 dark:text-gray-200"
                        >상품 관리하기</span
                      >
                      판매자에게 노출할 상품을 등록하고, 수정할 수 있어요. 우리 농장의 상품을
                      등록하고 관리해 보세요.
                    </div>
                  </a>

                  <div class="my-2 border-t border-gray-100 dark:border-gray-800"></div>

                  <a
                    @click="moveto('/admin/product/detail/0')"
                    class="
                      inline-flex
                      gap-x-5
                      w-full
                      p-4
                      text-gray-600
                      rounded-md
                      hover:bg-gray-100
                      focus:ring-2 focus:ring-blue-500
                      dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300
                    "
                  >
                    <svg
                      class="flex-shrink-0 w-5 h-5 mt-1"
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                    >
                      <path
                        d="M4.5 5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1zM3 4.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zm2 7a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zm-2.5.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1z"
                      />
                      <path
                        d="M2 2a2 2 0 0 0-2 2v1a2 2 0 0 0 2 2h1v2H2a2 2 0 0 0-2 2v1a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-1a2 2 0 0 0-2-2h-1V7h1a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H2zm13 2v1a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1zm0 7v1a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1v-1a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1zm-3-4v2H4V7h8z"
                      />
                    </svg>
                    <div class="grow">
                      <span class="block font-semibold mb-1 text-gray-800 dark:text-gray-200"
                        >운송장 관리하기</span
                      >
                      발송한 상품을 한눈에 보고 관리할 수 있어요.
                    </div>
                  </a>
                </div>
              </div>
              <div
                class="
                  hs-dropdown
                  [--strategy:static]
                  md:[--strategy:absolute]
                  [--adaptive:none]
                  md:[--trigger:hover]
                  py-3
                  md:py-6
                "
              >
                <button
                  type="button"
                  class="
                    flex
                    items-center
                    w-full
                    text-gray-800
                    hover:text-gray-600
                    font-medium
                    dark:text-gray-200 dark:hover:text-gray-500
                  "
                >
                  계정 관리
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
                  class="
                    hs-dropdown-menu
                    transition-[opacity,margin]
                    duration-[0.1ms]
                    md:duration-[150ms]
                    hs-dropdown-open:opacity-100
                    opacity-0
                    md:w-80
                    hidden
                    z-10
                    bg-white
                    md:shadow-2xl
                    rounded-lg
                    py-2
                    md:p-2
                    dark:bg-gray-800 dark:divide-gray-700
                    before:absolute
                    top-full
                    before:-top-5 before:left-0 before:w-full before:h-5
                  "
                >
                  <a
                    @click="account()"
                    class="
                      inline-flex
                      gap-x-5
                      w-full
                      p-4
                      text-gray-600
                      rounded-md
                      hover:bg-gray-100
                      focus:ring-2 focus:ring-blue-500
                      dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300
                    "
                  >
                    <svg
                      class="flex-shrink-0 w-5 h-5 mt-1"
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                    >
                      <path
                        d="M4.5 5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1zM3 4.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zm2 7a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zm-2.5.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1z"
                      />
                      <path
                        d="M2 2a2 2 0 0 0-2 2v1a2 2 0 0 0 2 2h1v2H2a2 2 0 0 0-2 2v1a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-1a2 2 0 0 0-2-2h-1V7h1a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H2zm13 2v1a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1zm0 7v1a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1v-1a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1zm-3-4v2H4V7h8z"
                      />
                    </svg>
                    <div class="grow">
                      <span class="block font-semibold mb-1 text-gray-800 dark:text-gray-200"
                        >내 정보</span
                      >
                      내 정보, 비밀번호 변경, 개인정보 관리
                    </div>
                  </a>

                  <div class="my-2 border-t border-gray-100 dark:border-gray-800"></div>

                  <a
                    @click="logout"
                    class="
                      inline-flex
                      gap-x-5
                      w-full
                      p-4
                      text-gray-600
                      rounded-md
                      hover:bg-gray-100
                      focus:ring-2 focus:ring-blue-500
                      dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300
                    "
                  >
                    <svg
                      class="flex-shrink-0 w-5 h-5 mt-1"
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                    >
                      <path
                        d="M0 2.5A1.5 1.5 0 0 1 1.5 1h11A1.5 1.5 0 0 1 14 2.5v10.528c0 .3-.05.654-.238.972h.738a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 1 1 0v9a1.5 1.5 0 0 1-1.5 1.5H1.497A1.497 1.497 0 0 1 0 13.5v-11zM12 14c.37 0 .654-.211.853-.441.092-.106.147-.279.147-.531V2.5a.5.5 0 0 0-.5-.5h-11a.5.5 0 0 0-.5.5v11c0 .278.223.5.497.5H12z"
                      />
                      <path
                        d="M2 3h10v2H2V3zm0 3h4v3H2V6zm0 4h4v1H2v-1zm0 2h4v1H2v-1zm5-6h2v1H7V6zm3 0h2v1h-2V6zM7 8h2v1H7V8zm3 0h2v1h-2V8zm-3 2h2v1H7v-1zm3 0h2v1h-2v-1zm-3 2h2v1H7v-1zm3 0h2v1h-2v-1z"
                      />
                    </svg>
                    <div class="grow">
                      <span class="block font-semibold mb-1 text-gray-800 dark:text-gray-200"
                        >로그아웃</span
                      >
                    </div>
                  </a>

                  <div class="my-2 border-t border-gray-100 dark:border-gray-800"></div>
                </div>
              </div>

              <div class="pt-3 md:pt-0">
                <button
                  type="button"
                  class="
                    py-3
                    px-4
                    inline-flex
                    justify-center
                    items-center
                    gap-2
                    rounded-md
                    bg-blue-100
                    border border-transparent
                    font-medium
                    text-blue-500
                    hover:text-white hover:bg-blue-500
                    focus:outline-none focus:ring-2
                    ring-offset-white
                    focus:ring-blue-500 focus:ring-offset-2
                    transition-all
                  "
                  @click="movetoCommerce()"
                >
                  판매하러 가기
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
  <!-- ========== END HEADER ========== -->
</template>

<script>
import router from "../../plugins/router";
import UserAthendicateService from "@/services/UserAthendicateService";
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters("auth", ["userInfoInterface"]),
  },
  methods: {
    async logout() {
      UserAthendicateService.logout();
      router.push("/commerce/main");
      //router.go(0);
    },

    moveto(path) {
      router.push(path);
    },

    account() {
      router.push("/account");
    },

    movetoCommerce() {
      router.push("/commerce");
    },
  },
  mounted() {
    console.log(this.userInfoInterface);
  },
};
</script>
