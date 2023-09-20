<template>
  <!-- Blog Article -->
  <!-- Features -->
  <div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
    <!-- Grid -->
    <div class="md:items-center md:gap-12 xl:gap-32">
      <div>
        <div class="flex flex-col">
  <div class="-m-1.5 overflow-x-auto">
    <div class="p-1.5 min-w-full inline-block align-middle">
      <div class="border rounded-lg overflow-hidden dark:border-gray-700">
        <table class="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
          <thead class="bg-gray-50 dark:bg-gray-700">
            <tr>
              <th scope="col" class="py-3 pl-4">
                <div class="flex items-center h-5">
                  <input id="hs-table-checkbox-all" type="checkbox" class="border-gray-200 rounded text-blue-600 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800">
                  <label for="hs-table-checkbox-all" class="sr-only">Checkbox</label>
                </div>
              </th>
              <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Name</th>
              <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Age</th>
              <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Address</th>
              <th scope="col" class="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase">Action</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-gray-200 dark:divide-gray-700">
            <tr>
              <td class="py-3 pl-4">
                <div class="flex items-center h-5">
                  <input id="hs-table-checkbox-1" type="checkbox" class="border-gray-200 rounded text-blue-600 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800">
                  <label for="hs-table-checkbox-1" class="sr-only">Checkbox</label>
                </div>
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200">John Brown</td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">45</td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">New York No. 1 Lake Park</td>
              <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                <a class="text-blue-500 hover:text-blue-700" href="#">Delete</a>
              </td>
            </tr>

          </tbody>
        </table>
      </div>
    </div>
  </div>
</div>
        <!-- <table class="rounded-xl">
          <caption>
            주문 내역
          </caption>
          <thead>
            <tr>
              <th scope="col">상품명</th>
              <th scope="col">수량</th>
              <th scope="col">가격</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(invent, index) in inventoryList" :key="index">
              <td data-label="Due Date">{{ invent.productName }}</td>
              <td data-label="Account">
                <select
                  class="
                    py-3
                    px-4
                    pr-9
                    block
                    w-full
                    border-gray-200
                    rounded-md
                    text-sm
                    focus:border-blue-500 focus:ring-blue-500
                    dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400
                    sm:p-4
                  "
                  v-model="invent.count"
                >
                  <option selected>수량</option>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                </select>
              </td>
              <td data-label="Period">{{ invent.price }}</td>
            </tr>
          </tbody>
        </table> -->
      </div>
      <!-- End Col -->
      <!-- End Col -->
    </div>
    <!-- End Grid -->
  </div>
  <!-- End Blog Article -->
</template>

<script lang="ts">
import { mapGetters } from "vuex";
import TheUserAddressForm from "./common/TheUserAddressForm.vue";

export default {
  components: {
    TheUserAddressForm,
  },
  computed: {
    ...mapGetters("cart", ["inventory"]),
    ...mapGetters("auth", ["userInfoInterface"]),
  },
  data() {
    return {
      inventoryList: [],
      isLogin: false,
      orderInfo: {},
      deiveryInfo: {},
    };
  },
  methods: {
    setOrder() {
      console.log(this.inventory, this.orderInfo, this.deiveryInfo);
    },
  },
  mounted() {
    this.inventoryList = this.inventory;
    if (Object.keys(this.userInfoInterface).length == 0) {
      this.isLogin = false;
    } else {
      this.isLogin = true;
    }
  },
};
</script>

<style scoped>
table {
  
  border-collapse: collapse;
  margin: 0;
  padding: 0;
  width: 100%;
  table-layout: fixed;
}

table caption {
  font-size: 1.5em;
  margin: 0.5em 0 0.75em;
}

table tr {
  
  padding: 0.35em;
}

table th,
table td {
  padding: 0.625em;
  text-align: center;
}

table th {
  font-size: 0.85em;
  letter-spacing: 0.1em;
  text-transform: uppercase;
}

@media screen and (max-width: 600px) {
  table {
    border: 0;
  }

  table caption {
    font-size: 1.3em;
  }

  table thead {
    border: none;
    clip: rect(0 0 0 0);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    width: 1px;
  }

  table tr {
    
    display: block;
    margin-bottom: 0.625em;
  }

  table td {
    
    display: block;
    font-size: 0.8em;
    text-align: right;
  }

  table td::before {
    /*
    * aria-label has no advantage, it won't be read inside a table
    content: attr(aria-label);
    */
    content: attr(data-label);
    float: left;
    font-weight: bold;
    text-transform: uppercase;
  }

  table td:last-child {
    border-bottom: 0;
  }
}
</style>
