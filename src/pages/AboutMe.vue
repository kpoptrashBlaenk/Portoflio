<template>
  <CV />
</template>

<script setup lang="ts">
import CV from "../components/aboutme/CV.vue"

defineOptions({
  name: "AboutMe",
  components: {
    CV,
  },
})
</script>
