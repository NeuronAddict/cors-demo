<script setup lang="ts">

import {computed, ref} from "vue";
import colors from "vuetify/util/colors";

const props = defineProps<{
  author: string;
  message: string;
  index: number;
}>();

const messageDisabled = ref(false);

const textStyle = computed(() => messageDisabled.value ? {
  'color': colors.grey.darken3
} : {})

</script>

<template>

  <v-list-item class="ma-2 pa-4">
    <template v-slot:prepend>
      <v-list-item-action start>
        <v-checkbox-btn true-icon="mdi-check" base-color="secondary" color="secondary" lab v-model="messageDisabled"></v-checkbox-btn>
      </v-list-item-action>
    </template>
    <template v-slot:append>
      <v-btn variant="plain" class="on-surface" icon="mdi-close" @click="$emit('deleteItem', props.index)"></v-btn>
    </template>

    <v-list-item-title class="mb-2" :style="textStyle">{{ props.author}}</v-list-item-title>

    <v-list-item-subtitle :style="textStyle">
      {{ props.message }}
    </v-list-item-subtitle>
  </v-list-item>

</template>

<style scoped>

</style>