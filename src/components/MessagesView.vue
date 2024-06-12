<script setup lang="ts">

import MessageList from "@/components/messages/MessageList.vue";
import HistoryView from "@/components/HistoryView.vue";
</script>

<template>
  <v-row justify="center" no-gutters>

    <v-col md="8">
      <MessageList></MessageList>
    </v-col>
    <v-col md="4">
      <HistoryView></HistoryView>
    </v-col>
  </v-row>
</template>

<style scoped>

</style>