<script setup lang="ts">

import Auth from "@/core/auth";
</script>

<template>
  <v-row>
    <v-col sm="12" md="8">
      <v-sheet class="ma-3">
        <p class="text-h5 text-center">Unauthenticated</p>
        <hr/>
        <p class="ma-5 text-center">Please click
          <v-btn @click="() => Auth.signinRedirect()">here</v-btn>
          for login
        </p>

      </v-sheet>
    </v-col>
    <v-col sm="12" md="4"></v-col>
  </v-row>
</template>

<style scoped>

</style>