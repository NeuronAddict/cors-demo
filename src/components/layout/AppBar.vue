<script setup lang="ts">

import {onMounted, ref, type Ref} from "vue";
// import Auth from "@/core/auth";
import type {User} from "oidc-client-ts";

let user: Ref<User | null> = ref(null);

onMounted(async () => {
  // user.value = await Auth.getUser();
  console.log("Logged with user", user.value);
});

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
    <p v-if="user" v-html="`Hello ${user.profile.given_name}`"></p>
    <v-menu v-if="user">
      <template v-slot:activator="{ props }">
        <v-btn icon="mdi-dots-vertical" v-bind="props"></v-btn>
      </template>
      <v-btn color="surface">
        <RouterLink :to="{ name: 'profile'}">Profile</RouterLink>
      </v-btn>
      <!--      <v-btn color="surface" @click="() => Auth.signoutRedirect()">Logout</v-btn>-->
    </v-menu>

    <!--    <v-btn v-if="!user" @click="() => Auth.signinRedirect()">Login</v-btn>-->

  </v-app-bar>
</template>

<style scoped>

</style>