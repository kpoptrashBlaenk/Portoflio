<template>
  <div class="col d-flex flex-column gap-2">
    <div :class="language.color" class="text-center align-items-center rounded-3 p-3">
      <i :class="language.icon" class="fs-1"></i>
      <h4 class="fw-semibold my-2 text-body-emphasis">{{ language.language }}</h4>
      <p class="text-body-secondary">{{ language.body }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { LanguageInfo } from "../../types/types"

defineProps<{
  language: LanguageInfo
}>()
</script>

<style>
:root {
  --gradient-php: linear-gradient(180deg, rgba(120, 124, 181, 0.5), rgba(120, 124, 181, 0.15));
  --gradient-js: linear-gradient(180deg, rgba(247, 223, 30, 0.5), rgba(247, 223, 30, 0.15));
  --gradient-sql: linear-gradient(180deg, rgba(0, 117, 143, 0.5), rgba(0, 117, 143, 0.15));
  --gradient-css-html: linear-gradient(180deg, rgba(38, 77, 228, 0.5), rgba(38, 77, 228, 0.15));
}

.bg-gradient-php {
  background: var(--gradient-php);
}

.bg-gradient-js {
  background: var(--gradient-js);
}

.bg-gradient-sql {
  background: var(--gradient-sql);
}

.bg-gradient-css-html {
  background: var(--gradient-css-html);
}
</style>

<style scoped>
div {
  height: 250px
}
</style>