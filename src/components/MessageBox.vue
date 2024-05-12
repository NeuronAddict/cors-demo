<script setup lang="ts">

import {ref} from "vue";
import type {Message} from "@/core/message";

const props = defineProps<{
  message: Message;
  index: number;
}>();

const messageDisabled = ref(false);

</script>

<template>

  <v-list-item class="ma-2 pa-4" :class="{ greyed: messageDisabled }">
    <template v-slot:append>
      <v-list-item-action start>
        <v-checkbox-btn data-testid="message-box-item-cb"
                        true-icon="mdi-check"
                        base-color="secondary"
                        color="secondary"
                        v-model="messageDisabled"
                        label="done"
        ></v-checkbox-btn>


        <v-menu>
          <template v-slot:activator="{ props }">
            <v-btn class="ma-3" color="surface" icon="mdi-dots-vertical" v-bind="props"></v-btn>
          </template>
          <v-list>
            <v-list-item>
              <v-list-item-title>
                <v-btn variant="text" class="on-surface" icon="mdi-delete" @click="$emit('deleteItem', props.index)"></v-btn>
              </v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>

      </v-list-item-action>
    </template>
    <template v-slot:prepend>
    </template>

    <v-list-item-title data-testid="message-box-item-author" class="mb-2">{{ props.message.author}} - {{ props.message.dueDate }}</v-list-item-title>

    <v-list-item-subtitle data-testid="message-box-item-message">
      {{ props.message.message }}
    </v-list-item-subtitle>
  </v-list-item>

</template>

<style scoped>
.greyed {
  opacity: 0.4;
}
</style>