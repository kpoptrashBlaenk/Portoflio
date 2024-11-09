<template>
  <div v-if="page !== '404'" class="container">  
    <span class="fs-2 fw-bold pb-2 pt-3 ps-3 ms-sm-5 text-body-emphasis sticky-xl-top sticky-title"
      id="stickyElement2">Discover</span>
    <div class="mt-2 border-bottom border-secondary"></div>

    <div :class="page === 'Home' ? 'row-cols-lg-3' : 'row-cols-lg-4'" class="mt-3 row row-cols-1 row-cols-md-2 g-4">
      <div v-if="page !== 'AboutMe'" class="col">
        <div class="card h-100 shadow-lg rounded">
          <a class="nav-link card-title" href="/Portfolio-Custom/aboutme">
            <div class="bg-gradient-1 text-white text-center p-5 rounded-top">
              <h4 class="card-title">Aldin Music</h4>
            </div>
          </a>
          <div class="card-body">
            <p class="card-text">Discover more about me—Aldin Music. This page includes information about my personal
              interests, experiences, and achievements. Click to learn more about my journey and what makes me tick.</p>
          </div>
        </div>
      </div>
      <div v-if="page !== 'Parcours'" class="col">
        <div class="card h-100 shadow-lg rounded">
          <a class="nav-link card-title" href="/Portfolio-Custom/parcours">
            <div class="bg-gradient-2 text-white text-center p-5 rounded-top">
              <h4 class="card-title">Parcours</h4>
            </div>
          </a>
          <div class="card-body">
            <p class="card-text">Explore my educational and professional journey. From high school to university, and my
              experiences working in parallel, this section provides insights into my career progression and growth.</p>
          </div>
        </div>
      </div>
      <div v-if="page !== 'Projects'" class="col">
        <div class="card h-100 shadow-lg rounded">
          <a class="nav-link card-title" href="/Portfolio-Custom/projects">
            <div class="bg-gradient-5 text-white text-center p-5 rounded-top">
              <h4 class="card-title">Projets</h4>
            </div>
          </a>
          <div class="card-body">
            <p class="card-text">Browse through the programming projects I have worked on so far. This page showcases my
              coding projects, including details about each project's goals, technologies used, and outcomes.</p>
          </div>
        </div>
      </div>
      <div v-if="page !== 'Knowledge'" class="col">
        <div class="card h-100 shadow-lg rounded">
          <a class="nav-link card-title" href="/Portfolio-Custom/connaissances">
            <div class="bg-gradient-3 text-white text-center p-5 rounded-top">
              <h4 class="card-title">Connaissances</h4>
            </div>
          </a>
          <div class="card-body">
            <p class="card-text">Gain insight into my skills and capabilities. This page details what I can do,
              including my expertise in various domains, competencies, and practical skills acquired over time.</p>
          </div>
        </div>
      </div>
      <div v-if="page !== 'BTS'" class="col">
        <div class="card h-100 shadow-lg rounded">
          <a class="nav-link card-title" href="/Portfolio-Custom/bts">
            <div class="bg-gradient-4 text-white text-center p-5 rounded-top">
              <h4 class="card-title">BTS</h4>
            </div>
          </a>
          <div class="card-body">
            <p class="card-text">Delve into my school experiences and achievements in each subject during my BTS
              program. This section outlines specific projects, assignments, and the knowledge gained throughout my
              studies.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  page: string
}>()
</script>

<style>
:root {
  --gradient-1: linear-gradient(135deg, rgba(255, 154, 158, 1) 0%, rgba(250, 208, 196, 1) 100%);
  --gradient-2: linear-gradient(135deg, rgba(255, 126, 95, 1) 0%, rgba(254, 180, 123, 1) 100%);
  --gradient-3: linear-gradient(135deg, rgba(106, 17, 203, 1) 0%, rgba(37, 117, 252, 1) 100%);
  --gradient-4: linear-gradient(135deg, rgba(0, 198, 255, 1) 0%, rgba(0, 114, 255, 1) 100%);
  --gradient-5: linear-gradient(135deg, rgba(86, 171, 47, 1) 0%, rgba(168, 224, 99, 1) 100%);
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
}
</style>