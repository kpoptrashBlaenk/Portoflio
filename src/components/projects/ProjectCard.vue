<template>
  <div class="position-absolute start-50 translate-middle-x">
    <a
      class="text-decoration-none"
      :href="repo.visibility === 'public' ? repo.html_url : ''"
      :target="repo.visibility === 'public' ? '_target' : ''"
    >
      <div class="card project-card" style="width: 18rem; height: 20rem">
        <div class="card-header text-center">
          <h2 class="card-title">{{ repo.name }}</h2>
        </div>
        <div
          class="card-body bg-secondary-subtle d-flex flex-column justify-content-between"
        >
          <p class="card-text">{{ repo.description }}</p>
          <div class="w-100 ms-auto">
            <div class="d-flex justify-content-between">
              <span
                :style="{
                  'background-color': getLanguageColor(repo.language),
                  color: getLanguageTextColor(repo.language),
                }"
                class="badge"
              >
                {{ repo.language || "N/A" }}
              </span>
              <span
                :style="
                  'background-color:' + visibilityColors[props.repo.visibility]
                "
                class="badge"
              >
                {{ repo.visibility }}
              </span>
            </div>
            <div class="d-flex flex-wrap justify-content-start my-2 gap-2">
              <span v-for="topic in repo.topics" class="badge text-bg-full">
                {{ topic }}
              </span>
            </div>
            <div><strong>Commits: </strong>{{ repo.commits_count }}</div>
            <div>
              <strong>Updated: </strong>{{ dateFormat(repo.updated_at) }}
            </div>
            <div>
              <strong>Created: </strong>{{ dateFormat(repo.created_at) }}
            </div>
          </div>
        </div>
      </div>
    </a>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue"
import { LanguageColors, Repo } from "../../types/types"
import data from "../../assets/data/data.json"

const languageColors: LanguageColors[] = data.languageColors
const visibilityColors = ref(data.visibilityColors)
const props = defineProps<{
  repo: Repo
}>()

function dateFormat(value: string): string {
  const date = new Date(value)
  const day = date.getDate().toString().padStart(2, "0") // Get day in 2 digits
  const month = date.toLocaleString("default", { month: "short" }) // Get month in short format
  const year = date.getFullYear() // Get year

  return `${day} ${month} ${year}`
}

// Languages
function getLanguageColor(language: string): string {
  const languageColor = languageColors.find(
    (lc) => lc.language.toLowerCase() === language.toLowerCase()
  )
  return languageColor ? languageColor.color : "#000000"
}

function getLanguageTextColor(language: string): string {
  const languageTextColor = languageColors.find(
    (lc) => lc.language.toLowerCase() === language.toLowerCase()
  )
  return languageTextColor ? languageTextColor.textColor : "#FFFFFF"
}
</script>
