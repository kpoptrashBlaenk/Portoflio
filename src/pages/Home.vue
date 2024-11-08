<template>
  <Jumbotron />
  <Languages />
  <!-- <Recommendation /> -->
</template>

<script setup lang="ts">
import Jumbotron from "../components/home/Jumbotron.vue"
import Languages from "../components/home/Languages.vue"
import Recommendation from "../components/home/Recommendation.vue"

defineOptions({
  name: 'Home',
  components: {
    Jumbotron,
    Languages,
    Recommendation
  }
})
</script>