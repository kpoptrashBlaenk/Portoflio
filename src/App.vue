<template>
  <div class="app-container">
    <Particles />
    <Navbar :page="routeName" />
    <router-view />
    <Tiles :page="routeName" />
    <Footer />
  </div>
</template>

<script setup lang="ts">
import { watch, ref } from 'vue'
import { useRoute } from 'vue-router';
import Particles from './components/partials/Particles.vue'
import Navbar from './components/partials/Navbar.vue'
import Tiles from './components/partials/Tiles.vue'
import Footer from './components/partials/Footer.vue'

const routeNames = {
  '/': '',
  '/Portfolio-Custom/': 'Home',
  '/Portfolio-Custom/parcours': 'Parcours',
  '/Portfolio-Custom/projects': 'Projects',
  '/Portfolio-Custom/knowledge': 'Knowledge',
  '/Portfolio-Custom/bts': 'BTS',
  '/Portfolio-Custom/aboutme': 'AboutMe',
}
const route = useRoute()
const routeName = ref(route.path)

watch(() => route.path, (newPath) => {
  routeName.value = routeNames[newPath] || '404'
})

defineOptions({
  name: 'App',
  components: {
    Particles,
    Navbar,
    Tiles,
    Footer
  }
})
</script>

<style>
.app-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  /* Full viewport height */
}

footer {
  margin-top: auto;
  /* Pushes the footer to the bottom */
}
</style>