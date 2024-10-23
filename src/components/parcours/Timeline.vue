<template>
  <div class="container my-5">
    <span class="fs-2 fw-bold pb-2 pt-3 ps-3 ms-5 text-body-emphasis sticky-xl-top sticky-title">Timeline
    </span>
    <div class="mt-2 border-bottom border-secondary"></div>

    <div class="mt-3 mx-5">
      <label for="timelineRange" class="form-label">{{ timelineYear }}</label>
      <input v-model="timelineValue" @input="timeline" value="0" type="range" class="form-range" min="0" max="4"
        step="1">

      <div class="accordion" id="timelineAccordion">
        <Accordion v-for="(item, index) in accordionItems" :item="item" :key="index" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import Accordion from './AccordionItem.vue'
import { AccordionItem } from '../../types/types'
import { Collapse } from 'bootstrap'
import jsonData from '../../assets/data/data.json'

const timelineValue = ref<number>(0)
const timelineYear = ref<string>('')
const accordionItems: AccordionItem[] = jsonData.accordionItems

let timelineCollapses: JQuery<HTMLElement>

onMounted(() => {
  timelineCollapses = $('.accordion-collapse')
  let timelineRangeValue = localStorage.getItem('timelineValue')

  if (!timelineRangeValue) {
    timelineRangeValue = '0'
  }

  timeline()
})

function timeline() {
  localStorage.setItem('timelineValue', timelineValue.value.toString())

  new Collapse(timelineCollapses[timelineValue.value], {
    toggle: true
  })

  switch (timelineValue.value) {
    case 0:
      timelineYear.value = accordionItems[0].year
      break
    case 1:
      timelineYear.value = accordionItems[1].year
      break
    case 2:
      timelineYear.value = accordionItems[2].year
      break
    case 3:
      timelineYear.value = accordionItems[3].year
      break
    case 4:
      timelineYear.value = accordionItems[4].year
      break
    default:
      timelineYear.value = 'error'
      break
  }
}
</script>