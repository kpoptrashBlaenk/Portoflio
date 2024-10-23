<template>
    <li v-for="(semester, index) in semesters" class="my-2">
        <button type="button" class="btn d-inline-flex align-items-center border-0" data-bs-toggle="collapse"
            aria-expanded="false" :data-bs-target="'#sideCollapse' + index" :aria-controls="'sideCollapse' + index">
            Semester {{ index }}
        </button>
        <ul class="list-unstyled ps-3 collapse" :id="'sideCollapse' + index">
            <li v-for="chapter in semester">
                <a class="d-inline-flex align-items-center rounded text-decoration-none" href="#typography">
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
</script>