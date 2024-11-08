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

const nodes: MainNode[] = [{
    text: 'Node 1',
    x: 200,
    y: 100,
    subs: [{
        text: 'Sub 1',
        x1: 100,
        y1: 100,
        x2: 200,
        y2: 0
    },
    {
        text: 'Sub 2',
        x1: -100,
        y1: 100,
        x2: -200,
        y2: 0
    }]
},
{
    text: 'Node 2',
    x: 600,
    y: 300,
    subs: [{
        text: 'Sub 1',
        x1: -100,
        y1: 100,
        x2: -200,
        y2: 0
    },
    {
        text: 'Sub 2',
        x1: 100,
        y1: 100,
        x2: 200,
        y2: 0
    }]

}]
</script>