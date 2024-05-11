<template>
  <v-theme-provider theme="custom">
    <v-app>
      <v-layout class="rounded rounded-md">

       <AppBar></AppBar>

        <v-navigation-drawer>
          <v-list>
            <v-list-item title="Navigation drawer"></v-list-item>
          </v-list>
        </v-navigation-drawer>

        <v-main>
          <v-container class="pa-0">

            <v-row justify="center" no-gutters>

              <v-col md="8" >
                <v-sheet class="ma-4 pa-4">
                  <MessageList></MessageList>
                </v-sheet>
              </v-col>
              <v-col md="4">
                <v-sheet class="ma-4 pa-4">
                  <History></History>
                </v-sheet>
              </v-col>
            </v-row>

          </v-container>
          <Footer></Footer>
        </v-main>

      </v-layout>

    </v-app>
  </v-theme-provider>
</template>

<script setup lang="ts">
//
import MessageList from "@/components/MessageList.vue";
import Footer from "@/components/layout/footer.vue";
import AppBar from "@/components/layout/AppBar.vue";
import History from "@/components/History.vue";
</script>

<style>
a {
  font-weight: bold;
}
</style>