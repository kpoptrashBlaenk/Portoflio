<template>
  <!-- Circle -->
  <circle
    :class="'circleStart' + mainIndex + index"
    :style="{
      'transform-origin': `${mainNode.x}px ${mainNode.y}px`,
    }"
    :cx="mainNode.x"
    :cy="mainNode.y"
    r="10"
    class="circle"
  >
  </circle>
  <circle
    :class="'circleEnd' + mainIndex + index"
    :style="{
      'transform-origin': `${mainNode.x}px ${mainNode.y}px`,
    }"
    :cx="mainNode.x"
    :cy="mainNode.y"
    r="10"
    class="circle"
  >
  </circle>

  <!-- Line -->
  <line
    :class="'lineStart' + mainIndex"
    :x1="mainNode.x"
    :y1="mainNode.y"
    :x2="mainNode.x + node.x1"
    :y2="mainNode.y + node.y1"
    stroke="red"
    stroke-width="6"
    stroke-dasharray="150"
    stroke-dashoffset="150"
  />
  <line
    :class="'lineEnd' + mainIndex"
    :x1="mainNode.x + node.x1"
    :y1="mainNode.y + node.y1"
    :x2="mainNode.x + node.x2"
    :y2="mainNode.y + node.y2"
    stroke="red"
    stroke-width="6"
    stroke-dasharray="150"
    stroke-dashoffset="150"
  />
</template>

<script setup lang="ts">
import { onMounted } from "vue"
import anime from "animejs"
import { Node } from "../../types/types"

const props = defineProps<{
  index: number
  node: Node
  mainNode: { x: number; y: number }
  mainIndex: number
}>()

// Adjusting pixel sizes
props.mainNode.x = props.mainNode.x * 100
props.mainNode.y = props.mainNode.y * 100
props.node.x1 = props.node.x1 * 100
props.node.y1 = props.node.y1 * 100
props.node.x2 = props.node.x2 * 100
props.node.y2 = props.node.y2 * 100

let animated = false

// First animation on hover
async function nodeHover1() {
  const nodeSpread1 = anime({
    targets: [
      ".circleStart" + props.mainIndex + props.index,
      ".circleEnd" + props.mainIndex + props.index,
    ],
    translateX: props.node.x1,
    translateY: props.node.y1,
    easing: "linear",
    duration: 1000,
  }).finished

  const lineSpread1 = anime({
    targets: ".lineStart" + props.mainIndex,
    strokeDashoffset: [150, 0],
    easing: "linear",
    duration: 1000,
  }).finished

  await Promise.all([nodeSpread1, lineSpread1])
}

// Second animation after hover
async function nodeHover2() {
  const nodeSpread2 = anime({
    targets: ".circleEnd" + props.mainIndex + props.index,
    translateX: props.node.x2,
    translateY: props.node.y2,
    easing: "linear",
    duration: 1000,
  }).finished

  const lineSpread2 = anime({
    targets: ".lineEnd" + props.mainIndex,
    strokeDashoffset: [150, 0],
    easing: "linear",
    duration: 1000,
  }).finished

  await Promise.all([nodeSpread2, lineSpread2])
}

// Third animation after hover
async function nodeHover3() {
  const nodeGrow = anime({
    targets: ".circleEnd" + props.mainIndex + props.index,
    easing: "easeInOutExpo",
    scale: [1, 4],
    duration: 1000,
  }).finished

  await Promise.all([nodeGrow])
}

// Full Node Animation
function nodeAnimation() {
  nodeHover1().then(() => {
    nodeHover2().then(() => {
      nodeHover3().then(() => {
        console.log("done")
      })
    })
  })
}

onMounted(() => {
  document
    .querySelector("#mainNode" + props.mainIndex)
    ?.addEventListener("mouseover", () => {
      if (!animated) {
        animated = true
        setTimeout(() => {
          nodeAnimation()
        }, Math.floor(Math.random() * 1000))
      }
    })
})
</script>

<style lang="css">
.circle {
  fill: red;
}
</style>
