<script setup lang="ts">

import {provide} from "vue";
import {axiosInstanceProviderKey, logsServiceProviderKey, messageServiceProviderKey} from "@/core/provider";
import config from "@/services/config";
import {logService, messageService} from "@/services/service";

provide(axiosInstanceProviderKey, config);
provide(messageServiceProviderKey, messageService(config));
provide(logsServiceProviderKey, logService(config));

</script>

<template>
  <slot></slot>
</template>

<style scoped>

</style>