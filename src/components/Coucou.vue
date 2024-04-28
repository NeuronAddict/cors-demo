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
  <div>
    <p>Coucou <span>{{ name }}</span>!</p>

    <input id="coucou_name" v-if="show" :disabled="disabled" type="text" v-model.trim="name" >
    <p v-else>(hidden content)</p>
  </div>

  <div>
    <p>
      <input id="disabled" type="checkbox" value="disabled" v-model="disabled">
      <label for="disabled">Disabled</label>
    </p>

    <p>
      <input id="show" type="checkbox" value="show" v-model="show">
      <label for="show">Show</label>
    </p>
  </div>
</template>

<style scoped>
p span {
  color: red;
}
</style>
