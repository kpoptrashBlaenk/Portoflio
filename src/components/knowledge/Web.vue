<template>
  <div class="container">
    <div class="position-relative">
      <!-- Main svg -->
      <svg>
        <MainNodes
          v-for="(node, index) in nodes"
          :node="node"
          :mainIndex="index"
        />
      </svg>
    </div>
  </div>
</template>

<script setup lang="ts">
import { MainNode } from "../../types/types"
import MainNodes from "./Node.vue"
import data from "../../assets/data/data.json"

const nodes: MainNode[] = data.nodes
</script>

<style lang="css">
svg {
  width: 100%;
  height: 500px;
  overflow: visible;
}
</style>
