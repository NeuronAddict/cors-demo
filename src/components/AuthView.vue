<script setup lang="ts">
import {onMounted} from "vue";
// import auth from "@/core/auth";
import MainSheet from "@/components/layout/MainSheet.vue";

onMounted(async () => {
  // try {
  //   await auth.signinCallback();
  //   location.href = "/";
  // } catch (error) {
  //   console.error(error);
  // }
});

</script>

<template>
  <MainSheet>
    <div>Authenticating...</div>
  </MainSheet>
</template>

<style scoped>

</style>