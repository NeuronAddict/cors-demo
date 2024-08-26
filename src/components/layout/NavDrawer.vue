<script setup lang="ts">

interface MenuItem {
  name: string,
  display: string
}

const menuItems: {}[] = [
  {
    name: "home",
    display: "Home",
  },
  {
    name: 'profile',
    display: "Profile",
  },
  {
    name: "login",
    display: "Login"
  }
]
</script>

<template>
  <v-list>
    <v-list-item v-for="menuItem in menuItems">
      <RouterLink :to="{name: menuItem.name}">{{ menuItem.display }}</RouterLink>
    </v-list-item>
  </v-list>
</template>

<style scoped>

</style>