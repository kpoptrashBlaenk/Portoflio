<template>
    <li v-for="(semester, index) in semesters" class="my-2">
        <button type="button" class="btn d-inline-flex align-items-center border-0" data-bs-toggle="collapse"
            aria-expanded="false" :data-bs-target="'#sideCollapse' + index" :aria-controls="'sideCollapse' + index">
            Semester {{ index }}
        </button>
        <ul class="list-unstyled ps-3 collapse" :id="'sideCollapse' + index">
            <li v-for="chapter in semester">
                <a @click.prevent="scrollTo(chapter.title)" href="#"
                    class="d-inline-flex align-items-center rounded text-decoration-none">
                    {{ chapter.title }}
                </a>
            </li>
        </ul>
    </li>
</template>

<script setup lang="ts">
import { Semesters } from '../../types/nested-types'

defineProps<{
    semesters: Semesters
}>()

function scrollTo(id: string) {
    const element = document.getElementById(id)

    if (element) {
        const offset = 100
        //@ts-ignore
        const elementPosition = element.getBoundingClientRect().top + window.scrollY
        const offsetPosition = elementPosition - offset

        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
        })
    }
}
</script>