<template>
  <svg>
    <SubNode
      v-for="(thisNode, index) in node.subs"
      :mainIndex="mainIndex"
      :index="index"
      :node="thisNode"
      :main-node="{ x: node.x, y: node.y }"
    />

    <!-- Main Node -->
    <circle
      :id="'mainNode' + mainIndex"
      :cx="node.x * 100"
      :cy="node.y * 100"
      r="70"
      class="main-node"
    ></circle>

    <text
      class="fs-1"
      :x="node.x * 100"
      :y="node.y * 100"
      text-anchor="middle"
      dy="0.35em"
    >
      {{ node.text }}
    </text>
  </svg>
</template>

<script setup lang="ts">
import { MainNode } from "../../types/types"
import SubNode from "./SubNode.vue"

defineProps<{
  mainIndex: number
  node: MainNode
}>()
</script>

<style lang="css">
svg {
  width: 100%;
  height: 500px;
  overflow: visible;
}

text {
  fill: white;
}

.main-node {
  fill: red;
}
</style>
