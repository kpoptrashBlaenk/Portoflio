<template>
  <div class="container my-5 position-relative" style="height: 457.6px">

    <!-- TITLE -->
    <span class="px-5 px-sm-0">
      <span class="fs-2 fw-bold pb-2 pt-3 ps-3 ms-5 text-body-emphasis sticky-xl-top sticky-title">Repositories
        <i class="fab fa-github px-1"></i>
        <a class="link-underline link-underline-opacity-0" href="https://github.com/kpoptrashBlaenk" target="_blank">
          <img class="rounded mb-2" src="https://avatars.githubusercontent.com/u/160846759?v=4" alt="githubAvatar"
            width="32" height="32">
        </a>
      </span>
    </span>

    <div class="mt-2 border-bottom border-secondary"></div>

    <!-- CAROUSEL -->
    <Loading v-if="loading" />
    <Swiper v-else class="mt-3 py-3 position-relative" style="height:24rem" :loop="true" :mousewheel="true"
      :grabCursor="true" navigation :autoplay="{
        delay: 5000,
        disableOnInteraction: false
      }" :pagination="{ clickable: true }" :breakpoints="{
        '0': {
          slidesPerView: 1,
          spaceBetween: 10,
        },
        '992': {
          slidesPerView: 2,
          spaceBetween: 10,
        },
        '1200': {
          slidesPerView: 3,
          spaceBetween: 10,
        }
      }" :modules="modules">

      <!-- CONTENT -->
      <swiper-slide v-for="(repo, index) in repos" :key="index">
        <ProjectCard :repo="repo" />
      </swiper-slide>
    </Swiper>
  </div>
</template>

<script setup lang="ts">
// @ts-ignore | imports don't exist says IDE
import { Navigation, Pagination, Autoplay, Mousewheel } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
const modules = [Navigation, Pagination, Autoplay, Mousewheel]

import { ref, onMounted } from 'vue'
import { Repo } from '../../types/types'
import Loading from './ProjectsLoading.vue'
import ProjectCard from './ProjectCard.vue'

const loading = ref<boolean>(true)
const repos = ref<Repo[]>([])

onMounted(() => {
  fetchGitHubRepos()
})

// GitHub Repos
async function fetchGitHubRepos(): Promise<void> {
  let token = import.meta.env.VITE_GITHUB_API_KEY

  const response = await fetch('https://api.github.com/users/kpoptrashBlaenk/repos', {
    headers: {
      Authorization: `token ${token}`
    }
  })

  repos.value = await response.json()
  loading.value = false
}
</script>

<style lang="css">
.swiper-button-prev {
  left: 0 !important;
}

.swiper-button-next {
  right: 0 !important;
}
</style>