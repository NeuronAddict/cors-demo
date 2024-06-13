<script setup lang="ts"></script>

<template>
  <v-layout class="rounded rounded-md">

    <slot name="app-bar"/>

    <v-navigation-drawer>
      <slot name="nav-drawer"></slot>
    </v-navigation-drawer>

    <v-main>
      <v-container class="pa-0 container">
        <slot/>
      </v-container>
      <slot name="footer"/>
    </v-main>

  </v-layout>
</template>

<style scoped>
main {
  min-height: 100vh;
  flex-direction: column;
  display: flex;
}

.container {
  flex: 1;
}
</style>