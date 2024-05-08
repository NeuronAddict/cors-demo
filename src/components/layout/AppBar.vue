<script setup lang="ts">

const items = [
  { title: 'Profile', path: '/profile' },
  { title: 'Preferences', path: '/preferences' },
  { title: 'Logout', path: '/logout' },

];

</script>

<template>
  <v-app-bar elevation="2">
    <template v-slot:prepend>
      <v-app-bar-nav-icon></v-app-bar-nav-icon>
    </template>
    <v-app-bar-title>
      <p><a href="https://neuronaddict.org">https://neuronaddict.org</a></p>
    </v-app-bar-title>

    <v-spacer></v-spacer>

    <v-menu>
      <template v-slot:activator="{ props }">
        <v-btn icon="mdi-dots-vertical" v-bind="props"></v-btn>
      </template>
      <v-list>
        <v-list-item v-for="(item, i) in items" :key="i">
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>


  </v-app-bar>
</template>

<style scoped>

</style>