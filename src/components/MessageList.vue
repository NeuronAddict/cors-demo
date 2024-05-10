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

let reverseMessages = computed(() => [...messages.value].reverse().map((item, index) => {return {...item, index: index}}));

const messageInput = ref("");
const error = ref({
  hasError: false,
  message: ""
});

function sendMessage(_: Event) {

  if(messageInput.value.length == 0) {
    error.value = {
      hasError: true,
      message: 'Please enter a value'
    }
  }
  else {
    messages.value.push({author: "Anonyme", message: messageInput.value});
    messageInput.value = "";
  }

}

function textAreaChange(event: InputEvent) {
  if((event.target as HTMLTextAreaElement).value.length > 0) {
    error.value = {
      hasError: false,
      message: ""
    }
  }
}

function deleteItem(n: number) {
  messages.value = messages.value.filter((value, index) => index != n);
}

</script>

<template>

    <div :hidden="loaded">
      <v-progress-circular color="primary" size="50" width="7" indeterminate></v-progress-circular>
    </div>

  <v-sheet elevation="7" class="ma-2 pa-1">
    <v-row justify="space-around" align="center" class="ma-1 pa-1">
      <v-col md="10">
      <v-textarea
          rows="2"
          base-color="secondary"
          color="secondary"
          prepend-icon="mdi-task"
          hint="Enter a task to do"
          auto-grow
          v-model="messageInput"
          class="ma-2"
          ref="inputMessageTextArea"
          :error="error.hasError"
          :error-messages="error.message"
          @input="textAreaChange"

      >
      </v-textarea>
      </v-col>
      <v-col md="2">
        <v-btn @click="sendMessage" class="ma-2"><v-icon icon="mdi-plus-circle-outline"></v-icon></v-btn>
      </v-col>
    </v-row>
  </v-sheet>

    <v-virtual-scroll :items="reverseMessages">
      <template v-slot:default="{ item }">
        <MessageBox @delete="deleteItem" :author="item.author" :message="item.message" :index="item.index">
        </MessageBox>
      </template>
    </v-virtual-scroll>

    <div class="text-error" :hidden="errorReason.length == 0">Error :/ {{ errorReason }}</div>
</template>

<style scoped>

</style>