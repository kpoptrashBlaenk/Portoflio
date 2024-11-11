<template>
  <!-- Circle -->
  <circle
    :class="'circleStart' + mainIndex + index"
    :style="{
      'transform-origin': `${mainNode.x}px ${mainNode.y}px`,
    }"
    :cx="mainNode.x"
    :cy="mainNode.y"
    r="1"
    :fill="node.fill"
  >
  </circle>
  <circle
    class="cursor-pointer"
    :class="'circleEnd' + mainIndex + index"
    :style="{
      'transform-origin': `${mainNode.x}px ${mainNode.y}px`,
    }"
    :cx="mainNode.x"
    :cy="mainNode.y"
    r="1"
    :fill="node.fill"
  >
  </circle>

  <!-- Line -->
  <line
    :class="'lineStart' + mainIndex + index"
    :x1="mainNode.x"
    :y1="mainNode.y"
    :x2="mainNode.x + node.x1"
    :y2="mainNode.y + node.y1"
    :stroke="node.fill"
    stroke-width="0.6"
    stroke-dasharray="15"
    stroke-dashoffset="15"
  />
  <line
    :class="'lineEnd' + mainIndex + index"
    :x1="mainNode.x + node.x1"
    :y1="mainNode.y + node.y1"
    :x2="mainNode.x + node.x2"
    :y2="mainNode.y + node.y2"
    :stroke="node.fill"
    stroke-width="0.6"
    stroke-dasharray="15"
    stroke-dashoffset="15"
  />

  <!-- Text -->
  <text
    style="opacity: 0"
    :style="{ 'font-size': node.important ? '2px' : '1.5px' }"
    class="cursor-pointer d-none custom-tooltip"
    :class="'sub-node-text' + props.mainIndex + props.index"
    :x="mainNode.x + node.x2"
    :y="mainNode.y + node.y2"
    dy="0.35em"
    text-anchor="middle"
    :fill="node['text-color']"
    data-bs-toggle="tooltip"
    :data-bs-title="node.tooltip"
  >
    {{ node.text }}
  </text>
</template>

<script setup lang="ts">
import { onMounted } from "vue"
import anime from "animejs"
import { Node } from "../../types/types"
import { Tooltip } from "bootstrap"

const props = defineProps<{
  index: number
  node: Node
  mainNode: { x: number; y: number }
  mainIndex: number
}>()

// Adjusting pixel sizes
props.mainNode.x = props.mainNode.x * 10
props.mainNode.y = props.mainNode.y * 10
props.node.x1 = props.node.x1 * 10
props.node.y1 = props.node.y1 * 10
props.node.x2 = props.node.x2 * 10
props.node.y2 = props.node.y2 * 10

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
    targets: ".lineStart" + props.mainIndex + props.index,
    strokeDashoffset: [15, 0],
    easing: "linear",
    duration:
      props.node.x1 + props.node.y1 === 0 ||
      props.node.x1 + props.node.y1 === 20 ||
      props.node.x1 + props.node.y1 === -20
        ? 1000
        : 1500,
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
    targets: ".lineEnd" + props.mainIndex + props.index,
    strokeDashoffset: [15, 0],
    easing: "linear",
    duration:
      props.node.x1 + props.node.y1 - props.node.x2 - props.node.y2 === 0 ||
      props.node.x1 + props.node.y1 - props.node.x2 - props.node.y2 === 20 ||
      props.node.x1 + props.node.y1 - props.node.x2 - props.node.y2 === -20
        ? 1000
        : 1500,
  }).finished

  await Promise.all([nodeSpread2, lineSpread2])
}

// Third animation after hover
async function nodeHover3() {
  const nodeGrow = anime({
    targets: ".circleEnd" + props.mainIndex + props.index,
    easing: "easeInOutExpo",
    scale: props.node.important ? [1, 5.5] : [1, 4],
    duration: 1000,
  }).finished

  await Promise.all([nodeGrow])
}

async function nodeHover4() {
  document
    .querySelector(".sub-node-text" + props.mainIndex + props.index)
    ?.classList.remove("d-none")
  const textAppear = anime({
    targets: ".sub-node-text" + props.mainIndex + props.index,
    easing: "easeInOutExpo",
    opacity: [0, 1],
    duration: 1000,
  }).finished

  await Promise.all([textAppear])
}

// Full Node Animation
function nodeAnimation() {
  nodeHover1().then(() => {
    nodeHover2().then(() => {
      nodeHover3().then(() => {
        nodeHover4()
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

  // Tooltip
  const tooltipTriggerList = document.querySelectorAll(
    '[data-bs-toggle="tooltip"]'
  )
  const tooltipList = [...tooltipTriggerList].map(
    (tooltipTriggerEl) => new Tooltip(tooltipTriggerEl)
  )
})
</script>
