<template>
  <div class="container mb-5">
    <!-- TITLE -->
    <span
      class="fs-2 fw-bold pb-2 ps-3 ms-sm-5 text-body-emphasis sticky-xl-top sticky-title"
      >{{ btsLanguagePack.title }}
    </span>
    <div class="mt-2 border-bottom border-secondary"></div>

    <!-- TABS -->
    <div class="mt-3 row">
      <div class="col-md-9 col-lg-10">
        <nav>
          <div class="nav nav-tabs mb-3" id="nav-tab" role="tablist">
            <button
              class="nav-link active"
              id="tabBlock1"
              data-bs-toggle="tab"
              data-bs-target="#block1"
              type="button"
              role="tab"
              aria-controls="block1"
              aria-selected="true"
            >
              S1
            </button>
            <button
              class="nav-link"
              id="tabBlock2"
              data-bs-toggle="tab"
              data-bs-target="#block2"
              type="button"
              role="tab"
              aria-controls="block2"
              aria-selected="false"
              tabindex="-1"
            >
              S2
            </button>
            <button
              class="nav-link"
              id="tabBlock3"
              data-bs-toggle="tab"
              data-bs-target="#block3"
              type="button"
              role="tab"
              aria-controls="block3"
              aria-selected="false"
              tabindex="-1"
            >
              S3
            </button>
            <button
              class="nav-link"
              id="tabSNCF"
              data-bs-toggle="tab"
              data-bs-target="#SNCF"
              type="button"
              role="tab"
              aria-controls="SNCF"
              aria-selected="false"
              tabindex="-1"
            >
              SNCF
            </button>
            <button
              class="nav-link"
              id="tabProf"
              data-bs-toggle="tab"
              data-bs-target="#Prof"
              type="button"
              role="tab"
              aria-controls="Prof"
              aria-selected="false"
              tabindex="-1"
            >
              Prof
            </button>
          </div>
        </nav>

        <!-- TAB CONTENT -->
        <div class="tab-content" id="nav-tabContent">
          <div
            class="tab-pane fade active show"
            id="block1"
            role="tabpanel"
            aria-labelledby="tabBlock1"
          >
            <TabContent v-for="chapter in languagePack[0]" :chapter="chapter" />
          </div>
          <div
            class="tab-pane fade"
            id="block2"
            role="tabpanel"
            aria-labelledby="tabBlock2"
          >
            <TabContent v-for="chapter in languagePack[1]" :chapter="chapter" />
          </div>
          <div
            class="tab-pane fade"
            id="block3"
            role="tabpanel"
            aria-labelledby="tabBlock3"
          >
            <TabContent v-for="chapter in languagePack[2]" :chapter="chapter" />
          </div>
          <div
            class="tab-pane fade"
            id="SNCF"
            role="tabpanel"
            aria-labelledby="tabSNCF"
          >
            <TabContent v-for="chapter in languagePack[3]" :chapter="chapter" />
          </div>
          <div
            class="tab-pane fade"
            id="Prof"
            role="tabpanel"
            aria-labelledby="tabProf"
          >
            <TabContent v-for="chapter in languagePack[4]" :chapter="chapter" />
          </div>
        </div>
      </div>

      <!-- SideBar -->
      <aside class="d-none d-md-block col-md-3 col-lg-2 mb-4">
        <div
          id="sideBarTitle"
          class="sticky-md-top sticky-title"
          :style="{ paddingTop: padding + 'px' }"
        >
          <h5 class="pb-2">{{ btsLanguagePack.chapters }}</h5>
          <div class="mt-2 border-bottom border-secondary"></div>
          <nav class="small">
            <ul class="list-unstyled">
              <SideBar :semesters="semesters" />
            </ul>
          </nav>
        </div>
      </aside>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, inject, onMounted, Ref, ref } from "vue"
import TabContent from "./TabContent.vue"
import SideBar from "./SideBar.vue"
import languageData from "../../assets/data/language.json"
import { Semesters } from "../../types/types"
import {
  AvailableLanguages,
  BTSLanguage,
  ChapterLanguage,
} from "../../types/language"

const activeLanguage = inject("activeLanguage") as Ref<AvailableLanguages>
const languagePack = computed<ChapterLanguage>(() => {
  return languageData.chapters[activeLanguage.value]
})

const btsLanguagePack = computed<BTSLanguage>(() => {
  return languageData.bts[activeLanguage.value]
})

const padding = ref<number>(0)
const semesters = ref<Semesters>({
  1: [],
  2: [],
  3: [],
  4: [],
})

// Order chapters by semester
loadSemesters(0)

function loadSemesters(block: number) {
  // Reset Semesters before
  for (let semester in semesters.value) {
    semesters.value[semester] = []
  }

  // Sort by date
  languagePack.value[block].sort(
    (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
  )

  for (let i = 0; i < languagePack.value[block].length; i++) {
    semesters.value[languagePack.value[block][i].semester].push(
      languagePack.value[block][i]
    )
  }
}

window.addEventListener("scroll", function () {
  sideBarTitlePosition()
})

function sideBarTitlePosition() {
  const tabContent = document.querySelector("#nav-tabContent") as HTMLElement
  const tabContentHeight = tabContent?.offsetHeight

  const sidebar = document.querySelector("#sideBarTitle") as HTMLElement
  const sidebarHeight =
    sidebar?.offsetHeight - parseInt(getComputedStyle(sidebar).paddingTop)

  const navPadding = 80
  const maxPadding = tabContentHeight - sidebarHeight

  if (window.scrollY >= navPadding) {
    // For scroll down
    if (padding.value < maxPadding) {
      padding.value = Math.min(
        window.scrollY - navPadding,
        maxPadding + navPadding
      )
      return
    }
    // For scroll up
    if (window.scrollY <= maxPadding + navPadding) {
      padding.value = Math.min(
        window.scrollY - navPadding,
        maxPadding + navPadding
      )
      return
    }
    // Default
    padding.value = maxPadding
  } else {
    padding.value = 0
  }
}

onMounted(() => {
  // Give tabs the Bootstrap on click event listener
  let tabs = document.querySelectorAll('[data-bs-toggle="tab"]')
  tabs.forEach((tab) => {
    tab.addEventListener("shown.bs.tab", function (event) {
      const target = event.target as HTMLElement
      switch (target.getAttribute("id")) {
        case "tabBlock1":
          loadSemesters(0)
          break
        case "tabBlock2":
          loadSemesters(1)
          break
        case "tabBlock3":
          loadSemesters(2)
          break
        case "tabSNCF":
          loadSemesters(3)
          break
        case "tabProf":
          loadSemesters(4)
          break
        default:
          break
      }
    })
  })

  // Side Bar stay on top when scrolling
  if (window.scrollY === 0) {
    sideBarTitlePosition()
  }
})
</script>

<style lang="css" scoped>
.nav-link {
  background-color: transparent !important;
  color: var(--bs-secondary);
}

.nav-link:hover {
  color: var(--bs-btn-hover-bg);
}
</style>
