<script setup lang="ts">

import {inject, onMounted, ref, type Ref} from "vue";
// import Auth from "@/core/auth";
import {OidcAuth} from "@/core/oidc-auth";
import {AuthType, type GenericUser, userProviderKey} from "@/core/auth";


const userManager = inject(userProviderKey)!;
let user: Ref<GenericUser | null> = ref(null);

onMounted(async () => {
  user.value = await userManager.getUser();
  console.log("Logged with user", user.value);
});

function login() {
  if(userManager.authType === AuthType.Cookie) {
    location.href = '/login';
  }
  else {
    OidcAuth.signinRedirect()
  }
}

function logout() {

  if(userManager.authType === AuthType.Cookie) {
    location.href = '/logout';
  }
  else {
    OidcAuth.signoutRedirect();
  }
}

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
    <p v-if="user" v-html="`Hello ${user.username}`"></p>
    <v-menu v-if="user">
      <template v-slot:activator="{ props }">
        <v-btn icon="mdi-dots-vertical" v-bind="props"></v-btn>
      </template>
      <v-btn color="surface">
        <RouterLink :to="{ name: 'profile'}">Profile</RouterLink>
      </v-btn>
            <v-btn color="surface" @click="() => logout()">Logout</v-btn>
    </v-menu>

        <v-btn v-if="!user" @click="() => login()">Login</v-btn>

  </v-app-bar>
</template>

<style scoped>

</style>