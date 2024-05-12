<script setup lang="ts">

import type {Message} from "@/core/message";

interface LogEntry {
  type: "delete" | "add" | "done" | "undone",
  message: Message,
  initiator: string
}

const logs: LogEntry[] = [
  {
    message: {
      id: 1,
      author: 'Truc',
      message: 'SDCsqdqsd',
      dueDate: '2024-12-12'
    },
    initiator: 'Truc',
    type: "delete"
  },
  {
    message: {
      id: 2,
      author: 'Machin',
      message: 'SDCsqdqsd',
      dueDate: '2024-01-12'
    },
    initiator: 'Truc',
    type: "add"
  },
  {
    message: {
      id: 3,
      author: 'Truc',
      message: 'SDCsqdqsd',
      dueDate: '2024-12-12'
    },
    initiator: 'Truc',
    type: "delete"
  },
  {
    message: {
      id: 4,
      author: 'Truc',
      message: 'SDCsqdqsd',
      dueDate: '2024-12-12'
    },
    initiator: 'Truc',
    type: "delete"
  },
];

</script>

<template>
  <v-sheet>
    <div class="ma-2 pa-3 text-h5">Actions log</div>
      <v-list-item class="ma-2" v-for="logEntry in logs">
        <v-list-item-title>{{ logEntry.type }} - {{ logEntry.initiator }}</v-list-item-title>
        <v-list-item-subtitle>{{ logEntry.initiator }} has {{ logEntry.type }} message "{{ logEntry.message.message.substring(0, 15) }}..."</v-list-item-subtitle>
      </v-list-item>
  </v-sheet>
</template>

<style scoped>

</style>