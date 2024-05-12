<script setup lang="ts">

import MessageBox from "@/components/MessageBox.vue";
import type {Message} from "@/core/message";
import {computed, onMounted, ref} from "vue";
import {trackHash} from "@/core/hash-compute";
import AddMessageForm from "@/components/messages/AddMessageForm.vue";
import messagesService from "@/services/messages"

const messages = ref([] as Array<Message>)

let loaded = ref(false);


onMounted(() => {

  messagesService.get()
      .then(response => messages.value = (response.data as Message[]))
      .catch(reason => {
        console.log(reason);
        errorReason.value = reason;
      })
      .finally(() => {
        loaded.value = true;
      });
});

let { hashValue } = trackHash('author');

let reverseMessages = computed(() => messages.value.reverse().filter(
        value => hashValue.value !== null ? value.author === hashValue.value : true
    ));

let errorReason = ref("");


function onAddMessage(message: Message) {
  console.log('message added', message);
  messages.value.push(message);
}


function onDeleteItem(message: Message) {
  messages.value = messages.value.reverse().filter((_, index) => index !== message.id).reverse();
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

  <MessageBox v-for="message in reverseMessages" @deleteItem="onDeleteItem" :message="message"/>

  <div class="text-error" data-testid="message-list-error" :hidden="errorReason.length == 0">Error :/ {{ errorReason }}</div>
</template>

<style scoped>

</style>