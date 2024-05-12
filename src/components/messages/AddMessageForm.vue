<script setup lang="ts">

import {type Ref, ref} from "vue";
import type {FormDTO, Message} from "@/core/message";
import type {VForm} from "vuetify/components";

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


async function addMessage(event: Event) {
  const valid = await form.value?.validate();

  if (!valid || !valid.valid) {
    event.preventDefault();
  } else {

    await fetch('/api/v1/messages', {
      method: 'post',
      body: JSON.stringify(message.value as Message),
      headers: {
        'Content-Type': 'application/json',
      },
    })
        .then(response => response.json())
        .then(json => {
          console.log('add message', json);
          return emit('addMessage', json as Message);
        })
        .then(_ => form.value!.reset())
        .catch(reason => errorReason.value = reason);

  }
}

</script>

<template>
  <v-form ref="form" @submit.prevent="addMessage">
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
              class="ma-2"
              ref="inputMessageTextArea"
              required="required"
              :rules="[
                  value => !!value || 'Please enter a value'
              ]"
              data-testid="message-list-input-add"

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
          ></v-text-field>
        </v-col>

        <v-col md="2">
          <v-btn data-testid="message-list-button-add"
                 type="submit"
                 class="ma-2"

          >
            <v-icon icon="mdi-plus-circle-outline"></v-icon>
          </v-btn>
        </v-col>
      </v-row>
      <v-row justify="end">
        <v-col cols="12">
          <div class="text-end pa-2 text-body-1 text-error">{{ errorReason }}</div>
        </v-col>
      </v-row>
    </v-sheet>
  </v-form>
</template>

<style scoped>

</style>