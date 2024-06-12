<script setup lang="ts">

import {inject, ref, watch} from "vue";
import type {Message} from "@/core/message";
import type LogEntry from "@/core/log-entry";
import type {CreateDTO} from "@/core/dto-types";
import {logsServiceProviderKey, messageServiceProviderKey} from "@/core/service-provider";
import {logStoreProviderKey, messageStoreProviderKey} from "@/core/store-provider";

const props = defineProps<{
  message: Message;
}>();

const emit = defineEmits<{
  (e: 'deleteMessage', message: Message): Promise<Response>,
}>()

const messageService = inject(messageServiceProviderKey)!;
const logService = inject(logsServiceProviderKey)!;
const messageStore = inject(messageStoreProviderKey)!;
const logStore = inject(logStoreProviderKey)!;

function deleteItem() {
  messageService.delete(props.message)
      .then(_ => messageStore.delete(props.message))
      .then(_ => logService.post({
        initiator: 'anonymous',
        type: "delete",
        message: props.message
      }))
      .then(value => logStore.add(value.data))
      .then(_ => emit('deleteMessage', props.message));

}
const messageDisabled = ref(false);

watch(messageDisabled, async (newValue, _) => {
  const logEntry: CreateDTO<LogEntry> = {
    message: props.message,
    type: newValue ? "done" : "undone",
    initiator: 'anonymous'
  }
  await logService.post(logEntry).then(value => logStore.add(value.data));
});

</script>

<template>
  <v-list-item elevation="7" class="bg-surface surface ma-2 pa-4" :class="{ greyed: messageDisabled }"
               data-testid="message-box-item">
    <template v-slot:append>
      <v-list-item-action start>
        <v-checkbox-btn data-testid="message-box-checkbox"
                        true-icon="mdi-check"
                        base-color="secondary"
                        color="secondary"
                        v-model="messageDisabled"
                        label="done"
        ></v-checkbox-btn>


        <v-menu>
          <template v-slot:activator="{ props }">
            <v-btn class="ma-3" color="surface" icon="mdi-dots-vertical" v-bind="props"
                   data-testid="message-box-dots"></v-btn>
          </template>
          <v-list>
            <v-list-item>
              <v-list-item-title>
                <v-btn variant="text" class="on-surface" icon="mdi-delete" @click="deleteItem"
                       data-testid="message-box-delete"></v-btn>
              </v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>

      </v-list-item-action>
    </template>
    <template v-slot:prepend>
    </template>
    <v-list-item-title data-testid="message-box-item-author" class="mb-2">{{ props.message.author }}
      {{ props.message.dueDate }}
    </v-list-item-title>

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