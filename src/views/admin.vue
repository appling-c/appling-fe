<template>
  <div id="admin-layout" class="bg-gray-50 dark:bg-slate-900">
    <!-- ========== HEADER ========== -->
    <the-admin-header />
    <!-- ========== END HEADER ========== -->

    <!-- ========== MAIN CONTENT ========== -->

    <!-- Content -->
    <div class="w-full pt-10 px-4 sm:px-6 md:px-8 lg:pl-64 pb-10">
      <router-view></router-view>
    </div>
    <!-- End Content -->
    <!-- ========== END MAIN CONTENT ========== -->
  </div>
</template>
<script>
import TheAdminHeader from "../components/admin/TheAdminHeader.vue";
import TheCommerceHeader from "../components/commerce/common/TheCommerceHeader.vue";

export default {
  components: {
    TheAdminHeader,
    TheCommerceHeader,
  },
};
</script>
