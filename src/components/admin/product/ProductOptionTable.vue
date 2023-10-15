<template>
  <div>
    <!-- Modal -->
    <div
      id="hs-modal-upgrade-to-pro"
      class="hs-overlay hidden w-full h-full fixed top-0 left-0 z-[60] overflow-x-hidden overflow-y-auto"
    >
      <div
        class="hs-overlay-open:mt-7 hs-overlay-open:opacity-100 hs-overlay-open:duration-500 mt-0 opacity-0 ease-out transition-all sm:max-w-lg sm:w-full m-3 sm:mx-auto"
      >
        <div
          class="bg-white border border-gray-200 rounded-xl shadow-sm dark:bg-gray-800 dark:border-gray-700"
        >
          <div class="p-4 sm:p-7">
            <div class="text-center">
              <h2
                class="block text-xl sm:text-2xl font-semibold text-gray-800 dark:text-gray-200"
              >
                {{ editorTitle == "add" ? "옵션 추가" : "옵션 수정" }}
              </h2>

              <p class="mt-2 text-sm text-gray-600 dark:text-gray-400">
                모든 항목은 필수 입력 항목입니다.
              </p>
            </div>

            <div class="mt-8 sm:mt-10 divide-y divide-gray-200 dark:divide-gray-700">
              <!-- Icon -->
              <div
                class="grid sm:grid-cols-12 gap-2 sm:gap-4 py-8 first:pt-0 last:pb-0 border-t first:border-transparent border-gray-200 dark:border-gray-700"
              >
                <div class="sm:col-span-3">
                  <label class="inline-block text-base font-medium text-gray-500 mt-2.5">
                    옵션명
                  </label>
                </div>
                <!-- End Col -->

                <div class="sm:col-span-9">
                  <div class="sm:flex">
                    <input
                      v-model="targetOption.name"
                      type="text"
                      class="py-2 px-3 pr-11 block w-full border-gray-200 shadow-sm text-base rounded-lg focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
                    />
                  </div>
                </div>
                <div class="sm:col-span-3">
                  <label class="inline-block text-base font-medium text-gray-500 mt-2.5">
                    수량
                  </label>
                </div>
                <!-- End Col -->

                <div class="sm:col-span-9">
                  <div class="sm:flex">
                    <input
                      v-model="targetOption.ea"
                      type="text"
                      class="py-2 px-3 pr-11 block w-full border-gray-200 shadow-sm text-base rounded-lg focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
                    />
                  </div>
                </div>
                <div class="sm:col-span-3">
                  <label class="inline-block text-base font-medium text-gray-500 mt-2.5">
                    가격
                  </label>
                </div>
                <!-- End Col -->

                <div class="sm:col-span-9">
                  <div class="sm:flex relative">
                    <input
                      v-model="targetOption.extra_price"
                      type="number"
                      id="hs-input-with-leading-and-trailing-icon"
                      name="hs-input-with-leading-and-trailing-icon"
                      class="py-3 px-4 pl-9 pr-16 block w-full border-gray-200 shadow-sm rounded-md text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
                      :placeholder="targetOption.extra_price"
                    />
                    <div
                      class="absolute inset-y-0 left-0 flex items-center pointer-events-none z-20 pl-4"
                    >
                      <span class="text-gray-500">₩</span>
                    </div>
                    <div
                      class="absolute inset-y-0 right-0 flex items-center pointer-events-none z-20 pr-4"
                    >
                      <span class="text-gray-500">원</span>
                    </div>
                  </div>
                </div>
                <div class="sm:col-span-3">
                  <label class="inline-block text-base font-medium text-gray-500 mt-2.5">
                    노출여부
                  </label>
                </div>
                <!-- End Col -->

                <div class="sm:col-span-9">
                  <div class="sm:flex">
                    <div class="inline-flex rounded-md shadow-sm">
                      <button
                        v-for="option in options"
                        :key="option"
                        type="button"
                        @click="setTargetOptionStatus(option.key)"
                        :class="
                          targetOption.status == option.key
                            ? 'bg-blue-400 text-white hover:bg-blue-700'
                            : 'bg-white text-gray-700 hover:bg-gray-50'
                        "
                        class="py-3 px-4 inline-flex justify-center items-center gap-2 -ml-px first:rounded-l-lg first:ml-0 last:rounded-r-lg border font-medium align-middle focus:z-10 focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all"
                      >
                        {{ option.name }}
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <!-- End Icon -->
            </div>
          </div>

          <!-- Footer -->
          <div
            class="flex justify-end items-center gap-x-2 p-4 sm:px-7 border-t dark:border-gray-700"
          >
            <button
              type="button"
              class="py-2.5 px-4 inline-flex justify-center items-center gap-2 rounded-md border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm dark:bg-gray-800 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800"
              data-hs-overlay="#hs-modal-upgrade-to-pro"
            >
              취소
            </button>
            <a
              @click="updateTargetOption()"
              class="py-2.5 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800"
              data-hs-overlay="#hs-modal-upgrade-to-pro"
            >
              확인
            </a>
          </div>
          <!-- End Footer -->
        </div>
      </div>
    </div>
    <!-- End Modal -->
    <button
      data-hs-overlay="#hs-modal-upgrade-to-pro"
      type="button"
      class="w-full py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm dark:bg-slate-900 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800"
    >
      옵션 추가
    </button>
    <div class="mt-5 relative overflow-x-auto shadow-md sm:rounded-lg">
      <table
        v-if="optionList.length > 0"
        class="w-full text-base text-left text-gray-500 dark:text-gray-400"
      >
        <thead
          class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"
        >
          <tr>
            <th scope="col" class="px-6 py-3">상품명</th>
            <th scope="col" class="px-6 py-3">
              <div class="flex items-center">수량</div>
            </th>
            <th scope="col" class="px-6 py-3">
              <div class="flex items-center">가격</div>
            </th>
            <th scope="col" class="px-6 py-3">
              <div class="flex items-center">노출여부</div>
            </th>
            <th scope="col" class="px-6 py-3">
              <span class="sr-only">Edit</span>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="(product, index) in optionList"
            :key="index"
            class="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
          >
            <th
              scope="row"
              class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              {{ product.name }}
            </th>
            <td class="px-6 py-4">{{ product.ea }}</td>

            <td class="px-6 py-4">{{ product.extra_price?.toLocaleString() }}</td>

            <td class="px-6 py-4">
              <span
                v-if="product.status == 1"
                class="inline-flex items-center gap-1.5 py-1.5 px-3 rounded-full text-xs font-medium bg-gray-100 text-gray-800"
                >비노출</span
              >

              <span
                v-else
                class="inline-flex items-center gap-1.5 py-1.5 px-3 rounded-full text-xs font-medium bg-green-100 text-green-800"
                >노출</span
              >
            </td>
            <td class="px-6 py-4 text-right">
              <a
                @click="setTargetOption(product, index)"
                data-hs-overlay="#hs-modal-upgrade-to-pro"
                class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                >편집</a
              >
            </td>
          </tr>
        </tbody>
      </table>
      <div
        v-else
        class="grid sm:grid-cols-12 gap-2 sm:gap-4 py-8 first:pt-0 last:pb-0 border-t first:border-transparent border-gray-200 dark:border-gray-700"
      >
        <div class="sm:col-span-12 text-center">
          <label class="inline-block text-base font-medium text-gray-500 mt-2.5">
            옵션이 없습니다. <br />
            옵션 추가 버튼을 눌러 옵션을 추가해보세요.
          </label>
        </div>
      </div>
    </div>
    <p v-if="optionList.length > 0" class="mt-2 text-sm text-gray-600 dark:text-gray-400">
      총 상품수량 :
      {{ totalStock.toLocaleString() }}
    </p>
  </div>
