<script setup lang="ts">

import {ref, type Ref} from "vue";
import Auth from "@/core/auth";
import type {User} from "oidc-client-ts";

const items = [
  { title: 'Profile', path: '/profile' },
  { title: 'Preferences', path: '/preferences' },
  { title: 'Logout', path: '/logout' },

];

let user: Ref<User | null> = ref(null);
Auth.getUser().then(user_ => user.value = user_);

</script>

<template>
  <v-app-bar elevation="2">
    <template v-slot:prepend>
      <v-app-bar-nav-icon></v-app-bar-nav-icon>
    </template>
    <v-app-bar-title>
      <p><a href="https://neuronaddict.org">https://neuronaddict.org</a></p>
    </v-app-bar-title>

    <v-spacer></v-spacer>

    <v-menu v-if="user">
      <template v-slot:activator="{ props }">
        <v-btn icon="mdi-dots-vertical" v-bind="props"></v-btn>
      </template>
      <v-list>
        <v-list-item v-for="(item, i) in items" :key="i">
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>

    <v-btn v-if="!user" @click="() => Auth.signinRedirect()">Login</v-btn>
    <v-btn v-if="user" @click="() => Auth.signoutRedirect()">Logout</v-btn>

  </v-app-bar>
</template>

<style scoped>

</style>