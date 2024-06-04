<script setup lang="ts">
import {onMounted} from "vue";
import auth from "@/core/auth";

onMounted(async () => {
  try {
    await auth.signinCallback();
    location.href = "/";
  } catch (error) {
    console.error(error);
  }
});

</script>

<template>
  <div>Authenticating...</div>
</template>

<style scoped>

</style>