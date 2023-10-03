<template>
  <div>
    <div class="sm:col-span-9">
      <div class="space-y-2">
        <div class="space-y-2">
          <div>
            <div class="flex rounded-md shadow-sm">
              <span
                class="
                  px-4
                  inline-flex
                  items-center
                  min-w-fit
                  rounded-l-md
                  border border-r-0 border-gray-200
                  bg-gray-50
                  text-sm text-gray-500
                "
                >이름</span
              >
              <input
                v-model="newUserForm.name"
                type="text"
                class="
                  py-2
                  px-3
                  pr-11
                  block
                  w-full
                  border-gray-200
                  shadow-sm
                  rounded-r-md
                  text-sm
                  focus:z-10 focus:border-blue-500 focus:ring-blue-500
                "
              />
            </div>
          </div>
          <div>
            <div class="flex rounded-md shadow-sm">
              <span
                class="
                  px-4
                  inline-flex
                  items-center
                  min-w-fit
                  rounded-l-md
                  border border-r-0 border-gray-200
                  bg-gray-50
                  text-sm text-gray-500
                "
                >주소</span
              >
              <input
                @click="showAddresspopup"
                v-model="newUserForm.address"
                readonly
                type="text"
                class="
                  py-2
                  px-3
                  pr-11
                  block
                  w-full
                  border-gray-200
                  shadow-sm
                  rounded-r-md
                  text-sm
                  focus:z-10 focus:border-blue-500 focus:ring-blue-500
                "
              />
              <button
                @click="showAddresspopup"
                readonly
                type="button"
                class="
                  inline-flex
                  flex-shrink-0
                  justify-center
                  items-center
                  h-[2.875rem]
                  w-[2.875rem]
                  rounded-r-md
                  border border-transparent
                  font-semibold
                  bg-blue-500
                  text-white
                  hover:bg-blue-600
                  focus:z-10 focus:outline-none focus:ring-2 focus:ring-blue-500
                  transition-all
                  text-sm
                "
              >
                <svg
                  class="h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"
                  />
                </svg>
              </button>
            </div>
          </div>
          <div>
            <div class="flex rounded-md shadow-sm">
              <span
                class="
                  px-4
                  inline-flex
                  items-center
                  min-w-fit
                  rounded-l-md
                  border border-r-0 border-gray-200
                  bg-gray-50
                  text-sm text-gray-500
                "
                >상세주소</span
              >
              <input
                v-model="newUserForm.address_detail"
                type="text"
                class="
                  py-2
                  px-3
                  pr-11
                  block
                  w-full
                  border-gray-200
                  shadow-sm
                  rounded-r-md
                  text-sm
                  focus:z-10 focus:border-blue-500 focus:ring-blue-500
                "
              />
            </div>
          </div>
          <div>
            <div class="flex rounded-md shadow-sm">
              <span
                class="
                  px-4
                  inline-flex
                  items-center
                  min-w-fit
                  rounded-l-md
                  border border-r-0 border-gray-200
                  bg-gray-50
                  text-sm text-gray-500
                "
                >우편번호</span
              >
              <input
                v-model="newUserForm.zonecode"
                readonly
                type="text"
                class="
                  py-2
                  px-3
                  pr-11
                  block
                  w-full
                  border-gray-200
                  shadow-sm
                  rounded-r-md
                  text-sm
                  focus:z-10 focus:border-blue-500 focus:ring-blue-500
                "
              />
            </div>
          </div>
          <div>
            <div class="flex rounded-md shadow-sm">
              <span
                class="
                  px-4
                  inline-flex
                  items-center
                  min-w-fit
                  rounded-l-md
                  border border-r-0 border-gray-200
                  bg-gray-50
                  text-sm text-gray-500
                "
                >연락처</span
              >
              <input
                v-model="newUserForm.tel"
                type="text"
                class="
                  py-2
                  px-3
                  pr-11
                  block
                  w-full
                  border-gray-200
                  shadow-sm
                  rounded-r-md
                  text-sm
                  focus:z-10 focus:border-blue-500 focus:ring-blue-500
                "
                @change.prevent="updateUserAddressForm()"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  props: {
    userAddressForm: Object,
  },
  data() {
    return {
      newUserForm: {
        name: "",
        address: "",
        tel: "",
        zonecode: "",
        address_detail: "",
      },
    };
    // return {
    //   userAddressForm: {
    //     name: "",
    //     address: "",
    //     tel: "",
    //     zonecode: "",
    //     address_detail: "",
    //   },
    // };
  },

  methods: {
    updateUserAddressForm() {
      this.$emit("updateUserAddressForm", this.newUserForm);
    },
    async showAddresspopup() {
      var self = this;
      new daum.Postcode({
        oncomplete: function (data) {
          const { address, zonecode, address_detail } = data;
          self.newUserForm.address = address;
          self.newUserForm.zonecode = zonecode;
          self.newUserForm.address_detail = address_detail;
        },
      }).open();
    },
  },
  mounted() {
    this.newUserForm = this.userAddressForm;
  },
};
</script>
