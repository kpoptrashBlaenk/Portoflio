<template>
  <div class="text-start fs-6 fw-bold">
    {{ experience.title }}
  </div>
  <div class="w-100 fs-7 fw-semibold" :class="{ 'mb-3': !experience.extra }">
    <div>{{ experience.location }}</div>
    <div>{{ experience.time }}</div>
  </div>
  <div v-if="experience.extra" class="w-100 fst-italic fs-9 fw-normal mb-3">
    {{ experience.extra }}
  </div>
</template>

<script setup lang="ts">
import { AboutMeExperience } from "../../types/types"

defineProps<{
  experience: AboutMeExperience
}>()
</script>
