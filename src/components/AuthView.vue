<script setup lang="ts">
import {onMounted} from "vue";
import auth from "@/core/auth";
import {router} from "@/plugins/router";

onMounted(async () => {
  await auth.signinCallback();
  await router.push("/");
});

</script>

<template>
  <div>Authenticating...</div>
</template>

<style scoped>

</style>