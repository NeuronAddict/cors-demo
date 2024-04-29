<script setup lang="ts">

import MessageBox from "@/components/MessageBox.vue";

const messages = [
  { title: "Hello!", message: "Un petit message pour dire bonjour"},
  { title: "C'est nul", message: "On s'en fout de dire bonjour"},
  { title: "Serieux...", message: "Et voilà déjà des messages de trolls négatifs"},
  { title: "Viagra ?", message: "Non je deconne" }
]

</script>

<template>
  <v-row justify="start" align="start">
    <v-col cols="4">

      <MessageBox v-for="message in messages" :title="message.title" :message="message.message">
      </MessageBox>
    </v-col>
  </v-row>

</template>

<style scoped>

</style>