<script setup lang="ts">

import MessageBox from "@/components/MessageBox.vue";
import type {Message} from "@/core/message";
import {computed, onMounted, ref} from "vue";
import {trackHash} from "@/core/hash-compute";
import AddMessageForm from "@/components/messages/AddMessageForm.vue";

const messages = ref([] as Array<Message>)

let loaded = ref(false);


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


let errorReason = ref("");


function onAddMessage(message: Message) {
  console.log('message added', message);
  messages.value.push(message);
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

  <AddMessageForm author="anonymous" @addMessage="onAddMessage" />
  <MessageBox v-for="item in reverseMessages" @deleteItem="deleteItem" :message="item.message" :index="item.index">
      </MessageBox>
  <div class="text-error" data-testid="message-list-error" :hidden="errorReason.length == 0">Error :/ {{ errorReason }}</div>
</template>

<style scoped>

</style>