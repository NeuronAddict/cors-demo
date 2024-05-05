<script setup lang="ts">

import MessageBox from "@/components/MessageBox.vue";
import type {Message} from "@/core/message";
import {computed, onMounted, ref} from "vue";

const messages = ref([] as Array<Message>)

let loaded = ref(false);
let errorReason = ref("")

onMounted(() => {
  fetch('/api/v1/messages')
      .then(value => value.json())
      .then(value => messages.value = (value as Message[]))
      .catch(reason => {
        console.log(reason);
        errorReason.value = reason;
      })
      .finally(() => {
        loaded.value = true;
      })
  ;
});

let reverseMessages = computed(() => [...messages.value].reverse());

const messageInput = ref("");

function sendMessage(event: Event) {
  messages.value.push({author: "Anonyme", message: messageInput.value});
  messageInput.value = "";
}

</script>

<template>
    <div :hidden="loaded">
      <v-progress-circular color="primary" size="50" width="7" indeterminate></v-progress-circular>
    </div>

  <v-sheet class="ma-3">
    <v-row justify="space-around" align="center" class="ma-2">
      <v-col md="10">
      <v-textarea rows="2" prepend-icon="mdi-task" hint="Type a task to do" auto-grow v-model="messageInput" class="ma-2" ></v-textarea>
      </v-col>
      <v-col md="2">
        <v-btn @click="sendMessage" class="ma-2"><v-icon icon="mdi-plus-circle-outline"></v-icon></v-btn>
      </v-col>
    </v-row>
  </v-sheet>

    <v-virtual-scroll :items="reverseMessages" class="messages-list">
      <template v-slot:default="{ item }">
        <MessageBox :author="item.author" :message="item.message">
        </MessageBox>
      </template>
    </v-virtual-scroll>



    <div class="text-red-darken-4" :hidden="errorReason.length == 0">Error :/ {{ errorReason }}</div>
</template>

<style scoped>

.messages-list {
}

</style>