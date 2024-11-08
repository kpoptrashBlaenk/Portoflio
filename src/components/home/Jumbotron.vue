<template>
  <div class="container my-5 px-5 px-sm-0" style="pointer-events: none">
    <div :class="{ 'd-none': !isHiddenDisplay }" class="position-absolute mt-3" id="rainbow">
      <div v-for="(color, index) in rainbowColors" :key="index" :style="{ background: color.color }"
        :class="{ 'screen-left': !color.start, 'screen-right': color.start }" class="rainbow-line">
      </div>
    </div>

    <div :class="{ 'hidden-text': isHiddenText }" class="p-5 text-center bg-body-secondary rounded-3 jumbotron-custom">
      <h1 class="text-body-emphasis">Welcome!</h1>
      <p class="lead">
        Hello, I'm Aldin Music, a passionate developer dedicated to creating
        innovative and impactful solutions. Feel free to explore my work and
        connect with me!
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue"
import jsonData from '../../assets/data/data.json'

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
  }, 900)

  setTimeout(function () {
    isHiddenDisplay.value = false
  }, 3000)
})
</script>

<style scoped>
.screen-left {
  left: -100%;
}

.screen-right {
  left: 100%;
}

.rainbow-line {
  width: 100vw;
  height: 38px;
  position: relative;
  transition: 3s;
  pointer-events: none;
}

@media screen and (min-width:576px) {
  .rainbow-line {
    height: 35px;
  }
}

@media screen and (min-width:768px) {
  .rainbow-line {
    height: 31px;
  }
}

@media screen and (min-width:992px) {
  .rainbow-line {
    height: 28px;
  }
}

.jumbotron-custom.hidden-text h1,
.jumbotron-custom.hidden-text p {
  visibility: hidden;
}
</style>
