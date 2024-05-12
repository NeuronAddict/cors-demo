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
      author: 'Truc',
      message: 'SDCsqdqsd',
      dueDate: '2024-12-12'
    },
    initiator: 'Truc',
    type: "delete"
  },
  {
    message: {
      author: 'Machin',
      message: 'SDCsqdqsd',
      dueDate: '2024-01-12'
    },
    initiator: 'Truc',
    type: "add"
  }
];

</script>

<template>

  <v-sheet class="ma-2 pa-1">
    <v-row>
      <v-col cols="12">
        <p class="text-h5">Actions log</p>
        <hr/>
      </v-col>
    </v-row>
    <v-row v-for="item in logs">
      <v-col cols="4">
        <p class="text-capitalize">{{ item.type }} :</p>
      </v-col>
      <v-col cols="8">
        <p>{{ item.initiator }} has {{ item.type }} message "{{ item.message.message.substring(0, 15) }}..."</p>
      </v-col>
    </v-row>
  </v-sheet>
</template>

<style scoped>

</style>