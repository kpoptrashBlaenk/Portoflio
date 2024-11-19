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
    class="cursor-pointer"
    :cx="node.x * 10"
    :cy="node.y * 10"
    r="6.5"
    :fill="node.fill"
  ></circle>

  <text
    style="font-size: 3.5px"
    class="cursor-pointer"
    :x="node.x * 10"
    :y="node.y * 10"
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
