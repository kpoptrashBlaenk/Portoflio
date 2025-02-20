<template>
  <div class="w-100 fs-6 fw-bold">
    <div>{{ interest.title }}</div>
  </div>
  <div class="w-100 fst-italic fs-9 fw-normal mb-2">
    {{ interest.extra }}
  </div>
</template>

<script setup lang="ts">
import { AboutMeInterests } from "../../types/types"

defineProps<{
  interest: AboutMeInterests
}>()
</script>
