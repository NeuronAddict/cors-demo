<script setup lang="ts">

import {ref} from "vue";

let name = ref('guy')

function change(payload: Event) {
  name.value = ((payload as InputEvent).target as HTMLInputElement).value
}

</script>

<template>
  <p>Coucou {{name}}!</p>
  <input type="text" @input="change" :value="name" >
</template>

<style scoped>
p {
  color: red;
}
</style>
