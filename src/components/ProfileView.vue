<script setup lang="ts">
import {inject, onMounted, type Ref, ref} from "vue";
import MainSheet from "@/components/layout/MainSheet.vue";
import type {Profile} from "@/core/profile";
import {profileServiceProviderKey} from "@/core/service-provider";

const profile: Ref<Profile | null> = ref(null);

const profileService = inject(profileServiceProviderKey);

onMounted(async () => {
  profileService?.get().then(response => profile.value = response.data);
});

</script>

<template>

  <MainSheet>
    <p class="text-h5">Profile</p>

    <v-table class="ma-2">
      <thead>
      </thead>
      <tbody>

      <tr>
        <td>name:</td>
        <td>{{ profile?.name }}</td>
      </tr>
      <tr>
        <td>email:</td>
        <td>{{ profile?.email }}</td>
      </tr>
      <tr>
        <td>telephone:</td>
        <td>{{ profile?.telephone }}</td>
      </tr>
      </tbody>
    </v-table>
  </MainSheet>
</template>

<style scoped>

</style>