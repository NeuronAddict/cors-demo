<script setup lang="ts">

import {inject, type Ref, ref} from "vue";
import type {Message} from "@/core/message";
import type {VForm} from "vuetify/components";
import type {CreateDTO, FormDTO} from "@/core/dto-types";
import {logStore} from "@/core/logs-store";
import {messageStore} from "@/core/messages-store";
import type LogEntry from "@/core/log-entry";
import {logsServiceProviderKey, messageServiceProviderKey} from "@/core/provider";

const props = defineProps<{
  author: string
}>();

const emit = defineEmits<{
  (e: 'addMessage', message: Message): Promise<Response>
}>()

const form: Ref<VForm | null> = ref(null);

const dateReg = /^(19|20)\d\d-(0[1-9]|1[012])-(0[1-9]|[12][0-9]|3[01])$/;

const message: Ref<FormDTO<Message>> = ref({
  message: null,
  author: props.author,
  dueDate: null
});

const errorReason = ref("");

const messageService = inject(messageServiceProviderKey)!;
const logService = inject(logsServiceProviderKey)!;

async function addMessage(event: Event) {
  const valid = await form.value?.validate();

  if (!valid || !valid.valid) {
    event.preventDefault();
  } else {

    await messageService.post(message.value as CreateDTO<Message>)
        .then(response => {
          console.log('add message', response.data);
          emit('addMessage', response.data);
          return response.data;
        })
        .then(value => {
          messageStore.add(value);
          return value;
        })
        .then(value => logService.post({
          message: value,
          type: "add",
          initiator: 'anonymous'
        } as CreateDTO<LogEntry>))
        .then(logEntryResponse => logStore.addEntry(logEntryResponse.data))
        .then(() => form.value!.reset())
        .catch(error => {
          errorReason.value = error.message
          console.error(error);
        })

  }
}

</script>

<template>
  <v-form ref="form" @submit.prevent="addMessage" data-testid="message-add">
    <v-sheet elevation="7" class="ma-2 pa-1">
      <v-row justify="space-around" align="center" class="ma-1 pa-1">
        <v-col sd="12" md="7">
          <v-textarea
              rows="2"
              base-color="secondary"
              color="secondary"
              prepend-icon="mdi-task"
              hint="Enter a task to do"
              label="Task description"
              auto-grow
              v-model="message.message"
              class="ma-0"
              ref="inputMessageTextArea"
              required="required"
              :rules="[
                  value => !!value || 'Please enter a value'
              ]"
              data-testid="message-add-input"

          >
          </v-textarea>
        </v-col>

        <v-col sd="8" md="3">
          <v-text-field
              type="date"
              v-model="message.dueDate"
              label="Due date"
              :rules="[
                  (value) => dateReg.test(value) || 'Invalid date'
              ]"
              required="required"
              data-testid="message-add-date"
          ></v-text-field>
        </v-col>

        <v-col md="2">
          <v-btn data-testid="message-add-button"
                 type="submit"
                 class="ma-2"

          >
            <v-icon icon="mdi-plus-circle-outline"></v-icon>
          </v-btn>
        </v-col>
      </v-row>
      <v-row justify="end">
        <v-col cols="12" :hidden="!errorReason">
          <div class="text-end pa-2 text-body-1 text-error">{{ errorReason }}</div>
        </v-col>
      </v-row>
    </v-sheet>
  </v-form>
</template>

<style scoped>

</style>