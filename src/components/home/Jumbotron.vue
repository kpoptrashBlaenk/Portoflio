<template>
  <div
    class="container my-5 px-sm-0 overflow-hidden"
    style="pointer-events: none"
  >
    <div
      :class="{ 'd-none': !isHiddenDisplay }"
      class="position-absolute mt-3 start-0"
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
      class="p-3 text-center bg-body-secondary bg-opacity-10 border rounded-3 jumbotron-custom"
    >
      <h1 class="text-body-emphasis">{{ languagePack.jumbotron.title }}</h1>
      <p class="lead fw-bold mb-0">{{ languagePack.jumbotron.subtitle }}</p>
      <p v-html="languagePack.jumbotron.subSubtitle"></p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, inject, computed, Ref } from "vue"
import jsonData from "../../assets/data/data.json"
import languageData from "../../assets/data/language.json"
import { AvailableLanguages, HomeLanguage } from "../../types/language"

const activeLanguage = inject("activeLanguage") as Ref<AvailableLanguages>
const languagePack = computed<HomeLanguage>(() => {
  return languageData.home[activeLanguage.value]
})

const isHiddenText = ref<boolean>(true)
const isHiddenDisplay = ref<boolean>(true) // This is the rainbow container display to avoid body stretching
const rainbowColors = ref<{ color: string; start: boolean }[]>(
  jsonData.rainbowcolors
)

onMounted(() => {
  isHiddenDisplay.value = true

  rainbowAnimation()

  setTimeout(() => {
    isHiddenText.value = false
  }, 700)

  setTimeout(() => {
    isHiddenDisplay.value = false
  }, 2000)
})

onUnmounted(() => {
  // Reset for next mount
  isHiddenText.value = true
  rainbowColors.value.forEach((color) => (color.start = false))
})

// Rainbow Animation
const rainbowAnimation = () => {
  for (let i = 0; i < rainbowColors.value.length; i++) {
    setTimeout(function () {
      rainbowColors.value[i].start = true
    }, Math.random() * 200)
  }
}
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
  height: 21px;
  position: relative;
  transition: transform 2s;
  pointer-events: none;
  border-radius: 30px;
}

@media screen and (min-width: 492px) {
  .rainbow-line {
    height: 17px;
  }
}

.jumbotron-custom.hidden-text h1,
.jumbotron-custom.hidden-text p {
  visibility: hidden;
}
</style>
