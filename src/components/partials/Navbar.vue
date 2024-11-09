<template>
  <nav class="navbar bg-body bg-opacity-75 fixed-top">
    <!-- or sticky-top, gotta check -->
    <div class="container-fluid border-secondary border-bottom mb-4 py-3 pb-2">
      <!-- Theme Toggle Button -->
      <div class="mb-1 w-25">
        <button class="btn d-inline-flex" id="toggle-theme">
          <i class="fa fa-moon" id="theme-icon"></i>
        </button>
      </div>

      <!-- Navbar Toggle Button -->
      <button
        class="navbar-toggler mb-1 d-sm-none w-25"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasNavbar"
        aria-controls="offcanvasNavbar"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <ul class="nav justify-content-center gap-5 flex-grow-1 d-none d-sm-flex">
        <li class="nav-item">
          <a
            href="/Portfolio-Custom/"
            :class="{
              'active link-secondary border-bottom': page === 'Home',
            }"
            class="nav-link px-1"
            >Home</a
          >
        </li>
        <li class="nav-item">
          <a
            href="/Portfolio-Custom/parcours"
            :class="{
              'active link-secondary border-bottom': page === 'Parcours',
            }"
            class="nav-link px-1"
            >Parcours</a
          >
        </li>
        <li class="nav-item">
          <a
            href="/Portfolio-Custom/projects"
            :class="{
              'active link-secondary border-bottom': page === 'Projects',
            }"
            class="nav-link px-1"
            >Projets</a
          >
        </li>
        <li class="nav-item">
          <a
            href="/Portfolio-Custom/knowledge"
            :class="{
              'active link-secondary border-bottom': page === 'Knowledge',
            }"
            class="nav-link px-1"
            >Connaissances</a
          >
        </li>
        <li class="nav-item">
          <a
            href="/Portfolio-Custom/bts"
            :class="{
              'active link-secondary border-bottom': page === 'BTS',
            }"
            class="nav-link px-1"
            >BTS</a
          >
        </li>
      </ul>

      <!-- About Me Button -->
      <div class="text-end d-none d-sm-block w-25">
        <a href="/Portfolio-Custom/aboutme" class="nav-link px-2"
          ><span class="rainbow_text_animated">Aldin Music</span>
        </a>
      </div>

      <!-- Sidebar -->
      <div
        class="offcanvas offcanvas-end full-screen-offcanvas"
        tabindex="-1"
        id="offcanvasNavbar"
      >
        <!-- Sidebar Header -->
        <div class="offcanvas-header border-bottom border-3">
          <h5 class="offcanvas-title" id="offcanvasNavbarLabel">Navigation</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="offcanvas"
          ></button>
        </div>

        <!-- Sidebar Body -->
        <div class="offcanvas-body">
          <ul class="navbar-nav justify-content-end flex-grow-1">
            <li class="nav-item">
              <a
                href="/Portfolio-Custom/"
                :class="{
                  'active link-secondary border-bottom': page === 'Home',
                }"
                class="nav-link px-1"
                >Home</a
              >
            </li>
            <li class="nav-item">
              <a
                href="/Portfolio-Custom/parcours"
                :class="{
                  'active link-secondary border-bottom': page === 'Parcours',
                }"
                class="nav-link px-1"
                >Parcours</a
              >
            </li>
            <li class="nav-item">
              <a
                href="/Portfolio-Custom/projects"
                :class="{
                  'active link-secondary border-bottom': page === 'Projects',
                }"
                class="nav-link px-1"
                >Projets</a
              >
            </li>
            <li class="nav-item">
              <a
                href="/Portfolio-Custom/knowledge"
                :class="{
                  'active link-secondary border-bottom': page === 'Knowledge',
                }"
                class="nav-link px-1"
                >Connaissances</a
              >
            </li>
            <li class="nav-item">
              <a
                href="/Portfolio-Custom/bts"
                :class="{
                  'active link-secondary border-bottom': page === 'BTS',
                }"
                class="nav-link px-1"
                >BTS</a
              >
            </li>
            <li class="nav-item">
              <a
                href="/Portfolio-Custom/aboutme"
                :class="{
                  'active link-secondary border-bottom': page === 'BTS',
                }"
                class="nav-link px-1"
                >About Me</a
              >
            </li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
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

.fixed-top {
  backdrop-filter: blur(10px);
}

.rainbow_text_animated {
  background: linear-gradient(
    to right,
    #6666ff,
    #0099ff,
    #00ff00,
    #ff3399,
    #6666ff
  );
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
  background: var(--bs-bg-tertiary);
}

#toggle-theme {
  border-width: 2px;
}
</style>
