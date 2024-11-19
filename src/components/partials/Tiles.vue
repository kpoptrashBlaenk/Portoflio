<template>
  <div v-if="page !== '404'" class="container">
    <span
      class="fs-2 fw-bold pb-2 pt-3 ps-3 ms-sm-5 text-body-emphasis sticky-xl-top sticky-title"
      id="stickyElement2"
      >Discover</span
    >
    <div class="mt-2 border-bottom border-secondary"></div>

    <div
      :class="page === 'Home' ? 'row-cols-lg-3' : 'row-cols-lg-4'"
      class="mt-3 row row-cols-1 row-cols-md-2 g-4"
    >
      <div v-if="page !== 'AboutMe'" class="col">
        <div class="card h-100 shadow-lg rounded">
          <a class="nav-link card-title" @click="navigate('AboutMe')">
            <div class="bg-gradient-1 text-white text-center p-5 rounded-top">
              <h4 class="card-title">Aldin Music</h4>
            </div>
          </a>
          <div class="card-body">
            <p class="card-text">
              I'm Aldin Music, who would've thought you'd find me on my own
              site! Anyway, here you can learn about me (This is totally not
              just a resume).
            </p>
          </div>
        </div>
      </div>
      <div v-if="page !== 'Parcours'" class="col">
        <div class="card h-100 shadow-lg rounded">
          <a class="nav-link card-title" @click="navigate('Parcours')">
            <div class="bg-gradient-2 text-white text-center p-5 rounded-top">
              <h4 class="card-title">Parcours</h4>
            </div>
          </a>
          <div class="card-body">
            <p class="card-text">
              Here you can learn about what I've been up to since I was born.
              You will find more information about my school life and my
              professional experiences.
            </p>
          </div>
        </div>
      </div>
      <div v-if="page !== 'Projects'" class="col">
        <div class="card h-100 shadow-lg rounded">
          <a class="nav-link card-title" @click="navigate('Projects')">
            <div class="bg-gradient-5 text-white text-center p-5 rounded-top">
              <h4 class="card-title">Projets</h4>
            </div>
          </a>
          <div class="card-body">
            <p class="card-text">
              Have an overview of all my GitHub projects. Wether they are
              active, unfinished or shameful, in each project I've learned at
              least something.
            </p>
          </div>
        </div>
      </div>
      <div v-if="page !== 'Knowledge'" class="col">
        <div class="card h-100 shadow-lg rounded">
          <a class="nav-link card-title" @click="navigate('Knowledge')">
            <div class="bg-gradient-3 text-white text-center p-5 rounded-top">
              <h4 class="card-title">Connaissances</h4>
            </div>
          </a>
          <div class="card-body">
            <p class="card-text">
              This is an overview of what I have worked with and what I am
              familiar with. See if I have the capabilities that you search for.
            </p>
          </div>
        </div>
      </div>
      <div v-if="page !== 'BTS'" class="col">
        <div class="card h-100 shadow-lg rounded">
          <a class="nav-link card-title" @click="navigate('BTS')">
            <div class="bg-gradient-4 text-white text-center p-5 rounded-top">
              <h4 class="card-title">BTS</h4>
            </div>
          </a>
          <div class="card-body">
            <p class="card-text">
              Here you can see what I did in school. I upload here all the
              things I was supposed to learn to showcase more overall knowledge
              you can't find in repositories.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Routes } from "../../types/types"

defineProps<{
  page: string
  navigate: (page: Routes) => void
}>()
</script>

<style>
:root {
  --gradient-1: linear-gradient(
    135deg,
    rgba(255, 154, 158, 1) 0%,
    rgba(250, 208, 196, 1) 100%
  );
  --gradient-2: linear-gradient(
    135deg,
    rgba(255, 126, 95, 1) 0%,
    rgba(254, 180, 123, 1) 100%
  );
  --gradient-3: linear-gradient(
    135deg,
    rgba(106, 17, 203, 1) 0%,
    rgba(37, 117, 252, 1) 100%
  );
  --gradient-4: linear-gradient(
    135deg,
    rgba(0, 198, 255, 1) 0%,
    rgba(0, 114, 255, 1) 100%
  );
  --gradient-5: linear-gradient(
    135deg,
    rgba(86, 171, 47, 1) 0%,
    rgba(168, 224, 99, 1) 100%
  );
}

.bg-gradient-1 {
  background: var(--gradient-1);
}

.bg-gradient-2 {
  background: var(--gradient-2);
}

.bg-gradient-3 {
  background: var(--gradient-3);
}

.bg-gradient-4 {
  background: var(--gradient-4);
}

.bg-gradient-5 {
  background: var(--gradient-5);
}

.card {
  border: none;
  cursor: pointer;
}
</style>
