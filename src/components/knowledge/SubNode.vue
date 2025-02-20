<template>
  <!-- Circle -->
  <circle
    :class="'circleStart' + mainIndex + index"
    :style="{
      'transform-origin': `${scaledMainNode.x}px ${scaledMainNode.y}px`,
    }"
    :cx="scaledMainNode.x"
    :cy="scaledMainNode.y"
    r="1"
    :fill="scaledNode.fill"
  >
  </circle>
  <circle
    class="cursor-pointer"
    :class="'circleEnd' + mainIndex + index"
    :style="{
      'transform-origin': `${scaledMainNode.x}px ${scaledMainNode.y}px`,
    }"
    :cx="scaledMainNode.x"
    :cy="scaledMainNode.y"
    r="1"
    :fill="scaledNode.fill"
  >
  </circle>

  <!-- Line -->
  <line
    :class="'lineStart' + mainIndex + index"
    :x1="scaledMainNode.x"
    :y1="scaledMainNode.y"
    :x2="scaledMainNode.x + scaledNode.x1"
    :y2="scaledMainNode.y + scaledNode.y1"
    :stroke="scaledNode.fill"
    stroke-width="0.6"
    stroke-dasharray="15"
    stroke-dashoffset="15"
  />
  <line
    :class="'lineEnd' + mainIndex + index"
    :x1="scaledMainNode.x + scaledNode.x1"
    :y1="scaledMainNode.y + scaledNode.y1"
    :x2="scaledMainNode.x + scaledNode.x2"
    :y2="scaledMainNode.y + scaledNode.y2"
    :stroke="scaledNode.fill"
    stroke-width="0.6"
    stroke-dasharray="15"
    stroke-dashoffset="15"
  />

  <!-- Text -->
  <text
    style="opacity: 0"
    :style="{ 'font-size': node.important ? '2px' : '1.4px' }"
    class="cursor-pointer d-none"
    :class="`sub-node-text${mainIndex}${index}`"
    :x="scaledMainNode.x + scaledNode.x2"
    :y="scaledMainNode.y + scaledNode.y2"
    dy="0.35em"
    text-anchor="middle"
    :fill="node['text-color']"
    data-bs-toggle="popover"
    :data-bs-title="scaledNode.text"
    :data-bs-content="languagePack"
    :data-bs-custom-class="`popover${mainIndex}${index}`"
  >
    {{ scaledNode.text }}
  </text>
</template>

<script setup lang="ts">
import { computed, inject, onMounted, Ref, ref } from "vue"
import anime from "animejs"
import { Node } from "../../types/types"
import { AvailableLanguages } from "../../types/language"

const props = defineProps<{
  index: number
  node: Node
  mainNode: { x: number; y: number }
  mainIndex: number
}>()

const activeLanguage = inject("activeLanguage") as Ref<AvailableLanguages>
const languagePack = computed<string>(() => {
  return props.node.tooltip[activeLanguage.value]
})

const scaledMainNode = ref<{ x: number; y: number }>({
  x: props.mainNode.x,
  y: props.mainNode.y,
})

const scaledNode = ref<Node>({
  text: props.node.text,
  x1: props.node.x1,
  y1: props.node.y1,
  x2: props.node.x2,
  y2: props.node.y2,
  fill: props.node.fill,
  "text-color": props.node["text-color"],
  important: props.node.important,
  tooltip: props.node.tooltip,
})

// Adjusting pixel sizes
scaledMainNode.value.x = props.mainNode.x * 10
scaledMainNode.value.y = props.mainNode.y * 10
scaledNode.value.x1 = props.node.x1 * 10
scaledNode.value.y1 = props.node.y1 * 10
scaledNode.value.x2 = props.node.x2 * 10
scaledNode.value.y2 = props.node.y2 * 10

let animated = false

// First animation on hover
async function nodeHover1() {
  const nodeSpread1 = anime({
    targets: [
      ".circleStart" + props.mainIndex + props.index,
      ".circleEnd" + props.mainIndex + props.index,
    ],
    translateX: scaledNode.value.x1,
    translateY: scaledNode.value.y1,
    easing: "linear",
    duration: 1000,
  }).finished

  const lineSpread1 = anime({
    targets: ".lineStart" + props.mainIndex + props.index,
    strokeDashoffset: [15, 0],
    easing: "linear",
    duration:
      scaledNode.value.x1 + scaledNode.value.y1 === 0 ||
      scaledNode.value.x1 + scaledNode.value.y1 === 20 ||
      scaledNode.value.x1 + scaledNode.value.y1 === -20
        ? 1000
        : 1500,
  }).finished

  await Promise.all([nodeSpread1, lineSpread1])
}

// Second animation after hover
async function nodeHover2() {
  const nodeSpread2 = anime({
    targets: ".circleEnd" + props.mainIndex + props.index,
    translateX: scaledNode.value.x2,
    translateY: scaledNode.value.y2,
    easing: "linear",
    duration: 1000,
  }).finished

  const lineSpread2 = anime({
    targets: ".lineEnd" + props.mainIndex + props.index,
    strokeDashoffset: [15, 0],
    easing: "linear",
    duration:
      scaledNode.value.x1 +
        scaledNode.value.y1 -
        scaledNode.value.x2 -
        scaledNode.value.y2 ===
        0 ||
      scaledNode.value.x1 +
        scaledNode.value.y1 -
        scaledNode.value.x2 -
        scaledNode.value.y2 ===
        20 ||
      scaledNode.value.x1 +
        scaledNode.value.y1 -
        scaledNode.value.x2 -
        scaledNode.value.y2 ===
        -20
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
    scale: scaledNode.value.important ? [1, 5.5] : [1, 4],
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

  // Popover
  // On click, grant style because element gets created on click
  const subNodeTextElement = document.querySelector(
    `.sub-node-text${props.mainIndex}${props.index}`
  )

  subNodeTextElement?.addEventListener("click", () => {
    // Popover has a little delay
    setTimeout(() => {
      const thisPopover = document.querySelector(
        `.popover${props.mainIndex}${props.index}`
      ) as HTMLElement // Element has no style -> make it HTMLElement

      // Apply styles
      const popoverBody = thisPopover.querySelector(
        ".popover-body"
      ) as HTMLElement
      const popoverArrow = thisPopover.querySelector(
        ".popover-arrow"
      ) as HTMLElement

      popoverArrow.style.borderTopColor = scaledNode.value.fill
      popoverBody.style.color = scaledNode.value["text-color"]
      popoverBody.style.backgroundColor = scaledNode.value.fill
    }, 10)
  })

  document
    .querySelector(`.circleEnd${props.mainIndex}${props.index}`)
    ?.addEventListener("click", () => {
      subNodeTextElement?.dispatchEvent(new MouseEvent('click'))
    })
})
</script>
