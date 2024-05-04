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
          <v-container class="fill-height">

            <v-row class="fill-height" justify="center">

              <v-col md="8" >
                <v-sheet>
                  <MessageList></MessageList>
                </v-sheet>
              </v-col>
            </v-row>
          </v-container>

        </v-main>
      </v-layout>

    </v-app>
  </v-theme-provider>
</template>

<script setup lang="ts">
//
import MessageList from "@/components/MessageList.vue";
</script>
