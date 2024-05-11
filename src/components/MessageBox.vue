<script setup lang="ts">

import {computed, ref} from "vue";
import colors from "vuetify/util/colors";
import type {Message} from "@/core/message";

const props = defineProps<{
  message: Message;
  index: number;
}>();

const messageDisabled = ref(false);

const textStyle = computed(() => messageDisabled.value ? {
  'color': colors.grey.darken3
} : {})

</script>

<template>

  <v-list-item class="ma-2 pa-4">
    <template v-slot:append>
      <v-list-item-action start>
        <v-checkbox-btn true-icon="mdi-check" base-color="secondary" color="secondary" lab v-model="messageDisabled"></v-checkbox-btn>
      </v-list-item-action>
    </template>
    <template v-slot:prepend>
      <v-btn variant="plain" class="on-surface" icon="mdi-close" @click="$emit('deleteItem', props.index)"></v-btn>
    </template>

    <v-list-item-title data-testid="message-box-item-author" class="mb-2" :style="textStyle">{{ props.message.author}} - {{ props.message.dueDate }}</v-list-item-title>

    <v-list-item-subtitle :style="textStyle">
      {{ props.message }}
    </v-list-item-subtitle>
  </v-list-item>

</template>

<style scoped>

</style>