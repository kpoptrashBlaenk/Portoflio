<template>
  <div class="container py-5">
    <span
      class="fs-2 fw-bold pb-2 pt-3 ps-3 ms-sm-5 text-body-emphasis sticky-xl-top sticky-title"
      >{{ languagePack.languages.title }}</span
    >
    <div class="mt-2 border-bottom border-secondary sticky-border"></div>

    <div
      class="row row-cols-1 row-cols-xl-2 align-items-center g-5 py-5 px-5 px-sm-0"
    >
      <div class="col d-flex flex-column align-items-start gap-2 pt-3">
        <h2 class="fw-bold text-body-emphasis">
          {{ languagePack.languages.side.title }}
        </h2>
        <p
          class="text-body-secondary fs-5"
          v-html="languagePack.languages.side.body"
        ></p>
      </div>

      <div class="col">
        <div class="row row-cols-1 row-cols-sm-2 g-4">
          <Language
            v-for="(language, index) in languagePack.languages.languages"
            :key="index"
            :language="language"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Language from "./Language.vue"
import languageData from "../../assets/data/language.json"
import { AvailableLanguages, HomeLanguage } from "../../types/language"
import { computed, inject, Ref } from "vue"

const activeLanguage = inject("activeLanguage") as Ref<AvailableLanguages>
const languagePack = computed<HomeLanguage>(() => {
  return languageData.home[activeLanguage.value]
})
</script>
