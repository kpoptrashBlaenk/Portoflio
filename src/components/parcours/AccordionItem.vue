<template>
  <div v-if="!hide" class="accordion-item">
    <div class="accordion-header accordion-button collapsed">
      {{ item.year }} <strong class="ms-2">{{ item.title }}</strong>
    </div>
    <div
      class="accordion-collapse collapse"
      data-bs-parent="#timelineAccordion"
    >
      <div class="accordion-body row">
        <div
          class="card bg-transparent mx-0 mx-lg-5 mb-5 mb-lg-0 col-12 col-lg"
        >
          <div class="card-body">
            <h5 class="card-title mb-3">{{ item.bodyTitle }}</h5>
            <p v-if="item.focus" class="card-text">
              <strong>{{ languagePack.focus }}:</strong> {{ item.focus }}
            </p>
            <p v-if="item.subject" class="card-text">
              <strong>{{ languagePack.subject }}:</strong> {{ item.subject }}
            </p>
            <p v-if="item.position" class="card-text">
              <strong>{{ languagePack.position }}:</strong> {{ item.position }}
            </p>
            <p class="card-text">
              <strong>{{ languagePack.location }}:</strong> {{ item.location }}
            </p>
            <p class="card-text">
              <strong>{{ languagePack.time }}:</strong> {{ item.time }}
            </p>
            <p class="card-text">
              <strong>{{ languagePack.notes }}:</strong> {{ item.notes }}
            </p>
          </div>
        </div>

        <div
          v-if="doubleItem"
          class="card bg-transparent mx-0 mx-lg-5 col-12 col-lg"
        >
          <div class="card-body">
            <h5 class="card-title mb-3">{{ doubleItem.bodyTitle }}</h5>
            <p v-if="doubleItem.focus" class="card-text">
              <strong>{{ languagePack.focus }}:</strong> {{ doubleItem.focus }}
            </p>
            <p v-if="doubleItem.subject" class="card-text">
              <strong>{{ languagePack.subject }}:</strong>
              {{ doubleItem.subject }}
            </p>
            <p v-if="doubleItem.position" class="card-text">
              <strong>{{ languagePack.position }}:</strong>
              {{ doubleItem.position }}
            </p>
            <p class="card-text">
              <strong>{{ languagePack.location }}:</strong>
              {{ doubleItem.location }}
            </p>
            <p class="card-text">
              <strong>{{ languagePack.time }}:</strong> {{ doubleItem.time }}
            </p>
            <p class="card-text">
              <strong>{{ languagePack.notes }}:</strong> {{ doubleItem.notes }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, inject, Ref, ref } from "vue"
import { AccordionItem } from "../../types/types"
import languageData from "../../assets/data/language.json"
import { AccordionLanguage, AvailableLanguages } from "../../types/language"

const activeLanguage = inject("activeLanguage") as Ref<AvailableLanguages>
const languagePack = computed<AccordionLanguage>(() => {
  return languageData.accordion[activeLanguage.value]
})

const hide = ref<boolean>(false)

const props = defineProps<{
  item: AccordionItem
  doubleItem: AccordionItem | null
  hidden: number[]
  id: number
}>()

props.hidden.find((e) => e === props.id)
  ? (hide.value = true)
  : (hide.value = false)
</script>

<style lang="css" scoped>
.accordion-collapse {
  transition: 0.1s;
  /* slowing transition to avoid bugs */
}

.accordion-button::after {
  display: none;
  /* removing the arrow */
}

.accordion-button {
  transition: none;
  /* transition applies to theme change */
}

.card {
  transition: none !important;
  transform: none !important;
  box-shadow: none !important;
  margin-top: -20px;
  border: none;
  cursor: inherit;
}

.accordion-item,
.accordion-header {
  background-color: var(--bg-accordion) !important;
  backdrop-filter: blur(2px);
}
</style>
