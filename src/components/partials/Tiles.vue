<template>
  <div v-if="page !== '404'" class="container">
    <span
      class="fs-2 fw-bold pb-2 pt-3 ps-3 ms-sm-5 text-body-emphasis sticky-xl-top sticky-title"
      id="stickyElement2"
      >Discover</span
    >
    <div class="mt-2 border-bottom border-secondary"></div>

    <div
      :class="page === 'Home' ? 'row-cols-lg-3' : 'row-cols-lg-4'"
      class="mt-3 row row-cols-1 row-cols-md-2 g-4"
    >
      <div v-if="page !== 'AboutMe'" class="col">
        <div class="card h-100 shadow-lg rounded" @click="navigate('AboutMe')">
          <div class="nav-link card-title">
            <div class="nav-link card-title">
              <div class="bg-gradient-1 text-white text-center p-5 rounded-top">
                <h4 class="card-title">{{ languagePack.aboutMe.title }}</h4>
              </div>
            </div>
          </div>
          <div class="card-body">
            <p class="card-text">
              {{ languagePack.aboutMe.body }}
            </p>
          </div>
        </div>
      </div>
      <div v-if="page !== 'Parcours'" class="col">
        <div class="card h-100 shadow-lg rounded" @click="navigate('Parcours')">
          <div class="nav-link card-title">
            <div class="bg-gradient-2 text-white text-center p-5 rounded-top">
              <h4 class="card-title">{{ languagePack.parcours.title }}</h4>
            </div>
          </div>
          <div class="card-body">
            <p class="card-text">
              {{ languagePack.parcours.body }}
            </p>
          </div>
        </div>
      </div>
      <div v-if="page !== 'Projects'" class="col">
        <div class="card h-100 shadow-lg rounded" @click="navigate('Projects')">
          <div class="nav-link card-title">
            <div class="bg-gradient-5 text-white text-center p-5 rounded-top">
              <h4 class="card-title">{{ languagePack.projects.title }}</h4>
            </div>
          </div>
          <div class="card-body">
            <p class="card-text">
              {{ languagePack.projects.body }}
            </p>
          </div>
        </div>
      </div>
      <div v-if="page !== 'Knowledge'" class="col">
        <div
          class="card h-100 shadow-lg rounded"
          @click="navigate('Knowledge')"
        >
          <div class="nav-link card-title">
            <div class="bg-gradient-3 text-white text-center p-5 rounded-top">
              <h4 class="card-title">{{ languagePack.knowledge.title }}</h4>
            </div>
          </div>
          <div class="card-body">
            <p class="card-text">
              {{ languagePack.knowledge.body }}
            </p>
          </div>
        </div>
      </div>
      <div v-if="page !== 'BTS'" class="col">
        <div class="card h-100 shadow-lg rounded" @click="navigate('BTS')">
          <div class="nav-link card-title">
            <div class="bg-gradient-4 text-white text-center p-5 rounded-top">
              <h4 class="card-title">{{ languagePack.bts.title }}</h4>
            </div>
          </div>
          <div class="card-body">
            <p class="card-text">
              {{ languagePack.bts.body }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Routes } from "../../types/types"
import footerData from "../../assets/data/language.json"
import { computed, inject, Ref } from "vue"
import { AvailableLanguages, TilesLanguage } from "../../types/language"

defineProps<{
  page: string
  navigate: (page: Routes) => void
}>()

const activeLanguage = inject("activeLanguage") as Ref<AvailableLanguages>
const languagePack = computed<TilesLanguage>(() => {
  return footerData.tiles[activeLanguage.value]
})
</script>

<style>
:root {
  --gradient-1: linear-gradient(
    135deg,
    rgba(255, 154, 158, 1) 0%,
    rgba(250, 208, 196, 1) 100%
  );
  --gradient-2: linear-gradient(
    135deg,
    rgba(255, 126, 95, 1) 0%,
    rgba(254, 180, 123, 1) 100%
  );
  --gradient-3: linear-gradient(
    135deg,
    rgba(106, 17, 203, 1) 0%,
    rgba(37, 117, 252, 1) 100%
  );
  --gradient-4: linear-gradient(
    135deg,
    rgba(0, 198, 255, 1) 0%,
    rgba(0, 114, 255, 1) 100%
  );
  --gradient-5: linear-gradient(
    135deg,
    rgba(86, 171, 47, 1) 0%,
    rgba(168, 224, 99, 1) 100%
  );
}

.bg-gradient-1 {
  background: var(--gradient-1);
}

.bg-gradient-2 {
  background: var(--gradient-2);
}

.bg-gradient-3 {
  background: var(--gradient-3);
}

.bg-gradient-4 {
  background: var(--gradient-4);
}

.bg-gradient-5 {
  background: var(--gradient-5);
}

.card {
  border: none;
  cursor: pointer;
}
</style>
