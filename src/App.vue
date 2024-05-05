<template>
  <v-theme-provider theme="custom">
    <v-app>
      <v-layout class="rounded rounded-md">
        <v-app-bar title="Application bar"></v-app-bar>

        <v-navigation-drawer>
          <v-list>
            <v-list-item title="Navigation drawer"></v-list-item>
          </v-list>
        </v-navigation-drawer>

        <v-main>
          <v-container>

            <v-row justify="center" no-gutters>

              <v-col md="8" >
                <v-sheet>
                  <MessageList></MessageList>
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
import Footer from "@/components/footer.vue";
</script>
