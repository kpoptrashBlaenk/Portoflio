<template>
    <div :id="chapter.title" class="card my-4">

        <!-- Header -->
        <div class="card-header">
            Semester {{ chapter.semester }}
        </div>

        <!-- Body -->
        <div class="card-body">
            <h3 class="card-title">{{ chapter.title }}</h3>
            <p class="card-text">{{ chapter.content }}</p>

            <!-- Files -->
            <a v-for="file in chapter.files" :href="filePathPrefix + file.filePath"
                class="me-3 text-body-secondary" target="_blank">
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
import { Chapter } from '../../types/types'

const filePathPrefix = '/Portfolio-Custom/src/assets/'

defineProps<{
    chapter: Chapter
}>()
</script>

<style lang="css" scoped>
.card {
    transition: none !important;
    transform: none !important;
    box-shadow: none !important;
    background-color: transparent;
}

.card:hover {
    transform: none !important;
    box-shadow: none !important;
}
</style>