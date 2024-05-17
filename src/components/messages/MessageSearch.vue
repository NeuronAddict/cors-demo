<script setup lang="ts">

import {trackHash} from "@/core/hash-compute";
import {ref} from "vue";

let {hashValue} = trackHash('author');

const searchQuery = ref('');

function search() {
  window.location.hash = `#author=${searchQuery.value}`;
}

function reset() {
  searchQuery.value = '';
  window.location.hash = ''
}

</script>

<template>
  <v-sheet class="ma-2 pa-1">
    <v-row justify="start" align="center">
      <v-col sd="2" md="4">
        <div class="pa-3" :hidden="hashValue == null">Search: author == "<strong>{{ hashValue }}</strong>"</div>
      </v-col>
      <v-col sd="10" md="6" cols="8">
        <v-text-field class="ma-3"
                      color="secondary"
                      type="text"
                      v-model="searchQuery"
                      @keyup.enter="search"
                      :clearable="true"
        ></v-text-field>
      </v-col>
      <v-col md="2">
        <v-btn icon="mdi-magnify" class="ma-2 pa-1" @click="search"></v-btn>
        <v-btn icon="mdi-close" class="ma-2 pa-1" @click="reset"></v-btn>
      </v-col>
    </v-row>

  </v-sheet>
</template>

<style scoped>

</style>