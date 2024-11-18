<template>
  <Jumbotron />
  <Languages />
</template>

<script setup lang="ts">
import Jumbotron from "../components/home/Jumbotron.vue"
import Languages from "../components/home/Languages.vue"

defineOptions({
  name: 'Home',
  components: {
    Jumbotron,
    Languages
  }
})
</script>