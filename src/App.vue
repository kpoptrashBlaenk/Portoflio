<template>
  <div class="app-container">
    <Particles />
    <Navbar :page="currentPage" :navigate="navigateToPage" />

    <transition name="fade" @enter="enter" @leave="leave">
      <component :is="currentPageComponent" />
    </transition>

    <Tiles :page="currentPage" :navigate="navigateToPage" />
    <Footer />
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from "vue"
import Particles from "./components/partials/Particles.vue"
import Navbar from "./components/partials/Navbar.vue"
import Tiles from "./components/partials/Tiles.vue"
import Footer from "./components/partials/Footer.vue"
import Home from "./pages/Home.vue"
import Parcours from "./pages/Parcours.vue"
import Projects from "./pages/Projects.vue"
import Knowledge from "./pages/Knowledge.vue"
import BTS from "./pages/BTS.vue"
import AboutMe from "./pages/AboutMe.vue"
import { Routes } from "./types/types"
import anime from "animejs"

const currentPage = ref(localStorage.getItem("currentPage") || "Home")
const pageComponents: Record<string, any> = {
  Home,
  Parcours,
  Projects,
  Knowledge,
  BTS,
  AboutMe,
}

// Routing
const currentPageComponent = computed(() => {
  return pageComponents[currentPage.value] || Home
})
const navigateToPage = (page: Routes) => {
  currentPage.value = page
  localStorage.setItem("currentPage", page)
}

// Language
const activeLanguage = localStorage.getItem("language") || "english"

// Transitions
function enter(el: Element, done: () => void) {
  anime({
    targets: el,
    opacity: [0, 1],
    easing: "easeInOutExpo",
    duration: 500,
    complete: () => {
      window.scroll({
        top: 0,
        behavior: "smooth",
      }),
        done
    },
  })
}

function leave(el: Element, done: () => void) {
  anime({
    targets: el,
    opacity: [1, 0],
    easing: "easeInOutExpo",
    duration: 500,
    complete: done,
  })
}
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
