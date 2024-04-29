<script setup lang="ts">

import {ref} from "vue";

const props = withDefaults(defineProps<{
  name: string
  disabled: boolean
  show: boolean
}>(), {
  disabled: false,
  show: true
})

const name = ref(props.name)
const disabled = ref(props.disabled)
const show = ref(props.show)

</script>

<template>
  <v-sheet class="pa-4 ma-4">
    <div>
      <p>Coucou <span>{{ name }}</span>!</p>

      <v-text-field id="coucou_name" v-if="show" :disabled="disabled" type="text" v-model.trim="name" ></v-text-field>
      <p v-else>(hidden content)</p>
    </div>

    <div>
      <p>
        <v-checkbox id="disabled" v-model="disabled" label="Disabled"></v-checkbox>
      </p>

      <p>
        <v-checkbox id="show" v-model="show" label="Show"></v-checkbox>
      </p>
    </div>
  </v-sheet>
</template>

<style scoped>
p span {
  color: red;
}
</style>
