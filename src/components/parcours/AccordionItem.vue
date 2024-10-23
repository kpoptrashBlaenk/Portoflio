<template>
    <div class="accordion-item">
        <div class="accordion-header accordion-button collapsed">
            {{ item.year }} - <strong class="ms-1">{{ item.title }}</strong>
        </div>
        <div class="accordion-collapse collapse" data-bs-parent="#timelineAccordion">
            <div class="accordion-body">
                <div class="card mx-5">
                    <div class="card-body">
                        <h5 class="card-title mb-3">{{ item.bodyTitle }}</h5>
                        <p class="card-text"><strong>Location:</strong> {{ item.location }}</p>
                        <p class="card-text"><strong>Time:</strong> {{ item.time }}</p>
                        <p class="card-text"><strong>Notes:</strong> {{ item.notes }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { AccordionItem } from '../../types/types'

defineProps<{
    item: AccordionItem
}>()
</script>

<style scoped>
.accordion-collapse {
    transition: .15s
        /* slowing transition to avoid bugs */
}

.accordion-button::after {
    display: none;
    /* removing the arrow */
}

.accordion-button {
    transition: none;
    /* transition applies to theme change */
}

.card {
    margin-top: -20px
}
</style>
