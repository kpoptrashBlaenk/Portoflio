<template>
    <div class="position-absolute start-50 translate-middle-x">
        <div class="card project-card shadow-lg" style="width: 18rem; height: 20rem">
            <a :href="repo.visibility === 'public' ? repo.html_url : '#'" target="_blank"
                class="card-header text-center disabled">
                <h2 class="card-title">{{ repo.name }}</h2>
            </a>
            <div class="card-body d-flex flex-column justify-content-between">
                <p class="card-text">{{ repo.description }}</p>
                <div class="w-100 ms-auto">
                    <div class="d-flex justify-content-between">
                        <span
                            :style="{ 'background-color': getLanguageColor(repo.language), 'color': getLanguageTextColor(repo.language) }"
                            class="badge">
                            {{ repo.language }}
                        </span>
                        <span :style="'background-color:' + visibilityColors[props.repo.visibility]" class="badge">
                            {{ repo.visibility }}
                        </span>
                    </div>
                    <div class="d-flex justify-content-start mt-2">
                        <span v-for="topic in repo.topics" class="badge me-2" style="background-color:#0366D6">
                            {{ topic }}
                        </span>
                    </div>
                    <div><strong>Commits: </strong>{{ commitCount }}</div>
                    <div><strong>Updated: </strong>{{ dateFormat(repo.updated_at) }}</div>
                    <div><strong>Created: </strong>{{ dateFormat(repo.updated_at) }}</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { LanguageColors, Repo } from '../../types/types'
import data from '../../assets/data/data.json'

const languageColors: LanguageColors[] = data.languageColors
const visibilityColors = ref(data.visibilityColors)
const commitCount = ref<number>(0)
const props = defineProps<{
    repo: Repo
}>()

// console.log(props.repo.topics)

onMounted(async () => {
    const token: string = import.meta.env.VITE_GITHUB_API_KEY
    // change per_page if more commits
    const commits = await fetch(`https://api.github.com/repos/kpoptrashBlaenk/${props.repo.name}/commits?per_page=200`, {
        headers: {
            Authorization: token
        }
    })
    const commitsJSON = await commits.json()
    commitCount.value = commitsJSON.length
})

function dateFormat(value: string): string {
    return value.substring(0, 10)
}

// Languages
function getLanguageColor(language: string): string {
    const languageColor = languageColors.find(lc => lc.language.toLowerCase() === language.toLowerCase())
    return languageColor ? languageColor.color : '#000000'
}

function getLanguageTextColor(language: string): string {
    const languageTextColor = languageColors.find(lc => lc.language.toLowerCase() === language.toLowerCase())
    return languageTextColor ? languageTextColor.textColor : '#FFFFFF'
}
</script>