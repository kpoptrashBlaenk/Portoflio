<template>
  <div class="container my-5">
    <span
      class="fs-2 fw-bold pb-2 pt-3 ps-3 ms-sm-5 text-body-emphasis sticky-xl-top sticky-title" data-bs-toggle="tooltip"
    data-bs-title="Default tooltip"
      >Knowledge
    </span>
    <div class="mt-2 border-bottom border-secondary"></div>

    <div class="mt-3 mx-0 mx-md-5">
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
