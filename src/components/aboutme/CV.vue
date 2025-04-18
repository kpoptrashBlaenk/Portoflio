<template>
  <div class="container-xl mb-5">
    <!-- TITLE -->
    <div
      class="fs-2 fw-bold pb-2 ps-3 ms-sm-5 text-body-emphasis sticky-xl-top sticky-title"
    >
      Aldin Music
    </div>

    <div class="mt-2 border-bottom border-secondary"></div>

    <div class="mx-0 px-0 mx-xl-5 px-xl-5">
      <!-- HEADER -->
      <div class="mt-3 d-flex flex-column flex-sm-row">
        <div class="w-100 text-center text-sm-end my-auto">
          <div
            v-for="(item, index) in headerItems"
            :key="index"
            class="fs-7 my-3"
          >
            <i :class="`fa-solid ${item.icon} me-1`"></i> {{ item.text }}
          </div>
        </div>

        <div class="text-center w-auto d-none d-sm-block">
          <div class="vr h-100 mx-5"></div>
        </div>

        <div class="w-100 text-center text-sm-start order-first order-sm-last">
          <img
            class="rounded-circle mb-2"
            style="object-fit: contain"
            width="150"
            height="150"
            src="../../assets/images/pp.jpg"
          />
          <h4>Fullstack Developer</h4>
        </div>
      </div>

      <div class="border border-bottom my-3"></div>

      <!-- BODY -->
      <div class="d-flex flex-wrap flex-sm-nowrap">
        <!-- LEFT -->
        <div
          id="cvLeft"
          class="w-100 d-flex flex-wrap text-center text-sm-end justify-content-end"
        >
          <!-- FORMATIONS -->
          <div class="w-100 d-flex flex-wrap justify-content-end">
            <Title :title="languagePack.formations.title" />
            <Formations
              v-for="(formation, index) in languagePack.formations.formations"
              :key="index"
              :formation="formation"
            />
          </div>

          <!-- LANGUAGES -->
          <div
            class="w-100 d-flex flex-wrap text-center text-sm-end justify-content-end"
          >
            <Title :title="languagePack.languages.title" />
            <Languages
              v-for="(language, index) in languagePack.languages.languages"
              :key="index"
              :language="language"
            />
          </div>
        </div>

        <div class="text-center w-auto">
          <div class="vr h-100 mx-5"></div>
        </div>

        <!-- RIGHT -->
        <div id="cvRight" class="w-100">
          <!-- EXPERIENCES -->
          <div class="text-center text-sm-start">
            <Title :title="languagePack.experience.title" />
            <Experience
              v-for="(exp, index) in languagePack.experience.experience"
              :key="index"
              :experience="exp"
            />
          </div>

          <!-- SKILLS -->
          <div>
            <Title :title="languagePack.skills.title" />
            <div class="w-100 d-flex d-sm-block justify-content-center">
              <ul class="list-unstyled w-75">
                <li
                  class="fs-6 fw-semibold"
                  v-for="(item, index) in languagePack.skills.skills.general"
                  :key="index"
                >
                  - {{ item }}
                </li>
                <ul>
                  <li
                    class="ms-5 fs-7 fw-semibold"
                    v-for="(item, index) in languagePack.skills.skills
                      .programming"
                    :key="index"
                  >
                    {{ item }}
                  </li>
                </ul>
              </ul>
            </div>
          </div>

          <!-- INTERESTS -->
          <div class="text-center text-sm-start">
            <Title :title="languagePack.interests.title" />
            <Interests
              v-for="(interest, index) in languagePack.interests.interests"
              :key="index"
              :interest="interest"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, inject, Ref } from "vue"
import languageData from "../../assets/data/language.json"
import { AboutMeLanguage, AvailableLanguages } from "../../types/language"
import Experience from "./Experience.vue"
import Formations from "./Formations.vue"
import Interests from "./Interests.vue"
import Languages from "./Languages.vue"
import Title from "./Title.vue"

const activeLanguage = inject("activeLanguage") as Ref<AvailableLanguages>
const languagePack = computed<AboutMeLanguage>(() => {
  return languageData.aboutme[activeLanguage.value]
})

const headerItems = [
  {
    icon: "fa-phone",
    text: "+33 7 49 12 18 29",
  },
  {
    icon: "fa-envelope",
    text: "aldinmusik@gmail.com",
  },
  {
    icon: "fa-location-dot",
    text: "5 rue Ferri III, 54000 Nancy, France",
  },
  {
    icon: "fa-calendar-days",
    text: "13/11/2001",
  },
  {
    icon: "fa-flag",
    text: languagePack.value.header.country,
  },
]
</script>

<style lang="css">
@media screen and (min-width: 576px) {
  #cvLeft,
  #cvRight {
    width: 50% !important;
  }
}
</style>
