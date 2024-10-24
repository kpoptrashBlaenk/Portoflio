<template>
    <div class="container my-5">

        <!-- TITLE -->
        <span class="fs-2 fw-bold pb-2 pt-3 ps-3 ms-5 text-body-emphasis sticky-xl-top sticky-title">BTS
        </span>
        <div class="mt-2 border-bottom border-secondary"></div>

        <!-- TABS -->
        <div class="mt-3 mx-5 row">

            <div class="col-10">
                <nav>
                    <div class="nav nav-tabs mb-3" id="nav-tab" role="tablist">
                        <button class="nav-link active" id="tabBlock1" data-bs-toggle="tab" data-bs-target="#block1"
                            type="button" role="tab" aria-controls="block1" aria-selected="true">S1</button>
                        <button class="nav-link" id="tabBlock2" data-bs-toggle="tab" data-bs-target="#block2"
                            type="button" role="tab" aria-controls="block2" aria-selected="false"
                            tabindex="-1">S2</button>
                        <button class="nav-link" id="tabBlock3" data-bs-toggle="tab" data-bs-target="#block3"
                            type="button" role="tab" aria-controls="block3" aria-selected="false"
                            tabindex="-1">S3</button>
                    </div>
                </nav>

                <!-- TAB CONTENT -->
                <div class="tab-content" id="nav-tabContent">
                    <div class="tab-pane fade active show" id="block1" role="tabpanel" aria-labelledby="tabBlock1">
                        <TabContent v-for="chapter in chapters" :chapter="chapter" />
                    </div>
                    <div class="tab-pane fade" id="block2" role="tabpanel" aria-labelledby="tabBlock2">
                        <p>Text</p>
                    </div>
                    <div class="tab-pane fade" id="block3" role="tabpanel" aria-labelledby="tabBlock3">
                        <p>Text</p>
                    </div>
                </div>
            </div>

            <!-- SideBar -->
            <aside class="col-2 mb-4">
                <div id="sideBarTitle" class="sticky-xl-top sticky-title" :style="{ paddingTop: padding + 'px' }">
                    <h5 class="pb-2">Chapters</h5>
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
import { ref } from 'vue'
import TabContent from './TabContent.vue'
import SideBar from './SideBar.vue'
import jsonData from '../../assets/data/data.json'
import { Semesters } from '../../types/nested-types'

const chapters = jsonData.chaptersS1
const padding = ref<number>(0)
let semesters: Semesters = {
    1: [],
    2: [],
    3: [],
    4: [],
}

for (let i = 0; i < chapters.length; i++) {
    semesters[chapters[i].semester].push(chapters[i])
}

if (window.scrollY === 0) {
    sideBarTitlePosition()
}

$(window).on("scroll", function () {
    sideBarTitlePosition()
})

function sideBarTitlePosition() {
    if (window.scrollY >= 100) {
        // For scroll down
        if (padding.value < 100) {
            padding.value = Math.min(window.scrollY - 100, 100)
            return
        }
        // For scroll up
        if (window.scrollY <= 200) {
            padding.value = Math.min(window.scrollY - 100, 100)
            return
        }
        // Default
        padding.value = 100
    } else {
        padding.value = 0
    }
}
</script>

<style lang="css" scoped>
.nav-link {
    background-color: transparent !important;
    color: var(--bs-secondary)
}

.nav-link:hover {
    color: var(--bs-btn-hover-bg)
}
</style>