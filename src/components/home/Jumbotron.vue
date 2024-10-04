<template>
  <div class="container my-5" style="pointer-events: none">
    <div class="position-absolute mt-3" id="rainbow">
      <div class="rainbow-line screen-left" style="background: #cc0000"></div>
      <div class="rainbow-line screen-left" style="background: #cc6600"></div>
      <div class="rainbow-line screen-left" style="background: #cccc00"></div>
      <div class="rainbow-line screen-left" style="background: #009900"></div>
      <div class="rainbow-line screen-left" style="background: #000099"></div>
      <div class="rainbow-line screen-left" style="background: #330066"></div>
      <div class="rainbow-line screen-left" style="background: #660066"></div>
    </div>

    <div
      class="p-5 text-center bg-body-secondary rounded-3 jumbotron-custom hidden-text"
    >
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
import { onMounted } from "vue"

onMounted(() => {
  $(".rainbow-line").each(function () {
    let line = $(this)
    setTimeout(function () {
      line.toggleClass("screen-left screen-right")
    }, Math.random() * 100)
  })
  setTimeout(function () {
    $(".jumbotron-custom").removeClass("hidden-text")
  }, 900)

  setTimeout(function () {
    $("#rainbow").addClass("d-none")
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
  height: 28px;
  position: relative;
  transition: 3s;
  pointer-events: none;
}

.jumbotron-custom.hidden-text h1,
.jumbotron-custom.hidden-text p {
  visibility: hidden;
}
</style>
