<script setup lang="ts">

import {computed, ref} from "vue";
import colors from "vuetify/util/colors";

const props = defineProps<{
  author: string;
  message: string;
}>();

const messageDisabled = ref(false);

const textStyle = computed(() => messageDisabled.value ? {
  'color': colors.grey.darken3
} : {})

</script>

<template>

  <v-list-item class="ma-2 pa-3">
    <template v-slot:prepend>
      <v-list-item-action start>
        <v-checkbox-btn v-model="messageDisabled"></v-checkbox-btn>
      </v-list-item-action>
    </template>

    <v-list-item-title class="mb-2" :style="textStyle">{{ props.author}}</v-list-item-title>

    <v-list-item-subtitle :style="textStyle">
      {{ props.message }}
    </v-list-item-subtitle>
  </v-list-item>

</template>

<style scoped>

</style>