<script setup lang="ts">

import MessageBox from "@/components/messages/MessageBox.vue";
import {computed, inject, onMounted, ref} from "vue";
import {trackHash} from "@/core/hash-compute";
import AddMessageForm from "@/components/messages/AddMessageForm.vue";
import MessageSearch from "@/components/messages/MessageSearch.vue";
import {messageServiceProviderKey} from "@/core/service-provider";
import {messageStoreProviderKey} from "@/core/store-provider";

let loaded = ref(false);

const messageService = inject(messageServiceProviderKey)!;
const messageStore = inject(messageStoreProviderKey)!;

onMounted(() => {

  messageService.get()
      .then(response => messageStore.items = response.data)
      .catch(reason => {
        console.log(reason);
        errorReason.value = reason;
      })
      .finally(() => {
        loaded.value = true;
      });
});

let { hashValue } = trackHash('author');

let reverseMessages = computed(() => [...messageStore.items].reverse().filter(
    value => hashValue.value !== null ? value.author === hashValue.value : true
));

let errorReason = ref("");

</script>

<template>

  <div :hidden="loaded">
    <v-progress-circular color="primary" size="50" width="7" indeterminate></v-progress-circular>
  </div>

  <v-card class="ma-2">
    <v-card-title>Tasks TODO</v-card-title>
  </v-card>

  <MessageSearch/>

  <AddMessageForm/>

  <MessageBox v-for="message in reverseMessages" :message="message"/>

  <div class="text-error" data-testid="message-list-error" :hidden="errorReason.length == 0">Error :/ {{ errorReason }}</div>
</template>

<style scoped>

</style>