</template>
<script>
export default {
  props: {
    optionList: { type: Array, default: () => [] },
  },
  data() {
    return {
      newOptionList: [],
      targetOption: {
        name: "",
        extra_price: "",
        ea: "",
        status: 0,
      },
      options: [
        { key: 0, name: "노출" },
        { key: 1, name: "비노출" },
      ],
      targetIndex: 0,
      editorTitle: "add",
      totalStock: 0,
    };
  },
  methods: {
    setTargetOptionStatus(key) {
      this.targetOption.status = key;
    },
    setTargetOption(option, index) {
      this.targetIndex = index;
      this.targetOption = Object.assign([], option);
      this.editorTitle = "modify";
    },

    emitOptionList() {
      this.editorTitle = "add";
      this.targetIndex = 0;
      this.targetOption = {
        name: "",
        extra_price: 0,
        ea: 0,
        status: 0,
      };

      this.newOptionList = Object.assign([], this.optionList);
      this.totalStock = 0;

      let sumWithInitial = 0;
      this.optionList.map((x) => {
        if (x.status == 0) {
          sumWithInitial += Number(x.ea);
        }
      });

      this.totalStock = sumWithInitial.toLocaleString();
      this.$emit("updateOptionList", this.newOptionList);
    },
    updateTargetOption() {
      if (this.editorTitle == "add") {
        this.optionList.push(this.targetOption);
      } else {
        this.optionList[this.targetIndex] = this.targetOption;
      }
      this.emitOptionList();
    },
  },
  mounted() {},
};
</script>
