<template>
  
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
      :fill="node.fill"
    ></circle>

    <text
      class="fs-1"
      :x="node.x * 100"
      :y="node.y * 100"
      text-anchor="middle"
      dy="0.35em"
      :fill="node['text-color']"
    >
      {{ node.text }}
    </text>
</template>

<script setup lang="ts">
import { MainNode } from "../../types/types"
import SubNode from "./SubNode.vue"

defineProps<{
  mainIndex: number
  node: MainNode
}>()
</script>
