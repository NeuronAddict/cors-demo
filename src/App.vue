<template>
  <v-theme-provider theme="custom">
    <v-app>
      <v-layout class="rounded rounded-md">

        <AppBar></AppBar>

        <v-navigation-drawer>
          <v-list>
            <v-list-item title="Navigation drawer"></v-list-item>
            <v-list-item>
              <RouterLink :to="{name: 'home'}">Home</RouterLink>
            </v-list-item>
          </v-list>
        </v-navigation-drawer>

        <v-main>
          <v-container class="pa-0 container">

            <RouterView></RouterView>

          </v-container>
          <Footer></Footer>
        </v-main>

      </v-layout>

    </v-app>
  </v-theme-provider>
</template>

<script setup lang="ts">
//
import Footer from "@/components/layout/footer.vue";
import AppBar from "@/components/layout/AppBar.vue";
</script>

<style>
a {
  font-weight: bold;
}

main {
  min-height: 100vh;
  flex-direction: column;
  display: flex;
}

.container {
  flex: 1;
}
</style>