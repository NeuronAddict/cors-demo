<script setup lang="ts">

</script>

<template>
  <v-list>
    <v-list-item>
      <RouterLink :to="{name: 'home'}">Home</RouterLink>
    </v-list-item>
    <v-list-item>
      <RouterLink :to="{name: 'profile'}">Profile</RouterLink>
    </v-list-item>
  </v-list>
</template>

<style scoped>

</style>