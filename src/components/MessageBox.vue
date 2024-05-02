<script setup lang="ts">

import {computed, ref} from "vue";
import colors from "vuetify/util/colors";

const props = defineProps<{
  author: string;
  message: string;
}>();

const messageDisabled = ref(false);

const textStyleDisabled = {
  'color': colors.grey.darken3
}

const buttonText = computed(() => messageDisabled.value ? "UnRead" : "Read")
const textStyle = computed(() => messageDisabled.value ? textStyleDisabled : {})

const toggleRead = (event: Event): void => {
  messageDisabled.value = !messageDisabled.value;
}

</script>

<template>

  <v-sheet class="pa-6 ma-6">
    <h4 :style="textStyle">{{ author }}</h4>
    <v-icon icon="mdiAccount" />
    <p class="text-body-1 mb-4" :style="textStyle" :class="textStyle">{{ message }}</p>
    <v-btn @click="toggleRead">{{ buttonText }}</v-btn>
  </v-sheet>

</template>

<style scoped>

p.disabled-text {
  color: colors.
}

</style>