<template>
  <div
    class="container my-5 px-sm-0 overflow-hidden"
    style="pointer-events: none"
  >
    <div
      :class="{ 'd-none': !isHiddenDisplay }"
      class="position-absolute mt-3"
      id="rainbow"
    >
      <div
        v-for="(color, index) in rainbowColors"
        :key="index"
        :style="{ background: color.color }"
        :class="{ 'screen-left': !color.start, 'screen-right': color.start }"
        class="rainbow-line"
      ></div>
    </div>

    <div
      :class="{ 'hidden-text': isHiddenText }"
      class="p-5 text-center bg-body-secondary bg-opacity-10 border rounded-3 jumbotron-custom"
    >
      <h1 class="text-body-emphasis">Welcome! I'm Aldin Music</h1>
      <p class="lead fw-bold mb-0">Fullstack Developer</p>
      <p class=""><strong>Preference:</strong> Typescript</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue"
import jsonData from "../../assets/data/data.json"

const isHiddenText = ref(true)
const isHiddenDisplay = ref(true)
const rainbowColors = ref(jsonData.rainbowcolors)

onMounted(() => {
  for (let i = 0; i < rainbowColors.value.length; i++) {
    setTimeout(function () {
      rainbowColors.value[i].start = true
    }, Math.random() * 200)
  }

  setTimeout(function () {
    isHiddenText.value = false
  }, 700)

  setTimeout(function () {
    isHiddenDisplay.value = false
  }, 2000)
})
</script>

<style scoped>
[data-bs-theme="light"] {
  .bg-opacity-10 {
    --bs-bg-opacity: 0.7;
  }
}

.screen-left {
  transform: translateX(-100%);
}

.screen-right {
  transform: translateX(100%);
}

.rainbow-line {
  width: 100vw;
  height: 30px;
  position: relative;
  transition: transform 2s;
  pointer-events: none;
  border-radius: 30px;
}

@media screen and (min-width: 576px) {
  .rainbow-line {
    height: 26px;
  }
}

.jumbotron-custom.hidden-text h1,
.jumbotron-custom.hidden-text p {
  visibility: hidden;
}
</style>
