<script setup>
import TheAdminHeader from "../components/admin/adminHeader.vue"
import TheAdminSideToggle from "../components/admin/adminSideToggle.vue"
import TheAdminSidebar from "../components/admin/adminSidebar.vue"
</script>

<template>
<div class="bg-gray-50 dark:bg-slate-900">
  <the-admin-header/>

  <!-- ========== MAIN CONTENT ========== -->
  <the-admin-side-toggle/>

  <the-admin-sidebar/>

  <!-- Content -->
  <router-view></router-view>
  <!-- End Content -->
  <!-- ========== END MAIN CONTENT ========== -->
</div>
</template>

