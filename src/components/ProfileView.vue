<script setup lang="ts">
import {onMounted, type Ref, ref} from "vue";
import Auth from "@/core/auth";
import type {User} from "oidc-client-ts";

const user: Ref<User | null> = ref(null);

onMounted(async () => {
  user.value = await Auth.getUser();
});

</script>

<template>

  <v-sheet class="pa-3 ma-3">

    <p class="text-h5">Profile</p>

    <v-table class="ma-2">
      <thead>
      </thead>
      <tbody>

      <tr>
        <td>name:</td>
        <td>{{ user?.profile.family_name }}</td>
      </tr>
      <tr>
        <td>first name:</td>
        <td>{{ user?.profile.given_name }}</td>
      </tr>
      <tr>
        <td>email:</td>
        <td>{{ user?.profile.email }}</td>
      </tr>
      </tbody>
    </v-table>
  </v-sheet>
</template>

<style scoped>

</style>