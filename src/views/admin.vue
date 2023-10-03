<template>
  <div class="bg-gray-50 dark:bg-slate-900">
    <!-- ========== HEADER ========== -->
    <the-admin-header />
    <!-- ========== END HEADER ========== -->

    <!-- ========== MAIN CONTENT ========== -->

    <!-- Content -->
    <div class="w-full pt-10 px-4 sm:px-6 md:px-8 lg:pl-72">
      <router-view @openModal="openModal" :confirm="confirm"></router-view>
    </div>
    <!-- End Content -->
    <!-- ========== END MAIN CONTENT ========== -->
  </div>
</template>
<script>
import TheAdminHeader from "../components/admin/TheAdminHeader.vue";
export default {
  components: {
    TheAdminHeader,
  },
  data() {
    return {
      currentPopup: "hidden",
      title: "",
      subtitle: "",
      btn: {
        confirmText: "확인",
        cancelText: "취소",
      },
      confirm: false,
    };
  },
  methods: {
    onConfirm() {
      this.confirm = !this.confirm;
      this.$emit("onConfirm", this.confirm);
      this.closePopup();
    },
    closePopup() {
      this.currentPopup = "hidden";
    },
    onCancel() {
      this.closePopup();
    },
    openModal(data) {
      this.showPopup(data);
    },
    showPopup(data) {
      const { title, subtitle, btn } = data;
      this.title = title;
      this.subtitle = subtitle;
      this.btn.confirmText = btn?.confirmText;
      this.btn.cancelText = btn?.cancelText;
      this.currentPopup = "open";
    },
  },
};
</script>
