<template>
  <div class="container mt-5">
    <div class="position-relative">
      <!-- Main svg -->
      <svg viewBox="0 0 100 55">
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
