<template>
  <div class="w-100 fs-6 fw-bold">
    {{ formation.title }}
  </div>
  <div class="w-100 fs-7 fw-semibold" :class="{ 'mb-3': !formation.extra }">
    <div>{{ formation.location }}</div>
    <div>{{ formation.time }}</div>
  </div>
  <div v-if="formation.extra" class="w-100 fst-italic fs-9 fw-normal mb-3">
    {{ formation.extra }}
  </div>
</template>

<script setup lang="ts">
import { AboutMeFormation } from "../../types/types"

defineProps<{
  formation: AboutMeFormation
}>()
</script>
