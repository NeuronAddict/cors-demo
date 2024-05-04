<script setup lang="ts">

import MessageBox from "@/components/MessageBox.vue";
import type {Message} from "@/core/message";
import {onMounted, ref} from "vue";

const messages = ref([] as Message[])

let loaded = ref(false);
let errorReason = ref("")

onMounted(() => {
  fetch('/api/v1/messages')
      .then(value => value.json())
      .then(value => messages.value = value)
      .catch(reason => {
        console.log(reason);
        errorReason.value = reason;
      })
      .finally(() => {
        loaded.value = true;
      })
  ;
});

</script>

<template>
  <div :hidden="loaded">
    <v-progress-circular color="primary" size="50" width="7" indeterminate></v-progress-circular>
  </div>

  <v-virtual-scroll :items="messages" class="messages-list">
    <template v-slot:default="{ item }">
      <MessageBox :author="item.author" :message="item.message">
      </MessageBox>
    </template>
  </v-virtual-scroll>

  <div class="text-red-darken-4" :hidden="errorReason.length == 0">Error :/ {{ errorReason }}</div>
</template>

<style scoped>

.messages-list {
  height: 80vh;
}

.message-add {
  height: 20vh;
}

</style>