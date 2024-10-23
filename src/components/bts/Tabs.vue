<template>
    <div class="container my-5">
        <!-- TITLE -->
        <span class="fs-2 fw-bold pb-2 pt-3 ps-3 ms-5 text-body-emphasis sticky-xl-top sticky-title">BTS
        </span>
        <div class="mt-2 border-bottom border-secondary"></div>

        <!-- TABS -->
        <div class="mt-3 mx-5">
            <nav>
                <div class="nav nav-tabs mb-3" id="nav-tab" role="tablist">
                    <button class="nav-link active" id="tabBlock1" data-bs-toggle="tab" data-bs-target="#block1"
                        type="button" role="tab" aria-controls="block1" aria-selected="true">S1</button>
                    <button class="nav-link" id="tabBlock2" data-bs-toggle="tab" data-bs-target="#block2" type="button"
                        role="tab" aria-controls="block2" aria-selected="false" tabindex="-1">S2</button>
                    <button class="nav-link" id="tabBlock3" data-bs-toggle="tab" data-bs-target="#block3" type="button"
                        role="tab" aria-controls="block3" aria-selected="false" tabindex="-1">S3</button>
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

    </div>
</template>

<script setup lang="ts">
import TabContent from './TabContent.vue'
import jsonData from '../../assets/data/data.json'

const chapters = jsonData.chaptersS1
</script>

<style lang="css" scoped>
.card {
    background-color: transparent;
}

.card:hover {
    transform: none;
    box-shadow: 0;
}

.nav-link {
    background-color: transparent !important;
}
</style>