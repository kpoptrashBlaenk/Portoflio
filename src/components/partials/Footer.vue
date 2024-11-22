<template>
  <div class="container">
    <footer
      class="d-flex flex-wrap justify-content-between py-3 my-4 border-top"
    >
      <div class="col-1 d-flex">
        <a
          href="/"
          class="mb-3 me-2 text-body-secondary text-decoration-none lh-1"
        >
          <i class="fab fa-linkedin"></i>
        </a>
        <a
          href="https://github.com/kpoptrashBlaenk"
          class="mb-3 text-body-secondary text-decoration-none lh-1"
        >
          <i class="fab fa-github"></i>
        </a>
      </div>

      <div class="col-1 d-flex justify-content-end list-styled">
        <a
          href="/"
          class="mb-3 me-2 text-body-secondary text-decoration-none lh-1"
        >
          <i class="fab fa-tiktok"></i>
        </a>
        <a
          href="/"
          class="mb-3 me-2 text-body-secondary text-decoration-none lh-1"
        >
          <i class="fab fa-instagram"></i>
        </a>
        <a href="/" class="mb-3 text-body-secondary text-decoration-none lh-1">
          <i class="fab fa-reddit"></i>
        </a>
      </div>

      <div class="col-12 row d-flex justify-content-between fs-8 mx-0">
        <div
          class="col-4 d-flex flex-column justify-content-start fw-bold px-0"
        >
          <h4>{{ languagePack.legalMentionsLeft.owner }}</h4>
          <div>Aldin Music</div>
          <div>aldinmusik@gmail.com</div>
          <div>{{ languagePack.legalMentionsLeft.host }} ©Render</div>
          <div>{{ languagePack.legalMentionsLeft.usage }}</div>
          <div class="mt-1">
            <button
              type="button"
              class="btn btn-sm text-bg-full dropdown-toggle"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              {{ languagePack.language }}
            </button>
            <ul class="dropdown-menu bg-full-inverse">
              <li
                @click="changeLanguage('english')"
                class="dropdown-item bg-full-inverse cursor-pointer"
              >
                English
              </li>

              <li
                @click="changeLanguage('german')"
                class="dropdown-item bg-full-inverse cursor-pointer"
              >
                Deutsch
              </li>

              <li
                @click="changeLanguage('french')"
                class="dropdown-item bg-full-inverse cursor-pointer"
              >
                Français
              </li>
            </ul>
          </div>
        </div>
        <div
          class="col-6 col-md-7 col-lg-4 d-flex flex-column justify-content-start px-0 text-end"
        >
          <h4>{{ languagePack.legalMentionsRight.title }}</h4>
          <div class="mb-2">
            {{ languagePack.legalMentionsRight.protection }}
          </div>
          <div class="mb-2">
            {{ languagePack.legalMentionsRight.collection }}
          </div>
          <div class="mb-2">
            {{ languagePack.legalMentionsRight.country }}
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { computed, inject, Ref } from "vue"
import languageData from "../../assets/data/language.json"
import { AvailableLanguages, FooterLanguage } from "../../types/language"

const props = defineProps<{
  page: string
}>()

const activeLanguage = inject("activeLanguage") as Ref<AvailableLanguages>
const languagePack = computed<FooterLanguage>(() => {
  return languageData.footer[activeLanguage.value]
})

const setActiveLanguage = inject("setActiveLanguage") as (
  language: AvailableLanguages
) => void

const changeLanguage = (language: AvailableLanguages) => {
  setActiveLanguage(language)
  if (props.page === "Knowledge") {
    location.reload()
  }
}
</script>

<style lang="css" scoped>
.btn:hover {
  border-color: var(--bs-btn-active-border-color);
}

.dropdown-item:hover {
  background-color: var(--bs-bg-full-inverse);
}
</style>
