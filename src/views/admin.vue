<script setup>
//import TheAdminHeader from "../components/admin/adminHeader.vue"
import TheAdminSideToggle from "../components/admin/adminSideToggle.vue"
import TheAdminSidebar from "../components/admin/adminSidebar.vue"
</script>

<template>
<div class="bg-gray-50 dark:bg-slate-900">
  <!-- <the-admin-header/> -->

  <!-- ========== MAIN CONTENT ========== -->
  <the-admin-side-toggle/>

  <the-admin-sidebar/>

  <!-- Content -->
   <div class="w-full pt-10 px-4 sm:px-6 md:px-8 lg:pl-72">
  <router-view></router-view>
   </div>
  <!-- End Content -->
  <!-- ========== END MAIN CONTENT ========== -->
</div>
</template>

