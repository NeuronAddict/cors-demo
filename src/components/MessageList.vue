<script setup lang="ts">

import MessageBox from "@/components/MessageBox.vue";
import type {Message} from "@/core/message";
import {computed, onMounted, ref} from "vue";
import {trackHash} from "@/core/hash-compute";

const messages = ref([] as Array<Message>)

let loaded = ref(false);
const dateInput = ref('');
const messageInput = ref("");

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

let { hashValue } = trackHash('author');



let reverseMessages = computed(() => [...messages.value].reverse().filter(
    value => hashValue.value !== null ? value.author === hashValue.value : true
).map((item, index) => {
  return { message: item, index: index}
}));

const error = ref({
  hasError: false,
  message: ""
});
let errorReason = ref("");

function sendMessage(_: Event) {

  if (messageInput.value.length == 0) {
    error.value = {
      hasError: true,
      message: 'Please enter a value'
    }
  } else {
    fetch('/api/v1/messages', {
      method: 'post',
      body: JSON.stringify({author: 'Anonymous', message: messageInput.value, dueDate: dateInput.value} as Message),
      headers: {
        'Content-Type': 'application/json',
      },
    })
        .then(value => value.json())
        .then(json => {
          messages.value.push(json as Message);
          messageInput.value = "";
        });
  }

}

function textAreaChange(event: InputEvent) {
  if ((event.target as HTMLTextAreaElement).value.length > 0) {
    error.value = {
      hasError: false,
      message: ""
    }
  }
}

function deleteItem(n: number) {
  fetch(`/api/v1/messages/${n}`, {method: 'delete'}).then(_ => messages.value = messages.value.reverse().filter((_, index) => index !== n).reverse());
}

</script>

<template>

  <div :hidden="loaded">
    <v-progress-circular color="primary" size="50" width="7" indeterminate></v-progress-circular>
  </div>

  <v-card class="ma-2">
    <v-card-title>Tasks TODO</v-card-title>
  </v-card>

  <v-sheet elevation="7" class="ma-2 pa-1">
    <v-row justify="space-around" align="center" class="ma-1 pa-1">
      <v-col sd="12" md="7">
        <v-textarea
            rows="2"
            base-color="secondary"
            color="secondary"
            prepend-icon="mdi-task"
            hint="Enter a task to do"
            label="Task description"
            auto-grow
            v-model="messageInput"
            class="ma-2"
            ref="inputMessageTextArea"
            :error="error.hasError"
            :error-messages="error.message"
            @input="textAreaChange"
            data-testid="message-list-input-add"

        >
        </v-textarea>
      </v-col>

      <v-col sd="8" md="3">
        <v-text-field type="date" v-model="dateInput" label="Due date"></v-text-field>
      </v-col>

      <v-col md="2">
        <v-btn data-testid="message-list-button-add" @click="sendMessage" class="ma-2">
          <v-icon icon="mdi-plus-circle-outline"></v-icon>
        </v-btn>
      </v-col>
    </v-row>
  </v-sheet>

  <v-virtual-scroll :items="reverseMessages">
    <template v-slot:default="{ item }">
      <MessageBox @deleteItem="deleteItem" :message="item.message" :index="item.index">
      </MessageBox>
    </template>
  </v-virtual-scroll>

  <div class="text-error" data-testid="message-list-error" :hidden="errorReason.length == 0">Error :/ {{ errorReason }}</div>
</template>

<style scoped>

</style>