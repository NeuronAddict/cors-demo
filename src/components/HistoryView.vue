<script setup lang="ts">


import {inject, onMounted} from "vue";
import {logsServiceProviderKey} from "@/core/service-provider";
import {logStoreProviderKey} from "@/core/store-provider";

const logService = inject(logsServiceProviderKey)!;
const logStore = inject(logStoreProviderKey)!;

onMounted(() => {
  logService.get().then(value => logStore.items = value.data)
});

</script>

<template>
  <div class="bg-surface ma-2 pa-3 text-h5">Actions log</div>
  <v-list-item class="bg-surface ma-2" v-for="logEntry in logStore.items">
        <v-list-item-title>{{ logEntry.type }} - {{ logEntry.initiator }}</v-list-item-title>
        <v-list-item-subtitle>{{ logEntry.initiator }} has {{ logEntry.type }} message "{{ logEntry.message.message.substring(0, 15) }}..."</v-list-item-subtitle>
      </v-list-item>
</template>

<style scoped>

</style>