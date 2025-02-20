<template>
  <div class="w-100 fs-7 fw-bold">{{ language.language }}</div>
  <div
    class="progress w-75 d-flex justify-content-end mb-2"
    role="progressbar"
    :aria-valuenow="language.level"
    aria-valuemin="0"
    :aria-valuemax="100"
  >
    <div
      class="progress-bar text-bg-full fw-bold"
      :class="'w-' + language.level"
    >
      {{ language.level }}%
    </div>
  </div>
</template>

<script setup lang="ts">
import { AboutMeLanguages } from "../../types/types"

defineProps<{
  language: AboutMeLanguages
}>()
</script>

<style lang="css" scoped>
.w-90 {
  width: 90%;
}
</style>
