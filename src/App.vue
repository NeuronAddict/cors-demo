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

        <v-main class="d-flex align-center justify-center" style="min-height: 300px;">
          <MessageList/>
        </v-main>
      </v-layout>

    </v-app>
  </v-theme-provider>
</template>

<script setup lang="ts">
//
import MessageList from "@/components/MessageList.vue";
</script>
