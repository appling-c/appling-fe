<template>
  <TheCommerceHeader />
  <router-view></router-view>
</template>

<script>
import TheCommerceHeader from "../components/commerce/common/TheCommerceHeader.vue";
export default {
  components: {
    TheCommerceHeader,
  },
};
</script>
