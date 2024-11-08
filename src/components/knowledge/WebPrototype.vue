<template>
    <svg class="position-absolute main-node" :style="{ 'left': node.x + 'px', 'top': node.y + 'px' }"
        viewBox="0 0 128 128">
        <!-- Node Filter -->
        <filter id="displacementFilter">
            <feTurbulence type="turbulence" baseFrequency=".05" numOctaves="2" result="turbulence">
            </feTurbulence>
            <feDisplacementMap in2="turbulence" in="SourceGraphic" scale="15" xChannelSelector="R" yChannelSelector="G">
            </feDisplacementMap>
        </filter>

        <!-- Node -->
        <polygon class="polygon" id="mainNode" points="64 100 8.574 100 20 67.68 64 4 100 67.68 119.426 100"
            style="filter: url(#displacementFilter)">
        </polygon>

        <!-- Node Text -->
        <text x="70" y="70" text-anchor="middle" dominant-baseline="middle">
            {{ node.text }}
        </text>

        <!-- Lines -->
        <line id="line1" x1="70" y1="70" x2="170" y2="30" stroke="green" stroke-width="2" stroke-dasharray="170"
            stroke-dashoffset="170" />
        <line id="line2" x1="170" y1="30" x2="270" y2="70" stroke="green" stroke-width="2" stroke-dasharray="270"
            stroke-dashoffset="270" />

        <!-- Circles -->
        <circle id="circle1" class="circle" cx="70" cy="70" r="6" fill="yellow"></circle>
        <circle id="circle2" class="circle" cx="70" cy="70" r="6" fill="yellow"></circle>
    </svg>

    <!-- Sub svg -->
    <svg class="sub-node position-absolute" :style="{ 'left': (node.x + 300) + 'px', 'top': node.y + 'px' }"
        viewBox="0 0 128 128">
        <polygon id="subNode" points="64 128 8.574 96 8.574 32 64 0 119.426 32 119.426 96">
        </polygon>
        <text x="64" y="64" text-anchor="middle">
            Sub Node
        </text>
    </svg>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
// @ts-ignore
import anime from 'animejs'
import { Node } from '../../types/types'

const props = defineProps<{
    index: number,
    node: Node
}>()

// First animation on hover
async function nodeHover1() {
    const nodeGrow1 = anime({
        targets: ['#mainNode', 'feTurbulence', 'feDisplacementMap'],
        points: '64 128 8.574 96 8.574 32 64 0 119.426 32 119.426 96',
        baseFrequency: 0,
        loop: false,
        direction: 'normal',
        easing: 'easeInOutExpo'
    }).finished

    const nodeSpread1 = anime({
        targets: ['#circle1', '#circle2'],
        translateX: 100,
        translateY: -40,
        easing: 'linear',
        duration: 1000,
    }).finished

    const lineSpread1 = anime({
        targets: '#line1',
        strokeDashoffset: [170, 70],
        easing: 'linear',
        duration: 1000,
    }).finished

    await Promise.all([nodeGrow1, nodeSpread1, lineSpread1])
}

// Second animation after hover
async function nodeHover2() {
    const nodeSpread2 = anime({
        targets: '#circle2',
        translateX: 200,
        translateY: 0,
        easing: 'linear',
        duration: 1000,
    }).finished

    const lineSpread2 = anime({
        targets: '#line2',
        strokeDashoffset: [270, 170],
        easing: 'linear',
        duration: 1000,
    }).finished

    await Promise.all([nodeSpread2, lineSpread2])
}

// Third animation after hover
async function nodeHover3() {
    const nodeGrow2 = anime({
        targets: '.sub-node',
        points: '64 128 8.574 96 8.574 32 64 0 119.426 32 119.426 96',
        scale: [0, 1],
        loop: false,
        direction: 'normal',
        easing: 'easeInOutExpo'
    }).finished

    await Promise.all([nodeGrow2])
}

// Full Node Animation
function nodeAnimation() {
    nodeHover1().then(() => {
        nodeHover2().then(() => {
            nodeHover3().then(() => {
                console.log('done')
            })
        })
    })
}

onMounted(() => {
    document.querySelector('.polygon')?.addEventListener('mouseover', () => nodeAnimation())
})
</script>

<style lang="css">
.main-node {
    height: 128px;
    width: 128px;
    overflow: visible;
    transform: scale(1.5);
    transform-origin: 50%;
}

.sub-node {
    height: 128px;
    width: 128px;
    transform-origin: 50%;
    transform: scale(0);
    overflow: visible;
}

polygon {
    fill: red;
}

text {
    fill: white;
}
</style>