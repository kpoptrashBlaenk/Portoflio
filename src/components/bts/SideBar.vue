<template>
  <li v-for="(semester, index) in semesters" class="my-2">
    <div v-if="semester.length > 0">
      <button
        type="button"
        class="btn d-inline-flex align-items-center border-0"
        data-bs-toggle="collapse"
        aria-expanded="true"
        :data-bs-target="'#sideCollapse' + index"
        :aria-controls="'sideCollapse' + index"
      >
        {{ languagePack.semester }} {{ index }}
      </button>
      <ul class="list-unstyled ps-3 show" :id="'sideCollapse' + index">
        <li v-for="chapter in semester">
          <a
            @click.prevent="scrollTo(chapter.title)"
            href="#"
            class="d-inline-flex align-items-center rounded text-decoration-none"
          >
            {{ chapter.title }}
          </a>
        </li>
      </ul>
    </div>
  </li>
</template>

<script setup lang="ts">
import { computed, inject, Ref } from "vue"
import { Semesters } from "../../types/types"
import { AvailableLanguages, BTSLanguage } from "../../types/language"
import languageData from "../../assets/data/language.json"

defineProps<{
  semesters: Semesters
}>()

const activeLanguage = inject("activeLanguage") as Ref<AvailableLanguages>
const languagePack = computed<BTSLanguage>(() => {
  return languageData.bts[activeLanguage.value]
})

// Scroll to chapter when clicking link
// This will not work if chapters have the same title
function scrollTo(id: string) {
  const element = document.getElementById(id)

  if (element) {
    const offset = 100
    //@ts-ignore
    const elementPosition = element.getBoundingClientRect().top + window.scrollY
    const offsetPosition = elementPosition - offset

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    })
  }
}
</script>
