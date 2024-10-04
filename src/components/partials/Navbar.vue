<template>
  <div class="bg-body bg-opacity-75 sticky-top">
    <div class="container">
      <header
        class="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 pb-2 border-bottom mb-4 border-secondary">
        <div class="col-md-3 mb-1 mb-md-0 d-none d-lg-block">
          <button class="btn d-inline-flex" id="toggle-theme">
            <i class="fa fa-moon" id="theme-icon"></i>
          </button>
        </div>

        <ul class="nav nav-underline col-12 col-lg-auto mb-2 justify-content-center mb-md-0">
          <li><a href="/Portfolio-Custom/" :class="{ 'active link-secondary': page === 'Home' }"
              class="nav-link px-2">Home</a>
          </li>
          <li><a href="/Portfolio-Custom/parcours" :class="{ 'active link-secondary': page === 'Parcours' }"
              class="nav-link px-2">Parcours</a></li>
          <li><a href="/Portfolio-Custom/projects" :class="{ 'active link-secondary': page === 'Projects' }"
              class="nav-link px-2">Projets</a></li>
          <li><a href="/Portfolio-Custom/knowledge" :class="{ 'active link-secondary': page === 'Knowledge' }"
              class="nav-link px-2">Connaissances</a></li>
          <li><a href="/Portfolio-Custom/bts" :class="{ 'active link-secondary': page === 'BTS' }"
              class="nav-link px-2">BTS</a>
          </li>
        </ul>

        <div class="col-md-3 text-end d-none d-lg-block">
          <a href="/Portfolio-Custom/aboutme" class="nav-link px-2"><span class="rainbow_text_animated">Aldin
              Music</span></a>
        </div>
      </header>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  page: string
}>()
</script>

<style scoped>
.nav-link {
  color: var(--bs-emphasis-color);
}

.nav-link:hover {
  color: var(--bs-secondary-color);
}

.nav-link:focus {
  color: var(--bs-tertiary-color);
}

.sticky-top {
  backdrop-filter: blur(10px);
}

.rainbow_text_animated {
  background: linear-gradient(to right, #6666ff, #0099ff, #00ff00, #ff3399, #6666ff);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  animation: rainbow_animation 6s ease-in-out infinite;
  background-size: 400% 100%;
}

@keyframes rainbow_animation {

  0%,
  100% {
    background-position: 0 0;
  }

  50% {
    background-position: 100% 0;
  }
}

header {
  opacity: 1;
  background: var(--bs-bg-tertiary)
}

#toggle-theme {
  border-width: 2px;
}
</style>