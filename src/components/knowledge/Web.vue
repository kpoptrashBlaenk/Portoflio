<template>
  <div class="container my-5">
    <span
      class="fs-2 fw-bold pb-2 pt-3 ps-3 ms-sm-5 text-body-emphasis sticky-xl-top sticky-title"
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
import { onMounted } from "vue"
import { Popover } from "bootstrap"

const nodes: MainNode[] = data.nodes

onMounted(() => {
  // Popover
  const popoverTriggerList = document.querySelectorAll(
    '[data-bs-toggle="popover"]'
  )

  const popoverList = [...popoverTriggerList].map(
    (popoverTriggerEl) => new Popover(popoverTriggerEl)
  )

  popoverTriggerList.forEach((element) => {
    element.addEventListener("click", (event) => {
      setTimeout(() => {
        popoverList.forEach((popover) => {
          // If not selected element -> hide || If selected -> natural toggle
          if (popover._element !== event.target) {
            popover.hide()
          }
        })
      }, 10)
    })
  })
})
</script>
