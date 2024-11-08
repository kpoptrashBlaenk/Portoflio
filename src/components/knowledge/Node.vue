<template>
    <svg>
        <!-- Main Node -->
        <circle :id="'mainNode' + mainIndex" :cx="node.x" :cy="node.y" r="100" class="main-node"></circle>

        <SubNode v-for="(thisNode, index) in nodes" :mainIndex="mainIndex" :index="index" :node="thisNode"
            :main-node="{ x: node.x, y: node.y }" />
    </svg>
</template>

<script setup lang="ts">
// @ts-ignore
import anime from 'animejs'
import { MainNode, Node } from '../../types/types'
import SubNode from './SubNode.vue'

defineProps<{
    mainIndex: number,
    node: MainNode
}>()

const nodes: Node[] = [{
    text: 'Node 1',
    x1: 100,
    y1: 100,
    x2: 200,
    y2: 0
},
{
    text: 'Node 2',
    x1: -100,
    y1: 100,
    x2: -200,
    y2: 200
}]

</script>

<style lang="css">
svg {
    width: 100%;
    height: 500px;
    overflow: visible;
}

.main-node {
    fill: red;
}

.circle {
    fill: blue;
}
</style>