<template>
    <div v-if="!hide" class="accordion-item">
        <div class="accordion-header accordion-button collapsed">
            {{ item.year }} <strong class="ms-2">{{ item.title }}</strong>
        </div>
        <div class="accordion-collapse collapse" data-bs-parent="#timelineAccordion">
            <div class="accordion-body row">
                <div class="card mx-0 mx-lg-5 mb-5 mb-lg-0 col-12 col-lg">
                    <div class="card-body">
                        <h5 class="card-title mb-3">{{ item.bodyTitle }}</h5>
                        <p v-if="item.focus" class="card-text"><strong>Focus:</strong> {{ item.focus }}</p>
                        <p v-if="item.subject" class="card-text"><strong>Subject:</strong> {{ item.subject }}</p>
                        <p v-if="item.position" class="card-text"><strong>Position:</strong> {{ item.position }}</p>
                        <p class="card-text"><strong>Location:</strong> {{ item.location }}</p>
                        <p class="card-text"><strong>Time:</strong> {{ item.time }}</p>
                        <p class="card-text"><strong>Notes:</strong> {{ item.notes }}</p>
                    </div>
                </div>

                <div v-if="doubleItem" class="card mx-0 mx-lg-5 col-12 col-lg">
                    <div class="card-body">
                        <h5 class="card-title mb-3">{{ doubleItem.bodyTitle }}</h5>
                        <p v-if="doubleItem.focus" class="card-text"><strong>Focus:</strong> {{ doubleItem.focus }}</p>
                        <p v-if="doubleItem.subject" class="card-text"><strong>Subject:</strong> {{ doubleItem.subject
                            }}</p>
                        <p v-if="doubleItem.position" class="card-text"><strong>Position:</strong> {{
                            doubleItem.position }}</p>
                        <p class="card-text"><strong>Location:</strong> {{ doubleItem.location }}</p>
                        <p class="card-text"><strong>Time:</strong> {{ doubleItem.time }}</p>
                        <p class="card-text"><strong>Notes:</strong> {{ doubleItem.notes }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { AccordionItem } from '../../types/types'

const hide = ref<boolean>(false)

const props = defineProps<{
    item: AccordionItem
    doubleItem: AccordionItem | null
    hidden: number[]
    id: number
}>()

props.hidden.find((e) => e === props.id) ? hide.value = true : hide.value = false
</script>

<style scoped>
.accordion-collapse {
    transition: .1s
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
