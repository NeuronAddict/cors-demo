<script setup lang="ts">


import {logService} from "@/services/service";
import {onMounted} from "vue";
import {logStore} from "@/core/logs-store";


onMounted(() => {
  logService.get().then(value => logStore.logs = value.data)
});

</script>

<template>
  <v-sheet>
    <div class="ma-2 pa-3 text-h5">Actions log</div>
    <v-list-item class="ma-2" v-for="logEntry in logStore.logs">
        <v-list-item-title>{{ logEntry.type }} - {{ logEntry.initiator }}</v-list-item-title>
        <v-list-item-subtitle>{{ logEntry.initiator }} has {{ logEntry.type }} message "{{ logEntry.message.message.substring(0, 15) }}..."</v-list-item-subtitle>
      </v-list-item>
  </v-sheet>
</template>

<style scoped>

</style>