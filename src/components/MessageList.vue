<script setup lang="ts">

import MessageBox from "@/components/MessageBox.vue";

interface Message {
  author: string,
  message: string
}

const messages: Message[] = [
  { author: "Truc", message: "Un petit message pour dire bonjour"},
  { author: "Bidule", message: "On s'en fout de dire bonjour"},
  { author: "Machin", message: "Et voilà déjà des messages de trolls négatifs"},
  { author: "Spam", message: "Viagra ?" }
]

</script>

<template>
  <v-row justify="start" align="start">
    <v-col cols="4">

      <MessageBox v-for="message in messages" :author="message.author" :message="message.message">
      </MessageBox>
    </v-col>
  </v-row>

</template>

<style scoped>

</style>