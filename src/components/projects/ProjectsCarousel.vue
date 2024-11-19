<template>
  <div class="container my-5 position-relative">
    <!-- TITLE -->
    <span
      class="fs-2 fw-bold pb-2 pt-3 ps-3 ms-sm-5 text-body-emphasis sticky-xl-top sticky-title"
      >Repositories
      <i class="fab fa-github px-1"></i>
      <a
        class="link-underline link-underline-opacity-0"
        href="https://github.com/kpoptrashBlaenk"
        target="_blank"
      >
        <img
          class="rounded mb-2"
          src="https://avatars.githubusercontent.com/u/160846759?v=4"
          alt="githubAvatar"
          width="32"
          height="32"
        />
      </a>
    </span>

    <div class="mt-2 border-bottom border-secondary"></div>

    <!-- CAROUSEL -->
    <Loading v-if="loading" />
    <Swiper
      v-else
      class="mt-3 py-3 position-relative"
      style="height: 24rem"
      :loop="true"
      :mousewheel="true"
      :grabCursor="true"
      navigation
      :autoplay="{
        delay: 7500,
        disableOnInteraction: false,
      }"
      :pagination="{ clickable: true }"
      :breakpoints="{
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
        },
      }"
      :modules="modules"
    >
      <!-- CONTENT -->
      <swiper-slide v-for="(repo, index) in repos" :key="index">
        <ProjectCard :repo="repo" />
      </swiper-slide>
    </Swiper>
  </div>
</template>

<script setup lang="ts">
// @ts-ignore | imports don't exist says IDE
import { Navigation, Pagination, Autoplay, Mousewheel } from "swiper"
import { Swiper, SwiperSlide } from "swiper/vue"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
const modules = [Navigation, Pagination, Autoplay, Mousewheel]

import { ref, onMounted } from "vue"
import { Repo } from "../../types/types"
import Loading from "./ProjectsLoading.vue"
import ProjectCard from "./ProjectCard.vue"
import { Octokit } from "@octokit/rest"

const loading = ref<boolean>(true)
const repos = ref<Repo[]>([])

onMounted(() => {
  fetchGitHubRepos()
})

// GitHub Repos
async function fetchGitHubRepos(): Promise<void> {
  const token = import.meta.env.VITE_GITHUB_API_KEY
  const octokit = new Octokit({
    auth: token,
  })

  try {
    const { data } = await octokit.repos.listForAuthenticatedUser({
      username: "kpoptrashBlaenk",
      type: "all",
    })

    repos.value = await Promise.all(
      data.map(async (repo) => {
        const commits_count = await fetchCommitCount(
          octokit,
          "kpoptrashBlaenk",
          repo.name
        )

        return {
          html_url: repo.html_url,
          name: repo.name,
          description: repo.description || "",
          language: repo.language || "",
          updated_at: repo.updated_at || "",
          created_at: repo.created_at || "",
          visibility: repo.visibility as "public" | "private",
          topics: repo.topics || [],
          commits_count,
        }
      })
    )

    // Sort by most recent updated date (latest first)
    repos.value.sort((a, b) => {
      const dateA = new Date(a.updated_at)
      const dateB = new Date(b.updated_at)

      return dateB.getTime() - dateA.getTime()
    })

    loading.value = false
  } catch (error) {
    console.error("Error fetching repositories:", error)
  }
}

// Because a page cannot show more than 100 commits
async function fetchCommitCount(
  octokit: Octokit,
  owner: string,
  repo: string
): Promise<number> {
  let commits_count = 0
  let page = 1
  let hasMoreCommits = true

  while (hasMoreCommits) {
    const response = await octokit.repos.listCommits({
      owner,
      repo,
      page,
      per_page: 100,
    })

    commits_count += response.data.length

    if (response.data.length < 100) {
      hasMoreCommits = false
    } else {
      page++
    }
  }

  return commits_count
}
</script>

<style lang="css">
@media screen and (max-width: 491.9px) {
  .swiper-button-next,
  .swiper-button-prev {
    display: none;
  }
}

.swiper-button-prev {
  left: 0 !important;
}

.swiper-button-next {
  right: 0 !important;
}
</style>
