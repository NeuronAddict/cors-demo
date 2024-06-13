<template>

  <v-app>

    <BaseLayout>

      <template v-slot:app-bar>
        <AppBar/>
      </template>

      <template v-slot:nav-drawer>
        <NavDrawer/>
      </template>

      <template v-slot:footer>
        <Footer/>
      </template>

      <RouterView/>

    </BaseLayout>

  </v-app>

</template>

<script setup lang="ts">
//
import Footer from "@/components/layout/footer.vue";
import AppBar from "@/components/layout/AppBar.vue";
import BaseLayout from "@/components/layout/BaseLayout.vue";
import NavDrawer from "@/components/layout/NavDrawer.vue";
</script>

<style>
a {
  font-weight: bold;
}

</style>