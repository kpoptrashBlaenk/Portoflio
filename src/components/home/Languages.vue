<template>
  <div class="container py-5">
    <span class="fs-2 fw-bold pb-2 pt-3 ps-3 ms-sm-5 text-body-emphasis sticky-xl-top sticky-title">My Knowledge</span>
    <div class="mt-2 border-bottom border-secondary sticky-border"></div>

    <div class="row row-cols-1 row-cols-lg-2 align-items-center g-5 py-5 px-5 px-sm-0">
      <div class="col d-flex flex-column align-items-start gap-2 pt-3">
        <h2 class="fw-bold text-body-emphasis">Showcasing My Expertise in Web Development</h2>
        <p class="text-body-secondary">Here, I highlight my proficiency in key technologies used in modern web
          development. My skills span PHP, JavaScript, CSS, and SQL, each of which I use to create dynamic, responsive,
          and efficient web applications.</p>
      </div>

      <div class="col">
        <div class="row row-cols-1 row-cols-sm-2 g-4">
          <Language v-for="(language, index) in languages" :key="index" :language="language" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { LanguageInfo } from "../../types/types"
import Language from "./Language.vue"
import jsonData from '../../assets/data/data.json'

const languages: LanguageInfo[] = jsonData.languages
</script>