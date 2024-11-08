<template>
    <div class="container">
        <div class="position-relative">
            <!-- Main svg -->
            <MainNodes v-for="(node, index) in nodes" :node="node" :mainIndex="index" />
        </div>
    </div>
</template>

<script setup lang="ts">
import { MainNode } from '../../types/types';
import MainNodes from './Node.vue'
import data from '../../assets/data/data.json'

const nodes: MainNode[] = data.nodes
</script>