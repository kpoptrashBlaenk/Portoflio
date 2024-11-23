<template>
  <div :id="chapter.title" class="card my-4">
    <!-- Header -->
    <div class="card-header">
      {{ languagePack.semester }} {{ chapter.semester }}
    </div>

    <!-- Body -->
    <div class="card-body">
      <h3 class="card-title">{{ chapter.title }}</h3>
      <p class="card-text">{{ chapter.content }}</p>

      <!-- Files -->
      <a
        v-for="file in chapter.files"
        :href="filePathPrefix + file.filePath"
        class="me-3 text-body-secondary"
        target="_blank"
      >
        {{ file.fileName }}
      </a>

      <!-- Tags -->
      <div class="mt-2">
        <span v-for="tag in chapter.tags" class="badge text-bg-full me-2">
          {{ tag }}
        </span>
      </div>
    </div>

    <!-- Footer -->
    <div class="card-footer text-body-secondary">
      {{ chapter.date }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, inject, Ref } from "vue"
import { Chapter } from "../../types/types"
import { AvailableLanguages, BTSLanguage } from "../../types/language"
import languageData from "../../assets/data/language.json"

const filePathPrefix = "/src/assets/bts/"

defineProps<{
  chapter: Chapter
}>()

const activeLanguage = inject("activeLanguage") as Ref<AvailableLanguages>
const languagePack = computed<BTSLanguage>(() => {
  return languageData.bts[activeLanguage.value]
})
</script>

<style lang="css" scoped>
.card {
  transition: none !important;
  transform: none !important;
  box-shadow: none !important;
  background-color: rgba(var(--bs-body-bg-rgb), 0.3);
  backdrop-filter: blur(1px);
  cursor: default;
}

.card:hover {
  transform: none !important;
  box-shadow: none !important;
}
</style>
