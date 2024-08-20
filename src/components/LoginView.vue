<script setup lang="ts">

import {inject, ref} from "vue";
import {loginServiceProviderKey} from "@/core/service-provider";

const loginService = inject(loginServiceProviderKey)!;

const username = ref();
const password = ref();

async function login() {
  await loginService.post(username.value, password.value)
      .then(_ => localStorage.setItem("user", username.value))
      .then(_ => location.href = '/');
}

</script>

<template>
  <v-container>
    <v-form>
      <v-row>
        <v-col>
          <v-label>
            Name:
          </v-label>
          <v-text-field name="j_username" v-model="username"></v-text-field>
        </v-col>
      </v-row>

      <v-row>
        <v-col>
          <v-label>
            Username:
          </v-label>
          <v-text-field name="j_password" v-model="password" type="password"></v-text-field>
        </v-col>
      </v-row>

      <v-form>
        <v-col>
          <v-btn @click="login">Login</v-btn>
        </v-col>
      </v-form>

    </v-form>

  </v-container>
</template>

<style scoped>

</style>