<template>
  <div class="col d-flex flex-column gap-2">
    <div
      :class="language.color"
      class="text-center align-items-center rounded-3 p-1 pt-3"
    >
      <i :class="language.icon" class="fs-1"></i>
      <h4 class="fw-semibold my-2 text-body-emphasis">
        {{ language.language }}
      </h4>
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
  --gradient-vue: linear-gradient(
    180deg,
    rgba(0, 204, 102, 0.5),
    rgba(0, 204, 102, 0.15)
  );
  --gradient-ts: linear-gradient(
    180deg,
    rgba(0, 122, 204, 0.5),
    rgba(0, 122, 204, 0.15)
  );
  --gradient-phaser: linear-gradient(
    180deg,
    rgba(237, 28, 36, 0.5),
    rgba(237, 28, 36, 0.15)
  );
  --gradient-bootstrap: linear-gradient(
    180deg,
    rgba(0, 123, 225, 0.5),
    rgba(0, 123, 225, 0.15)
  );
}

.bg-gradient-vue {
  background: var(--gradient-vue);
}

.bg-gradient-ts {
  background: var(--gradient-ts);
}

.bg-gradient-phaser {
  background: var(--gradient-phaser);
}

.bg-gradient-bootstrap {
  background: var(--gradient-bootstrap);
}
</style>

<style scoped>
div {
  height: 250px;
}

@media screen and (min-width: 492px) {
  div {
    height: 300px;
  }
}
</style>
