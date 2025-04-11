<template>
  <div class="container mb-5 px-5">
    <span
      class="fs-2 fw-bold pb-2 ps-3 ms-sm-5 text-body-emphasis sticky-xl-top sticky-title"
      >{{ languagePack.title }}
    </span>
    <div class="mt-2 border-bottom border-secondary"></div>

    <div class="mt-3 mx-0 mx-md-5 p-5">
      <!-- Main svg -->
      <svg viewBox="0 0 100 55" class="overflow-visible">
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
import { computed, inject, onMounted, onUnmounted, Ref } from "vue"
import { Popover } from "bootstrap"
import languageData from "../../assets/data/language.json"
import { AvailableLanguages, KnowledgeLanguage } from "../../types/language"

const activeLanguage = inject("activeLanguage") as Ref<AvailableLanguages>
const languagePack = computed<KnowledgeLanguage>(() => {
  return languageData.knowledge[activeLanguage.value]
})

const nodes: MainNode[] = data.nodes

let popoverList: Popover[] = []

onMounted(() => {
  // Popover
  const popoverTriggerList = document.querySelectorAll(
    '[data-bs-toggle="popover"]'
  )

  popoverList = [...popoverTriggerList].map(
    (popoverTriggerEl) => new Popover(popoverTriggerEl)
  )

  popoverTriggerList.forEach((element) => {
    element.addEventListener("click", (event) => {
      setTimeout(() => {
        popoverList.forEach((popover) => {
          // If not selected element -> hide || If selected -> natural toggle
          // @ts-ignore | Because _element is protected and shouldn't be accessible
          if (popover._element !== event.target) {
            popover.hide()
          }
        })
      }, 10)
    })
  })
})

// Remove all the popovers on unmount
onUnmounted(() => {
  popoverList.forEach((popover) => {
    popover.hide()
  })
})
</script>
