<template>
  <v-theme-provider theme="custom">
    <v-app>
      <v-layout class="rounded rounded-md">

       <AppBar></AppBar>

        <v-navigation-drawer>
          <v-list>
            <v-list-item title="Navigation drawer"></v-list-item>
            <v-list-item>
              <RouterLink to="/">Home</RouterLink>
              <RouterLink to="/profile"></RouterLink>
            </v-list-item>
          </v-list>
        </v-navigation-drawer>

        <v-main>
          <v-container class="pa-0">

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
</style>