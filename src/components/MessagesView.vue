<script setup lang="ts">

import History from "@/components/History.vue";
import MessageList from "@/components/messages/MessageList.vue";
</script>

<template>
  <v-row justify="center" no-gutters>

    <v-col md="8">
      <MessageList></MessageList>
    </v-col>
    <v-col md="4">
      <History></History>
    </v-col>
  </v-row>
</template>

<style scoped>

</style>