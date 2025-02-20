<template>
  <h4 class="text-bg-full rounded-pill w-100 w-lg-50 text-center">
    {{ title }}
  </h4>
</template>

<script setup lang="ts">
defineProps<{
  title: string
}>()
</script>

<style lang="css" scoped>
.w-90 {
  width: 90%;
}

@media (min-width: 992px) {
  .w-lg-50 {
    width: 50% !important;
  }
}

</style>