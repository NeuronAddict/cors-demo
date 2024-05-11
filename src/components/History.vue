<script setup lang="ts">

import type {Message} from "@/core/message";

interface LogEntry {
  message: Message,
  initiator: string,
}

</script>

<template>
  <v-list>

    <v-list-subheader>Actions log</v-list-subheader>
    <v-list-item>
      <v-list-item-title>Delete action</v-list-item-title>
      <v-list-item>Truc has deleted item ...</v-list-item>
    </v-list-item>
    <v-list-item>
      <v-list-item-title>Done action</v-list-item-title>
      <v-list-item>Machin has finish item ...</v-list-item>
    </v-list-item>
  </v-list>
</template>

<style scoped>

</style>