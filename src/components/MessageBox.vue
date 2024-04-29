<script setup lang="ts">

const props = defineProps<{
  title: string;
  message: string;
}>();

</script>

<template>

  <v-sheet class="pa-6 ma-6">
    <h4>{{ title }}</h4>
    <p>{{ message }}</p>
  </v-sheet>

</template>

<style scoped>

</style>